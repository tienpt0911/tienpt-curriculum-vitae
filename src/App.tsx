import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';
import { ThemeSwitcher } from './components/ui/ThemeSwitcher';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { CVDocument } from './pages/CVDocument';

function AppContent() {
  const { theme } = useTheme();

  return (
    <main 
      className="min-h-screen" 
      style={{ 
        backgroundColor: theme.colors.bg, 
        color: theme.colors.text,
        fontFamily: theme.fonts.body,
        overflowX: 'clip' 
      }}
    >
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ThemeSwitcher />
    </main>
  );
}

function App() {
  const isPrint = window.location.pathname === '/cv-print';

  return (
    <LanguageProvider>
      <ThemeProvider>
        {isPrint ? <CVDocument /> : <AppContent />}
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
