import en from './en.json';

export type Locale = 'en';

/** The only locale served by the site. */
export const locales: Locale[] = ['en'];

/** The default locale, served at `/`. */
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { label: string; ogLocale: string }> = {
  en: { label: 'English', ogLocale: 'en_GB' },
};

/** URL path segment for the default locale. */
export function localeParam(locale: Locale): string | undefined {
  return undefined;
}

export function localeStaticPaths() {
  return locales.map((locale) => ({
    params: { lang: undefined },
    props: { locale },
  }));
}

const translations = { en } as const;

export type TranslationKeys = typeof en;

export function useTranslations(locale: Locale) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = translations[locale];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        value = keys.reduce<unknown>((acc, k2) => {
          if (acc && typeof acc === 'object' && k2 in acc) {
            return (acc as Record<string, unknown>)[k2];
          }
          return undefined;
        }, translations.en);
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  };
}

export function getLocaleFromUrl(_url: URL): Locale {
  return 'en';
}

export function withBase(path: string): string {
  if (!path || !path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL;
  return base + path.slice(1);
}

export function localizePath(path: string, _locale: Locale): string {
  return path;
}

export function localizeUrl(path: string, locale: Locale): string {
  return withBase(localizePath(path, locale));
}

export function stripLocaleFromPath(path: string): string {
  return path;
}

/** Build a tel: URL from a display phone number. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, '')}`;
}