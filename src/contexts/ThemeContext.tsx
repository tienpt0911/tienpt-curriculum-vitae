import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ThemeConfig {
  id: 'precision' | 'terminal' | 'craft';
  name: string;
  description: string;
  colors: {
    bg: string;
    bgSecondary: string;
    bgTertiary: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    accent: string;
    accentHover: string;
    border: string;
    cardBg: string;
    cardBorder: string;
    gradientFrom: string;
    gradientTo: string;
  };
  fonts: {
    display: string;
    body: string;
  };
  defaultColorway: string;
}

const themes: Record<ThemeConfig['id'], ThemeConfig> = {
  precision: {
    id: 'precision',
    name: 'Precision',
    description: 'Professional Dashboard',
    colors: {
      bg: '#0B1121',
      bgSecondary: '#0F1A2E',
      bgTertiary: '#162037',
      text: '#E2E8F0',
      textSecondary: '#94A3B8',
      textMuted: '#64748B',
      accent: '#3B82F6',
      accentHover: '#2563EB',
      border: '#1E3A5F',
      cardBg: '#0F1A2E',
      cardBorder: '#1E3A5F',
      gradientFrom: '#3B82F6',
      gradientTo: '#60A5FA',
    },
    fonts: {
      display: "'Be Vietnam Pro', sans-serif",
      body: "'Be Vietnam Pro', sans-serif",
    },
    defaultColorway: 'camping_modified',
  },
  terminal: {
    id: 'terminal',
    name: 'Terminal',
    description: 'Hacker Mode',
    colors: {
      bg: '#0A0A0A',
      bgSecondary: '#141414',
      bgTertiary: '#1A1A1A',
      text: '#E5E5E5',
      textSecondary: '#A3A3A3',
      textMuted: '#737373',
      accent: '#22C55E',
      accentHover: '#16A34A',
      border: '#262626',
      cardBg: '#141414',
      cardBorder: '#262626',
      gradientFrom: '#22C55E',
      gradientTo: '#4ADE80',
    },
    fonts: {
      display: "'Be Vietnam Pro', monospace",
      body: "'Be Vietnam Pro', sans-serif",
    },
    defaultColorway: 'camping_modified',
  },
  craft: {
    id: 'craft',
    name: 'Craft',
    description: 'Premium Artisan',
    colors: {
      bg: '#1A1614',
      bgSecondary: '#231F1B',
      bgTertiary: '#2D2722',
      text: '#F5F0E8',
      textSecondary: '#C4BAA8',
      textMuted: '#8A7E6E',
      accent: '#D97706',
      accentHover: '#B45309',
      border: '#3D3530',
      cardBg: '#231F1B',
      cardBorder: '#3D3530',
      gradientFrom: '#D97706',
      gradientTo: '#FBBF24',
    },
    fonts: {
      display: "'Be Vietnam Pro', sans-serif",
      body: "'Be Vietnam Pro', sans-serif",
    },
    defaultColorway: 'camping_modified',
  },
};

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (id: ThemeConfig['id']) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeId, setThemeId] = useState<ThemeConfig['id']>(() => {
    const saved = localStorage.getItem('theme') as ThemeConfig['id'] | null;
    if (saved && (saved === 'precision' || saved === 'terminal' || saved === 'craft')) {
      return saved;
    }
    return 'precision';
  });

  useEffect(() => {
    localStorage.setItem('theme', themeId);
  }, [themeId]);

  const theme = themes[themeId];

  const handleSetTheme = (id: ThemeConfig['id']) => {
    setThemeId(id);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { themes };
