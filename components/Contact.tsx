import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, SendHorizontal, Github, Building2 } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="relative z-10 mb-32 px-4">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card bg-saile-dark/80 backdrop-blur-xl border border-saile-accent/30 p-6 md:p-8 rounded-2xl relative overflow-hidden max-w-2xl mx-auto"
        >
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-saile-accent opacity-50 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-saile-accent opacity-50 rounded-br-2xl"></div>
          
          <div className="text-center">
            <h3 className="font-chaos text-3xl md:text-4xl text-white mb-2 leading-none">
              SYSTEM<br/>
              <span className="text-saile-accent">UPLINK</span>
            </h3>
            <div className="h-1 w-20 bg-saile-accent mt-4 mx-auto"></div>
            <p className="font-mono text-xs text-saile-accent/60 mt-4 leading-relaxed">
              STATUS: ONLINE<br/>
              ENCRYPTION: ENABLED<br/>
              PROTOCOL: TCP/IP
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 gap-4 mt-12"
          >
            {[
              { name: "Telegram", handle: "@smashelee", icon: <Send />, link: "https://t.me/smashelee", color: "hover:border-blue-400 hover:text-blue-400" },
              { name: "Discord", handle: "smashelee", icon: <Building2 />, link: "https://discord.com/users/717728059587035236", color: "hover:border-indigo-400 hover:text-indigo-400" },
              { name: "GitHub", handle: "github.com/smashelee", icon: <Github />, link: "https://github.com/smashelee", color: "hover:border-white hover:text-white" },
              { name: "Email", handle: "kirymewwoffc@gmail.com", icon: <Mail />, link: "mailto:kirymewwoffc@gmail.com?subject=Plugin Development Inquiry", color: "hover:border-red-400 hover:text-red-400" }
            ].map((item, i) => (
               <a 
                 key={i} 
                 href={item.link}
                 className={`group flex items-center gap-6 bg-black/20 border border-white/5 p-6 rounded-xl transition-all duration-300 hover:bg-black/40 ${item.color}`}
               >
                  <div className="bg-white/5 p-3 rounded-lg text-white/70 group-hover:text-inherit transition-colors">
                     {item.icon}
                  </div>
                  <div className="flex flex-col">
                     <span className="font-chaos text-lg text-white group-hover:text-inherit transition-colors">{item.name}</span>
                     <span className="font-mono text-xs text-white/30">{item.handle}</span>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 text-inherit">
                     <SendHorizontal size={18} />
                  </div>
               </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};