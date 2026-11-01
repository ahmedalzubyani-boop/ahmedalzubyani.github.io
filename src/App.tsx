import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { InteractiveSuite } from './components/InteractiveSuite';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Language, Project } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeToolTab, setActiveToolTab] = useState<'boq' | 'dream' | 'lms'>('boq');

  // Keep document dir in sync with language for native RTL/LTR support
  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleLaunchTool = (toolId: 'boq' | 'dream' | 'lms') => {
    setActiveToolTab(toolId);
    const toolsElement = document.getElementById('tools');
    if (toolsElement) {
      toolsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#0a0a0a] text-white ${lang === 'ar' ? 'font-cairo' : 'font-sans'}`}>
      {/* Top Bar Navigation */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <Hero lang={lang} />

        {/* Core Expertise (01 Product Engineering, 02 R&D, 03 Civil & Survey) */}
        <Expertise lang={lang} />

        {/* Selected Projects (Professor App, Dream Interpretation, Survey to BOQ) */}
        <Projects
          lang={lang}
          onSelectProject={(project) => setSelectedProject(project)}
          onLaunchTool={handleLaunchTool}
        />

        {/* Live Interactive Engines Suite */}
        <InteractiveSuite
          lang={lang}
          activeTab={activeToolTab}
          onTabChange={setActiveToolTab}
        />

        {/* Contact & Consultation Section */}
        <Contact lang={lang} />
      </main>

      {/* Global Footer */}
      <Footer lang={lang} />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
        onLaunchTool={handleLaunchTool}
      />
    </div>
  );
}
