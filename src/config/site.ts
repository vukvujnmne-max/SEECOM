export const siteConfig = {
  name: 'South East Europe Public Sector Communication Forum',
  shortName: 'SEECOM',
  domain: 'seecom.info',
  description: 'International forum for professional exchange among public sector communicators in South East Europe',
  locale: 'en-US',

  // Required links for USA Identifier footer component
  links: {
    about: '/about/',
    accessibility: '/accessibility/',
    foia: 'https://www.foia.gov/',
    noFear: 'https://www.eeoc.gov/no-fear-act-data',
    oig: 'https://www.oversight.gov/',
    privacy: '/privacy/',
    budget: '/',
    usagov: 'https://www.usa.gov/',
  },
} as const;

export type SiteConfig = typeof siteConfig;
