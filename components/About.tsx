import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Server, Database, Activity, Code2, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const specs = [
    { label: "PRIMARY_LANG", val: "Java 17", icon: <Coffee size={18} /> },
    { label: "FRAMEWORK", val: "Xposed", icon: <Server size={18} /> },
    { label: "PLATFORM", val: "exteraGram", icon: <Activity size={18} /> },
    { label: "INTEGRATION", val: "Chaquopy", icon: <Database size={18} /> },
    { label: "SCRIPTING", val: "Python 3.11", icon: <Terminal size={18} /> },
    { label: "HOOKING", val: "Aliucord", icon: <Code2 size={18} /> },
  ];

  return (
    <section className="relative z-10 -mt-20 mb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card bg-saile-dark/80 backdrop-blur-xl border border-saile-accent/30 p-8 md:p-16 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-saile-accent opacity-50 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-saile-accent opacity-50 rounded-br-3xl"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="w-full md:w-1/3 text-center md:text-left">
               <h3 className="font-chaos text-4xl md:text-5xl text-white mb-2">KERNEL<br/><span className="text-saile-accent">SPECS</span></h3>
               <div className="h-1 w-20 bg-saile-accent mt-4 mx-auto md:mx-0"></div>
               <p className="font-mono text-xs text-saile-accent/60 mt-2">SYS_ID: SMASHELEE</p>
            </div>

            <div className="w-full md:w-2/3">
              <p className="font-body text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Разрабатываю <span className="font-mono text-saile-accent text-xl font-bold">Java плагины</span> для exteraGram. 
                Использую <span className="font-mono text-saile-accent text-xl font-bold">Xposed hooking</span> для модификации поведения Telegram, создаю кастомные компоненты интерфейса. 
                Приоритеты — стабильность плагинов, оптимизация производительности и бесшовная интеграция с <span className="font-mono text-saile-accent text-xl font-bold">Chaquopy</span>.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {specs.map((spec, i) => ( 
                  <div key={i} className="bg-black/40 border border-white/5 p-4 rounded-lg hover:border-saile-accent/50 transition-colors group">
                    <div className="text-saile-accent mb-2 group-hover:scale-110 transition-transform origin-left">{spec.icon}</div>
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{spec.label}</div>
                    <div className="font-mono text-sm text-white font-bold">{spec.val}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};