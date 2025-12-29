import './globals.css';
import Nav from '@/components/Nav';
import { Cabin, Source_Sans_3 } from 'next/font/google';
import { Metadata } from 'next';

const cabin = Cabin({});
const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Your Site Name',
    template: '%s | Your Site Name', // För andra sidor
  },
  description:
    'Your site description here - make it compelling and under 160 characters',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Site Name',
    description: 'Your site description',
    url: 'https://yoursite.com',
    siteName: 'Your Site Name',
    locale: 'sv_SE',
    type: 'website',
  },
};

// Add antialiased in body later to see if it fixes rough edges
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={sourceSans3.className}>
      <body className={`${cabin.className} antialiased h-1000`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
