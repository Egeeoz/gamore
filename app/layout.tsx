import './globals.css';
import { Source_Sans_3, Herr_Von_Muellerhoff } from 'next/font/google';
import { Metadata } from 'next';

import Nav from '@/components/Nav';
import { SidebarProvider } from '@/components/ui/sidebar';
import NavSidebar from '@/components/NavSideBar';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const herVonMuellerHoff = Herr_Von_Muellerhoff({
  display: 'swap',
  preload: true,
  weight: '400',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${sourceSans3.className}  flex min-h-screen`}>
        <SidebarProvider defaultOpen={false}>
          <NavSidebar />
          <main className="flex-1 flex flex-col bg-background">
            <Nav />
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
