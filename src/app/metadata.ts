import { Metadata } from 'next';

const defaultMetadata: Partial<Metadata> = {
  metadataBase: new URL('https://azimetkeremersoy.tech'),
  title: {
    default: 'Azimet Kerem Ersoy | Web Developer & Software Engineer',
    template: '%s | Azimet Kerem Ersoy',
  },
  description: 'Full-stack web developer specializing in Next.js, TypeScript, and modern web technologies.',
  authors: [{ name: 'Azimet Kerem Ersoy' }],
  creator: 'Azimet Kerem Ersoy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://azimetkeremersoy.tech',
    siteName: 'Azimet Kerem Ersoy',
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
    images: ['/cv_photo.png'],
    creator: '@keremeersoy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default defaultMetadata;
