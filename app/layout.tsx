import type { Metadata } from 'next';
import { Spectral, Bebas_Neue } from 'next/font/google';
import './globals.css';

const spectral = Spectral({
  weight: ['200', '400', '500', '700', '800'],
  subsets: ['latin'],
  variable: '--font-spectral',
});
const bebas = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebas',
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
      <body className={`${spectral.variable} ${bebas.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
