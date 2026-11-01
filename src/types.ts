export type Language = 'en' | 'ar';

export interface Project {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  categoryEn: string;
  categoryAr: string;
  tags: string[];
  descriptionEn: string;
  descriptionAr: string;
  image: string;
  stats: { labelEn: string; labelAr: string; value: string }[];
  deliverablesEn: string[];
  deliverablesAr: string[];
  activeToolTab?: 'boq' | 'dream' | 'lms';
}

export interface ExpertiseItem {
  id: string;
  number: string;
  icon: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  capabilitiesEn: string[];
  capabilitiesAr: string[];
}
