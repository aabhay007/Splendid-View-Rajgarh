import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

// Baseline offset: when cloud counter is 1, total is 929 + 1 = 930
const START_OFFSET = 929;
let inMemoryLatestViews = 930;

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
      if (typeof parsed.views === "number" && parsed.views >= 930) {
        inMemoryLatestViews = Math.max(parsed.views, inMemoryLatestViews);
        return inMemoryLatestViews;
      }
    }
  } catch {
    // Vercel serverless environment fallback
  }
  return inMemoryLatestViews;
}

function writeLocalViews(count: number): void {
  inMemoryLatestViews = Math.max(inMemoryLatestViews, count);
  try {
    const dir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const filePath = path.join(dir, "views.json");
    fs.writeFileSync(filePath, JSON.stringify({ views: count }), "utf-8");
  } catch {
    // Serverless read-only filesystem handled gracefully
  }
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
      }
    );

    if (res.ok) {
      const text = await res.text();
      const match = text.match(/VISITORS:\s*(\d+)/i);
      if (match) {
        const raw = parseInt(match[1], 10);
        if (!isNaN(raw) && raw > 0) {
          const totalViews = START_OFFSET + raw;
          writeLocalViews(totalViews);
          return totalViews;
        }
      }
    }
  } catch (err) {
    console.error("Cloud counter error, using fallback:", err);
  }

  // Graceful local fallback if external service is temporarily unreachable
  const current = readLocalViews();
  const next = current + 1;
  writeLocalViews(next);
  return next;
}

export async function GET() {
  // If memory/local is at base default, attempt to fetch current cloud count
  if (inMemoryLatestViews <= 930) {
    try {
      const views = await recordCloudVisit();
      return NextResponse.json(
        { views },
        {
          headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate",
            Pragma: "no-cache",
          },
        }
      );
    } catch {
      // ignore
    }
  }

  const views = readLocalViews();
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

export async function POST() {
  const views = await recordCloudVisit();
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
