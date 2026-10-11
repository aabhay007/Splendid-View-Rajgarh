import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const START_VIEWS = 930;

function getCounterFilePath(): string {
  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true });
    } catch {
      // directory creation handled or already exists
    }
  }
  return path.join(dir, "views.json");
}

function readViews(): number {
  try {
    const filePath = getCounterFilePath();
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(content);
      if (typeof parsed.views === "number" && parsed.views >= START_VIEWS) {
        return parsed.views;
      }
    }
  } catch (err) {
    console.error("Error reading views counter:", err);
  }
  return START_VIEWS;
}

function writeViews(count: number): void {
  try {
    const filePath = getCounterFilePath();
    fs.writeFileSync(filePath, JSON.stringify({ views: count }), "utf-8");
  } catch (err) {
    console.error("Error writing views counter:", err);
  }
}

export async function GET() {
  const views = readViews();
  return NextResponse.json(
    { views },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    }
  );
}

export async function POST() {
  const current = readViews();
  const next = current + 1;
  writeViews(next);
  return NextResponse.json(
    { views: next },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    }
  );
}
