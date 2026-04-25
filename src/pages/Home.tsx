/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Cpu, Zap, Target, BookOpen, ChevronRight, Play, Rocket, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-mesh opacity-60" />
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 text-xs font-bold mb-6 tracking-wider uppercase">
              <Zap size={14} />
              DPIIT Recognized Startup (Startup India)
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-8 text-slate-900">
              AI-Powered <br />
              <span className="text-gradient">Media Innovation.</span>
            </h1>
            <p className="text-slate-600 text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl font-medium font-sans">
              Scaleable, ethical, and India-centric AI capabilities built through long-term institutional partnerships. Aligned with NEP 2020 for schools, universities, and corporates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/programs" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full text-white font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all flex items-center gap-2">
                Explore Programs <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white border border-slate-200 rounded-full text-slate-900 font-bold text-lg hover:bg-slate-50 transition-all shadow-sm">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introductory Video Section - New Platform Requirement */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest">
                <Play size={16} fill="currentColor" />
                Featured Presentation
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
                The AITekNix <span className="text-gradient">Vision</span> in 90 Seconds
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-sans font-medium italic">
                "Witness the convergence of indigenous AI capabilities and global academic excellence. From Earth to Cloud, we are leading the cognitive era."
              </p>
              <div className="flex items-center gap-6 pt-4">
                 {[
                   { label: 'Industry Relevance', val: '100%' },
                   { label: 'Ethical Design', val: 'Built-in' }
                 ].map(stat => (
                   <div key={stat.label}>
                      <div className="text-2xl font-display font-bold text-slate-900">{stat.val}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </motion.div>
            
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-slate-200 shadow-2xl group cursor-pointer bg-slate-900">
               <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent z-10" />
               <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                alt="AI Vision Video" 
               />
               <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                     <Play size={40} className="text-white ml-2" fill="currentColor" />
                  </div>
               </div>
               <div className="absolute bottom-8 left-8 z-20">
                  <div className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-1">AITekNix – AICoE</div>
                  <div className="text-white/60 text-[10px] font-bold">Duration: 90 Seconds</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction & Milestones - NEW SECTION from PDF */}
      <section className="py-24 px-4 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'DPIIT Identified', label: 'Startup India' },
              { title: 'RCIIF Incubated', label: 'Research Excellence' },
              { title: 'Pilot Projects', label: '2 Major Film Studios' },
              { title: 'MoUs Signed', label: '2 OTT Platforms' }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="text-2xl font-display font-bold text-slate-900 mb-1">{stat.title}</div>
                <div className="text-indigo-600 font-bold text-xs uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / USPs */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Unique Selling Points</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Why AICoE leads the AI transformation market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: ShieldCheck, title: 'Ethical AI', desc: 'Consent-based voice cloning.' },
              { icon: Zap, title: '80% Savings', desc: 'Drastic cost & time efficiency.' },
              { icon: Rocket, title: 'Scalable', desc: 'Modular platform for all industries.' },
              { icon: Play, title: 'Emotion', desc: 'Nuanced tone preservation.' },
              { icon: BookOpen, title: 'Talent', desc: 'End-to-end AI training skills.' }
            ].map((usp, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <usp.icon size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{usp.title}</h4>
                <p className="text-slate-500 text-sm">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro section emphasizing the Kharghar HQ */}
      <section className="py-24 px-4 bg-slate-900 text-white rounded-[60px] mx-4 mb-32 overflow-hidden relative">
        <div className="absolute inset-0 bg-mesh opacity-10" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
           <MapPin className="text-cyan-400 mx-auto mb-6" size={48} />
           <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Incubated at RCIIF, Mumbai</h2>
           <p className="text-slate-400 text-xl mb-12 leading-relaxed">
             Strategically located at Kharghar, Navi Mumbai, we are bridging the AI skill gap through government-recognized innovation and digital transformation globally.
           </p>
           <Link to="/about" className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:gap-4 transition-all">
             Read Our Mission Statement <ArrowRight size={20} />
           </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-4 border-y border-slate-200 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight text-slate-900">
                Strategic Market <br /><span className="text-gradient">Advantage</span>
              </h2>
              <div className="space-y-8">
                {[
                  { icon: Target, title: 'AI-Powered Dubbing', desc: 'Cost-effective multi-language content adaptation, reducing release times from weeks to hours.' },
                  { icon: ShieldCheck, title: 'Artist Consent Models', desc: 'Ethical voice cloning technology that ensures IP protection and compliance with global standards.' },
                  { icon: BookOpen, title: 'Talent Development', desc: 'Bridging the AI talent gap with hands-on learning and industry-linked projects for K-12 and Professionals.' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0 border border-cyan-100">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-indigo-600/10 blur-3xl opacity-50" />
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                className="rounded-3xl relative z-10 border border-slate-200 shadow-2xl"
                alt="Tech Innovation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 text-slate-900">Ready to redefine <br /><span className="text-gradient">intelligence?</span></h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-xl hover:bg-cyan-600 transition-all shadow-xl shadow-slate-900/10">
              Partner With Us
            </Link>
            <Link to="/offerings" className="px-10 py-5 bg-white border border-slate-200 rounded-full text-slate-900 font-bold text-xl hover:bg-slate-50 transition-all shadow-sm">
              See Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
