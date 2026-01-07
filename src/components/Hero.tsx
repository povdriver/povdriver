import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-8xl mb-4">
            {t('hero.greeting')} <span className="inline-block animate-wave">👋</span>
          </h1>
        </div>

        {/* Mobile Optimized Layout */}
        <div className="block md:hidden space-y-4 max-w-md mx-auto">
          {/* Card 1 - Main Profile */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl overflow-hidden shadow-xl">
            <div className="p-6 text-white">
              <div className="text-2xl font-semibold mb-2">
                {t('hero.name')}
              </div>
              <div className="text-purple-100">{t('hero.contentCreator')}</div>
            </div>
            <div className="h-48 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzcxNTcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="povdriver"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 2 - Content */}
          <div className="bg-amber-100 rounded-3xl overflow-hidden shadow-xl">
            <div className="h-40 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1644771571408-f2b3b8782f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzY3NjExNTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Content Creation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-xl font-semibold text-gray-800">
                {t('hero.create')}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Keep original */}
        <div className="hidden md:block relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Card 1 - Content Creator */}
          <div 
            className="absolute w-[280px] md:w-[350px] bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl overflow-hidden shadow-2xl"
            style={{ 
              transform: 'rotate(-8deg) translateX(-120px) translateY(20px)',
              zIndex: 1
            }}
          >
            <div className="p-8 text-white">
              <div className="text-3xl font-semibold mb-4">
                {t('hero.name')}
              </div>
            </div>
            <div className="h-64 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzcxNTcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="povdriver"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 2 - Content Creator */}
          <div 
            className="absolute w-[280px] md:w-[350px] bg-amber-100 rounded-3xl overflow-hidden shadow-2xl"
            style={{ 
              transform: 'rotate(5deg) translateX(140px) translateY(-30px)',
              zIndex: 2
            }}
          >
            <div className="p-8">
              <div className="text-3xl font-semibold text-gray-800 mb-4">
                {t('hero.contentCreator')}
              </div>
            </div>
            <div className="h-64 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1644771571408-f2b3b8782f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzY3NjExNTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Content Creation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 3 - Workspace */}
          <div 
            className="absolute w-[280px] md:w-[350px] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl"
            style={{ 
              transform: 'rotate(-3deg) translateY(100px)',
              zIndex: 0
            }}
          >
            <div className="h-48 overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1628489529253-9f3164fcbd8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njc2NjQwODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 text-white">
              <div className="text-2xl font-semibold">
                {t('hero.create')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}