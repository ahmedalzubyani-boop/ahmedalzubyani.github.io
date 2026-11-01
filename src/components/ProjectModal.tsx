import React, { useEffect } from 'react';
import { Project, Language } from '../types';

interface ProjectModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
  onLaunchTool: (toolId: 'boq' | 'dream' | 'lms') => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  onClose,
  onLaunchTool,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const isAr = lang === 'ar';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#141414] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[rgba(212,175,55,0.35)] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Banner Image */}
        <div className="relative aspect-[16/9] w-full bg-[#111] overflow-hidden">
          <img
            src={project.image}
            alt={project.titleEn}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white hover:text-[#f3e5ab] border border-[#333] flex items-center justify-center transition-colors cursor-pointer"
          >
            ✕
          </button>

          {/* Header Title inside banner */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono text-[#d4af37] tracking-widest uppercase block mb-1">
              PROJECT {project.number} · {isAr ? project.categoryAr : project.categoryEn}
            </span>
            <h2 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
              {isAr ? project.titleAr : project.titleEn}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 lg:p-8 space-y-6">
          {/* Subtitle */}
          <div>
            <h4 className="text-xs font-semibold text-[#888] uppercase tracking-wider mb-1">
              {isAr ? 'نظرة عامة على المشروع' : 'EXECUTIVE OVERVIEW'}
            </h4>
            <p className="text-sm text-[#e0e0e0] leading-relaxed">
              {isAr ? project.descriptionAr : project.descriptionEn}
            </p>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 bg-[#0d0d0d] p-4 rounded-xl border border-[#222]">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="text-[10px] text-[#777] uppercase">
                  {isAr ? stat.labelAr : stat.labelEn}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#f3e5ab] mt-0.5 tabular-nums">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h4 className="text-xs font-semibold text-[#888] uppercase tracking-wider mb-3">
              {isAr ? 'المخرجات الهندسية والبرمجية المنجزة' : 'DELIVERABLES & TECHNICAL SPECIFICATIONS'}
            </h4>
            <ul className="space-y-2.5">
              {(isAr ? project.deliverablesAr : project.deliverablesEn).map((item, i) => (
                <li key={i} className="text-xs sm:text-sm text-[#cfcfcf] flex items-start gap-2.5">
                  <span className="text-[#d4af37] mt-0.5" aria-hidden="true">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between gap-3">
            {project.activeToolTab && (
              <button
                onClick={() => {
                  onClose();
                  onLaunchTool(project.activeToolTab!);
                }}
                className="w-full sm:w-auto gold-btn px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>⚡</span>
                <span>{isAr ? 'فتح المحرك التفاعلي الحي' : 'Launch Interactive Engine'}</span>
              </button>
            )}

            <a
              href={`https://wa.me/966556533006?text=${encodeURIComponent(
                isAr
                  ? `مرحباً مهندس أحمد، أود الاستفسار عن مشروع ${project.titleAr.split('|')[0].trim()}`
                  : `Hello Ahmed, I would like to inquire about ${project.titleEn.split('|')[0].trim()}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto gold-btn-outline px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider inline-flex items-center justify-center gap-1.5"
            >
              <span>{isAr ? 'استفسار عبر واتساب' : 'Inquire on WhatsApp'}</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
