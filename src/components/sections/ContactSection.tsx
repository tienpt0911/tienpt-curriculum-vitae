import { Phone, Mail, MapPin, FileText } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '../ui/SocialIcons';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

interface ContactItem {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  value: string;
  href?: string;
  download?: boolean;
  external?: boolean;
}

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const contactData: ContactItem[] = [
    {
      icon: Phone,
      label: t.contact.labels.phone,
      value: '0945 83 88 89',
      href: 'tel:+84945838889',
    },
    {
      icon: Mail,
      label: t.contact.labels.email,
      value: 'tienpt0911@gmail.com',
      href: 'mailto:tienpt0911@gmail.com',
    },
    {
      icon: LinkedInIcon,
      label: t.contact.labels.linkedin,
      value: 'Phùng Thanh Tiến',
      href: 'https://www.linkedin.com/in/ph%C3%B9ng-thanh-ti%E1%BA%BFn-b6698292',
      external: true,
    },
    {
      icon: GitHubIcon,
      label: t.contact.labels.github,
      value: 'github.com/tienpt0911',
      href: 'https://github.com/tienpt0911',
      external: true,
    },
    {
      icon: MapPin,
      label: t.contact.labels.address,
      value: 'Duy Tan, Cau Giay, Hanoi',
    },
    {
      icon: FileText,
      label: t.contact.labels.downloadCv,
      value: 'Download CV PDF',
      href: '/cv/tienpt_cv.pdf',
      download: true,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden -mt-10 sm:-mt-12 md:-mt-14 z-50"
      style={{ backgroundColor: theme.colors.bgTertiary }}
    >
      {/* Background Image with Glow Blur Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 blur-[60px] scale-110 pointer-events-none" 
        style={{ backgroundImage: `url('/images/contact-bg.jpg')` }}
      />
      
      {/* Dark/Light overlay to ensure text contrast over the glowing background */}
      <div 
        className="absolute inset-0 opacity-70 pointer-events-none" 
        style={{ backgroundColor: theme.colors.bgTertiary }}
      />

      <div className="relative z-10 flex flex-col items-center gap-14 sm:gap-16 md:gap-20">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 
            className="font-black uppercase leading-[0.85] tracking-tighter text-center text-[clamp(3rem,10vw,140px)]"
            style={{ 
              fontFamily: theme.fonts.display,
              color: theme.colors.textMuted,
              opacity: 0.2
            }}
          >
            {t.contact.title}
          </h2>
        </FadeIn>

        {/* Contact cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 w-full max-w-4xl">
          {contactData.map((item, index) => {
            const Icon = item.icon;

            const cardContent = (
              <div className="flex items-center gap-4 sm:gap-5">
                <div 
                  className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-300 group-hover:bg-[var(--hover-bg)]"
                  style={{ 
                    backgroundColor: theme.colors.bgSecondary,
                    '--hover-bg': `${theme.colors.accent}20`
                  } as React.CSSProperties}
                >
                  <Icon 
                    className="w-5 h-5 transition-colors duration-300 group-hover:text-[var(--hover-color)]" 
                    style={{ 
                      color: theme.colors.textSecondary,
                      '--hover-color': theme.colors.accent
                    } as React.CSSProperties}
                  />
                </div>
                <div className="min-w-0">
                  <p 
                    className="text-xs uppercase tracking-wider mb-1 transition-colors"
                    style={{ color: theme.colors.textMuted }}
                  >
                    {item.label}
                  </p>
                  <p 
                    className="font-medium text-sm sm:text-base truncate transition-colors group-hover:text-[var(--hover-color)]"
                    style={{ 
                      color: theme.colors.text,
                      '--hover-color': theme.colors.accent
                    } as React.CSSProperties}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            );

            const cardClassName =
              'group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg';

            return (
              <FadeIn key={item.label} delay={0.1 + index * 0.08} y={30}>
                {item.href ? (
                  <a
                    href={item.href}
                    className={`block ${cardClassName}`}
                    style={{ 
                      backgroundColor: theme.colors.bg,
                      borderColor: theme.colors.border
                    }}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    {...(item.download ? { download: true } : {})}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div 
                    className={cardClassName}
                    style={{ 
                      backgroundColor: theme.colors.bg,
                      borderColor: theme.colors.border
                    }}
                  >
                    {cardContent}
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
