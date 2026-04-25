/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Building2, 
  GraduationCap, 
  Users2, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Rocket, 
  Layers,
  ArrowRight,
  Target,
  Cpu
} from 'lucide-react';

export default function BusinessModel() {
  const roadmapItems = [
    { title: 'Pilot AI Programs', desc: 'Running in multiple institutions simultaneously.' },
    { title: 'AI LMS MVP', desc: 'Launch of the Minimum Viable Product for education.' },
    { title: 'Institutional CoEs', desc: 'Establishing 2–3 flagship AICoEs in key regions.' },
    { title: 'Early Revenue', desc: 'Generating sustainable income from training & pilots.' }
  ];

  const revenueStreams = [
    { title: 'Institutional Subscriptions', desc: 'Scaleable revenue from schools and universities using our full ecosystem.' },
    { title: 'Training Fees per Cohort', desc: 'Direct revenue from structured AI training for students and professionals.' },
    { title: 'Corporate AI Programs', desc: 'Tailored programs for corporate L&D departments to bridge skill gaps.' },
    { title: 'Licensing AI Platforms', desc: 'Enterprise licensing for our indigenous AI LMS and OTT-based learning systems.' }
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase mb-8 tracking-widest"
          >
            <ShieldCheck size={14} />
            Center of Excellence Model
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-slate-900">Indigenous <span className="text-gradient">AI Capabilities</span></h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-sans font-medium">
            Bridging India's AI skill gap through structured partnerships, indigenous platforms, and national policy alignment.
          </p>
        </header>

        {/* The Innovation Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-slate-900 leading-tight">Beyond Courses: <br /><span className="text-indigo-600">Total Institutional Impact</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Most players focus only on courses or products. Our innovation lies in a <strong>Center of Excellence model</strong> that integrates education, faculty enablement, and real-world applications.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: GraduationCap, title: 'NEP 2020 Aligned', desc: 'Directly supporting national digital priorities and educational policies.' },
                  { icon: Building2, title: 'Institutional Focus', desc: 'Creating long-term capabilities rather than short-term training.' },
                  { icon: Users2, title: 'Faculty Enablement', desc: 'Training the trainers to ensure sustainable institutional growth.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 border border-indigo-100">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-[60px] p-1 shadow-2xl">
                <div className="bg-white rounded-[58px] p-12 lg:p-16">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Indigenous AI Ecosystem</h3>
                  <div className="relative h-64 flex items-center justify-center">
                     <div className="w-48 h-48 bg-indigo-50 rounded-full flex items-center justify-center border-2 border-indigo-100 border-dashed animate-spin-slow">
                        <Cpu className="text-indigo-600 animate-none" size={64} />
                     </div>
                     <div className="absolute top-0 flex flex-col items-center">
                        <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-indigo-100 font-bold text-xs text-indigo-600">AI-Enabled LMS</div>
                     </div>
                     <div className="absolute bottom-0 flex flex-col items-center">
                        <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-indigo-100 font-bold text-xs text-indigo-600">OTT Training</div>
                     </div>
                     <div className="absolute left-0 flex flex-col items-center">
                        <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-indigo-100 font-bold text-xs text-indigo-600">Faculty Hub</div>
                     </div>
                     <div className="absolute right-0 flex flex-col items-center">
                        <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-indigo-100 font-bold text-xs text-indigo-600">Curricula</div>
                     </div>
                  </div>
                  <p className="text-center text-slate-500 text-sm mt-12 font-medium">Built for India, Aligned with NEP 2020 and Skill India priorities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Model */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Diversified Revenue Strategy</h2>
            <p className="text-slate-500 font-medium">Ensuring sustainability through high-impact value blocks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {revenueStreams.map((stream, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-xl hover:shadow-indigo-500/5 transition-all text-center"
              >
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                   <Target size={28} />
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900 mb-4">{stream.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{stream.desc}</p>
                <div className="mt-8 pt-8 border-t border-slate-50 text-indigo-600 font-bold text-xs uppercase tracking-widest">
                  Revenue Block 0{idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 12-Month Roadmap */}
        <section className="mb-32 bg-slate-900 text-white rounded-[60px] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 italic text-gradient">The 12-Month Pulse</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium font-sans">
              Objective: Validation and scalability through a low-overhead, results-driven framework.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
             {roadmapItems.map((item, idx) => (
               <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-[40px] group hover:bg-white/10 transition-all">
                  <div className="text-cyan-400 font-display font-bold text-4xl mb-6 flex items-baseline gap-2">
                    0{idx + 1}
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Risk Mitigation */}
        <section>
          <div className="bg-indigo-600 rounded-[50px] p-12 lg:p-20 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-white opacity-[0.03] animate-pulse" />
             <div className="relative z-10">
                <h2 className="text-4xl font-display font-bold text-white mb-8">Navigating the Future</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-white/90">
                   <div>
                      <h4 className="font-bold flex items-center gap-2 mb-4 text-xl">
                        <Zap className="text-cyan-300" size={24} />
                        Mitigating Faculty Readiness
                      </h4>
                      <p className="text-sm border-l-2 border-white/20 pl-4 font-medium opacity-80 leading-relaxed">
                        We address lack of faculty expertise through intensive development programs and hybrid delivery models, ensuring institutions are future-ready at the human level.
                      </p>
                   </div>
                   <div>
                      <h4 className="font-bold flex items-center gap-2 mb-4 text-xl">
                        <Rocket className="text-cyan-300" size={24} />
                        Accelerated Scalability
                      </h4>
                      <p className="text-sm border-l-2 border-white/20 pl-4 font-medium opacity-80 leading-relaxed">
                        While we proceed with strategic bootstrapping, our model is designed for rapid national reach through seed-funded product validation and institutional AICoE networks.
                      </p>
                   </div>
                </div>
                <div className="mt-16 text-white/50 text-xs font-bold uppercase tracking-widest text-center">
                  Positioning India as a Global Leader in Responsible AI
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
