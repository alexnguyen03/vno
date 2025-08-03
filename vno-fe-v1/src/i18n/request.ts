import { getRequestConfig } from 'next-intl/server';

import { getUserLocale } from '../common/services/locale';

export default getRequestConfig(async () => {
  // Lấy cookie NEXT_LOCALE
  const storeLocale = await getUserLocale();

  const locale = storeLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
