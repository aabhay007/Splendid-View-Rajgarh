import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const secret =
      req.nextUrl.searchParams.get('secret') ||
      req.headers.get('x-sanity-secret');

    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // Revalidate gallery page and cache tag
    revalidatePath('/gallery');
    revalidateTag('gallery');

    return NextResponse.json({
      revalidated: true,
      path: '/gallery',
      timestamp: Date.now(),
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json(
      { message: 'Error revalidating', error: errorMessage },
      { status: 500 }
    );
  }
}
