import React, { useState } from 'react';
import { Language } from '../types';

interface InteractiveSuiteProps {
  lang: Language;
  activeTab: 'boq' | 'dream' | 'lms';
  onTabChange: (tab: 'boq' | 'dream' | 'lms') => void;
}

export const InteractiveSuite: React.FC<InteractiveSuiteProps> = ({
  lang,
  activeTab,
  onTabChange,
}) => {
  const isAr = lang === 'ar';

  // -------------------------------------------------------------
  // Engine 1: Survey to BOQ State
  // -------------------------------------------------------------
  const [plotLength, setPlotLength] = useState<number>(30); // 30m
  const [plotWidth, setPlotWidth] = useState<number>(20); // 20m -> 600m2
  const [excavationDepth, setExcavationDepth] = useState<number>(2.0); // 2m -> 1,200m3
  const [soilType, setSoilType] = useState<'sandy' | 'rocky' | 'clay'>('sandy');
  const [foundationType, setFoundationType] = useState<'isolated' | 'raft'>('isolated');
  const [copiedBOQ, setCopiedBOQ] = useState(false);

  // Volumetric math
  const landArea = plotLength * plotWidth;
  const rawExcavation = landArea * excavationDepth; // 1,200 m3 benchmark
  const soilSwellFactor = soilType === 'rocky' ? 1.4 : soilType === 'clay' ? 1.3 : 1.2;
  const hauledVolume = Math.round(rawExcavation * soilSwellFactor);

  // Concrete volumes
  const pcBlinding = Math.round(landArea * 0.7 * 0.1); // 10cm blinding
  const rcFootings = foundationType === 'raft' ? Math.round(landArea * 0.55 * 0.6) : Math.round(landArea * 0.35 * 0.5);
  const rebarTonnage = Math.round((rcFootings * 115) / 1000 * 10) / 10; // 115 kg/m3

  // Unit prices in SAR
  const excavationRate = soilType === 'rocky' ? 45 : 28;
  const pcRate = 220;
  const rcRate = 480;
  const rebarRate = 3200;

  const totalCost = (rawExcavation * excavationRate) + (pcBlinding * pcRate) + (rcFootings * rcRate) + (rebarTonnage * rebarRate);

  const handleCopyBOQ = () => {
    const text = `--- BOQ SUMMARY (CADASTRA TO BOQ ENGINE) ---
Plot Area: ${landArea} m² (${plotLength}m x ${plotWidth}m)
1. Bulk Site Excavation: ${rawExcavation} m³ @ ${excavationRate} SAR/m³ = ${(rawExcavation * excavationRate).toLocaleString()} SAR
2. Plain Concrete Blinding (P.C.): ${pcBlinding} m³ @ ${pcRate} SAR/m³ = ${(pcBlinding * pcRate).toLocaleString()} SAR
3. Reinforced Concrete Substructure: ${rcFootings} m³ @ ${rcRate} SAR/m³ = ${(rcFootings * rcRate).toLocaleString()} SAR
4. High-Tensile Steel Rebar: ${rebarTonnage} Tons @ ${rebarRate} SAR/Ton = ${(rebarTonnage * rebarRate).toLocaleString()} SAR
TOTAL SUBSTRUCTURE ESTIMATE: ${totalCost.toLocaleString()} SAR`;
    navigator.clipboard.writeText(text);
    setCopiedBOQ(true);
    setTimeout(() => setCopiedBOQ(false), 2200);
  };

  // -------------------------------------------------------------
  // Engine 2: Dream Interpretation AI Sandbox State
  // -------------------------------------------------------------
  const [selectedDreamPreset, setSelectedDreamPreset] = useState<number>(0);
  const [customDreamText, setCustomDreamText] = useState<string>('');
  const [savedJournal, setSavedJournal] = useState<boolean>(false);

  const dreamPresets = [
    {
      titleEn: 'Flight Above Golden Dunes & Oasis',
      titleAr: 'الطيران فوق الكثبان الذهبية والواحات',
      textEn: 'I was effortlessly soaring over golden desert plains, looking down at an abundant green palm oasis with flowing crystalline streams.',
      textAr: 'رأيت أنني أطير بخفة وانسياب فوق سهول ذهبية، وأنظر لأسفل فأرى واحة نخيل غناء تجري فيها جداول ماء عذبة صافية.',
      symbols: ['Flight / ارتفاع', 'Gold / رفعة وغنى', 'Pure Water / طمأنينة ورزق', 'Palm Oasis / بركة وثبات'],
      interpretationEn: 'Soaring with ease denotes elevated standing, freedom from prevailing constraints, and imminent clarity. Golden earth combined with pure streams heralds noble sustenance and enduring stability in upcoming endeavors.',
      interpretationAr: 'الطيران الميسر يدل على الرفعة وعلو الشأن والتحرر من القيود. واقتران الأرض الذهبية بالماء العذب الصافي بشارة برزق كريم مبارك واستقرار وتوفيق في المشاريع القادمة.'
    },
    {
      titleEn: 'The Golden Key and the Open Gateway',
      titleAr: 'المفتاح الذهبي وبوابة الحصن المفتوحة',
      textEn: 'A dignified elder handed me an intricately engraved golden key, which effortlessly unlocked a massive architectural gate leading to a brightly lit library.',
      textAr: 'أهداني رجل ذو وقار مفتاحاً ذهبياً منقوشاً بعناية، ففتحت به باباً معمارياً ضخماً يفضي إلى صرح معرفي مشرق بالأنوار.',
      symbols: ['Key / فتح وتيسير', 'Elder / حكمة ووقار', 'Gateway / انتقال نوعي', 'Light / استنارة ونجاح'],
      interpretationEn: 'Receiving a key from a figure of wisdom indicates breakthrough authorization, acquisition of specialized mastery, and smooth entrance into significant commercial or scholarly milestones.',
      interpretationAr: 'تسلم المفتاح رمز للتمكين وتيسير العسير وبلوغ المقاصد. والباب المفتوح والصرح المضيء يدل على فتح أبواب العلم أو التجارة وحصول أثر نوعي طيب بإذن الله.'
    },
    {
      titleEn: 'Ascending the Starlit Mountain Peak',
      titleAr: 'صعود قمة الجبل تحت سماء مرصعة بالنجوم',
      textEn: 'I climbed steadily up a sturdy stone mountain with steady footsteps, arriving at the summit where the entire galaxy was reflected like a golden map.',
      textAr: 'كنت أصعد جبلاً صخرياً ثابتاً بخطى واثقة حتى بلغت ذروته، فإذا بالسماء والنجوم تبدو وكأنها خريطة ذهبية واضحة المعالم.',
      symbols: ['Mountain Peak / همة وبلوغ مرتبة', 'Stars / هداية وريادة', 'Ascent / كد يعقبه ظفر'],
      interpretationEn: 'Mountaineering reflects intentional ambition and structured discipline. Reaching the pinnacle under luminous stars signifies visionary leadership, steadfast resilience, and prominent societal esteem.',
      interpretationAr: 'صعود الجبل دلالة على الهمة العالية والمقاصد الكبرى. وبلوغ القمة تحت سماء مضيئة يرمز للريادة ونيل المراتب الرفيعة بعد بذل الأسباب وحسن التدبير.'
    }
  ];

  const currentDream = customDreamText.trim().length > 0
    ? {
        titleEn: 'Custom Inquiry Analysis',
        titleAr: 'تحليل الرؤيا المخصصة',
        textEn: customDreamText,
        textAr: customDreamText,
        symbols: ['Cognitive Query', 'Symbolic Synthesis', 'Intent Resonance'],
        interpretationEn: `Analytical synthesis completed: The dream references themes of progression, internal contemplation, and constructive resolution. Promising indicators suggest focusing attention on core priorities with steadfast faith.`,
        interpretationAr: `اكتمل التحليل الدلالي: الرؤيا تتضمن دلالات على الانتقال الإيجابي وتجاوز التحديات، وتشير الرموز إلى بشارات خير وتيسير يستلزم الاستمرار في العمل وبذل الأسباب.`
      }
    : dreamPresets[selectedDreamPreset];

  // -------------------------------------------------------------
  // Engine 3: Professor LMS Cohort State (24 students cohort)
  // -------------------------------------------------------------
  const [students, setStudents] = useState(() => [
    { id: 1, nameEn: 'Sultan Al-Shammari', nameAr: 'سلطان الشمري', present: true, quizScore: 96, grade: 'A+', alert: false },
    { id: 2, nameEn: 'Fahad Al-Ruwaili', nameAr: 'فهد الرويلي', present: true, quizScore: 92, grade: 'A', alert: false },
    { id: 3, nameEn: 'Omar Al-Zahrani', nameAr: 'عمر الزهراني', present: true, quizScore: 88, grade: 'B+', alert: false },
    { id: 4, nameEn: 'Saud Al-Enazi', nameAr: 'سعود العنزي', present: true, quizScore: 95, grade: 'A+', alert: false },
    { id: 5, nameEn: 'Abdullah Al-Dosari', nameAr: 'عبدالله الدوسري', present: false, quizScore: 68, grade: 'D+', alert: true },
    { id: 6, nameEn: 'Khalid Al-Otaibi', nameAr: 'خالد العتيبي', present: true, quizScore: 84, grade: 'B', alert: false },
    { id: 7, nameEn: 'Turki Al-Qahtani', nameAr: 'تركي القحطاني', present: true, quizScore: 90, grade: 'A', alert: false },
    { id: 8, nameEn: 'Rayan Al-Mutairi', nameAr: 'ريان المطيري', present: true, quizScore: 78, grade: 'C+', alert: false },
    { id: 9, nameEn: 'Nasser Al-Subaie', nameAr: 'ناصر السبيعي', present: true, quizScore: 98, grade: 'A+', alert: false },
    { id: 10, nameEn: 'Hamad Al-Harbi', nameAr: 'حمد الحربي', present: false, quizScore: 62, grade: 'D', alert: true },
    { id: 11, nameEn: 'Abdulaziz Al-Ghamdi', nameAr: 'عبدالعزيز الغامدي', present: true, quizScore: 91, grade: 'A', alert: false },
    { id: 12, nameEn: 'Zaid Al-Hathloul', nameAr: 'زيد الهذلول', present: true, quizScore: 86, grade: 'B', alert: false },
    { id: 13, nameEn: 'Bandar Al-Khatib', nameAr: 'بندر الخطيب', present: true, quizScore: 94, grade: 'A', alert: false },
    { id: 14, nameEn: 'Meshari Al-Saleh', nameAr: 'مشاري الصالح', present: true, quizScore: 82, grade: 'B-', alert: false },
    { id: 15, nameEn: 'Yousef Al-Malki', nameAr: 'يوسف المالكي', present: true, quizScore: 75, grade: 'C', alert: false },
    { id: 16, nameEn: 'Ibrahim Al-Bishi', nameAr: 'إبراهيم البيشي', present: true, quizScore: 97, grade: 'A+', alert: false },
    { id: 17, nameEn: 'Talal Al-Juhani', nameAr: 'طلال الجهني', present: true, quizScore: 89, grade: 'B+', alert: false },
    { id: 18, nameEn: 'Majed Al-Sharif', nameAr: 'ماجد الشريف', present: true, quizScore: 93, grade: 'A', alert: false },
    { id: 19, nameEn: 'Waleed Al-Khamis', nameAr: 'وليد الخميس', present: false, quizScore: 71, grade: 'C-', alert: true },
    { id: 20, nameEn: 'Bader Al-Suwailem', nameAr: 'بدر السويلم', present: true, quizScore: 87, grade: 'B+', alert: false },
    { id: 21, nameEn: 'Hani Al-Farhan', nameAr: 'هاني الفرحان', present: true, quizScore: 91, grade: 'A', alert: false },
    { id: 22, nameEn: 'Faisal Al-Majed', nameAr: 'فيصل الماجد', present: true, quizScore: 99, grade: 'A+', alert: false },
    { id: 23, nameEn: 'Mansour Al-Saeed', nameAr: 'منصور السعيد', present: true, quizScore: 83, grade: 'B', alert: false },
    { id: 24, nameEn: 'Salman Al-Tamimi', nameAr: 'سلمان التميمي', present: true, quizScore: 95, grade: 'A+', alert: false },
  ]);

  const [studentFilter, setStudentFilter] = useState<'all' | 'alert' | 'top'>('all');

  const toggleAttendance = (id: number) => {
    setStudents(prev =>
      prev.map(s => (s.id === id ? { ...s, present: !s.present } : s))
    );
  };

  const presentCount = students.filter(s => s.present).length;
  const attendanceRate = Math.round((presentCount / students.length) * 100);
  const averageScore = Math.round(
    students.reduce((acc, curr) => acc + curr.quizScore, 0) / students.length
  );
  const alertCount = students.filter(s => s.alert).length;

  const filteredStudents = students.filter(s => {
    if (studentFilter === 'alert') return s.alert || !s.present;
    if (studentFilter === 'top') return s.quizScore >= 90;
    return true;
  });

  return (
    <section id="tools" className="py-20 lg:py-28 px-6 lg:px-8 bg-[#090909] border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#f3e5ab] bg-[#141414] border border-[rgba(212,175,55,0.25)] mb-3">
            <span>⚡</span>
            <span>{isAr ? 'المختبر الهندسي المباشر' : 'LIVE INTERACTIVE WORKBENCH'}</span>
          </div>
          <h2 className="font-cinzel text-3xl lg:text-4xl font-bold text-white tracking-wide">
            {isAr ? 'جرّب المحركات التقنية مباشرة' : 'EXPERIENCE THE ENGINES'}
          </h2>
          <p className="mt-3 text-sm text-[#888] leading-relaxed">
            {isAr
              ? 'تفاعل مع المحركات البرمجية والهندسية الثلاثة كما تم تصميمها في أرض الواقع وبأعلى درجات الدقة.'
              : 'Test the live engines built for our client implementations — from civil cadastral BOQ calculations to symbolic AI analysis and 24-student LMS telemetry.'}
          </p>
        </div>

        {/* Engine Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-[#141414] rounded-xl max-w-2xl mx-auto border border-[#262626] mb-12 overflow-x-auto">
          <button
            onClick={() => onTabChange('boq')}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'boq'
                ? 'gold-btn shadow-md text-black'
                : 'text-[#aaa] hover:text-white'
            }`}
          >
            <span>📐</span>
            <span>{isAr ? 'حساب كميات المساحة (BOQ)' : 'Survey to BOQ Engine'}</span>
          </button>

          <button
            onClick={() => onTabChange('dream')}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'dream'
                ? 'gold-btn shadow-md text-black'
                : 'text-[#aaa] hover:text-white'
            }`}
          >
            <span>✨</span>
            <span>{isAr ? 'محرك تعبير الرؤى (AI)' : 'Dream AI Engine'}</span>
          </button>

          <button
            onClick={() => onTabChange('lms')}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'lms'
                ? 'gold-btn shadow-md text-black'
                : 'text-[#aaa] hover:text-white'
            }`}
          >
            <span>🎓</span>
            <span>{isAr ? 'نظام البروفسور (24 طالب)' : 'Professor LMS (24 Cohort)'}</span>
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* ENGINE 1: SURVEY TO BOQ */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'boq' && (
          <div className="bg-[#141414] rounded-2xl border border-[rgba(212,175,55,0.3)] p-6 lg:p-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#222]">
              <div>
                <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase block">
                  {isAr ? 'الهندسة المدنية وحساب الكميات المعتمد' : 'CIVIL & SURVEY QUANTITY EXTRACTION'}
                </span>
                <h3 className="font-cinzel text-xl lg:text-2xl font-bold text-white mt-1">
                  {isAr
                    ? 'من القرار المساحي إلى جدول الكميات (حساب الحفر 1200 م³)'
                    : 'Cadastral Survey to BOQ Generator (1,200 m³ Excavation Benchmark)'}
                </h3>
                <p className="text-xs text-[#888] mt-1">
                  {isAr
                    ? 'أدخل أبعاد القرار المساحي وعمق التأسيس لاحتساب كميات الحفر والخرسانات وحديد التسليح فورياً.'
                    : 'Adjust parcel cadastral dimensions and excavation depth to dynamically estimate quantities and procurement costs.'}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyBOQ}
                  className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#222] hover:bg-[#2c2c2c] text-[#f3e5ab] border border-[rgba(212,175,55,0.3)] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{copiedBOQ ? '✓' : '📋'}</span>
                  <span>{copiedBOQ ? (isAr ? 'تم نسخ الجدول!' : 'BOQ Copied!') : (isAr ? 'نسخ جدول الكميات' : 'Copy BOQ Schedule')}</span>
                </button>
              </div>
            </div>

            {/* Input Controls Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 border-b border-[#222]">
              <div>
                <label className="text-xs text-[#aaa] font-medium block mb-2">
                  {isAr ? 'طول القطعة (متر):' : 'Parcel Length (m):'} <span className="text-[#f3e5ab] font-mono font-bold">{plotLength} m</span>
                </label>
                <input
                  type="range"
                  min="15"
                  max="60"
                  step="1"
                  value={plotLength}
                  onChange={(e) => setPlotLength(Number(e.target.value))}
                  className="w-full accent-[#d4af37] cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs text-[#aaa] font-medium block mb-2">
                  {isAr ? 'عرض القطعة (متر):' : 'Parcel Width (m):'} <span className="text-[#f3e5ab] font-mono font-bold">{plotWidth} m</span>
                </label>
                <input
                  type="range"
                  min="15"
                  max="40"
                  step="1"
                  value={plotWidth}
                  onChange={(e) => setPlotWidth(Number(e.target.value))}
                  className="w-full accent-[#d4af37] cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs text-[#aaa] font-medium block mb-2">
                  {isAr ? 'عمق الحفر (متر):' : 'Excavation Depth (m):'} <span className="text-[#f3e5ab] font-mono font-bold">{excavationDepth.toFixed(1)} m</span>
                </label>
                <input
                  type="range"
                  min="1.0"
                  max="4.0"
                  step="0.1"
                  value={excavationDepth}
                  onChange={(e) => setExcavationDepth(Number(e.target.value))}
                  className="w-full accent-[#d4af37] cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs text-[#aaa] font-medium block mb-2">
                  {isAr ? 'طبيعة التربة والتأسيس:' : 'Soil & Foundation:'}
                </label>
                <div className="flex gap-2">
                  <select
                    value={soilType}
                    onChange={(e) => setSoilType(e.target.value as any)}
                    className="bg-[#1c1c1c] text-xs text-[#f3e5ab] p-2 rounded border border-[#333] flex-1 focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="sandy">{isAr ? 'تربة رملية (عادية)' : 'Sandy Soil'}</option>
                    <option value="clay">{isAr ? 'تربة طينية متماسكة' : 'Compact Clay'}</option>
                    <option value="rocky">{isAr ? 'تربة صخرية قاسية' : 'Rocky / Hard'}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Live Calculation Results Table */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                  {isAr ? 'جدول حصر الكميات المعتمد (BOQ Schedule)' : 'DETAILED BILL OF QUANTITIES (BOQ)'}
                </span>
                <span className="text-xs text-[#777]">
                  {isAr ? `مساحة الأرض: ${landArea} م²` : `Calculated Plot Area: ${landArea} m²`}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-[#222] rounded-lg overflow-hidden">
                  <thead className="bg-[#1a1a1a] text-[#888] uppercase text-[11px] font-mono">
                    <tr>
                      <th className="p-3.5 border-b border-[#262626]">#</th>
                      <th className="p-3.5 border-b border-[#262626]">{isAr ? 'وصف البند الهندسي' : 'Item Description'}</th>
                      <th className="p-3.5 border-b border-[#262626]">{isAr ? 'الوحدة' : 'Unit'}</th>
                      <th className="p-3.5 border-b border-[#262626]">{isAr ? 'الكمية المحصورة' : 'Quantity'}</th>
                      <th className="p-3.5 border-b border-[#262626]">{isAr ? 'السعر التقديري (ر.س)' : 'Rate (SAR)'}</th>
                      <th className="p-3.5 border-b border-[#262626] text-right">{isAr ? 'الإجمالي (ر.س)' : 'Total (SAR)'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1f1f1f] font-mono text-[#dcdcdc]">
                    <tr className="hover:bg-[#1a1a1a]/60">
                      <td className="p-3.5 text-[#d4af37]">01.01</td>
                      <td className="p-3.5 font-sans">
                        <strong className="text-white block">
                          {isAr ? 'أعمال الحفر العام للموقع حتى منسوب التأسيس' : 'Bulk Site Excavation to Foundation Level'}
                        </strong>
                        <span className="text-[11px] text-[#777]">
                          {isAr ? `حجم الحفر الصافي مع معامل الانتفاخ المقدر (${hauledVolume} م³ ناتج)` : `Net excavated earth volume with soil bulk swell (${hauledVolume} m³ hauled)`}
                        </span>
                      </td>
                      <td className="p-3.5">m³</td>
                      <td className="p-3.5 text-[#f3e5ab] font-bold tabular-nums">{rawExcavation.toLocaleString()}</td>
                      <td className="p-3.5 tabular-nums">{excavationRate}</td>
                      <td className="p-3.5 text-right text-[#f3e5ab] font-bold tabular-nums">{(rawExcavation * excavationRate).toLocaleString()}</td>
                    </tr>

                    <tr className="hover:bg-[#1a1a1a]/60">
                      <td className="p-3.5 text-[#d4af37]">02.01</td>
                      <td className="p-3.5 font-sans">
                        <strong className="text-white block">
                          {isAr ? 'خرسانة نظافة عادية (P.C.) سمك 10 سم' : 'Plain Concrete Blinding Bed (P.C. 10cm)'}
                        </strong>
                        <span className="text-[11px] text-[#777]">
                          {isAr ? 'أسفل القواعد والميدات مع عزل الرطوبة' : 'Under footings and grade beams with damp proofing'}
                        </span>
                      </td>
                      <td className="p-3.5">m³</td>
                      <td className="p-3.5 text-[#f3e5ab] font-bold tabular-nums">{pcBlinding.toLocaleString()}</td>
                      <td className="p-3.5 tabular-nums">{pcRate}</td>
                      <td className="p-3.5 text-right text-[#f3e5ab] font-bold tabular-nums">{(pcBlinding * pcRate).toLocaleString()}</td>
                    </tr>

                    <tr className="hover:bg-[#1a1a1a]/60">
                      <td className="p-3.5 text-[#d4af37]">03.01</td>
                      <td className="p-3.5 font-sans">
                        <strong className="text-white block">
                          {isAr ? 'خرسانة مسلحة للقواعد والرقاب والميدات (R.C.)' : 'Reinforced Concrete Substructure (Footings & Necks)'}
                        </strong>
                        <span className="text-[11px] text-[#777]">
                          {isAr ? 'مقاومة كبريتات C35 مع المعالجة المعتمدة' : 'Sulfate-resistant C35 ready-mix according to code'}
                        </span>
                      </td>
                      <td className="p-3.5">m³</td>
                      <td className="p-3.5 text-[#f3e5ab] font-bold tabular-nums">{rcFootings.toLocaleString()}</td>
                      <td className="p-3.5 tabular-nums">{rcRate}</td>
                      <td className="p-3.5 text-right text-[#f3e5ab] font-bold tabular-nums">{(rcFootings * rcRate).toLocaleString()}</td>
                    </tr>

                    <tr className="hover:bg-[#1a1a1a]/60">
                      <td className="p-3.5 text-[#d4af37]">04.01</td>
                      <td className="p-3.5 font-sans">
                        <strong className="text-white block">
                          {isAr ? 'حديد تسليح عالي المقاومة (High-Tensile Rebar)' : 'High-Tensile Deformed Steel Rebar'}
                        </strong>
                        <span className="text-[11px] text-[#777]">
                          {isAr ? 'معدل 115 كجم/م³ شامل التقطيع والتركيب' : 'Estimated 115 kg/m³ fabrication, cutting, and placement'}
                        </span>
                      </td>
                      <td className="p-3.5">Ton</td>
                      <td className="p-3.5 text-[#f3e5ab] font-bold tabular-nums">{rebarTonnage}</td>
                      <td className="p-3.5 tabular-nums">{rebarRate.toLocaleString()}</td>
                      <td className="p-3.5 text-right text-[#f3e5ab] font-bold tabular-nums">{(rebarTonnage * rebarRate).toLocaleString()}</td>
                    </tr>
                  </tbody>
                  <tfoot className="bg-[#1c1c1c] text-[#f3e5ab] font-mono border-t-2 border-[#d4af37]">
                    <tr>
                      <td colSpan={5} className="p-4 font-bold font-sans text-xs uppercase text-right">
                        {isAr ? 'إجمالي تكلفة الأعمال الترابية والخرسانية التقديرية:' : 'ESTIMATED TOTAL SUBSTRUCTURE BOQ (SAR):'}
                      </td>
                      <td className="p-4 text-right text-sm font-bold text-[#f3e5ab]">
                        {totalCost.toLocaleString()} SAR
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* ENGINE 2: DREAM INTERPRETATION AI SANDBOX */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'dream' && (
          <div className="bg-[#141414] rounded-2xl border border-[rgba(212,175,55,0.3)] p-6 lg:p-10 shadow-2xl">
            <div className="pb-6 border-b border-[#222]">
              <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase block">
                {isAr ? 'محرك الذكاء الاصطناعي ومعجم الرموز' : 'AI COGNITIVE SYMBOLIC REASONING'}
              </span>
              <h3 className="font-cinzel text-xl lg:text-2xl font-bold text-white mt-1">
                {isAr ? 'تطبيق تعبير الرؤيا | Dream Interpretation AI' : 'Dream Interpretation & Cultural Hermeneutics Engine'}
              </h3>
              <p className="text-xs text-[#888] mt-1">
                {isAr
                  ? 'اختر نموذجاً أو اكتب رؤياك لتحليل دلالات الرموز التراثية واستخراج المعاني الإيجابية بدقة واعية.'
                  : 'Select an archetypal scenario or input a narrative to test the symbolic parser and positive insight generation.'}
              </p>
            </div>

            {/* Preset Selector */}
            <div className="mt-6">
              <span className="text-xs text-[#aaa] font-medium block mb-3">
                {isAr ? 'نماذج جاهزة للاختبار الفوري:' : 'Preset Archetypal Scenarios:'}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {dreamPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedDreamPreset(idx);
                      setCustomDreamText('');
                    }}
                    className={`p-3.5 rounded-lg text-left text-xs transition-all border cursor-pointer ${
                      selectedDreamPreset === idx && !customDreamText
                        ? 'bg-[#222] border-[#d4af37] text-white shadow-md'
                        : 'bg-[#181818] border-[#292929] text-[#aaa] hover:text-white hover:border-[#444]'
                    }`}
                  >
                    <div className="font-semibold text-[#f3e5ab] mb-1">
                      {isAr ? preset.titleAr : preset.titleEn}
                    </div>
                    <div className="text-[11px] text-[#777] line-clamp-2">
                      {isAr ? preset.textAr : preset.textEn}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="mt-6">
              <label className="text-xs text-[#aaa] font-medium block mb-2">
                {isAr ? 'أو اكتب نص الرؤيا للتحليل الفوري:' : 'Or Enter Custom Dream Narrative to Analyze:'}
              </label>
              <textarea
                rows={3}
                value={customDreamText}
                onChange={(e) => setCustomDreamText(e.target.value)}
                placeholder={
                  isAr
                    ? 'اكتب مثلاً: رأيت أنني أمشي في بستان أخضر وأشرب ماء زلالاً من ينبوع متدفق...'
                    : 'Example: I saw myself walking into a peaceful garden where pure spring water was flowing...'
                }
                className="w-full bg-[#181818] text-xs text-white p-3 rounded-lg border border-[#333] focus:border-[#d4af37] focus:outline-none transition-colors"
              />
            </div>

            {/* Analysis Output Result Card */}
            <div className="mt-8 bg-[#0e0e0e] rounded-xl p-6 border border-[rgba(212,175,55,0.25)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#222]">
                <div className="flex items-center gap-2">
                  <span className="text-lg text-[#d4af37]">✨</span>
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    {isAr ? 'نتيجة التحليل الدلالي المستخرج' : 'EXTRACTED SYMBOLIC INTERPRETATION'}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setSavedJournal(true);
                    setTimeout(() => setSavedJournal(false), 2200);
                  }}
                  className="px-3.5 py-1.5 rounded text-xs font-medium bg-[#1d1d1d] hover:bg-[#282828] text-[#f3e5ab] border border-[#333] transition-colors cursor-pointer self-start sm:self-auto"
                >
                  {savedJournal
                    ? (isAr ? '✓ تم الحفظ في السجل المشفر' : '✓ Saved to Encrypted Journal')
                    : (isAr ? '💾 حفظ في سجل اليوميات' : '💾 Save to Journal')}
                </button>
              </div>

              {/* Identified Symbols */}
              <div className="mt-5">
                <span className="text-[11px] font-mono text-[#888] uppercase block mb-2">
                  {isAr ? 'الرموز والمحددات المفهرسة:' : 'IDENTIFIED ARCHETYPES & SYMBOLS:'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentDream.symbols.map((sym, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded bg-[#1f1f1f] border border-[rgba(212,175,55,0.3)] text-[#f3e5ab]"
                    >
                      {sym}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interpretation Commentary */}
              <div className="mt-5">
                <span className="text-[11px] font-mono text-[#888] uppercase block mb-2">
                  {isAr ? 'التأويل والدلالات الإيجابية:' : 'HERMENEUTIC SYNTHESIS & POSITIVE GUIDANCE:'}
                </span>
                <p className="text-xs lg:text-sm text-[#e0e0e0] leading-relaxed bg-[#141414] p-4 rounded-lg border border-[#222]">
                  {isAr ? currentDream.interpretationAr : currentDream.interpretationEn}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* ENGINE 3: PROFESSOR LMS (24 COHORT SIMULATOR) */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === 'lms' && (
          <div className="bg-[#141414] rounded-2xl border border-[rgba(212,175,55,0.3)] p-6 lg:p-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#222]">
              <div>
                <span className="text-xs font-mono text-[#d4af37] tracking-wider uppercase block">
                  {isAr ? 'نظام إدارة التعلم الذكي والتتبع الفوري' : 'INTELLIGENT LMS & TELEMETRY'}
                </span>
                <h3 className="font-cinzel text-xl lg:text-2xl font-bold text-white mt-1">
                  {isAr ? 'تطبيق البروفسور | شعبة 24 طالباً قيد التتبع' : 'Professor App | 24 Active Students Cohort'}
                </h3>
                <p className="text-xs text-[#888] mt-1">
                  {isAr
                    ? 'لوحة تحكم تفاعلية للمدرس لمتابعة الحضور، رصد درجات الاختبارات، وتنبيهات التحصيل الفوري.'
                    : 'Interactive instructor console tracking attendance, real-time quiz grades, and early academic alerts.'}
                </p>
              </div>

              {/* Filter controls */}
              <div className="flex items-center gap-1.5 p-1 bg-[#1c1c1c] rounded-lg border border-[#333]">
                <button
                  onClick={() => setStudentFilter('all')}
                  className={`px-3 py-1.5 text-xs rounded transition-colors cursor-pointer ${
                    studentFilter === 'all' ? 'bg-[#333] text-white font-semibold' : 'text-[#888] hover:text-white'
                  }`}
                >
                  {isAr ? 'الكل (24)' : 'All (24)'}
                </button>
                <button
                  onClick={() => setStudentFilter('top')}
                  className={`px-3 py-1.5 text-xs rounded transition-colors cursor-pointer ${
                    studentFilter === 'top' ? 'bg-[#333] text-[#f3e5ab] font-semibold' : 'text-[#888] hover:text-white'
                  }`}
                >
                  {isAr ? 'المتميزون' : 'Top Tier'}
                </button>
                <button
                  onClick={() => setStudentFilter('alert')}
                  className={`px-3 py-1.5 text-xs rounded transition-colors cursor-pointer ${
                    studentFilter === 'alert' ? 'bg-[#333] text-amber-400 font-semibold' : 'text-[#888] hover:text-white'
                  }`}
                >
                  {isAr ? `تنبيهات (${alertCount})` : `Attention (${alertCount})`}
                </button>
              </div>
            </div>

            {/* Quick Cohort KPI Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-[#222]">
              <div className="bg-[#191919] p-4 rounded-xl border border-[#282828]">
                <span className="text-[11px] text-[#777] uppercase block">{isAr ? 'نسبة الحضور اللحظي' : 'Attendance Rate'}</span>
                <span className="font-cinzel text-xl font-bold text-[#f3e5ab] tabular-nums mt-1 block">
                  {attendanceRate}%
                </span>
                <span className="text-[10px] text-[#888]">{presentCount} / {students.length} {isAr ? 'حاضرون' : 'Present'}</span>
              </div>

              <div className="bg-[#191919] p-4 rounded-xl border border-[#282828]">
                <span className="text-[11px] text-[#777] uppercase block">{isAr ? 'متوسط درجات الاختبار' : 'Average Quiz Grade'}</span>
                <span className="font-cinzel text-xl font-bold text-[#f3e5ab] tabular-nums mt-1 block">
                  {averageScore} / 100
                </span>
                <span className="text-[10px] text-[#888]">{isAr ? 'معدل عام B+' : 'Cohort B+ Mean'}</span>
              </div>

              <div className="bg-[#191919] p-4 rounded-xl border border-[#282828]">
                <span className="text-[11px] text-[#777] uppercase block">{isAr ? 'الطلاب المحتاجون لدعم' : 'Intervention Alerts'}</span>
                <span className="font-cinzel text-xl font-bold text-amber-400 tabular-nums mt-1 block">
                  {alertCount}
                </span>
                <span className="text-[10px] text-[#888]">{isAr ? 'تنبيه آلي فوري' : 'Automated flag'}</span>
              </div>

              <div className="bg-[#191919] p-4 rounded-xl border border-[#282828]">
                <span className="text-[11px] text-[#777] uppercase block">{isAr ? 'حالة المزامنة السحابية' : 'Cloud Sync Status'}</span>
                <span className="font-mono text-sm font-semibold text-[#f3e5ab] mt-1 block">
                  ONLINE · REALTIME
                </span>
                <span className="text-[10px] text-[#888]">{isAr ? 'تحديث لحظي' : 'Telemetry active'}</span>
              </div>
            </div>

            {/* Students Interactive Cohort Grid */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4 text-xs text-[#888]">
                <span>{isAr ? 'انقر على حالة الطالب لتعديل الحضور فورياً' : 'Click attendance badge to toggle live student status:'}</span>
                <span>{filteredStudents.length} {isAr ? 'طالب معروض' : 'Students listed'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-h-[380px] overflow-y-auto pr-1">
                {filteredStudents.map((student) => (
                  <div
                    key={student.id}
                    className={`p-3 rounded-lg border transition-all ${
                      student.alert
                        ? 'bg-[#1e1717] border-amber-900/40'
                        : 'bg-[#181818] border-[#292929] hover:border-[#444]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white truncate max-w-[120px]">
                        {isAr ? student.nameAr : student.nameEn}
                      </span>
                      <span className="text-[11px] font-mono text-[#f3e5ab] font-bold">
                        {student.grade}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-xs">
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        className={`px-2 py-0.5 rounded text-[10px] font-medium transition-colors cursor-pointer ${
                          student.present
                            ? 'bg-[#0f2415] text-emerald-400 border border-emerald-800/50'
                            : 'bg-[#291212] text-rose-400 border border-rose-800/50'
                        }`}
                      >
                        {student.present
                          ? (isAr ? 'حاضر ✓' : 'Present')
                          : (isAr ? 'غائب ✕' : 'Absent')}
                      </button>

                      <span className="text-[11px] text-[#888] font-mono tabular-nums">
                        {student.quizScore}/100
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
