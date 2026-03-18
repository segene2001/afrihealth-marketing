import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AfriHealth Sentinel | Disease Surveillance for Sub-Saharan Africa',
  description: 'Real-time disease surveillance and outbreak detection platform for Sub-Saharan Africa. Mobile-first reporting, AI-powered alerts, and seamless integration with national health systems.',
  keywords: 'disease surveillance, outbreak detection, public health, Africa, NCDC, DHIS2, health monitoring',
  openGraph: {
    title: 'AfriHealth Sentinel',
    description: 'Real-time disease surveillance for Sub-Saharan Africa',
    url: 'https://afrihealth.io',
    siteName: 'AfriHealth Sentinel',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AfriHealth Sentinel',
    description: 'Real-time disease surveillance for Sub-Saharan Africa',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
