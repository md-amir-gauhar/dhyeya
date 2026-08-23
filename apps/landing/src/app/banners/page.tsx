import type { Metadata } from 'next';
import { BANNERS } from '@/lib/banners';
import { BRAND } from '@/lib/brand';

export const metadata: Metadata = {
  title: 'Campaign banners',
  robots: { index: false, follow: false },
};

/** Reusable campaign lockups — screenshot at any size for social and print. */
export default function BannersPage() {
  return (
    <main className="px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="font-display text-4xl font-light text-ivory-50">Campaign banners</h1>
        <p className="mt-3 font-sans text-sm text-ivory-400">
          {BRAND.name} — {BRAND.tagline}
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {BANNERS.map((banner) => (
            <figure
              key={banner.id}
              className="grain lamp-glow relative isolate flex aspect-[16/10] flex-col justify-between overflow-hidden rounded-lg border border-ivory-100/10 bg-ink-900 p-8 sm:p-10"
            >
              <span className="font-sans text-[0.65rem] tracking-[0.28em] text-ivory-400/50 uppercase">
                Banner {banner.id}
              </span>

              <figcaption className="font-display text-2xl leading-[1.15] font-light text-balance text-ivory-50 sm:text-3xl">
                {banner.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </figcaption>

              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm tracking-[0.3em] text-ivory-100">
                  {BRAND.name}
                </span>
                <span className="font-deva text-sm text-dawn-400/70">{BRAND.devanagari}</span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
