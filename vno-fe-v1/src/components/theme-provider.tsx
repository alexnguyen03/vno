'use client';

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes';
import { useMounted } from '../hooks/use-mounted';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const mounted = useMounted();

  if (!mounted) return null; // Không render gì cho đến khi mounted để tránh mismatch

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
