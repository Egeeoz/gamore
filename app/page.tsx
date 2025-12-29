import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home', // Blir "Home | Your Site Name" tack vare template
  description: 'Welcome to our homepage - specific description for this page',
};

export default function Home() {
  return <>hello</>;
}
