/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mic2, MessageSquare, Globe2, Layout, Video, Heart, Sprout, ShieldCheck, Cog, CheckCircle2 } from 'lucide-react';

const mainOfferings = [
  {
    title: "AI Dubbing Engine",
    icon: Mic2,
    desc: "Scalable, high-quality dubbing for multi-language content with tone and emotion preservation.",
    features: ["Natural Cadence", "Speaker Identification", "Emotion Sync"]
  },
  {
    title: "Voice Cloning & Preservation",
    icon: MessageSquare,
    desc: "Ethical voice models with consent and IP protection for digital heritage and media assets.",
    features: ["Consent-based Models", "IP Protection", "Ultra-HD Clarity"]
  },
  {
    title: "Content Localization",
    icon: Globe2,
    desc: "Emotion-preserving localization for faster global releases across OTT and cinema platforms.",
    features: ["Cultural Context Aware", "Rapid Global Turnaround", "Multilingual Support"]
  },
  {
    title: "AI Training Platforms",
    icon: Layout,
    desc: "End-to-end AI talent development for K-12, universities, and corporate sectors.",
    features: ["Institutional LMS", "NEP 2020 Aligned", "Project-based Labs"]
  },
  {
    title: "Creator & Studio Tools",
    icon: Video,
    desc: "Dashboards for streamlined production, localization, and dubbing management.",
    features: ["Workflow Optimization", "Collaboration Hub", "Real-time Analytics"]
  }
];

const industrySolutions = [
  {
    title: "AI in Healthcare",
    icon: Heart,
    desc: "Diagnostics, patient data management, and telemedicine tools to improve healthcare efficiency.",
    color: "rose"
  },
  {
    title: "AI in Agriculture",
    icon: Sprout,
    desc: "AI-powered farming and weather prediction models designed to boost global crop yield.",
    color: "emerald"
  },
  {
    title: "AI Consultancy",
    icon: ShieldCheck,
    desc: "Expert guidance on AI integration, custom applications, and strategic automation.",
    color: "amber"
  },
  {
    title: "Custom AI Solutions",
    icon: Cog,
    desc: "Tailored applications for sectors like Media, Finance, and Manufacturing.",
    color: "indigo"
  }
];

export default function Offerings() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold uppercase mb-8 tracking-widest shadow-sm">
             Mission Alignment
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-slate-900">Our <span className="text-gradient">Offerings</span></h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed font-sans font-medium">
            Bridging the gap between cutting-edge AI research and practical industry application across global sectors.
          </p>
        </header>

        {/* Core Offerings Grid - Exactly matching the PDF items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {mainOfferings.map((o, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white p-10 rounded-[50px] border border-slate-200 shadow-sm group-hover:border-cyan-200 transition-all overflow-hidden hover:shadow-xl hover:shadow-cyan-500/5">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-50 rounded-full -mr-24 -mt-24 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-inner">
                  <o.icon size={32} />
                </div>

                <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">{o.title}</h3>
                <p className="text-slate-500 text-md mb-8 leading-relaxed font-medium">{o.desc}</p>
                
                <ul className="space-y-3">
                  {o.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-slate-600 text-sm font-bold font-sans">
                      <CheckCircle2 size={16} className="text-cyan-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Solutions Header */}
        <section className="mb-32">
           <div className="bg-slate-900 rounded-[60px] p-12 lg:p-20 text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-mesh opacity-10" />
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl font-display font-bold mb-6 italic text-gradient">Industry-Specific <br />Expansion</h2>
                  <p className="text-slate-400 text-lg leading-relaxed font-sans font-medium">
                    We adapt our core AI capabilities to solve critical problems in specialized fields, driving digital transformation that supports global environmental and social goals.
                  </p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {industrySolutions.map((sol, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl group hover:bg-white/10 transition-all">
                       <div className={`text-cyan-400 mb-4`}>
                          <sol.icon size={24} />
                       </div>
                       <h4 className="text-white font-bold mb-2">{sol.title}</h4>
                       <p className="text-slate-400 text-xs leading-relaxed">{sol.desc}</p>
                    </div>
                  ))}
               </div>
             </div>
           </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-display font-bold text-slate-900 leading-tight">Ready to leverage our <br /><span className="text-indigo-600">Cognitive Ecosystem?</span></h2>
            <div className="flex flex-wrap justify-center gap-4">
               <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl shadow-slate-900/10">Partner for Pilot</button>
               <button className="px-10 py-4 bg-white border border-slate-200 rounded-full text-slate-900 font-bold text-lg hover:bg-slate-50 transition-all shadow-sm">View Technical Docs</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
