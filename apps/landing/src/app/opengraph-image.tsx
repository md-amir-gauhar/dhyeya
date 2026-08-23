import { ImageResponse } from 'next/og';
import { BRAND } from '@/lib/brand';

export const alt = `${BRAND.name} — ${BRAND.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Satori has no system fonts, so the brand serif is embedded. Falls back silently. */
async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0' } },
    ).then((res) => res.text());

    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;

    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const displayFont = await loadDisplayFont();

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#08080a',
        backgroundImage:
          'radial-gradient(55% 45% at 30% 30%, rgba(229,169,92,0.20) 0%, rgba(212,137,58,0.06) 40%, transparent 72%)',
        padding: 72,
        fontFamily: displayFont ? 'Fraunces' : 'serif',
      }}
    >
      <div style={{ display: 'flex', fontSize: 22, letterSpacing: 6, color: '#a89f8d' }}>
        05:00 AM
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', fontSize: 62, color: '#faf8f4', lineHeight: 1.15 }}>
          While the country sleeps,
        </div>
        <div style={{ display: 'flex', fontSize: 62, color: '#cfc7b6', lineHeight: 1.15 }}>
          someone is preparing for tomorrow.
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', fontSize: 40, letterSpacing: 12, color: '#f3efe7' }}>
          {BRAND.name}
        </div>
        <div style={{ display: 'flex', fontSize: 20, letterSpacing: 4, color: '#e5a95c' }}>
          {BRAND.tagline}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: displayFont
        ? [{ name: 'Fraunces', data: displayFont, style: 'normal' as const, weight: 300 as const }]
        : [],
    },
  );
}
