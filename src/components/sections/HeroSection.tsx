import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { LinkedInIcon } from '../ui/SocialIcons';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

export const HeroSection: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-between px-5 sm:px-8 md:px-10 py-6 sm:py-8 overflow-hidden"
    >
      {/* Top Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-between relative z-20"
      >
        <div className="flex gap-4 sm:gap-8 overflow-x-auto no-scrollbar mask-edges pb-2 sm:pb-0">
          <a href="#about" className="text-sm font-medium tracking-wide uppercase hover:opacity-100 transition-opacity whitespace-nowrap" style={{ color: theme.colors.textMuted }}>
            {t.hero.nav.about}
          </a>
          <a href="#skills" className="text-sm font-medium tracking-wide uppercase hover:opacity-100 transition-opacity whitespace-nowrap" style={{ color: theme.colors.textMuted }}>
            {t.hero.nav.skills}
          </a>
          <a href="#projects" className="text-sm font-medium tracking-wide uppercase hover:opacity-100 transition-opacity whitespace-nowrap" style={{ color: theme.colors.textMuted }}>
            {t.hero.nav.projects}
          </a>
          <a href="#contact" className="text-sm font-medium tracking-wide uppercase hover:opacity-100 transition-opacity whitespace-nowrap" style={{ color: theme.colors.textMuted }}>
            {t.hero.nav.contact}
          </a>
        </div>

        <button 
          onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
          className="text-sm font-bold tracking-widest uppercase ml-4 border px-3 py-1 rounded-full transition-colors"
          style={{ 
            color: theme.colors.text, 
            borderColor: theme.colors.border,
            backgroundColor: theme.colors.bgSecondary 
          }}
        >
          {language === 'en' ? 'VI' : 'EN'}
        </button>
      </motion.nav>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full mt-4 mb-4">
        
        {/* Name and Role */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center w-full z-20 pointer-events-none"
        >
          <h1 
            className="hero-heading font-black leading-[0.85] tracking-tighter uppercase w-full"
            style={{ 
              fontFamily: theme.fonts.display,
              fontSize: 'clamp(4rem, 15vw, 12rem)',
              '--gradient-from': theme.colors.gradientFrom,
              '--gradient-to': theme.colors.gradientTo,
            } as React.CSSProperties}
          >
            TIEN PT
          </h1>
          <p 
            className="text-[clamp(1rem,3vw,1.5rem)] font-light tracking-[0.2em] uppercase mt-2 sm:mt-4 pointer-events-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            Senior QC Engineer
          </p>
        </motion.div>

      </div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative z-20 w-full"
      >
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-xl sm:text-2xl" style={{ color: theme.colors.text }}>13+</span>
            <span className="text-xs uppercase tracking-widest" style={{ color: theme.colors.textMuted }}>{t.about.stats.years}</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-xl sm:text-2xl" style={{ color: theme.colors.text }}>100+</span>
            <span className="text-xs uppercase tracking-widest" style={{ color: theme.colors.textMuted }}>{t.about.stats.devices}</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-xl sm:text-2xl" style={{ color: theme.colors.text }}>6+</span>
            <span className="text-xs uppercase tracking-widest" style={{ color: theme.colors.textMuted }}>{t.about.stats.domains}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ph%C3%B9ng-thanh-ti%E1%BA%BFn-b6698292"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border transition-all hover:scale-105 pointer-events-auto"
            style={{ 
              borderColor: theme.colors.border, 
              color: theme.colors.text,
              backgroundColor: theme.colors.bgSecondary
            }}
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a
            href="/cv-print"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm tracking-wide uppercase transition-all hover:scale-105 pointer-events-auto"
            style={{
              backgroundColor: theme.colors.accent,
              color: '#ffffff'
            }}
          >
            {t.hero.downloadCV}
            <Download size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
