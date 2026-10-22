import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@sanity/client';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Load environment variables from .env.local if present
const envLocalPath = path.join(rootDir, '.env.local');
if (fs.existsSync(envLocalPath)) {
  const envContent = fs.readFileSync(envLocalPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const eqIndex = trimmed.indexOf('=');
      if (eqIndex > 0) {
        const key = trimmed.slice(0, eqIndex).trim();
        const val = trimmed.slice(eqIndex + 1).trim();
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'tc15xy9g';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error('\n❌ ERROR: Missing SANITY_API_WRITE_TOKEN in .env.local.');
  console.error(
    'Please generate an API Token with "Editor" or "Contributor" write permissions from:'
  );
  console.error(`https://www.sanity.io/manage/project/${projectId}/api#tokens`);
  console.error('Then add SANITY_API_WRITE_TOKEN=your_token_here to .env.local and re-run.\n');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-01',
  token,
  useCdn: false,
});

function inferCategory(filename) {
  const lower = filename.toLowerCase();
  if (
    lower.includes('bonfire') ||
    lower.includes('campfire') ||
    lower.includes('hiking') ||
    lower.includes('trail') ||
    lower.includes('trek') ||
    lower.includes('trees') ||
    lower.includes('orchard') ||
    lower.includes('planting')
  ) {
    return 'activities';
  }
  if (
    lower.includes('dining') ||
    lower.includes('restaurant') ||
    lower.includes('feast') ||
    lower.includes('chaat') ||
    lower.includes('fruit') ||
    lower.includes('meal')
  ) {
    return 'dining';
  }
  if (lower.includes('cottage') || lower.includes('room')) {
    return 'rooms';
  }
  return 'views';
}

function cleanTitle(filename) {
  const nameWithoutExt = path.parse(filename).name;
  const cleanName = nameWithoutExt.replace(/^(\d+)[-_]+/, '');
  return cleanName
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

async function runMigration() {
  const galleryDir = path.join(rootDir, 'public', 'resort-images', 'gallery');
  if (!fs.existsSync(galleryDir)) {
    console.error(`❌ Gallery folder not found at: ${galleryDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(galleryDir);
  const validExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

  const imageFiles = files
    .filter((f) => validExtensions.has(path.extname(f).toLowerCase()))
    .map((file) => {
      const match = file.match(/^(\d+)[-_]/);
      const order = match ? parseInt(match[1], 10) : 9999;
      return { file, order };
    })
    .sort((a, b) => a.order - b.order || a.file.localeCompare(b.file));

  console.log(`\nFound ${imageFiles.length} images to migrate into Sanity CMS...`);
  console.log(`Connecting to Sanity project: ${projectId} (dataset: ${dataset})...\n`);

  const galleryImages = [];

  for (let i = 0; i < imageFiles.length; i++) {
    const { file, order } = imageFiles[i];
    const filePath = path.join(galleryDir, file);
    const title = cleanTitle(file);
    const category = inferCategory(file);
    const alt = `${title} - Splendid View Rajgarh`;

    process.stdout.write(
      `[${i + 1}/${imageFiles.length}] Uploading #${order.toString().padStart(2, '0')} ${file}... `
    );

    try {
      const readStream = fs.createReadStream(filePath);
      const asset = await client.assets.upload('image', readStream, {
        filename: file,
      });

      galleryImages.push({
        _key: `migrated-${i + 1}-${asset._id.slice(-8)}`,
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id,
        },
        title,
        alt,
        category,
      });

      console.log('✅ Done');
    } catch (err) {
      console.error(`❌ Failed:`, err.message);
    }
  }

  console.log('\nCreating/updating Singleton Photo Gallery document in Sanity...');

  try {
    const doc = {
      _id: 'gallery',
      _type: 'gallery',
      title: 'Main Resort Gallery',
      images: galleryImages,
    };

    await client.createOrReplace(doc);
    console.log(`\n🎉 SUCCESS! Migrated ${galleryImages.length} images into Sanity Photo Gallery!`);
    console.log('You can now open Sanity Studio at /studio and drag-and-drop to reorder images.');
  } catch (err) {
    console.error('❌ Failed to update Gallery document:', err);
  }
}

runMigration();
