import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { cn } from '../../lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

// A single animated character component that safely uses hooks at the top level
const AnimatedChar = ({ char, scrollYProgress, rangeStart, rangeEnd }: {
  char: string;
  scrollYProgress: MotionValue<number>;
  rangeStart: number;
  rangeEnd: number;
}) => {
  const opacity = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const elementRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Pre-compute character data
  const words = text.split(' ');
  let charIndex = 0;
  const totalChars = text.replace(/ /g, '').length;

  const wordElements = words.map((word, wordIdx) => {
    const chars = word.split('').map((char, charIdx) => {
      const start = charIndex / (totalChars * 1.2);
      const end = start + 0.08;
      charIndex++;

      return (
        <AnimatedChar
          key={`${wordIdx}-${charIdx}`}
          char={char}
          scrollYProgress={scrollYProgress}
          rangeStart={start}
          rangeEnd={end}
        />
      );
    });

    return (
      <span key={wordIdx} className="mr-1 sm:mr-1.5 md:mr-2 inline-flex">
        {chars}
      </span>
    );
  });

  return (
    <p ref={elementRef} className={cn('flex flex-wrap justify-center', className)}>
      {wordElements}
    </p>
  );
};
