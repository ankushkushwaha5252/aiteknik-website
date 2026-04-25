/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail, Award, BookOpen } from 'lucide-react';

const advisoryBoard = [
  { 
    name: 'Dr. Sangeeta Tripathi', 
    role: 'Research Head & Associate Professor', 
    org: 'Atharva Group of Institutes',
    bio: 'Ph.D. in Electronics Engineering with 17+ years in academia. Expert in AI applications and wearable antennas.', 
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    name: 'Dr. Gulnaz Parveen', 
    role: 'Founder & Principal', 
    org: 'Arsh International School',
    bio: 'Visionary educational leader with 20+ years experience. Featured in Forbes for contributions to inclusive education.', 
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    name: 'Dr. Drumm McNaughton', 
    role: 'CEO', 
    org: 'TheChangeLeader.com',
    bio: 'Recognized expert in higher education transformation and strategic leadership in AI integration.', 
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' 
  }
];

export default function Team() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-slate-900">Advisory <span className="text-gradient">Board</span></h1>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            A diverse collective of global researchers and educational leaders guiding the AITekNix vision.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {advisoryBoard.map((m, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-slate-200 group text-center shadow-lg shadow-slate-200/20"
            >
              <div className="w-40 h-40 mx-auto mb-8 rounded-[30px] overflow-hidden border-2 border-slate-100 group-hover:border-cyan-500 transition-colors bg-slate-50 shadow-inner">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-all duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2 text-slate-900">{m.name}</h3>
              <div className="mb-4">
                <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-1">{m.role}</p>
                <p className="text-slate-500 text-xs font-semibold">{m.org}</p>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium italic">"{m.bio}"</p>
              
              <div className="flex justify-center gap-4 text-slate-400">
                <a href="#" className="hover:text-cyan-600 transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="hover:text-cyan-600 transition-colors"><Twitter size={18} /></a>
                <a href="#" className="hover:text-cyan-600 transition-colors"><Mail size={18} /></a>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 p-12 bg-white rounded-[60px] border border-slate-200 shadow-sm relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl pointer-events-none" />
           <div className="relative z-10 text-center">
             <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-6 shadow-sm border border-slate-100">
               <Award size={32} />
             </div>
             <h2 className="text-3xl font-display font-bold mb-4 text-slate-900">Guided by Global Benchmarks</h2>
             <p className="text-slate-500 mb-10 font-medium max-w-2xl mx-auto">
               Under the leadership of Dr. Mohammed Khursheed Akhtar, AICoE aims to empower students, staff, and professionals with the tools necessary to thrive in an increasingly digital world.
             </p>
             <button className="px-8 py-4 bg-slate-900 text-white hover:bg-cyan-600 rounded-full font-bold transition-all shadow-xl shadow-slate-900/10 flex items-center gap-2 mx-auto">
                <BookOpen size={20} />
                View Strategic Advisory Charter
             </button>
           </div>
        </section>
      </div>
    </div>
  );
}
