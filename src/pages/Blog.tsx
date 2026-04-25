/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Newspaper, ArrowRight, Clock, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: "The Future of NEP 2020: Where AI Meets Classroom",
    excerpt: "Exploring how Artificial Intelligence is reshaping the Indian academic landscape under the new education policy.",
    date: "April 15, 2026",
    author: "AICoE Editorial",
    category: "Education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "AI in Healthcare: Beyond Diagnostics",
    excerpt: "A deep dive into predictive modeling and patient data security in the era of generative AI.",
    date: "April 10, 2026",
    author: "Dr. S. Tripathi",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Ethical Voice Cloning: The AITekNix Standard",
    excerpt: "How we ensure artist IP protection while delivering industry-leading localization speeds.",
    date: "April 05, 2026",
    author: "Founder's Desk",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold uppercase mb-8 tracking-widest"
          >
            <Newspaper size={14} />
            AI Insights & News
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-slate-900">AITekNix <span className="text-gradient">Pulse</span></h1>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Stay updated with the latest in AI research, institutional transformation, and technological breakthroughs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[40px] border border-slate-200 overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-indigo-600 uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-slate-400 text-xs font-bold mb-4">
                  <span className="flex items-center gap-1"><Clock size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                  {post.excerpt}
                </p>
                <Link to="#" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm tracking-tight hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Subscribe Section */}
        <section className="mt-32 p-12 lg:p-20 bg-slate-900 text-white rounded-[60px] text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-mesh opacity-10" />
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 italic">Subscribe to the <span className="text-cyan-400">Future</span></h2>
              <p className="text-slate-400 mb-10 font-medium">Join 5,000+ educators and innovators receiving our weekly AI brief.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <input 
                  type="email" 
                  placeholder="name@university.com" 
                  className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400 transition-all font-sans"
                 />
                 <button className="px-8 py-4 bg-cyan-500 text-slate-900 font-bold rounded-2xl hover:bg-white transition-all shadow-xl shadow-cyan-500/20 whitespace-nowrap">
                    Join Newsletter
                 </button>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
