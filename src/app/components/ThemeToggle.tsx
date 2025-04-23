'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-4 right-4 rounded-full border border-gray-alpha-400 bg-background-100 p-2 shadow-sm transition-colors hover:bg-gray-100"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="size-4 text-gray-900" />
      ) : (
        <Moon className="size-4 text-gray-900" />
      )}
    </button>
  );
}
