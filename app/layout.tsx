import './globals.css';
import {
  Source_Sans_3,
  Herr_Von_Muellerhoff,
  Birthstone,
} from 'next/font/google';
import { Metadata } from 'next';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SidebarProvider } from '@/components/ui/sidebar';
import NavSidebar from '@/components/NavSideBar';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const birthstone = Birthstone({
  display: 'swap',
  preload: true,
  weight: '400',
});

const herVonMuellerHoff = Herr_Von_Muellerhoff({
  display: 'swap',
  preload: true,
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gamore.vercel.app'),
  title: {
    default: 'Gelateria Amore - Pizza & Gelato i Stockholm',
    template: '%s | Gelateria Amore',
  },
  description: 'Äkta napolitansk pizza och italiensk gelato på Hornstull',
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
          <div className="flex flex-col flex-1">
            <Nav />
            <main className="flex-1 flex flex-col bg-background min-h-dvh">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
