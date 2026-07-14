import { Crosshair, Terminal, Gem } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme, type ThemeConfig } from '../../contexts/ThemeContext';

const themeOptions: { id: ThemeConfig['id']; icon: React.ComponentType<any>; label: string }[] = [
  { id: 'precision', icon: Crosshair, label: 'Precision' },
  { id: 'terminal', icon: Terminal, label: 'Terminal' },
  { id: 'craft', icon: Gem, label: 'Craft' },
];

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]" onMouseLeave={() => setIsExpanded(false)}>
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1 rounded-full px-2 py-2 border"
            style={{
              backgroundColor: `${theme.colors.bgSecondary}ee`,
              borderColor: theme.colors.border,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {themeOptions.map((option) => {
              const Icon = option.icon;
              const isActive = theme.id === option.id;

              return (
                <motion.button
                  key={option.id}
                  onClick={() => setTheme(option.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-full px-4 py-2.5 transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: isActive ? theme.colors.accent : 'transparent',
                    color: isActive ? '#ffffff' : theme.colors.textMuted,
                  }}
                >
                  <Icon size={16} />
                  <span
                    className="text-xs font-semibold whitespace-nowrap"
                    style={{ fontFamily: `'Inter', sans-serif` }}
                  >
                    {option.label}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsExpanded(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full flex items-center justify-center border shadow-lg cursor-pointer"
            style={{
              backgroundColor: `${theme.colors.bgSecondary}ee`,
              borderColor: theme.colors.border,
              color: theme.colors.accent,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {theme.id === 'precision' && <Crosshair size={20} />}
            {theme.id === 'terminal' && <Terminal size={20} />}
            {theme.id === 'craft' && <Gem size={20} />}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
