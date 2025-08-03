'use client';
import { ThemeToggle } from '../theme-toggle';
import LocaleSwitcherSelect from './LanguageSwitcher';
import LocaleSwitcher from './LocaleSwitcher';

export  function RightHeader ()
{


  return (
    <div className="flex gap-2 items-center justify-between">
      <LocaleSwitcherSelect/>
      <ThemeToggle />
    </div>
  );
}
