import { Mail, MessageSquare, Briefcase, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', link: '#', handle: '@povdriver' },
  { icon: Twitter, label: 'Twitter', link: '#', handle: '@povdriver' },
  { icon: Youtube, label: 'YouTube', link: '#', handle: 'povdriver' },
  { icon: Linkedin, label: 'LinkedIn', link: '#', handle: 'povdriver' }
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-32 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">{t('contact.title')}</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-2xl">
          {t('contact.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
          {/* For Followers */}
          <div className="p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 active:scale-95 transition-transform">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-4 md:mb-6">
              <MessageSquare size={24} className="md:w-7 md:h-7" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">{t('contact.followers.title')}</h3>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-base">
              {t('contact.followers.desc')}
            </p>
            <a 
              href="mailto:hello@povdriver.com"
              className="inline-flex items-center gap-2 text-purple-600 font-medium hover:gap-3 transition-all text-base md:text-base"
            >
              <Mail size={20} />
              hello@povdriver.com
            </a>
          </div>

          {/* For Brands */}
          <div className="p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 active:scale-95 transition-transform">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-amber-600 text-white flex items-center justify-center mb-4 md:mb-6">
              <Briefcase size={24} className="md:w-7 md:h-7" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 md:mb-4">{t('contact.brands.title')}</h3>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-base">
              {t('contact.brands.desc')}
            </p>
            <a 
              href="mailto:business@povdriver.com"
              className="inline-flex items-center gap-2 text-amber-600 font-medium hover:gap-3 transition-all text-base md:text-base"
            >
              <Mail size={20} />
              business@povdriver.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-200 pt-12 md:pt-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">{t('contact.follow')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="flex items-center gap-3 md:gap-4 p-5 md:p-6 rounded-xl md:rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all group active:scale-95"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <social.icon size={24} />
                </div>
                <div>
                  <div className="font-medium text-base md:text-base">{social.label}</div>
                  <div className="text-sm text-gray-600">{social.handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}