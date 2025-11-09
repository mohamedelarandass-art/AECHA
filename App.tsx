import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CultureSection from './components/CultureSection';
import PillarsSection from './components/PillarsSection';
import TeamTeaserSection from './components/TeamTeaserSection';
import TeamPage from './pages/TeamPage';
import VisionPage from './pages/VisionPage';
import ProgramPage from './pages/ProgramPage';
import TaVoixPage from './pages/TaVoixPage';

export type Language = 'fr' | 'ar';
export type NavigateFunction = (path: string) => void;

const HomePage = ({ navigate, language }: { navigate: NavigateFunction, language: Language }) => (
  <>
    <Hero />
    <div className="p-4 sm:p-6 space-y-6">
      <CultureSection />
      <PillarsSection navigate={navigate} />
      <TeamTeaserSection navigate={navigate} />
    </div>
  </>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('/');
  const [language, setLanguage] = useState<Language>('fr');

  const navigate: NavigateFunction = (path: string) => {
    const [basePath] = path.split('?');
    if (basePath !== currentPage.split('?')[0]) {
      setCurrentPage(path);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll('.fade-in-up-section');
      sections.forEach(section => observer.observe(section));
    }, 100);

    return () => {
        clearTimeout(timeoutId);
        observer.disconnect();
    };
  }, [currentPage]);

  let ComponentToRender;
  switch (currentPage.split('?')[0]) {
    case '/equipe':
      ComponentToRender = <TeamPage />;
      break;
    case '/vision':
      ComponentToRender = <VisionPage navigate={navigate} />;
      break;
    case '/programme':
      ComponentToRender = <ProgramPage navigate={navigate} language={language} />;
      break;
    case '/ta-voix':
      ComponentToRender = <TaVoixPage language={language} />;
      break;
    default:
      ComponentToRender = <HomePage navigate={navigate} language={language} />;
  }

  return (
    <div className="bg-[#F3F4F0] min-h-screen text-[#3A4A3E]">
      <Header 
        navigate={navigate} 
        currentPage={currentPage}
        language={language}
        setLanguage={setLanguage} 
      />
      <main>
        {ComponentToRender}
      </main>
      <footer className="text-center p-4 text-[#6B7B71] text-sm">
        <p>&copy; 2024 AECHA. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default App;