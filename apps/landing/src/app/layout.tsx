import type { Metadata } from 'next';
import { Fraunces, Inter, Noto_Serif_Devanagari } from 'next/font/google';
import { BRAND } from '@/lib/brand';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoDeva = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-noto-deva',
  display: 'swap',
  weight: ['400', '500'],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dhyeya.app';
const TITLE = `${BRAND.name} — Your Preparation. Your Purpose.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${BRAND.name}`,
  },
  description: BRAND.description,
  keywords: [
    'DHYEYA',
    'AI preparation companion',
    'government exam preparation',
    'competitive exam AI tutor',
    'personalised study plan',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: BRAND.name,
    title: TITLE,
    description: BRAND.description,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: BRAND.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: BRAND.name,
    alternateName: BRAND.devanagari,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    slogan: BRAND.tagline,
    description: BRAND.description,
  };

  return (
    <html lang="en-IN" className={`${fraunces.variable} ${inter.variable} ${notoDeva.variable}`}>
      <body className="bg-ink-950 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
