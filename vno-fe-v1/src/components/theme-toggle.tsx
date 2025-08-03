'use client';
import { Moon, Sun } from 'lucide-react';

import { useTheme } from 'next-themes';
import { Toggle } from './ui/toggle';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Toggle
        title={`Switch to ${theme === 'dark' ? 'light ' : 'dark'} mode`}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle italic"
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </Toggle>
    </>
  );
}
