/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Handshake, GraduationCap, Microscope, Rocket, Globe2, Briefcase, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Partnerships() {
  const collaborationAreas = [
    { title: 'Curriculum Integration', desc: 'MoUs for curriculum integration and establishing dedicated AI labs.' },
    { title: 'Joint Certification', desc: 'Industry-recognized joint certifications for students and faculty.' },
    { icon: Microscope, title: 'AI Innovation Cells', desc: 'Setup of specialized research/innovation cells and hackathons.' },
    { icon: GraduationCap, title: 'Institutional Support', desc: 'Assistance for NAAC/AICTE/UGC recognition via skill frameworks.' }
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase mb-8 tracking-widest"
          >
            <Handshake size={14} />
            Institutional Collaboration
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-slate-900">Partner With <span className="text-gradient">Us</span></h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-sans font-medium">
            Join us in reshaping the future of AI education. We invite Schools, Colleges, and Universities to deliver AI-driven curriculum and research advancement.
          </p>
        </header>

        {/* Associate Partner Spotlight */}
        <section className="mb-32">
           <div className="bg-slate-900 rounded-[60px] p-12 lg:p-24 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-mesh opacity-10" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                 <div>
                    <span className="text-cyan-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Associate Partner</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                       Rayat Centenary Innovation & Incubation Foundation <span className="text-indigo-400">(RCIIF)</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-10 font-sans font-medium">
                       A research-driven nonprofit dedicated to nurturing innovators. Together, we equip aspiring founders and students with cutting-edge incubation, mentorship, and co-working facilities.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       {[
                         'Access to Research Labs',
                         'Business Development Support',
                         'Ecosystem Connectivity',
                         'Startup Incubation'
                       ].map(item => (
                         <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-200">
                            <CheckCircle2 size={18} className="text-cyan-400" />
                            {item}
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-12 rounded-[50px] text-center">
                    <Globe2 size={80} className="text-indigo-400 mx-auto mb-8 animate-pulse" />
                    <h4 className="text-2xl font-display font-bold mb-4">MOU Strategy</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-10 italic">
                      "Jointly empowering the next generation of innovators with industry-aligned training and a vibrant culture of innovation."
                    </p>
                    <button className="w-full py-4 bg-cyan-500 text-slate-900 font-bold rounded-2xl hover:bg-white transition-all">Explore RCIIF Lab Model</button>
                 </div>
              </div>
           </div>
        </section>

        {/* Collaboration Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {collaborationAreas.map((area, idx) => (
             <motion.div 
               key={idx}
               whileHover={{ y: -5 }}
               className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col group"
             >
                <div className="w-14 h-14 bg-slate-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-10 border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">
                  {area.icon ? <area.icon size={28} /> : <Handshake size={28} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8 flex-grow">{area.desc}</p>
                <div className="text-indigo-600 font-bold text-xs flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                   Institutional Scope <ChevronRight size={14} />
                </div>
             </motion.div>
          ))}
        </div>

        {/* Career & Research Opportunity */}
        <section className="bg-indigo-50 rounded-[60px] p-12 lg:p-20 border border-indigo-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
              <div className="bg-mesh w-full h-full" />
           </div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                 <h2 className="text-4xl font-display font-bold text-slate-900">Career & Research <span className="text-indigo-600">Opportunities</span></h2>
                 <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-2xl">
                   We bridge the gap between classroom theory and real-world impact by providing students and faculty with global exposure through project-based collaborations.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                    {[
                      'AI/ML Career Portfolio Mapping',
                      'Participation in National GenAI Research',
                      'Support for Student-led AI Startups',
                      'International Exchange Programs'
                    ].map(item => (
                      <div key={item} className="flex font-bold text-slate-800 gap-3 items-center text-sm">
                         <Rocket size={18} className="text-indigo-500" />
                         {item}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="flex items-center justify-center">
                 <div className="w-full h-full bg-white rounded-[40px] border border-indigo-100 shadow-xl flex flex-col items-center justify-center p-10 text-center group">
                    <Briefcase size={64} className="text-indigo-600 mb-6 group-hover:scale-110 transition-all" />
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Join the Ecosystem</h4>
                    <p className="text-slate-500 text-sm mb-8 font-medium">Ready to empower your campus with AI excellence?</p>
                    <button className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm tracking-tight shadow-lg shadow-indigo-200">Contact Partnership Lead</button>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
