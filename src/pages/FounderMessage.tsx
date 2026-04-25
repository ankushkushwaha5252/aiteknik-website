/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote, Heart, Award, GraduationCap, Microscope, Rocket, Globe } from 'lucide-react';

export default function FounderMessage() {
  const pillars = [
    { 
      icon: GraduationCap, 
      title: 'Education for All', 
      desc: 'Making AI literacy accessible, inclusive, and impactful for every learner.' 
    },
    { 
      icon: Microscope, 
      title: 'Technology for Empowerment', 
      desc: 'Enabling individuals to use AI to create, innovate, and solve real-world problems.' 
    },
    { 
      icon: Award, 
      title: 'Mentorship for Life', 
      desc: 'Guiding learners at every stage, from foundational skills to advanced professional excellence.' 
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[60px] border border-slate-200 p-8 md:p-16 lg:p-24 shadow-xl relative overflow-hidden"
        >
          {/* Decorative mesh background */}
          <div className="absolute inset-0 bg-mesh opacity-5 pointer-events-none" />
          
          <header className="relative z-10 mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-10">
              <Heart size={14} className="animate-pulse" />
              Visionary Leadership
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 italic leading-tight">
              A Message from <br />
              <span className="text-gradient">Our Founder</span>
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full" />
          </header>

          <div className="relative z-10 space-y-10">
            <div className="flex gap-4">
              <Quote className="text-cyan-500 shrink-0 opacity-40" size={48} />
              <div className="space-y-6">
                <p className="text-slate-600 text-xl font-medium leading-relaxed font-sans italic">
                  "Education must elevate humanity. Technology must empower it."
                </p>
                <p className="text-slate-500 leading-relaxed font-medium">
                  Dear Teachers, Parents, Students, and Lifelong Learners,
                </p>
                <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                  <p>
                    It is with great pride and purpose that I welcome you to the AITekNix Center of Excellence, an institution built on the belief that the future belongs not only to those who understand technology but to those who use it responsibly, ethically, and creatively.
                  </p>
                  <p>
                    With more than three decades of experience across education and technology, from King Abdulaziz University to global academic and industry collaborations, I have witnessed one powerful truth: Today, as the world enters a new era shaped by Artificial Intelligence, our mission at AICoE is clear.
                  </p>
                  <p className="bg-slate-50 p-6 rounded-3xl border-l-4 border-indigo-500 font-bold text-indigo-900">
                    To skill, reskill, and upskill students, teachers, professionals, and leaders for an AI-driven world—while preserving the human values that define us.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
              {pillars.map((p, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-indigo-600 border border-slate-100 shadow-sm">
                    <p.icon size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900">{p.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
              <p>
                AI is not just a subject; it is a new language, a new literacy, and a new opportunity. Whether you are a student preparing for the future, a teacher shaping the next generation, or a professional aiming to stay relevant, AITekNix Center of Excellence is your partner in transformation.
              </p>
              <p className="text-2xl font-display font-bold text-slate-900 leading-tight">
                Together, we will walk this journey; from <span className="text-indigo-600">Earth to Cloud</span>, from <span className="text-indigo-600">Learning to Leading</span>, from <span className="text-indigo-600">Curiosity to Competence</span>.
              </p>
            </div>

            <footer className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                      className="w-full h-full object-cover"
                      alt="Dr. Mohammed Khursheed Akhtar"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Dr. Mohammed Khursheed Akhtar</h4>
                    <p className="text-indigo-600 text-sm font-bold uppercase tracking-widest">Founder & CEO</p>
                  </div>
               </div>
               <div className="flex gap-4">
                 <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col items-center">
                    <Globe className="text-indigo-600 mb-2" size={24} />
                    <span className="text-[10px] font-bold text-indigo-700 uppercase tracking-tighter">Human Centered AI</span>
                 </div>
                 <div className="p-4 bg-cyan-50 rounded-2xl border border-cyan-100 flex flex-col items-center">
                    <Rocket className="text-cyan-600 mb-2" size={24} />
                    <span className="text-[10px] font-bold text-cyan-700 uppercase tracking-tighter">Lifetime Mentorship</span>
                 </div>
               </div>
            </footer>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
