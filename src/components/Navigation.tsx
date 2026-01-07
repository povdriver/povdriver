import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-semibold tracking-tight">
            povdriver
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-black transition-colors">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-black transition-colors">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-black transition-colors">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('resources')} className="text-gray-600 hover:text-black transition-colors">
              {t('nav.resources')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-black transition-colors">
              {t('nav.contact')}
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <Globe size={18} />
              <span className="uppercase">{language}</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              {t('nav.workWithMe')}
            </button>
          </div>

          {/* Mobile - Language Toggle and Menu */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-gray-600 hover:text-black transition-colors p-2"
            >
              <Globe size={18} />
              <span className="uppercase text-sm font-medium">{language}</span>
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-black transition-colors text-left py-2 text-base">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-black transition-colors text-left py-2 text-base">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-black transition-colors text-left py-2 text-base">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('resources')} className="text-gray-600 hover:text-black transition-colors text-left py-2 text-base">
              {t('nav.resources')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-black transition-colors text-left py-2 text-base">
              {t('nav.contact')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors w-full mt-2 font-medium"
            >
              {t('nav.workWithMe')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}