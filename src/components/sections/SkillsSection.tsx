import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section 
      id="skills" 
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-30 -mt-10 sm:-mt-12 md:-mt-14"
      style={{ backgroundColor: theme.colors.bg }}
    >
      <FadeIn delay={0} y={40}>
        <h2 
          className="font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-[0.85] tracking-tighter mb-16 sm:mb-20 md:mb-28"
          style={{ 
            fontFamily: theme.fonts.display,
            color: theme.colors.textMuted,
            opacity: 0.1 
          }}
        >
          {t.skills.title}
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {t.skills.items.map((skill, idx) => (
          <FadeIn
            key={idx}
            delay={idx * 0.1}
            className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-8 sm:py-10 md:py-12 border-b last:border-b-0 transition-colors duration-300"
            style={{ borderBottomColor: theme.colors.border }}
          >
            <div 
              className="font-black text-[clamp(3rem,10vw,140px)] leading-none md:w-1/3 transition-colors duration-300 group-hover:!text-[var(--hover-color)]"
              style={{ 
                fontFamily: theme.fonts.display,
                color: theme.colors.textMuted,
                '--hover-color': theme.colors.accent 
              } as React.CSSProperties}
            >
              {skill.num}
            </div>
            <div className="flex flex-col gap-2 md:w-2/3">
              <h3 
                className="font-medium uppercase tracking-wide text-[clamp(1rem,2.2vw,2.1rem)] transition-colors duration-300 group-hover:!text-[var(--hover-color)]"
                style={{ 
                  color: theme.colors.text,
                  '--hover-color': theme.colors.accent 
                } as React.CSSProperties}
              >
                {skill.title}
              </h3>
              <p 
                className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-80"
                style={{ color: theme.colors.textSecondary }}
              >
                {skill.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* All-time Skills Badges */}
      <div className="max-w-5xl mx-auto mt-20 pt-16 border-t" style={{ borderColor: theme.colors.border }}>
        <FadeIn delay={0.2} y={30}>
          <h3 
            className="text-lg md:text-xl font-bold uppercase tracking-widest mb-8 text-center"
            style={{ color: theme.colors.text }}
          >
            All-time Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {t.skills.allTimeSkills?.map((skillName, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  backgroundColor: theme.colors.bgSecondary,
                  borderColor: theme.colors.border,
                  color: theme.colors.textSecondary,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.colors.text;
                  e.currentTarget.style.borderColor = theme.colors.accent;
                  e.currentTarget.style.boxShadow = `0 0 15px ${theme.colors.accent}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme.colors.textSecondary;
                  e.currentTarget.style.borderColor = theme.colors.border;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {skillName}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
