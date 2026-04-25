/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Compass, 
  Binary, 
  BrainCircuit, 
  Database, 
  Terminal, 
  ShieldAlert, 
  Layers, 
  Lightbulb, 
  CheckCircle2,
  Cpu,
  Workflow
} from 'lucide-react';

const corePillars = [
  { icon: Compass, title: 'Introduction to AI', desc: 'History, Evolution & Applications across industries.' },
  { icon: BrainCircuit, title: 'Machine Learning', desc: 'Types, Tools, Techniques & Real-World Use Cases.' },
  { icon: Database, title: 'Data Analytics', desc: 'Concepts, Tools & Decision-Making frameworks.' },
  { icon: Terminal, title: 'Python Programming', desc: 'Fundamentals, Libraries & Seamless AI Integration.' },
  { icon: Layers, title: 'Algorithms & Models', desc: 'DL, NLP, Computer Vision & Advanced Classification.' },
  { icon: ShieldAlert, title: 'Ethics & Standards', desc: 'Cloud AI, MLOps, Ethics & Global Compliance.' }
];

const projectSpectrum = [
  { level: 'Grades 3–5', projects: ['AI Games', 'Alexa Voice Commands', 'Pattern Puzzles'] },
  { level: 'Grades 6–10', projects: ['Chatbots', 'AI Science Experiments', 'Coding Applications'] },
  { level: 'Grades 11–12', projects: ['Data Analysis', 'Robotics', 'AI Ethics Case Studies'] },
  { level: 'Undergraduate', projects: ['Medical Imaging AI', 'Finance ML Models', 'Hackathons'] }
];

export default function LearningPath() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase mb-8 tracking-widest"
          >
            <Workflow size={14} />
            The AI Learning Continuum
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-slate-900">Pedagogy of <span className="text-gradient">Impact</span></h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-sans font-medium">
            Project-Centric Learning (PCL) ensures that every concepts is mapped to contextual, age-appropriate, and industry-aligned applications.
          </p>
        </header>

        {/* Core Pillars */}
        <div className="text-center mb-16">
           <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Six Foundational Pillars</h2>
           <p className="text-slate-500 font-medium">The modules that build progressively with learner maturity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {corePillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
            >
              <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <pillar.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Learning by Doing */}
        <section className="mb-32">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-indigo-600/20 blur-3xl opacity-30" />
                 <div className="relative bg-white rounded-[60px] border border-slate-200 p-12 shadow-2xl">
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                          <Binary size={24} />
                       </div>
                       <h3 className="text-3xl font-display font-bold text-slate-900 text-gradient">360° Learning</h3>
                    </div>
                    <div className="space-y-6">
                       <p className="text-slate-600 font-medium leading-relaxed italic">
                         "Our training landscape empowers individuals not only to adapt to the AI revolution but to lead it with responsibility, innovation, and impact."
                       </p>
                       <ul className="space-y-4">
                          {[
                            'Early AI Literacy at the school level',
                            'Strong Employability Skills at undergraduate level',
                            'Research & Innovation at postgraduate level',
                            'Industry Transformation through reskilling'
                          ].map(item => (
                            <li key={item} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                               <CheckCircle2 size={18} className="text-indigo-600" />
                               {item}
                            </li>
                          ))}
                       </ul>
                    </div>
                 </div>
              </div>
              <div className="space-y-12">
                 <h2 className="text-4xl font-display font-bold text-slate-900">Project <br /><span className="text-indigo-600">Methodology</span></h2>
                 <div className="space-y-8">
                    {projectSpectrum.map((lvl, idx) => (
                      <div key={idx} className="group">
                         <h4 className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-3">{lvl.level}</h4>
                         <div className="flex flex-wrap gap-3">
                            {lvl.projects.map(proj => (
                              <span key={proj} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 group-hover:border-indigo-200 transition-colors">
                                 {proj}
                              </span>
                            ))}
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Global Impact CTA */}
        <section className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[60px] p-16 lg:p-24 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
           <div className="relative z-10">
              <Cpu size={64} className="text-cyan-400 mx-auto mb-10" />
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Nurturing Innovators</h2>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
                Join a world-class training ecosystem where academic rigor meets real-world application.
              </p>
              <button className="px-12 py-5 bg-white text-slate-900 rounded-full font-bold text-xl hover:bg-cyan-400 transition-all shadow-2xl">
                 Start Your Path
              </button>
           </div>
        </section>
      </div>
    </div>
  );
}
