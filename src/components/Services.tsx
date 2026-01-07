import { Video, FileSpreadsheet, Users, Megaphone, MessageCircle, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Video,
      titleKey: 'services.content.title',
      descKey: 'services.content.desc'
    },
    {
      icon: MessageCircle,
      titleKey: 'services.consulting.title',
      descKey: 'services.consulting.desc'
    },
    {
      icon: Megaphone,
      titleKey: 'services.brand.title',
      descKey: 'services.brand.desc'
    },
    {
      icon: Users,
      titleKey: 'services.community.title',
      descKey: 'services.community.desc'
    },
    {
      icon: FileSpreadsheet,
      titleKey: 'services.resources.title',
      descKey: 'services.resources.desc'
    },
    {
      icon: Sparkles,
      titleKey: 'services.exclusive.title',
      descKey: 'services.exclusive.desc'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-32 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">{t('services.title')}</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-2xl">
          {t('services.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-xl group active:scale-95"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-black text-white flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={24} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">{t(service.titleKey)}</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-base">{t(service.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}