import { Rocket, Video, Truck, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const projects = [
  {
    icon: Rocket,
    title: 'gigreal',
    role: 'Founder',
    description: 'Building and expanding gigreal - revolutionizing the creator economy.',
    status: 'active',
    progress: 65,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Video,
    title: 'povdriver Content',
    role: 'Content Creator',
    description: 'Creating engaging content across povdriver social media accounts.',
    status: 'active',
    progress: 80,
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Truck,
    title: 'Van Build Project',
    role: 'Builder & Planner',
    description: 'Planning and documenting the complete van conversion journey.',
    status: 'planning',
    progress: 35,
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Target,
    title: 'First 100 Days of 2026',
    role: 'Goal Tracker',
    description: 'Tracking and achieving ambitious goals for the first quarter of 2026.',
    status: 'active',
    progress: 15,
    color: 'from-green-500 to-emerald-500'
  }
];

const statusLabels = {
  active: { en: 'In Progress', es: 'En Progreso' },
  planning: { en: 'Planning', es: 'Planificación' },
  completed: { en: 'Completed', es: 'Completado' }
};

export function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-16 md:py-32 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">{t('projects.title')}</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-2xl">
          {t('projects.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300 group active:scale-95"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${project.color} text-white flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <project.icon size={24} className="md:w-7 md:h-7" />
                </div>
                <span className={`text-xs md:text-sm px-3 md:px-4 py-1 md:py-1.5 rounded-full font-medium ${
                  project.status === 'active' 
                    ? 'bg-green-100 text-green-700' 
                    : project.status === 'planning'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {statusLabels[project.status as keyof typeof statusLabels][language]}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2">{project.title}</h3>
              <div className="text-sm text-gray-500 mb-2 md:mb-3">{project.role}</div>
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-base">{project.description}</p>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{t('projects.progress')}</span>
                  <span className="font-semibold">{project.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${project.color} rounded-full transition-all duration-500`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
            <div className="text-2xl md:text-3xl font-semibold mb-1">4</div>
            <div className="text-gray-600 text-sm md:text-base">{t('projects.stats.active')}</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
            <div className="text-2xl md:text-3xl font-semibold mb-1">2026</div>
            <div className="text-gray-600 text-sm md:text-base">{t('projects.stats.year')}</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
            <div className="text-2xl md:text-3xl font-semibold mb-1">∞</div>
            <div className="text-gray-600 text-sm md:text-base">{t('projects.stats.ideas')}</div>
          </div>
          <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
            <div className="text-2xl md:text-3xl font-semibold mb-1">100</div>
            <div className="text-gray-600 text-sm md:text-base">{t('projects.stats.days')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}