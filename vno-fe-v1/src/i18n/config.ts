export type Locale = (typeof locales)[number];

export const locales = ['en', 'vi', 'ko'] as const;
export const localeLabels: Record<(typeof locales)[number], string> = {
  en: 'English',
  vi: 'Tiếng Việt',
  ko: 'Tiếng Hàn',
};

export const defaultLocale: Locale = 'en';
