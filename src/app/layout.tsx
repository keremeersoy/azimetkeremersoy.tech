import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import './globals.css';
import Sidebar from '@/components/sidebar';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import { ScrollArea } from '@/components/ui/scroll-area';

export const metadata: Metadata = {
  metadataBase: new URL('https://azimetkeremersoy.tech'),
  title: 'Azimet Kerem Ersoy | Web Developer & Software Engineer',
  description:
    'Full-stack web developer specializing in Next.js, TypeScript, and modern web technologies. Check out my portfolio, projects and experience.',
  keywords:
    'Azimet Kerem Ersoy, Web Developer, Full Stack Developer, Next.js Developer, TypeScript, React, Software Engineer, Frontend Developer',
  authors: [{ name: 'Azimet Kerem Ersoy' }],
  creator: 'Azimet Kerem Ersoy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://azimetkeremersoy.tech',
    siteName: 'Azimet Kerem Ersoy',
    title: 'Azimet Kerem Ersoy | Web Developer & Software Engineer',
    description:
      'Full-stack web developer specializing in Next.js, TypeScript, and modern web technologies. Check out my portfolio, projects and experience.',
    images: [
      {
        url: '/cv_photo.png',
        width: 800,
        height: 600,
        alt: 'Azimet Kerem Ersoy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azimet Kerem Ersoy | Web Developer & Software Engineer',
    description: 'Full-stack web developer specializing in Next.js, TypeScript, and modern web technologies.',
    images: ['/cv_photo.png'],
    creator: '@keremeersoy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('h-screen w-full flex', GeistSans.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Sidebar />

        <div className="w-full h-full">
          <Navbar />

          <div className="w-full mx-auto h-full">
            <ScrollArea className="h-full max-h-dynamic-screen min-h-dynamic-screen overflow-y-auto overflow-x-hidden relative flex w-full flex-col">
              <div className="z-[1] w-full px-6 pb-32 pt-8 lg:px-8 lg:py-24">
                <div className="mx-auto w-full lg:mb-0 lg:max-w-3xl">
                  <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(var(--dot-color)_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  {children}
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
