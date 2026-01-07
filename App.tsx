import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Resources />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}