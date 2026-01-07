import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="text-xl md:text-2xl font-semibold">povdriver</div>
          <div className="text-gray-400 text-center md:text-left text-sm md:text-base">
            © {new Date().getFullYear()} povdriver. {t('footer.rights')}
          </div>
          <div className="flex gap-4 md:gap-6 text-sm md:text-base">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}