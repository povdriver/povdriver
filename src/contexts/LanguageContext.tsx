import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    'nav.workWithMe': 'Work With Me',
    
    // Hero
    'hero.greeting': 'Hello there',
    'hero.name': "I'm povdriver",
    'hero.contentCreator': 'Content Creator',
    'hero.create': "Let's Create Together",
    
    // About
    'about.title': 'About Me',
    'about.p1': "Hey! I'm <strong>povdriver</strong>, a content creator passionate about sharing valuable resources, insights, and creative work with my community.",
    'about.p2': "Whether you're a follower looking for exclusive materials, or a brand seeking collaboration, I'm here to connect, create, and deliver exceptional content experiences.",
    'about.p3': 'I specialize in creating engaging content, providing useful resources like spreadsheets and guides, and offering personalized online services to help you achieve your goals.',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'Professional services for brands and personalized offerings for my community.',
    'services.content.title': 'Content Creation',
    'services.content.desc': 'Custom video content, social media posts, and creative campaigns tailored to your brand.',
    'services.consulting.title': 'Consulting & Strategy',
    'services.consulting.desc': 'One-on-one consulting sessions to help grow your online presence and engagement.',
    'services.brand.title': 'Brand Partnerships',
    'services.brand.desc': 'Sponsored content and brand collaborations that resonate with my audience.',
    'services.community.title': 'Community Management',
    'services.community.desc': 'Building and engaging communities through authentic content and interaction.',
    'services.resources.title': 'Custom Resources',
    'services.resources.desc': 'Personalized spreadsheets, templates, and tools created for your specific needs.',
    'services.exclusive.title': 'Exclusive Content',
    'services.exclusive.desc': 'Premium content packages and exclusive materials for dedicated followers.',
    
    // Projects
    'projects.title': 'Current Projects',
    'projects.subtitle': 'What I\'m working on right now. Building, creating, and making things happen.',
    'projects.progress': 'Progress',
    'projects.stats.active': 'Active Projects',
    'projects.stats.year': 'Current Year',
    'projects.stats.ideas': 'Ideas Brewing',
    'projects.stats.days': 'Days Challenge',
    
    // Resources
    'resources.title': 'Resources',
    'resources.subtitle': 'Free and premium resources to help you on your creator journey. Download spreadsheets, guides, and exclusive materials.',
    'resources.calendar.title': 'Content Calendar Template',
    'resources.calendar.desc': 'Plan your content strategy with this comprehensive monthly calendar.',
    'resources.growth.title': 'Growth Strategy Guide',
    'resources.growth.desc': 'A complete guide to growing your online presence from 0 to 10k followers.',
    'resources.analytics.title': 'Analytics Tracker',
    'resources.analytics.desc': 'Track your social media metrics and analyze your growth patterns.',
    'resources.partnership.title': 'Brand Partnership Kit',
    'resources.partnership.desc': 'Everything brands need to know about working with content creators.',
    'resources.budget.title': 'Budget Planner',
    'resources.budget.desc': 'Manage your creator business finances and track expenses.',
    'resources.ideas.title': 'Content Ideas Vault',
    'resources.ideas.desc': '100+ content ideas to never run out of inspiration.',
    'resources.download': 'Download',
    'resources.premium.title': 'Want exclusive content?',
    'resources.premium.desc': 'Subscribe to get access to premium spreadsheets, templates, and resources delivered monthly.',
    'resources.premium.cta': 'Join Premium',
    
    // Contact
    'contact.title': "Let's Connect",
    'contact.subtitle': "Whether you're a follower, a brand, or just want to say hi — I'd love to hear from you.",
    'contact.followers.title': 'For Followers',
    'contact.followers.desc': "Got questions? Need help with a resource? Want to share feedback? I'm always happy to connect with my community.",
    'contact.brands.title': 'For Brands',
    'contact.brands.desc': "Interested in collaborations, partnerships, or sponsored content? Let's create something amazing together.",
    'contact.follow': 'Follow Me',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    
    // Common
    'common.spreadsheet': 'Spreadsheet',
    'common.pdf': 'PDF',
  },
  es: {
    // Navigation
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.resources': 'Recursos',
    'nav.contact': 'Contacto',
    'nav.workWithMe': 'Trabaja Conmigo',
    
    // Hero
    'hero.greeting': 'Hola',
    'hero.name': 'Soy povdriver',
    'hero.contentCreator': 'Creador de Contenido',
    'hero.create': 'Creemos Juntos',
    
    // About
    'about.title': 'Acerca de Mí',
    'about.p1': '¡Hola! Soy <strong>povdriver</strong>, un creador de contenido apasionado por compartir recursos valiosos, ideas y trabajo creativo con mi comunidad.',
    'about.p2': 'Ya seas un seguidor buscando materiales exclusivos, o una marca que busca colaboración, estoy aquí para conectar, crear y entregar experiencias de contenido excepcionales.',
    'about.p3': 'Me especializo en crear contenido atractivo, proporcionar recursos útiles como hojas de cálculo y guías, y ofrecer servicios en línea personalizados para ayudarte a alcanzar tus objetivos.',
    
    // Services
    'services.title': 'Servicios',
    'services.subtitle': 'Servicios profesionales para marcas y ofertas personalizadas para mi comunidad.',
    'services.content.title': 'Creación de Contenido',
    'services.content.desc': 'Contenido de video personalizado, publicaciones en redes sociales y campañas creativas adaptadas a tu marca.',
    'services.consulting.title': 'Consultoría y Estrategia',
    'services.consulting.desc': 'Sesiones de consultoría individuales para ayudarte a crecer tu presencia en línea y el engagement.',
    'services.brand.title': 'Colaboraciones con Marcas',
    'services.brand.desc': 'Contenido patrocinado y colaboraciones con marcas que resuenan con mi audiencia.',
    'services.community.title': 'Gestión de Comunidad',
    'services.community.desc': 'Construyendo y comprometiendo comunidades a través de contenido auténtico e interacción.',
    'services.resources.title': 'Recursos Personalizados',
    'services.resources.desc': 'Hojas de cálculo, plantillas y herramientas personalizadas creadas para tus necesidades específicas.',
    'services.exclusive.title': 'Contenido Exclusivo',
    'services.exclusive.desc': 'Paquetes de contenido premium y materiales exclusivos para seguidores dedicados.',
    
    // Projects
    'projects.title': 'Proyectos Actuales',
    'projects.subtitle': 'Lo que estoy trabajando ahora. Construyendo, creando y haciendo que suceda.',
    'projects.progress': 'Progreso',
    'projects.stats.active': 'Proyectos Activos',
    'projects.stats.year': 'Año Actual',
    'projects.stats.ideas': 'Ideas Fermentando',
    'projects.stats.days': 'Desafío de Días',
    
    // Resources
    'resources.title': 'Recursos',
    'resources.subtitle': 'Recursos gratuitos y premium para ayudarte en tu viaje como creador. Descarga hojas de cálculo, guías y materiales exclusivos.',
    'resources.calendar.title': 'Plantilla de Calendario de Contenido',
    'resources.calendar.desc': 'Planifica tu estrategia de contenido con este calendario mensual completo.',
    'resources.growth.title': 'Guía de Estrategia de Crecimiento',
    'resources.growth.desc': 'Una guía completa para hacer crecer tu presencia en línea de 0 a 10k seguidores.',
    'resources.analytics.title': 'Rastreador de Analíticas',
    'resources.analytics.desc': 'Rastrea tus métricas de redes sociales y analiza tus patrones de crecimiento.',
    'resources.partnership.title': 'Kit de Colaboración con Marcas',
    'resources.partnership.desc': 'Todo lo que las marcas necesitan saber sobre trabajar con creadores de contenido.',
    'resources.budget.title': 'Planificador de Presupuesto',
    'resources.budget.desc': 'Gestiona las finanzas de tu negocio como creador y rastrea gastos.',
    'resources.ideas.title': 'Banco de Ideas de Contenido',
    'resources.ideas.desc': 'Más de 100 ideas de contenido para nunca quedarte sin inspiración.',
    'resources.download': 'Descargar',
    'resources.premium.title': '¿Quieres contenido exclusivo?',
    'resources.premium.desc': 'Suscríbete para obtener acceso a hojas de cálculo premium, plantillas y recursos entregados mensualmente.',
    'resources.premium.cta': 'Únete a Premium',
    
    // Contact
    'contact.title': 'Conectemos',
    'contact.subtitle': 'Ya seas un seguidor, una marca, o simplemente quieras saludar — me encantaría saber de ti.',
    'contact.followers.title': 'Para Seguidores',
    'contact.followers.desc': '¿Tienes preguntas? ¿Necesitas ayuda con un recurso? ¿Quieres compartir comentarios? Siempre estoy feliz de conectar con mi comunidad.',
    'contact.brands.title': 'Para Marcas',
    'contact.brands.desc': '¿Interesado en colaboraciones, asociaciones o contenido patrocinado? Creemos algo increíble juntos.',
    'contact.follow': 'Sígueme',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    
    // Common
    'common.spreadsheet': 'Hoja de cálculo',
    'common.pdf': 'PDF',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}