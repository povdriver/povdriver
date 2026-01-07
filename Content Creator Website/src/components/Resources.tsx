import { Download, ExternalLink, FileText, Table } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Resources() {
  const { t } = useLanguage();

  const resources = [
    {
      icon: Table,
      titleKey: 'resources.calendar.title',
      type: 'common.spreadsheet',
      descKey: 'resources.calendar.desc',
      link: '#'
    },
    {
      icon: FileText,
      titleKey: 'resources.growth.title',
      type: 'common.pdf',
      descKey: 'resources.growth.desc',
      link: '#'
    },
    {
      icon: Table,
      titleKey: 'resources.analytics.title',
      type: 'common.spreadsheet',
      descKey: 'resources.analytics.desc',
      link: '#'
    },
    {
      icon: FileText,
      titleKey: 'resources.partnership.title',
      type: 'common.pdf',
      descKey: 'resources.partnership.desc',
      link: '#'
    },
    {
      icon: Table,
      titleKey: 'resources.budget.title',
      type: 'common.spreadsheet',
      descKey: 'resources.budget.desc',
      link: '#'
    },
    {
      icon: FileText,
      titleKey: 'resources.ideas.title',
      type: 'common.pdf',
      descKey: 'resources.ideas.desc',
      link: '#'
    }
  ];

  return (
    <section id="resources" className="py-16 md:py-32 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">{t('resources.title')}</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-2xl">
          {t('resources.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200 hover:border-black transition-all duration-300 group active:scale-95"
            >
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gray-100 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors">
                  <resource.icon size={20} className="md:w-6 md:h-6" />
                </div>
                <span className="text-xs md:text-sm px-2.5 md:px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                  {t(resource.type)}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{t(resource.titleKey)}</h3>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{t(resource.descKey)}</p>
              <a 
                href={resource.link}
                className="inline-flex items-center gap-2 text-black font-medium group-hover:gap-3 transition-all text-sm md:text-base"
              >
                <Download size={18} />
                {t('resources.download')}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 p-6 md:p-12 bg-black text-white rounded-2xl md:rounded-3xl">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">{t('resources.premium.title')}</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
              {t('resources.premium.desc')}
            </p>
            <button className="bg-white text-black px-6 md:px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-flex items-center gap-2 active:scale-95 w-full md:w-auto justify-center text-base md:text-base">
              {t('resources.premium.cta')}
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}