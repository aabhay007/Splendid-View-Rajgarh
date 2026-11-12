import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

// Baseline offset: when cloud counter is 1, total is 929 + 1 = 930
const START_OFFSET = 929;
const BASELINE_VIEWS = START_OFFSET + 1;
let inMemoryLatestViews = BASELINE_VIEWS;
let hasSyncedCloudInInstance = false;

function getCounterFilePath(): string {
  const dir = path.join(process.cwd(), "data");
  return path.join(dir, "views.json");
}

function readLocalViews(): number {
  try {
    const filePath = getCounterFilePath();
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(content);
      if (typeof parsed.views === "number" && parsed.views >= BASELINE_VIEWS) {
        inMemoryLatestViews = Math.max(parsed.views, inMemoryLatestViews);
        return inMemoryLatestViews;
      }
    }
  } catch {
    // Vercel serverless environment fallback
  }
  return inMemoryLatestViews;
}

function writeLocalViews(count: number): number {
  const bestCount = Math.max(readLocalViews(), count);
  inMemoryLatestViews = bestCount;
  try {
    const dir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const filePath = path.join(dir, "views.json");
    fs.writeFileSync(filePath, JSON.stringify({ views: bestCount }), "utf-8");
  } catch {
    // Serverless read-only filesystem handled gracefully
  }
  return bestCount;
}

/**
 * Parses visitor counts from visitorbadge.io SVG text, including dot/comma
 * thousands separators (e.g. "VISITORS: 1.010" -> 1010) and k/M suffixes.
 */
function parseVisitorCount(svgText: string): number | null {
  const match = svgText.match(/VISITORS:\s*([0-9][0-9.,]*)\s*([kKmM])?/i);
  if (!match) return null;

  const numPart = match[1];
  const suffix = match[2]?.toLowerCase();

  if (suffix) {
    const scaled = parseFloat(numPart.replace(/,/g, ""));
    if (isNaN(scaled) || scaled <= 0) return null;
    const multiplier = suffix === "m" ? 1_000_000 : 1_000;
    return Math.round(scaled * multiplier);
  }

  const digitsOnly = numPart.replace(/[.,]/g, "");
  const parsed = parseInt(digitsOnly, 10);
  return !isNaN(parsed) && parsed > 0 ? parsed : null;
}

async function recordCloudVisit(): Promise<number> {
  try {
    // Persistent cloud-backed counter that survives Vercel builds & git redeployments
    const res = await fetch(
      "https://api.visitorbadge.io/api/visitors?path=splendid-view-rajgarh-official",
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          "Accept-Language": "en-US,en;q=0.9",
        },
        cache: "no-store",
        signal: AbortSignal.timeout(5000),
      }
    );

    if (res.ok) {
      const text = await res.text();
      const raw = parseVisitorCount(text);
      if (raw !== null) {
        hasSyncedCloudInInstance = true;
        const totalViews = START_OFFSET + raw;
        return writeLocalViews(totalViews);
      }
    }
  } catch (err) {
    console.error("Cloud counter error, using fallback:", err);
  }

  // Graceful local fallback if external service is temporarily unreachable
  const current = readLocalViews();
  return writeLocalViews(current + 1);
}

function viewsJsonResponse(views: number) {
  return NextResponse.json(
    { views },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
        Pragma: "no-cache",
      },
    }
  );
}

export async function GET() {
  // Sync with the cloud counter once per serverless/server instance so refreshes
  // don't serve stale local JSON, while avoiding double-counting within the instance.
  if (!hasSyncedCloudInInstance) {
    try {
      const views = await recordCloudVisit();
      return viewsJsonResponse(views);
    } catch {
      // ignore
    }
  }

  return viewsJsonResponse(readLocalViews());
}

export async function POST() {
  const views = await recordCloudVisit();
  return viewsJsonResponse(views);
}
