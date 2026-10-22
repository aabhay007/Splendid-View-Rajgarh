'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

export const dynamic = 'force-static';

export default function StudioPage() {
  return (
    <div className="fixed inset-0 z-[999999] bg-white h-screen w-screen overflow-hidden">
      <NextStudio config={config} />
    </div>
  );
}
