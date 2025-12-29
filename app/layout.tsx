import './globals.css';
import Nav from '@/components/Nav';
import { Source_Sans_3 } from 'next/font/google';
import { Metadata } from 'next';
import { SidebarProvider } from '@/components/ui/sidebar';
import NavSidebar from '@/components/NavSideBar';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
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
    <html lang="sv">
      <body
        className={`${sourceSans3.className} antialiased flex min-h-screen`}
      >
        <SidebarProvider defaultOpen={false}>
          <NavSidebar />
          <main className="flex-1 flex flex-col bg-background">
            <Nav />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
