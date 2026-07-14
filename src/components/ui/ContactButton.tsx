import React from 'react';
import { cn } from '../../lib/utils';

interface ContactButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        'rounded-full text-white font-medium uppercase tracking-widest',
        'px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4',
        'text-xs sm:text-sm md:text-base',
        'outline outline-2 outline-white outline-offset-[-3px]',
        'transition-transform hover:scale-105 active:scale-95',
        className
      )}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
      }}
      {...props}
    >
      Contact Me
    </button>
  );
};
