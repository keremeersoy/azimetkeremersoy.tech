import { Organization, Person, WebSite, WithContext } from 'schema-dts';

export const websiteSchema: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Azimet Kerem Ersoy',
  url: 'https://azimetkeremersoy.tech',
  description: 'Full-stack web developer specializing in Next.js, TypeScript, and modern web technologies.',
};

export const personSchema: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Azimet Kerem Ersoy',
  jobTitle: 'Web Developer',
  url: 'https://azimetkeremersoy.tech',
  sameAs: [
    'https://github.com/keremeersoy',
    'https://www.linkedin.com/in/azimetkeremersoy',
    'https://medium.com/@azimetkeremersoy',
  ],
  image: 'https://azimetkeremersoy.tech/cv_photo.png',
  email: 'azimetkeremersoy@gmail.com',
  description: 'Full-stack web developer specializing in Next.js, TypeScript, and modern web technologies.',
  worksFor: {
    '@type': 'Organization',
    name: 'Pepteam',
    url: 'https://pepteam.net',
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'Kırıkkale University',
    url: 'https://kku.edu.tr',
  },
};
