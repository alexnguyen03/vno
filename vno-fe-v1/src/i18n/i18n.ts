// i18n.ts
export async function loadMessages(locale: string) {
  switch (locale) {
    case 'vi':
      return (await import('../../messages/vi.json')).default;
    case 'en':
    default:
      return (await import('../..//messages/en.json')).default;
  }
}
