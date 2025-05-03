import './globals.css';
import type { Metadata } from 'next';
import { GeistSans, GeistMono } from 'geist/font';
import { getGithubRepoData } from '@/utils/data';

export async function generateMetadata() {
  const { name, description } = await getGithubRepoData();
  return {
    title: name,
    description,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className='bg-gray-800 font-sans'>{children}</body>
    </html>
  );
}
