import type { Metadata } from 'next';
import './globals.css';
import LenisProvider from '@/components/layout/LenisProvider';

export const metadata: Metadata = {
  title: "TITAN GYM — High-Performance Athletic & Strength Center",
  description:
    "Forge your peak athletic potential. 25,000 sq ft premier athletic facility, 100+ Hammer Strength racks, combat turf, and cryo recovery lab.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800&family=Oswald:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-white min-h-screen antialiased selection:bg-gold selection:text-obsidian">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
