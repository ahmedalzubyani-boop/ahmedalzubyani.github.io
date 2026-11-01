import React from 'react';
import { Language } from '../types';
import { EXPERTISE_DATA } from '../data/content';

interface ExpertiseProps {
  lang: Language;
}

export const Expertise: React.FC<ExpertiseProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="expertise" className="py-20 lg:py-28 px-6 lg:px-8 border-t border-[#222] bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase">
            {isAr ? 'مجالات العمل والتطوير' : 'CORE DISCIPLINES'}
          </span>
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold mt-3 text-white tracking-wide">
            {isAr ? 'الخبرات الهندسية الشاملة' : 'SPECIALIZED EXPERTISE'}
          </h2>
          <p className="mt-4 text-sm text-[#888] leading-relaxed">
            {isAr
              ? 'نهج هندسي متكامل يجمع بين تطوير البرمجيات المعقدة، وأبحاث الذكاء الاصطناعي، والحلول الإنشائية والمساحية الدقيقة.'
              : 'An integrated engineering methodology uniting rigorous software craft, applied artificial intelligence, and precise civil quantification.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERTISE_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-[#151515] rounded-xl p-8 border border-[rgba(212,175,55,0.22)] hover:border-[rgba(212,175,55,0.45)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with symbol and editorial number */}
                <div className="flex items-center justify-between text-xs font-mono text-[#d4af37] mb-6 pb-4 border-b border-[#222]">
                  <span className="text-xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="tracking-widest">CHAPTER {item.number}</span>
                </div>

                {/* Title */}
                <h3 className="font-cinzel text-lg font-bold text-[#f3e5ab] tracking-wide mb-3">
                  {isAr ? item.titleAr : item.titleEn}
                </h3>

                {/* Description */}
                <p className="text-xs lg:text-sm text-[#999] leading-relaxed mb-6">
                  {isAr ? item.descAr : item.descEn}
                </p>
              </div>

              {/* Capabilities checklist */}
              <div className="pt-4 border-t border-[#1e1e1e]">
                <span className="text-[11px] font-semibold text-[#888] tracking-wider uppercase block mb-3">
                  {isAr ? 'القدرات التنفيذية' : 'KEY CAPABILITIES'}
                </span>
                <ul className="space-y-2.5">
                  {(isAr ? item.capabilitiesAr : item.capabilitiesEn).map((cap, i) => (
                    <li key={i} className="text-xs text-[#cfcfcf] flex items-start gap-2">
                      <span className="text-[#d4af37] mt-0.5" aria-hidden="true">▸</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
