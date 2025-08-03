'use client';

import { useEffect, useState } from 'react';
import { getUserLocale, setUserLocale } from '@/src/common/services/locale';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import { Locale, localeLabels } from '@/src/i18n/config';
import { CheckIcon } from 'lucide-react';

export default function LocaleSwitcherSelect() {
  const [currentLocale, setCurrentLocale] = useState<Locale | undefined>(undefined);

  useEffect(() => {
    async function fetchLocale() {
      const locale = await getUserLocale();
      if (locale === 'en' || locale === 'vi' || locale === 'ko') {
        setCurrentLocale(locale);
      } else {
        console.warn('Invalid locale:', locale);
      }
    }
    fetchLocale();
  }, []);

  async function onChangeLocale(locale: Locale) {
    await setUserLocale(locale);
    setCurrentLocale(locale);
  }

  if (!currentLocale) {
    return <p>Translation...</p>;
  }

  return (
    <div className="relative">
      <Select value={currentLocale} onValueChange={onChangeLocale}>
        <SelectTrigger>
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(localeLabels).map(([key, label]) => (
            <SelectItem key={key} className="flex cursor-default items-center px-3 py-2 text-base " value={key}>
              <span className="text-slate-900 dark:text-white">{label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
