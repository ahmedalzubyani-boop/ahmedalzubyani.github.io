import { Project, ExpertiseItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_engineering_products_1793560050701.jpg';
export const LMS_IMAGE = '/src/assets/images/project_lms_professor_1793560050840.jpg';
export const DREAM_IMAGE = '/src/assets/images/project_dream_ai_1793560052391.jpg';
export const BOQ_IMAGE = '/src/assets/images/project_survey_boq_1793560052150.jpg';

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'product-engineering',
    number: '01',
    icon: '◆',
    titleEn: 'PRODUCT ENGINEERING',
    titleAr: 'هندسة المنتجات الرقمية',
    descEn: 'From concept to production-ready architecture. High-performance mobile apps, web systems, and resilient cloud backends built with uncompromising precision.',
    descAr: 'من الفكرة حتى الإطلاق التشغيلي الكامل. تطبيقات جوال فائقة الأداء وأنظمة سحابية متينة تم تطويرها بأعلى معايير الدقة الهندسية.',
    capabilitiesEn: [
      'Native & Cross-Platform Mobile Apps (iOS & Android)',
      'High-Concurrency Microservices & Cloud Infrastructure',
      'Telemetry, Real-time Analytics & Performance Profiling'
    ],
    capabilitiesAr: [
      'تطبيقات الهواتف الذكية (iOS و Android)',
      'بنى تحتية سحابية متقدمة وقابلة للتوسع الفوري',
      'أنظمة التتبع الفوري وتحليلات الأداء المتقدمة'
    ]
  },
  {
    id: 'rd-systems',
    number: '02',
    icon: '⚙',
    titleEn: 'RESEARCH & DEVELOPMENT',
    titleAr: 'البحث والتطوير التجريبي',
    descEn: 'R&D-driven technical design for complex algorithms, artificial intelligence, automated reasoning models, stress testing, and rigorous verification.',
    descAr: 'تطوير قائم على البحث والتطوير الهندسي للخوارزميات المعقدة، والذكاء الاصطناعي، وتحليل البيانات الدقيقة، واختبارات الجهد.',
    capabilitiesEn: [
      'Applied Generative AI & Natural Language Reasoning',
      'Predictive Modeling & Statistical Simulators',
      'Rigorous Edge-Case Validation & Automated Testing'
    ],
    capabilitiesAr: [
      'حلول الذكاء الاصطناعي التوليدي ومعالجة اللغة الطبيعية',
      'النماذج التنبؤية والمحاكاة الإحصائية الذكية',
      'اختبارات المتانة البرمجية والتحقق الآلي'
    ]
  },
  {
    id: 'manufacturing-consulting',
    number: '03',
    icon: '◧',
    titleEn: 'CIVIL & SURVEY CONSULTING',
    titleAr: 'الاستشارات المساحية وحساب الكميات',
    descEn: 'Scaling from field surveying to comprehensive Bill of Quantities (BOQ). Cut-and-fill excavation modeling, material estimates, and regulatory structural alignment.',
    descAr: 'تحويل القرارات والرفوعات المساحية إلى جداول كميات (BOQ) تفصيلية. حسابات الحفر والردم والخرسانات والمطابقة الإنشائية المعتمدة.',
    capabilitiesEn: [
      'Cadastral Survey to Detailed BOQ Extraction',
      'Cut & Fill Earthwork Volumetric Calculations (1,200+ m³)',
      'Structural Reinforced Concrete & Rebar Estimation'
    ],
    capabilitiesAr: [
      'تحويل القرار المساحي إلى جدول كميات تفصيلي',
      'حساب حجوم أعمال الحفر والردم بدقة عالية (1200+ م³)',
      'حصر كميات الخرسانات العادية والمسلحة ونسب حديد التسليح'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'professor-app',
    number: '01',
    titleEn: 'Professor App | تطبيق البروفسور',
    titleAr: 'تطبيق البروفسور | Professor App',
    subtitleEn: 'Smart Learning Ecosystem & Real-time LMS',
    subtitleAr: 'منظومة التعلم الذكي وإدارة الفصول التعليمية',
    categoryEn: 'Education · LMS · Analytics',
    categoryAr: 'تعليم · نظام إدارة التعلم · تحليلات',
    tags: ['LMS', 'Analytics', 'Class Tracking', 'Mobile App'],
    descriptionEn: 'Intelligent learning and classroom management platform. Designed for cohort-level progress tracking with 24 active students per section, automated attendance telemetry, interactive diagnostic testing, and visual learning curve analytics.',
    descriptionAr: 'منصة تعليمية متطورة لإدارة الفصول ومتابعة مستويات الطلاب. تدعم فصولاً مخصصة مع تتبع لحظي لـ 24 طالباً لكل شعبة، وتحليلات الحضور التلقائية، والاختبارات التفاعلية، ورسوم بيانية لمنحنيات التحصيل الأكاديمي.',
    image: LMS_IMAGE,
    stats: [
      { labelEn: 'Active Cohort', labelAr: 'الشعبة النشطة', value: '24 Students' },
      { labelEn: 'Attendance Accuracy', labelAr: 'دقة تتبع الحضور', value: '99.4%' },
      { labelEn: 'Diagnostic Modules', labelAr: 'وحدات التقييم', value: '18 Modules' }
    ],
    deliverablesEn: [
      'Student portal with real-time assignment submissions',
      'Instructor analytics dashboard with anomaly detection',
      'Automated parent reports & performance alerts'
    ],
    deliverablesAr: [
      'بوابة الطالب مع تسليم الواجبات والاختبارات الفورية',
      'لوحة تحليلات المعلم مع رصد التراجع الأكاديمي آلياً',
      'تقارير دورية لأولياء الأمور وتنبيهات فورية'
    ],
    activeToolTab: 'lms'
  },
  {
    id: 'dream-interpretation',
    number: '02',
    titleEn: 'Dream Interpretation | تطبيق تعبير الرؤيا',
    titleAr: 'تطبيق تعبير الرؤيا | Dream Interpretation',
    subtitleEn: 'AI-Powered Dream Analysis & Cultural Symbolic Taxonomy',
    subtitleAr: 'تحليل الرؤى بالذكاء الاصطناعي مع معجم الرموز والدلالات',
    categoryEn: 'AI · Journal · Psychological Insights',
    categoryAr: 'ذكاء اصطناعي · سجل اليوميات · دلالات رمزية',
    tags: ['AI Engine', 'NLP', 'Symbolic Dictionary', 'Journal'],
    descriptionEn: 'Deep cognitive and symbolic analysis engine for dreams and archetypes. Bridges classical cultural hermeneutics with modern natural language models to extract motifs, themes, and personalized introspective journals.',
    descriptionAr: 'محرك تحليل معرفي ورمزي للرؤى والأحلام. يجمع بين أصول التأويل التراثية ونماذج الذكاء الاصطناعي لفهم الرموز، واستخراج الدلالات الإيجابية، وحفظ سجل يوميات تفاعلي مشفر وخاص للمستخدم.',
    image: DREAM_IMAGE,
    stats: [
      { labelEn: 'Symbol Taxonomy', labelAr: 'معجم الرموز المفهرسة', value: '3,800+ Symbols' },
      { labelEn: 'AI Sentiment Accuracy', labelAr: 'دقة التحليل الدلالي', value: '96.2%' },
      { labelEn: 'Journal Entries', labelAr: 'سجلات محفوظة', value: 'End-to-End Encrypted' }
    ],
    deliverablesEn: [
      'Bilingual NLP pipeline for Arabic & English dream narratives',
      'Symbolic motif index with cross-referenced interpretations',
      'Private encrypted personal journal with trend tracking'
    ],
    deliverablesAr: [
      'معالجة لغوية متقدمة للنصوص باللغتين العربية والإنجليزية',
      'معجم تفاعلي شامل لرموز الماء، الطيران، الحلي، والأماكن',
      'سجل يوميات مشفر مع متابعة تكرار الرموز والأنماط'
    ],
    activeToolTab: 'dream'
  },
  {
    id: 'survey-to-boq',
    number: '03',
    titleEn: 'Survey to BOQ | من القرار المساحي إلى جدول الكميات',
    titleAr: 'من القرار المساحي إلى جدول الكميات | Survey to BOQ',
    subtitleEn: 'Cadastral Land Survey to Automated Bill of Quantities',
    subtitleAr: 'تحويل الرفوعات والقرارات المساحية إلى جداول كميات تنفيذية',
    categoryEn: 'Engineering · Survey · Civil BOQ',
    categoryAr: 'هندسة مدنية · رفع مساحي · جداول كميات',
    tags: ['Civil Engineering', 'Cadastral Survey', 'BOQ Engine', 'Quantity Surveying'],
    descriptionEn: 'Automated civil engineering pipeline translating official cadastral survey documents into comprehensive, tender-ready Bills of Quantities. Performs precise volumetric excavation calculations (e.g. 1,200 m³), concrete volumes, and rebar tonnage.',
    descriptionAr: 'نظام هندسي متكامل يحول بيانات الرفع والقرار المساحي إلى جدول كميات هندسي معتمد وجاهز للمناقصات. يقوم بحسابات الحفر والردم الحجمية (مثل 1200 م³)، وكميات الخرسانة المسلحة والعادية، ونسب حديد التسليح.',
    image: BOQ_IMAGE,
    stats: [
      { labelEn: 'Earthwork Benchmark', labelAr: 'نموذج أعمال الحفر', value: '1,200 m³' },
      { labelEn: 'BOQ Extraction Time', labelAr: 'زمن استخراج الجدول', value: '< 2 Minutes' },
      { labelEn: 'Specification Standards', labelAr: 'كود البناء والمعايير', value: 'SBC & ASTM' }
    ],
    deliverablesEn: [
      'Automated parcel coordinate parsing from municipal cadastral deeds',
      'Site cut/fill 3D mesh volume calculations & leveling reports',
      'Itemized Bill of Quantities spreadsheet formatted for civil contractors'
    ],
    deliverablesAr: [
      'استخراج إحداثيات وأبعاد قطع الأراضي من القرارات المساحية آلياً',
      'حساب فروق المناسيب ومكعبات الحفر والردم بدقة رقمية',
      'إصدار جدول كميات مفصل وشامل لجميع بنود العظم والتشطيب'
    ],
    activeToolTab: 'boq'
  }
];

export const AGENCY_CONTACT = {
  name: 'Ahmed',
  agencyName: 'AHMED — Engineering Ambitious Products',
  email: 'Ahmed@alzubyani.com',
  phone: '0556533006',
  intlPhone: '+966556533006',
  whatsappUrl: 'https://wa.me/966556533006',
  locationEn: 'Sakaka, Al Jawf, Saudi Arabia',
  locationAr: 'سكاكا، الجوف، المملكة العربية السعودية',
  coverageEn: 'Worldwide Projects | UAE · KSA · GLOBAL',
  coverageAr: 'مشاريع عالمية | المملكة العربية السعودية · الإمارات · دولياً'
};
