import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-32 px-4 md:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12">{t('about.title')}</h2>
        <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </div>
      </div>
    </section>
  );
}