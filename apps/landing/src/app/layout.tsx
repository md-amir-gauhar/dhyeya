import type { Metadata } from 'next';
import { APP_NAME } from '@dhyeya/shared';
import './globals.css';

export const metadata: Metadata = {
  title: `${APP_NAME} — Build with purpose`,
  description: `${APP_NAME} is a modern platform built on a Bun-powered monorepo.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
