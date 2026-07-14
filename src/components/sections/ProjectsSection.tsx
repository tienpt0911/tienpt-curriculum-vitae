import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

type ProjectItem = {
  num: string;
  label: string;
  title: string;
  role: string;
  responsibilities: string[];
  tools: string;
};

const ProjectCard = ({ 
  project, 
  index, 
  totalCards, 
  progress,
  labels 
}: { 
  project: ProjectItem; 
  index: number; 
  totalCards: number; 
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  labels: { role: string; responsibilities: string; tools: string; };
}) => {
  const { theme } = useTheme();
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index * 0.33, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32 min-h-[70vh] md:h-[85vh] flex items-start justify-center mb-12 md:mb-0">
      <motion.div
        className="relative w-full max-w-6xl rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border p-6 sm:p-10 md:p-14 flex flex-col md:flex-row gap-8 md:gap-16 shadow-2xl origin-top"
        style={{ 
          scale, 
          top: `calc(5% + ${index * 28}px)`,
          backgroundColor: theme.colors.cardBg,
          borderColor: theme.colors.cardBorder,
        } as any} // Cast as any because of motion style prop merge issue
      >
        {/* Left/Top Side */}
        <div className="w-full md:w-[45%] flex flex-col justify-between relative z-10">
          <div className="flex flex-col gap-4 md:gap-6">
            <span 
              className="font-black text-[clamp(4rem,10vw,120px)] leading-none -ml-1 md:-ml-2 select-none tracking-tighter"
              style={{ color: theme.colors.textMuted, opacity: 0.15, fontFamily: theme.fonts.display }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-2">
              <span 
                className="uppercase tracking-[0.2em] text-xs sm:text-sm font-medium"
                style={{ color: theme.colors.textSecondary }}
              >
                {project.label}
              </span>
              <h3 
                className="font-bold uppercase text-[clamp(1.8rem,4vw,3.5rem)] leading-tight mb-2 md:mb-4"
                style={{ color: theme.colors.text, fontFamily: theme.fonts.display }}
              >
                {project.title}
              </h3>
            </div>
          </div>
          
          <div 
            className="mt-8 md:mt-0 border rounded-2xl p-5 md:p-6 backdrop-blur-sm"
            style={{ 
              backgroundColor: theme.colors.bgTertiary,
              borderColor: theme.colors.border 
            }}
          >
            <h4 
              className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2"
              style={{ color: theme.colors.textSecondary }}
            >
              {labels.role}
            </h4>
            <p 
              className="text-base sm:text-lg md:text-xl font-medium"
              style={{ color: theme.colors.accent }}
            >
              {project.role}
            </p>
          </div>
        </div>

        {/* Right/Bottom Side */}
        <div className="w-full md:w-[55%] flex flex-col justify-center gap-8 md:gap-10 relative z-10">
          <div className="flex flex-col gap-5 md:gap-6">
            <h4 
              className="text-xs sm:text-sm uppercase tracking-widest flex items-center gap-4 before:content-[''] before:h-[1px] before:flex-1"
              style={{ color: theme.colors.textSecondary, '--tw-before-bg': theme.colors.border } as any}
            >
              {labels.responsibilities}
            </h4>
            <ul className="flex flex-col gap-4">
              {project.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span 
                    className="mt-1 text-[10px] transition-colors"
                    style={{ color: theme.colors.accent }}
                  >
                    ◈
                  </span>
                  <p 
                    className="text-sm md:text-base leading-relaxed font-light transition-colors"
                    style={{ color: theme.colors.text }}
                  >
                    {resp}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 md:gap-5 mt-2">
            <h4 
              className="text-xs sm:text-sm uppercase tracking-widest flex items-center gap-4 before:content-[''] before:h-[1px] before:flex-1"
              style={{ color: theme.colors.textSecondary, '--tw-before-bg': theme.colors.border } as any}
            >
              {labels.tools}
            </h4>
            <p 
              className="text-sm md:text-base leading-relaxed font-medium p-4 rounded-xl border"
              style={{ 
                color: theme.colors.text,
                backgroundColor: theme.colors.bgTertiary,
                borderColor: theme.colors.border
              }}
            >
              {project.tools}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section 
      id="projects" 
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-40 pt-20 sm:pt-24 pb-32"
      style={{ backgroundColor: theme.colors.bgSecondary }}
    >
      <FadeIn delay={0} y={40}>
        <h2 
          className="font-black uppercase text-center text-[clamp(3rem,10vw,140px)] leading-[0.85] tracking-tighter mb-10 sm:mb-16"
          style={{ 
            fontFamily: theme.fonts.display,
            color: theme.colors.textMuted,
            opacity: 0.1 
          }}
        >
          {t.projects.title}
        </h2>
      </FadeIn>

      <div ref={containerRef} className="px-5 sm:px-8 md:px-10 relative">
        <style>{`
          #projects h4::before {
            background-color: var(--tw-before-bg);
          }
        `}</style>
        {t.projects.items.map((project, i) => (
          <ProjectCard
            key={i}
            index={i}
            project={project}
            totalCards={t.projects.items.length}
            progress={scrollYProgress}
            labels={t.projects.labels}
          />
        ))}
      </div>
    </section>
  );
};
