import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Terminal, Download } from 'lucide-react';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: "Sortify Packs.",
    version: "v1.0.55LR",
    description: "Telegram стикер/эмодзи менеджер с функциями сортировки, изменения порядка и работы с архивными паками. Удобное управление коллекцией стикеров.",
    tags: ["Telegram", "Java", "Xposed", "UI/UX"],
    image: "/pj1.jpeg",
    link: "https://t.me/smasheleeplugins/6"
  },
  {
    id: 2,
    title: "Useful Things",
    version: "v1.9.56BR",
    description: "Набор улучшений качества жизни: генерация QR кодов, калькулятор, погода и ИИ помощник. В РАЗРАБОТКЕ.",
    tags: ["Telegram", "Java", "Python", "AI"],
    image: "/pj2.jpeg",
    link: "#"
  }
];

export const Projects: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return (
    <section className="py-20 px-4 relative z-10 w-full flex flex-col justify-center items-center">
      
      <div className="max-w-[90%] w-full">
        <div className="mb-12 flex items-end gap-4">
          <div>
            <h2 className="font-chaos text-5xl md:text-6xl text-white relative z-10">
              ACTIVE<br/><span className="text-saile-accent drop-shadow-[0_0_15px_rgba(196,214,77,0.5)]">PROCESSES</span>
            </h2>
            <div className="h-1 w-full bg-saile-accent mt-2"></div>
          </div>
          <div className="hidden md:block pb-2 font-mono text-xs text-saile-accent/50">
             // SELECT_MODULE_TO_EXPAND
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-[750px] md:h-[600px] w-full">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              layout
              onClick={() => setActiveId(project.id)}
              onHoverStart={() => setActiveId(project.id)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer border border-saile-accent/20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] min-w-0 ${
                activeId === project.id 
                  ? 'flex-[10] bg-saile-dark' 
                  : 'flex-[1] bg-black/40 hover:bg-saile-accent/5'
              }`}
            >
              <AnimatePresence mode="wait">
                {activeId === project.id && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 z-0"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover filter grayscale contrast-125 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-saile-dark via-saile-dark/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {activeId !== project.id && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="md:-rotate-90 md:whitespace-nowrap flex md:block items-center justify-center w-full px-6 md:px-0">
                    <span className="font-chaos text-2xl text-white/50 tracking-widest truncate">{project.title}</span>
                  </div>
                </div>
              )}

              <div className={`relative z-10 h-full p-6 md:p-12 flex flex-col justify-end ${activeId === project.id ? 'opacity-100' : 'opacity-0 hidden'}`}>
                
                <div className="absolute top-6 right-6 font-chaos text-6xl md:text-9xl text-saile-accent/5 pointer-events-none select-none">
                  0{project.id}
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={activeId === project.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="max-w-4xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Terminal className="text-saile-accent shrink-0" size={24} />
                    <div>
                      <h3 className="font-chaos text-3xl md:text-6xl text-white leading-none">{project.title}</h3>
                      <p className="font-mono text-xs text-saile-accent/60 mt-1">{project.version}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-black/40 border border-white/10 hover:border-saile-accent/50 text-saile-accent text-xs md:text-sm font-mono font-bold uppercase tracking-wider rounded-lg backdrop-blur-md transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="font-mono text-white/80 text-sm md:text-lg max-w-2xl mb-10 leading-relaxed border-l-4 border-saile-accent/50 pl-6 bg-black/20 py-2 rounded-r-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-col md:flex-row gap-4">
                    {project.link !== "#" ? (
                      <a 
                        href={project.link}
                        className="group flex items-center justify-center gap-3 bg-saile-accent text-saile-dark px-8 py-4 rounded-xl font-bold font-mono text-sm hover:bg-white transition-colors"
                      >
                        <Download size={18} /> 
                        <span>СКАЧАТЬ</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <div className="group relative flex items-center justify-center gap-3 bg-black/40 border border-saile-accent/30 text-white/60 px-8 py-4 rounded-xl font-bold font-mono text-sm cursor-pointer">
                        <Terminal size={18} /> 
                        <span>СКАЧАТЬ</span>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="glass-card bg-saile-dark/80 backdrop-blur-xl border border-saile-accent/30 px-4 py-3 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-saile-accent opacity-50 rounded-tl-2xl"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-saile-accent opacity-50 rounded-br-2xl"></div>
                            <div className="font-mono text-xs text-saile-accent/80 whitespace-nowrap">
                              В РАЗРАБОТКЕ
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};