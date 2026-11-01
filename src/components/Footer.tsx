import React from 'react';
import { Language } from '../types';
import { AGENCY_CONTACT } from '../data/content';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#222] bg-[#070707] py-14 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Editorial Notice */}
        <div className="text-center md:text-left space-y-2">
          <div className="font-cinzel text-xl font-bold tracking-widest gold-gradient-text inline-block">
            ▲ AHMED
          </div>
          <p className="text-xs text-[#777] max-w-md">
            {isAr
              ? 'وكالة هندسية متخصصة في تطوير المنتجات الطموحة، تطبيقات الجوال، أنظمة الذكاء الاصطناعي، والحلول المساحية والهندسية.'
              : 'Engineering agency dedicated to ambitious products, mobile applications, applied intelligence, and precision civil surveying.'}
          </p>
          <div className="text-[11px] text-[#555] font-mono">
            {AGENCY_CONTACT.locationEn} · {AGENCY_CONTACT.phone}
          </div>
        </div>

        {/* Quick Nav & Back to Top */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-6 text-xs text-[#aaa]">
            <a href="#expertise" className="hover:text-[#f3e5ab] transition-colors">
              {isAr ? 'مجالات العمل' : 'Expertise'}
            </a>
            <a href="#work" className="hover:text-[#f3e5ab] transition-colors">
              {isAr ? 'الأعمال' : 'Projects'}
            </a>
            <a href="#tools" className="hover:text-[#f3e5ab] transition-colors">
              {isAr ? 'المختبر' : 'Engines'}
            </a>
            <a href="#contact" className="hover:text-[#f3e5ab] transition-colors">
              {isAr ? 'تواصل' : 'Contact'}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-[#666]">
              {AGENCY_CONTACT.email}
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="px-3 py-1.5 rounded bg-[#151515] hover:bg-[#202020] text-[#f3e5ab] text-xs border border-[#333] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>↑</span>
              <span>{isAr ? 'للأعلى' : 'Top'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#191919] text-center text-xs text-[#555]">
        <p>
          © 2026 AHMED — Engineering Agency for Ambitious Products. Sakaka, Al Jawf, Saudi Arabia
        </p>
        <p className="mt-1 text-[11px] text-[#444]">
          Ahmed@alzubyani.com · 0556533006
        </p>
      </div>
    </footer>
  );
};
