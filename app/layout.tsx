import './globals.css';
import Nav from '@/components/Nav';
import { Cabin, Source_Sans_3 } from 'next/font/google';

const cabin = Cabin({});
const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
});

// Add antialiased in body later to see if it fixes rough edges
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSans3.className}>
      <body className={`${cabin.className} antialiased h-1000`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
