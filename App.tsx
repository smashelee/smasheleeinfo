import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Cursor } from './components/Cursor';
import { Footer } from './components/Footer';
import { FloatingSyntax } from './components/FloatingSyntax';
import { ScrollMarquee } from './components/ScrollMarquee';
import { ScrollProgress } from './components/ScrollProgress';
import { AnimatePresence, motion } from 'framer-motion';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

const App: React.FC = () => {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [godMode, setGodMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[konamiIndex]) {
        const nextIndex = konamiIndex + 1;
        if (nextIndex === KONAMI_CODE.length) {
          activateGodMode();
          setKonamiIndex(0);
        } else {
          setKonamiIndex(nextIndex);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex]);

  const activateGodMode = () => {
    setGodMode(true);
    setTimeout(() => setGodMode(false), 5000);
  };

  return (
    <main className="bg-saile-base min-h-screen text-white relative selection:bg-saile-accent selection:text-saile-base overflow-x-hidden">
      <ScrollProgress />
      <Cursor />
      
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2532&auto=format&fit=crop')] bg-cover bg-center opacity-20 fixed z-0 pointer-events-none mix-blend-overlay"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-saile-dark/80 via-transparent to-saile-dark/90 z-0 pointer-events-none"></div>
      <div className="fixed inset-0 radial-vignette pointer-events-none z-0"></div>
      
      <FloatingSyntax />

      <AnimatePresence>
        {godMode && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-saile-accent flex items-center justify-center pointer-events-none mix-blend-hard-light"
          >
            <h1 className="font-chaos text-9xl text-saile-dark animate-pulse">BUILD SUCCESSFUL</h1>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="relative z-10 flex flex-col gap-0">
        <Hero />
        <ScrollMarquee />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <style>{`
        .radial-vignette {
          background: radial-gradient(circle at center, transparent 0%, #02450F 90%);
        }
      `}</style>
    </main>
  );
};

export default App;