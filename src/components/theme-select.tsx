import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Button } from './shadcn/button';

export function ThemeSelect() {
  // Get the theme from localStorage or the system preference
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      if ('theme' in localStorage) {
        return localStorage.theme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  // Set the theme in localStorage and toggle the class on the html
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');

    if (theme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.theme = theme;
    }
  }, [theme]);

  // Toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      className="cursor-pointer"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
