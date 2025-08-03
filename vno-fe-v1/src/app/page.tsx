'use client';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('AppLayout');
  return <div className="">{t('home')}</div>;
}
