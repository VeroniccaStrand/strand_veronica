import type { Metadata } from 'next';
import { Spectral } from 'next/font/google';
import './globals.css';

const spectral = Spectral({
  weight: ['200', '400', '500', '700', '800'],
  subsets: ['latin'],
  variable: '--font-spectral',
});
export const metadata: Metadata = {
  title: 'Veronica Strand - Fullstack Developer',
  description: 'Building Trust Through Transparent Code, One Stack at a Time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${spectral.variable} antialiased`}>{children}</body>
    </html>
  );
}
