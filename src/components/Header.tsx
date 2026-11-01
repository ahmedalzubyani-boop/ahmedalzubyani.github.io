import React from 'react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenContact,
}) => {
  const isAr = lang === 'ar';

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 lg:px-8 h-20">
        {/* Zone 1: Brand Wordmark (Single text element in Cinzel display face) */}
        <a
          href="#"
          className="font-cinzel text-xl lg:text-2xl font-bold tracking-[0.2em] gold-gradient-text whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          ▲ AHMED
        </a>

        {/* Zone 2: 4-5 Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider text-[#dcdcdc]">
          <a
            href="#expertise"
            className="hover:text-[#f3e5ab] transition-colors whitespace-nowrap shrink-0 uppercase"
          >
            {isAr ? 'مجالات الخبرة' : 'EXPERTISE'}
          </a>
          <a
            href="#work"
            className="hover:text-[#f3e5ab] transition-colors whitespace-nowrap shrink-0 uppercase"
          >
            {isAr ? 'الأعمال المختارة' : 'SELECTED WORK'}
          </a>
          <a
            href="#tools"
            className="hover:text-[#f3e5ab] transition-colors whitespace-nowrap shrink-0 uppercase text-[#d4af37]"
          >
            {isAr ? 'المختبر التفاعلي' : 'LIVE ENGINES'}
          </a>
          <a
            href="#contact"
            className="hover:text-[#f3e5ab] transition-colors whitespace-nowrap shrink-0 uppercase"
          >
            {isAr ? 'تواصل معنا' : 'CONTACT'}
          </a>
        </nav>

        {/* Zone 3: 1 Primary CTA Button + Language Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleLang}
            className="px-3 py-1.5 text-xs font-medium text-[#f3e5ab] border border-[rgba(212,175,55,0.3)] rounded-md hover:bg-[rgba(212,175,55,0.1)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title={isAr ? 'Switch to English' : 'التحويل للغة العربية'}
            aria-label="Toggle language"
          >
            {isAr ? 'EN' : 'عربي'}
          </button>

          <a
            href="https://wa.me/966556533006"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn px-4 lg:px-5 py-2.5 rounded-lg text-xs tracking-wider whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 shadow-sm"
          >
            <span>{isAr ? 'ابدأ مشروعك' : 'GET IN TOUCH'}</span>
            <span aria-hidden="true" className="text-sm">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
};
