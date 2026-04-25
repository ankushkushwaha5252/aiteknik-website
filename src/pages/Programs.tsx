/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  BookOpen, 
  Code, 
  Microscope, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    level: "School Level (Grades 3–12)",
    title: "Tiny Techs & Next Gen Coders",
    theme: "Curiosity & Exploration",
    icon: Sparkles,
    desc: "Inspiring curiosity and building foundational AI knowledge through hands-on, gamified learning.",
    objectives: ["Discovery AI (Grades 3-5)", "AI Pathway (Grades 6-10)", "Pre-University AI (Grades 11-12)"],
    outcome: "Critical thinking, logical reasoning, and early exposure to AI ethics."
  },
  {
    level: "Undergraduate Programs",
    title: "360-UG Edition",
    theme: "Specialization & Application",
    icon: Code,
    desc: "Equipping students with industry-relevant AI competencies and specialized tracks.",
    objectives: ["Healthcare AI Track", "Finance AI Track", "Robotics & Data Science"],
    outcome: "Job-ready graduates with strong employability skills in AI/ML."
  },
  {
    level: "Postgraduate & Research",
    title: "AI-Nexus",
    theme: "Advanced Research",
    icon: Microscope,
    desc: "Advancing deep learning and domain-specific research aligned with industry needs.",
    objectives: ["Climate AI Research", "Medical Imaging AI", "Cybersecurity & AR/VR"],
    outcome: "AI leaders capable of driving impactful research and enterprise solutions."
  },
  {
    level: "Corporate & Professional",
    title: "AI-Catalyst",
    theme: "Workforce Transformation",
    icon: Briefcase,
    desc: "Enabling organizations to adopt, scale, and optimize AI in decision-making.",
    objectives: ["Skilling & Reskilling", "MLOps Integration", "ROI-focused Implementation"],
    outcome: "A future-ready workforce empowered for efficiency and competitive advantage."
  }
];

export default function Programs() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold uppercase mb-8 tracking-widest"
          >
            <BookOpen size={14} />
            Structured AI Learning Continuum
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-slate-900">Training <span className="text-gradient">Spectrum</span></h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-sans font-medium">
            From foundational curiosity to advanced enterprise research. Our progressive curriculum adapts to the cognitive level of every learner.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {programs.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[50px] border border-slate-200 p-10 lg:p-14 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 border border-cyan-100">
                    <p.icon size={32} />
                  </div>
                  <div>
                    <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-1">{p.level}</p>
                    <h3 className="text-3xl font-display font-bold text-slate-900">{p.title}</h3>
                  </div>
                </div>

                <div className="bg-slate-50 inline-block px-4 py-2 rounded-xl mb-8 border border-slate-100">
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-tight mr-2">Theme:</span>
                  <span className="text-slate-900 font-bold text-sm tracking-tight">{p.theme}</span>
                </div>

                <p className="text-slate-600 text-lg mb-10 leading-relaxed font-sans font-medium">
                  {p.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  <div className="space-y-4">
                    <h4 className="text-slate-900 font-bold flex items-center gap-2">
                       <Target size={18} className="text-cyan-500" />
                       Key Objectives
                    </h4>
                    <ul className="space-y-3">
                      {p.objectives.map(obj => (
                        <li key={obj} className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                          <CheckCircle2 size={16} className="text-indigo-500" />
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-slate-900 font-bold flex items-center gap-2">
                       <Sparkles size={18} className="text-indigo-500" />
                       Core Outcome
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {p.outcome}
                    </p>
                  </div>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all">
                  Inquire Now <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-32 p-12 lg:p-20 bg-slate-900 text-white rounded-[60px] text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-mesh opacity-10" />
           <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold mb-6">Built on NEP 2020 Standards</h2>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed">
                Our curriculum aligns with NEP 2020, UGC, AICTE, and NSDC frameworks to ensure that global AI competencies are met at every academic level.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 {['NEP 2020', 'UGC', 'AICTE', 'NSDC', 'Global Frameworks'].map(tag => (
                   <span key={tag} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest">{tag}</span>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
