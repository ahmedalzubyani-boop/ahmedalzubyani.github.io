import React from 'react';
import { Project, Language } from '../types';
import { PROJECTS_DATA } from '../data/content';

interface ProjectsProps {
  lang: Language;
  onSelectProject: (project: Project) => void;
  onLaunchTool: (toolId: 'boq' | 'dream' | 'lms') => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  lang,
  onSelectProject,
  onLaunchTool,
}) => {
  const isAr = lang === 'ar';

  return (
    <section id="work" className="py-20 lg:py-28 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase">
          {isAr ? 'سابقة الأعمال والمنتجات' : 'PORTFOLIO & CASE STUDIES'}
        </span>
        <h2 className="font-cinzel text-3xl lg:text-5xl font-bold mt-3 text-white tracking-wide">
          {isAr ? 'المشاريع المختارة' : 'SELECTED PROJECTS'}
        </h2>
        <p className="mt-4 text-sm text-[#888] leading-relaxed">
          {isAr
            ? 'نماذج واقعية لحلول رقمية وهندسية تم بناؤها من الصفر — من منصات التعليم الذكية إلى خوارزميات الذكاء الاصطناعي وحسابات الكميات الإنشائية.'
            : 'Production systems built from the ground up — from smart educational platforms and generative symbol intelligence to precision civil engineering estimations.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="bg-[#151515] rounded-xl overflow-hidden border border-[rgba(212,175,55,0.25)] hover:border-[rgba(212,175,55,0.55)] transition-all duration-300 flex flex-col group shadow-lg"
          >
            {/* Project Image Banner with Scrim */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111]">
              <img
                src={project.image}
                alt={project.titleEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/30 to-transparent" />

              {/* Number Badge & Category */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <span className="bg-[#0a0a0a]/90 backdrop-blur-md px-3 py-1 rounded border border-[#333] text-[#f3e5ab]">
                  PROJECT {project.number}
                </span>
                <span className="bg-[#0a0a0a]/90 backdrop-blur-md px-2.5 py-1 rounded text-[#d4af37] border border-[rgba(212,175,55,0.3)]">
                  {isAr ? project.categoryAr.split('·')[0].trim() : project.categoryEn.split('·')[0].trim()}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Title */}
                <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors leading-snug">
                  {isAr ? project.titleAr : project.titleEn}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-medium text-[#d4af37] mt-1">
                  {isAr ? project.subtitleAr : project.subtitleEn}
                </p>

                {/* Description */}
                <p className="text-xs text-[#8c8c8c] mt-3 leading-relaxed line-clamp-3">
                  {isAr ? project.descriptionAr : project.descriptionEn}
                </p>

                {/* Clean unboxed metadata tags with separators */}
                <div className="mt-4 pt-3 border-t border-[#222] flex items-center flex-wrap gap-2 text-[11px] text-[#aaa]">
                  <span>{isAr ? project.categoryAr : project.categoryEn}</span>
                </div>

                {/* Stats highlight strip */}
                <div className="mt-4 grid grid-cols-2 gap-2 bg-[#0d0d0d] p-3 rounded-lg border border-[#222]">
                  <div>
                    <div className="text-[10px] text-[#666] uppercase">
                      {isAr ? project.stats[0].labelAr : project.stats[0].labelEn}
                    </div>
                    <div className="text-xs font-semibold text-[#f3e5ab] mt-0.5 tabular-nums">
                      {project.stats[0].value}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#666] uppercase">
                      {isAr ? project.stats[1].labelAr : project.stats[1].labelEn}
                    </div>
                    <div className="text-xs font-semibold text-[#f3e5ab] mt-0.5 tabular-nums">
                      {project.stats[1].value}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#222] flex flex-col gap-2">
                {project.activeToolTab && (
                  <button
                    onClick={() => onLaunchTool(project.activeToolTab!)}
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold bg-[#202020] hover:bg-[#282828] text-[#f3e5ab] border border-[rgba(212,175,55,0.3)] hover:border-[#d4af37] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>⚡</span>
                    <span>
                      {isAr
                        ? `تجربة محرك ${project.titleAr.split('|')[0].trim()} الحي`
                        : `Launch Live ${project.titleEn.split('|')[0].trim()} Engine`}
                    </span>
                  </button>
                )}

                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2 px-3 text-xs font-medium text-[#999] hover:text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>{isAr ? 'عرض المواصفات الهندسية' : 'View Engineering Specs'}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
