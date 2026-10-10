export const siteConfig = {
  name: 'South East Europe Public Sector Communication Forum',
  shortName: 'SEECOM',
  domain: 'seecom.info',
  description: 'A regional forum connecting public-sector communication professionals across South East Europe.',
  locale: 'en-GB',

  links: {
    about: '/about/',
    accessibility: '/accessibility/',
    privacy: '/privacy/',
  },
} as const;

export type SiteConfig = typeof siteConfig;