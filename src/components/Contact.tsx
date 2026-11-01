import React, { useState } from 'react';
import { Language } from '../types';
import { AGENCY_CONTACT } from '../data/content';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Product Engineering');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateWhatsAppUrl = () => {
    const text = isAr
      ? `مرحباً مهندس أحمد،
أنا: ${name || 'عميل مهتم'}
البريد: ${email || 'غير محدد'}
الهاتف: ${phone || 'غير محدد'}
الخدمة المطلوبة: ${service}
تفاصيل المشروع:
${message || 'أود مناقشة فكرة مشروع طموح معكم.'}`
      : `Hello Ahmed,
Name: ${name || 'Interested Client'}
Email: ${email || 'Not specified'}
Phone: ${phone || 'Not specified'}
Service Needed: ${service}
Project Details:
${message || 'I would like to discuss engineering an ambitious product with you.'}`;

    return `https://wa.me/966556533006?text=${encodeURIComponent(text)}`;
  };

  const handleCopyInquiry = () => {
    const summary = `AHMED Engineering Inquiry:
Name: ${name || 'N/A'}
Email: ${email || 'N/A'}
Phone: ${phone || 'N/A'}
Service: ${service}
Details: ${message || 'New product discussion'}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-2xl p-8 lg:p-14 border border-[rgba(212,175,55,0.4)] bg-gradient-to-b from-[#151515] to-[#0a0a0a] shadow-2xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase">
            {isAr ? 'بدء التعاون الهندسي' : 'START A PROJECT'}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-white tracking-wide">
            {isAr ? 'فلنبنِ معاً منتجاً طموحاً' : "LET'S BUILD SOMETHING AMBITIOUS"}
          </h2>
          <p className="mt-3 text-sm text-[#999] leading-relaxed">
            {isAr
              ? 'هل أنت مستعد لتحويل رؤيتك إلى واقع ملموس؟ يسعدنا التواصل معك والرد خلال 24 ساعة.'
              : 'Ready to bring your vision to life? Get in touch and receive a comprehensive proposal within 24 hours.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="font-cinzel text-lg font-bold text-[#f3e5ab]">
                {isAr ? 'قنوات التواصل المباشرة' : 'DIRECT CHANNELS'}
              </h3>

              {/* Email Card */}
              <a
                href={`mailto:${AGENCY_CONTACT.email}`}
                className="p-4 rounded-xl bg-[#111] border border-[#262626] hover:border-[#d4af37] transition-all flex items-center gap-4 block group"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.1)] text-[#d4af37] flex items-center justify-center text-lg shrink-0">
                  📧
                </div>
                <div>
                  <span className="text-[11px] text-[#777] uppercase block">{isAr ? 'البريد الإلكتروني' : 'Official Email'}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#f3e5ab] transition-colors">
                    {AGENCY_CONTACT.email}
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={AGENCY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#111] border border-[#262626] hover:border-[#d4af37] transition-all flex items-center gap-4 block group"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.1)] text-[#d4af37] flex items-center justify-center text-lg shrink-0">
                  📱
                </div>
                <div>
                  <span className="text-[11px] text-[#777] uppercase block">{isAr ? 'واتساب وهاتف مباشر' : 'Direct Phone & WhatsApp'}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#f3e5ab] transition-colors font-mono">
                    {AGENCY_CONTACT.phone} / {AGENCY_CONTACT.intlPhone}
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#111] border border-[#262626] flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(212,175,55,0.1)] text-[#d4af37] flex items-center justify-center text-lg shrink-0">
                  📍
                </div>
                <div>
                  <span className="text-[11px] text-[#777] uppercase block">{isAr ? 'المقر الرئيسي' : 'Headquarters'}</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {isAr ? AGENCY_CONTACT.locationAr : AGENCY_CONTACT.locationEn}
                  </span>
                </div>
              </div>

              {/* Coverage Marker */}
              <div className="p-3 bg-[#0d0d0d] rounded-lg border border-[#222] text-center">
                <span className="text-xs text-[#888] font-mono">
                  {isAr ? AGENCY_CONTACT.coverageAr : AGENCY_CONTACT.coverageEn}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[rgba(212,175,55,0.2)] bg-[#111]/80">
              <span className="text-xs font-semibold text-[#f3e5ab] block mb-1">
                {isAr ? 'سرعة الاستجابة الهندسية' : 'Guaranteed 24-Hour Review'}
              </span>
              <p className="text-xs text-[#888] leading-relaxed">
                {isAr
                  ? 'يتم تقييم كل طلب مشروع بصورة شخصية من قبل المهندس أحمد لدراسة الجدوى الفنية والجدول الزمني.'
                  : 'Every inquiry is personally reviewed by Ahmed to evaluate technical architecture, feasible timelines, and execution roadmap.'}
              </p>
            </div>
          </div>

          {/* Consultation Request Form */}
          <div className="lg:col-span-7 bg-[#111] rounded-xl p-6 sm:p-8 border border-[#262626]">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(212,175,55,0.15)] text-[#d4af37] text-2xl flex items-center justify-center mx-auto">
                  ✓
                </div>
                <h4 className="font-cinzel text-xl font-bold text-white">
                  {isAr ? 'تم استلام تفاصيل استفسارك بنجاح' : 'Inquiry Prepared Successfully'}
                </h4>
                <p className="text-xs text-[#aaa] max-w-md mx-auto">
                  {isAr
                    ? 'شكراً لك. يمكنك الآن إرسال هذا الطلب مباشرة عبر تطبيق واتساب للحصول على رد فوري ومباشر.'
                    : 'Thank you. You can launch WhatsApp with your pre-formatted brief or we will reach back to your email.'}
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn px-6 py-2.5 rounded-lg text-xs font-bold uppercase inline-flex items-center gap-2"
                  >
                    <span>{isAr ? 'متابعة عبر واتساب الآن' : 'Open in WhatsApp Now'}</span>
                    <span>↗</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 text-xs text-[#888] hover:text-white"
                  >
                    {isAr ? 'تعديل الاستمارة' : 'Edit details'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#aaa] font-medium block mb-1.5">
                      {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isAr ? 'مثال: فهد القحطاني' : 'e.g. Fahad Al-Qahtani'}
                      className="w-full bg-[#181818] border border-[#333] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#aaa] font-medium block mb-1.5">
                      {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-[#181818] border border-[#333] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#aaa] font-medium block mb-1.5">
                      {isAr ? 'رقم الهاتف / الواتساب' : 'Phone / WhatsApp'}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966 5..."
                      className="w-full bg-[#181818] border border-[#333] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#aaa] font-medium block mb-1.5">
                      {isAr ? 'مجال الخدمة المطلوب' : 'Service Discipline'}
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#181818] border border-[#333] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
                    >
                      <option value="Product Engineering">
                        {isAr ? 'هندسة المنتجات وتطبيقات الجوال' : 'Product Engineering & Mobile Apps'}
                      </option>
                      <option value="AI & R&D Solutions">
                        {isAr ? 'أبحاث وحلول الذكاء الاصطناعي (AI & R&D)' : 'Applied AI & Cognitive Systems'}
                      </option>
                      <option value="Survey to BOQ Consulting">
                        {isAr ? 'الرفع المساحي وحساب الكميات (BOQ)' : 'Cadastral Survey to BOQ'}
                      </option>
                      <option value="General Technical Advisory">
                        {isAr ? 'استشارة عامة لمشروع جديد' : 'General Technical Advisory'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#aaa] font-medium block mb-1.5">
                    {isAr ? 'نبذة عن المشروع أو المتطلبات *' : 'Project Brief & Scope *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      isAr
                        ? 'وضح الأهداف، الجدول الزمني المتوقع، ونطاق العمل المطلوب...'
                        : 'Describe your objectives, expected timeline, and technical scope...'
                    }
                    className="w-full bg-[#181818] border border-[#333] rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 gold-btn py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    {isAr ? 'إرسال طلب الاستشارة' : 'Submit Consultation Request'}
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-3 rounded-lg text-xs font-semibold bg-[#222] hover:bg-[#2a2a2a] text-[#f3e5ab] border border-[rgba(212,175,55,0.4)] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>💬</span>
                    <span>{isAr ? 'إرسال كرسالة واتساب' : 'Direct WhatsApp'}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyInquiry}
                    className="w-full sm:w-auto px-3.5 py-3 rounded-lg text-xs text-[#888] hover:text-white border border-[#2a2a2a] transition-colors cursor-pointer"
                    title={isAr ? 'نسخ نص الاستفسار للحافظة' : 'Copy inquiry brief to clipboard'}
                  >
                    {copied ? (isAr ? '✓ تم النسخ' : '✓ Copied') : (isAr ? 'نسخ' : 'Copy')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
