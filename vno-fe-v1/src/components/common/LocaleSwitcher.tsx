'use client';

import { setUserLocale } from '@/src/common/services/locale';
import { Locale, locales } from '@/src/i18n/config';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LocaleSwitcher() {
  const router = useRouter();


  async function changeLocale(newLocale: Locale) {
  await  setUserLocale(newLocale);
    window.location.reload(); // reload trang để load lại ngôn ngữ
  }
  return (
    <div>
      {/* <p>Current locale: {locale}</p> */}
      <button onClick={() => changeLocale(locales[0])}>
        English
      </button>
      <button onClick={() => changeLocale(locales[1])}>
        Tiếng Việt
      </button>
    </div>
  );
}
