'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode, useState } from 'react';
import { ThemeProvider } from '../components/theme-provider';
import { SidebarProvider } from '../components/ui/sidebar';

export default  function Providers({ children, messages, locale }: { children: ReactNode; messages: Record<string, any>; locale: string }) {
  // Nên dùng useState để tránh tạo lại QueryClient mỗi lần render
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider
            style={
              {
                '--sidebar-width': '450px',
              } as React.CSSProperties
            }
          >
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </NextIntlClientProvider>
    </QueryClientProvider>
  );
}
