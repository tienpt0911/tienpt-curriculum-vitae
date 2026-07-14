import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const CVDocument: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Automatically print on load
    setTimeout(() => {
      window.print();
    }, 500);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-12 bg-white text-black min-h-screen" style={{ fontFamily: 'serif' }}>
      <header className="border-b-2 border-black pb-4 mb-8">
        <h1 className="text-5xl font-bold mb-2">Phùng Thanh Tiến</h1>
        <h2 className="text-2xl text-gray-700">Senior QC Engineer</h2>
        
        <div className="mt-4 text-sm flex flex-wrap gap-x-4 gap-y-1 font-mono text-gray-600">
          <span>📱 0945 83 88 89</span>
          <span>✉️ tienpt0911@gmail.com</span>
          <span>📍 Duy Tan, Cau Giay, Hanoi</span>
          <span>🌐 github.com/tienpt0911</span>
          <span>💼 linkedin.com/in/phùng-thanh-tiến-b6698292</span>
        </div>

        <div className="mt-4 text-sm flex gap-6 font-semibold">
          <span>13+ {t.about.stats.years}</span>
          <span>100+ {t.about.stats.devices}</span>
          <span>5+ {t.about.stats.domains}</span>
        </div>
      </header>

      <section className="mb-8">
        <h3 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">{t.about.title}</h3>
        <p className="text-justify leading-relaxed">
          {t.about.desc}
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">{t.skills.title}</h3>
        
        <div className="mb-4">
          <p className="leading-relaxed"><strong>Core:</strong> {t.skills.allTimeSkills.join(', ')}</p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {t.skills.items.map((item, i) => (
            <div key={i}>
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold border-b border-gray-300 pb-2 mb-4">{t.projects.title}</h3>
        {t.projects.items.map((proj, i) => (
          <div key={i} className="mb-6">
            <h4 className="text-xl font-bold">{proj.title}</h4>
            <p className="text-gray-700 font-medium italic mb-2">{proj.role}</p>
            <ul className="list-disc pl-5 text-sm mb-2">
              {proj.responsibilities.map((ach, j) => (
                <li key={j}>{ach}</li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 font-mono mt-2">{t.projects.labels.tools}: {proj.tools}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
