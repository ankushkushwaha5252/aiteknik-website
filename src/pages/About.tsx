/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Eye, Globe, Shield, Rocket, Award, History } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Rocket, title: 'Inspiration', desc: 'Inspiring the next generation of AI leaders.' },
    { icon: Globe, title: 'Global Impact', desc: 'Bridging the intelligence gap worldwide.' },
    { icon: Shield, title: 'Ethical AI', desc: 'Promoting responsible and safe AI development.' },
    { icon: Target, title: 'Excellence', desc: 'Uncompromising quality in training and solutions.' }
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase mb-8 tracking-widest shadow-sm">
             <Award size={14} />
             DPIIT Recognized Startup
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-slate-900">About <span className="text-gradient">AITekNix</span></h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-sans">
            AITEKNIX Center of Excellence (AICoE) is a pioneering institution committed to democratizing AI knowledge through innovative education, training, and AI-powered solutions.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-white p-12 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
            <Eye className="text-cyan-600 w-12 h-12 mb-8" />
            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">Our Vision</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              To be a global leader in AI-driven education and empowerment, shaping the future by democratizing AI knowledge and equipping students, staff, and leaders to thrive in an increasingly digital and automated world.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
            <Target className="text-indigo-600 w-12 h-12 mb-8" />
            <h2 className="text-3xl font-display font-bold mb-6 text-slate-900">Our Mission</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              To skill, reskill, and upskill individuals in AI, Web3, and no-code technologies, empowering students, professionals, and leaders across industries to drive innovation, ethical AI practices, and digital transformation.
            </p>
          </div>
        </div>

        {/* Founder Bio */}
        <div className="mb-32 bg-white rounded-[60px] border border-slate-200 p-12 lg:p-20 shadow-xl overflow-hidden relative">
          {/* ... existing bio content ... */}
          <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
             <div className="bg-mesh w-full h-full" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-[40px] rotate-3 opacity-10" />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                className="rounded-[40px] relative z-10 w-full shadow-2xl transition-transform hover:-rotate-1 duration-500"
                alt="Dr. Mohammed Khursheed Akhtar"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl">
                 <h4 className="text-slate-900 font-bold text-xl mb-1">Dr. Mohammed Khursheed Akhtar</h4>
                 <p className="text-indigo-600 text-sm font-bold uppercase tracking-widest">Founder & CEO</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-widest mb-2">
                <History size={16} />
                35+ Years of Excellence
              </div>
              <h2 className="text-4xl font-display font-bold text-slate-900 leading-tight">Mastering the Cognitive <span className="text-gradient">Era</span></h2>
              <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm">
                <p>
                  Dr. Mohammed Khursheed Akhtar is a visionary leader with over 35 years of experience in education, technology, and AI. He founded AICoE to democratize AI knowledge across all stages of life, from Grade 3 students to corporate leaders.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Curriculum Integration Across K-12',
                    'Skill Alignment with NEP/NSDC',
                    'High-Impact Faculty Development',
                    'SDG-Driven Research Enablement',
                    'Global Academic Collaboration',
                    'Ethical AI Advocacy'
                  ].map(obj => (
                    <div key={obj} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                      {obj}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="text-center mb-32">
          <h2 className="text-4xl font-display font-bold mb-16 text-slate-900">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: Rocket, title: 'Innovation', desc: 'Developing solutions for positive social impact.' },
              { icon: Shield, title: 'Responsibility', desc: 'Upholding fairness, transparency, and inclusivity.' },
              { icon: Globe, title: 'Collaboration', desc: 'Fostering partnerships in academia & industry.' },
              { icon: Award, title: 'Excellence', desc: 'Delivering rigorous, relevant, future-ready AI.' },
              { icon: Globe, title: 'Sustainability', desc: 'Supporting environmental and social goals.' }
            ].map((v, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm group"
              >
                <div className="w-12 h-12 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <v.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
