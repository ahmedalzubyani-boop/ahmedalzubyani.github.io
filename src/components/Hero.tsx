import React from 'react';
import { Language } from '../types';
import { HERO_IMAGE } from '../data/content';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background radial gold glow effect */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[140px] opacity-25 bg-[#d4af37]"
        aria-hidden="true"
      />

      <div className="relative text-center max-w-4xl mx-auto">
        {/* Subtle engineering location marker */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium text-[#f3e5ab] bg-[#151515] border border-[rgba(212,175,55,0.25)] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          <span>
            {isAr
              ? 'المدينة المنورة · المملكة العربية السعودية · مشاريع دولية'
              : 'AL MADINAH AL MUNAWARAH · KINGDOM OF SAUDI ARABIA · GLOBAL'}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[0.06em] leading-[1.08] text-white">
          <span className="gold-gradient-text block">
            {isAr ? 'هندسة المنتجات' : 'ENGINEERING'}
          </span>
          <span className="text-white block mt-2">
            {isAr ? 'الطموحة والمبتكرة' : 'AMBITIOUS PRODUCTS'}
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-8 text-base lg:text-lg text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed">
          {isAr
            ? 'نصمم ونهندس حلولاً تقنية وهندسية متقدمة للعلامات الرائدة — نحول الأفكار الطموحة إلى منتجات حقيقية فائقة الدقة وقابلة للتوسع. من القرار المساحي إلى جدول الكميات، ومن الفكرة إلى متجر التطبيقات.'
            : 'We design and engineer cutting-edge solutions for visionary brands — transforming ambitious ideas into real, precise, and scalable products. From survey to BOQ, from idea to App Store.'}
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="gold-btn px-7 py-3.5 rounded-lg text-xs lg:text-sm font-bold tracking-wider uppercase inline-flex items-center gap-2"
          >
            <span>{isAr ? 'استكشف الأعمال' : 'EXPLORE OUR WORK'}</span>
            <span aria-hidden="true">↓</span>
          </a>

          <a
            href="#tools"
            className="gold-btn-outline px-6 py-3.5 rounded-lg text-xs lg:text-sm font-semibold tracking-wider uppercase inline-flex items-center gap-2"
          >
            <span>{isAr ? 'المختبر التفاعلي' : 'TRY LIVE ENGINES'}</span>
            <span aria-hidden="true">⚡</span>
          </a>

          <a
            href="https://wa.me/966556533006"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs lg:text-sm font-medium text-[#c5c5c5] hover:text-[#f3e5ab] px-4 py-3.5 transition-colors underline-offset-4 hover:underline"
          >
            {isAr ? 'مراسلة واتساب مباشرة ↗' : 'WhatsApp Consultation ↗'}
          </a>
        </div>
      </div>

      {/* Hero Visual Asset Showcase */}
      <div className="mt-16 lg:mt-20 relative rounded-2xl overflow-hidden gold-border-glow bg-[#151515]">
        <div className="aspect-[16/9] w-full relative">
          <img
            src={HERO_IMAGE}
            alt="Ahmed Engineering Ambitious Studio Workspace"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay to enhance legibility and mood */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="bg-[#0a0a0a]/85 backdrop-blur-md px-5 py-3.5 rounded-xl border border-[rgba(212,175,55,0.3)] max-w-md">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37] block">
                {isAr ? 'منظومة الهندسة والتطوير' : 'CORE INTEGRATED DISCIPLINES'}
              </span>
              <p className="text-xs text-slate-200 mt-1 leading-snug">
                {isAr
                  ? 'برمجيات متقدمة · ذكاء اصطناعي · مساحة وحساب كميات للمشاريع الكبرى'
                  : 'High-performance Mobile · AI Symbolic Reasoning · Civil Survey & BOQ'}
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#f3e5ab] bg-[#0a0a0a]/85 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#333]">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span>SAUDI BUILDING CODE & APP STORE READY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Proof & KPI Strip */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#121212] rounded-xl border border-[#222]">
        <div className="text-center md:text-left">
          <div className="font-cinzel text-2xl lg:text-3xl font-bold text-[#f3e5ab] tabular-nums">
            100%
          </div>
          <div className="text-xs text-[#888] mt-1 font-medium">
            {isAr ? 'معايير الدقة الهندسية' : 'Precision Engineering'}
          </div>
        </div>

        <div className="text-center md:text-left">
          <div className="font-cinzel text-2xl lg:text-3xl font-bold text-[#f3e5ab] tabular-nums">
            24+
          </div>
          <div className="text-xs text-[#888] mt-1 font-medium">
            {isAr ? 'طالباً في نظام البروفسور' : 'Active Students Tracking'}
          </div>
        </div>

        <div className="text-center md:text-left">
          <div className="font-cinzel text-2xl lg:text-3xl font-bold text-[#f3e5ab] tabular-nums">
            1,200 m³
          </div>
          <div className="text-xs text-[#888] mt-1 font-medium">
            {isAr ? 'حسابات حفر القرار المساحي' : 'Survey Cut & Fill Volume'}
          </div>
        </div>

        <div className="text-center md:text-left">
          <div className="font-cinzel text-2xl lg:text-3xl font-bold text-[#f3e5ab]">
            KSA · GLOBAL
          </div>
          <div className="text-xs text-[#888] mt-1 font-medium">
            {isAr ? 'المدينة المنورة ونطاق دولي' : 'Madinah & Global Reach'}
          </div>
        </div>
      </div>
    </section>
  );
};
