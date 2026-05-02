import type { Metadata } from 'next';
import {
  Plus_Jakarta_Sans as PlusJakartaSans,
  Syne,
} from 'next/font/google';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import './globals.css';

const jakarta = PlusJakartaSans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['700', '800'],
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  title: 'Parsons Digital | Web Design & Digital Services',
  description:
    'I build websites for small businesses. Clean, mobile-ready, secure, and yours to keep.',
  metadataBase: new URL('https://parsonsdigital.com'),
  openGraph: {
    title: 'Parsons Digital | Web Design & Digital Services',
    description:
      'I build websites for small businesses. Clean, mobile-ready, secure, and yours to keep.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${syne.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#1e2530] text-[#f4f3f0]">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
