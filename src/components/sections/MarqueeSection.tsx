import React, { useEffect, useState } from 'react';

const images = [
  // Portfolio images
  "/images/portfolio/dinoland.jpg",
  "/images/portfolio/dinoland@2x.jpg",
  "/images/portfolio/minion.jpg",
  "/images/portfolio/minion@2x.jpg",
  "/images/portfolio/topica.jpg",
  "/images/portfolio/topica@2x.jpg",
  "/images/portfolio/gallery/g-dinoland.jpg",
  "/images/portfolio/gallery/g-minion.jpg",
  "/images/portfolio/gallery/g-topica.jpg",
  // Other images
  "/images/wheel-1000.jpg",
  "/images/wheel-2000.jpg",
  "/images/abc.jpg",
  "/images/count-bg.jpg",
  "/images/contact-bg.jpg",
  "/images/testimonial-bg.jpg",
];

const row1Images = [
  ...images.slice(0, 8),
  ...images.slice(0, 8),
  ...images.slice(0, 8),
];
const row2Images = [
  ...images.slice(8),
  ...images.slice(8),
  ...images.slice(8),
];

export const MarqueeSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('marquee-section');
      if (section) {
        const sectionTop = section.offsetTop;
        const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        setOffset(currentOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="marquee-section" className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="flex flex-col gap-3">
        <div 
          className="flex gap-3 will-change-transform"
          style={{ transform: `translate3d(${offset - 200}px, 0, 0)` }}
        >
          {row1Images.map((src, i) => (
            <img 
              key={`r1-${i}`}
              src={src}
              loading="lazy"
              alt="Project preview"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
            />
          ))}
        </div>
        
        <div 
          className="flex gap-3 will-change-transform"
          style={{ transform: `translate3d(${-(offset - 200)}px, 0, 0)` }}
        >
          {row2Images.map((src, i) => (
            <img 
              key={`r2-${i}`}
              src={src}
              loading="lazy"
              alt="Project preview"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
