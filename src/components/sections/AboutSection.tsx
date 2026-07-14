import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { CheckCircle2, Trophy, Target } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const stats = [
    { icon: Trophy, value: '13+', label: t.about.stats.years },
    { icon: Target, value: '100+', label: t.about.stats.devices },
    { icon: CheckCircle2, value: '6+', label: t.about.stats.domains },
  ];

  return (
    <section 
      id="about" 
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-20 pt-20 pb-32"
      style={{ backgroundColor: theme.colors.bgSecondary }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2 
            className="font-black uppercase text-center text-[clamp(3rem,10vw,140px)] leading-[0.85] tracking-tighter mb-16 sm:mb-24"
            style={{ 
              fontFamily: theme.fonts.display,
              color: theme.colors.textMuted,
              opacity: 0.1
            }}
          >
            {t.about.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative">
          
          {/* Main Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div 
              className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-light leading-tight tracking-tight mb-8"
              style={{ color: theme.colors.text }}
            >
              <AnimatedText text={t.about.desc} />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <FadeIn 
                  key={idx} 
                  delay={0.2 + idx * 0.1} 
                  y={30}
                  className="rounded-[32px] p-6 sm:p-8 flex flex-col justify-between aspect-square border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                  style={{ 
                    backgroundColor: theme.colors.bgTertiary,
                    borderColor: theme.colors.border
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: `${theme.colors.accent}15` }}
                  >
                    <Icon 
                      className="w-6 h-6 transition-colors duration-300" 
                      style={{ color: theme.colors.accent }}
                    />
                  </div>
                  
                  <div className="mt-8">
                    <h3 
                      className="text-4xl sm:text-5xl font-bold tracking-tighter mb-2"
                      style={{ color: theme.colors.text }}
                    >
                      {stat.value}
                    </h3>
                    <p 
                      className="text-sm font-medium uppercase tracking-wider"
                      style={{ color: theme.colors.textMuted }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
