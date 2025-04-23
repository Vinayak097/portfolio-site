import { Metadata } from 'next';
import { personalData } from './data/personal';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://portfolio.example.com';

export const siteMetadata: Metadata = {
  title: {
    default: `${personalData.name} | ${personalData.title}`,
    template: `%s | ${personalData.name}`,
  },
  description: personalData.about,
  keywords: [
    'Portfolio',
    'Developer',
    'Web Developer',
    'MERN Stack',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Node.js',
    personalData.name,
  ],
  authors: [
    {
      name: personalData.name,
      url: baseUrl,
    },
  ],
  creator: personalData.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: `${personalData.name} | ${personalData.title}`,
    description: personalData.about,
    siteName: `${personalData.name}'s Portfolio`,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: personalData.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalData.name} | ${personalData.title}`,
    description: personalData.about,
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@' + personalData.socialLinks.twitter.split('/').pop(),
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${baseUrl}/site.webmanifest`,
};
