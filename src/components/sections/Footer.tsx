import { LinkedInIcon, GitHubIcon } from '../ui/SocialIcons';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer 
      className="border-t py-8 relative z-50"
      style={{ 
        backgroundColor: theme.colors.bg,
        borderColor: theme.colors.border 
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <p 
          className="text-sm"
          style={{ color: theme.colors.textSecondary }}
        >
          {t.footer.copyright}
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ph%C3%B9ng-thanh-ti%E1%BA%BFn-b6698292"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:scale-110 duration-300"
            style={{ color: theme.colors.textMuted }}
            onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.accent}
            onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.textMuted}
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/tienpt0911"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:scale-110 duration-300"
            style={{ color: theme.colors.textMuted }}
            onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.accent}
            onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.textMuted}
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
