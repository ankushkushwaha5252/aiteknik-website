/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Globe, BookOpen, Briefcase, Users, Phone, LayoutGrid, Info, Newspaper, UserCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', path: '/', icon: Globe },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Programs', path: '/programs', icon: BookOpen },
  { name: 'Pedagogy', path: '/learning-path', icon: Cpu },
  { name: 'Offerings', path: '/offerings', icon: LayoutGrid },
  { name: 'Model', path: '/business-model', icon: Briefcase },
  { name: 'Partners', path: '/partners', icon: Users },
  { name: 'Team', path: '/team', icon: UserCheck },
  { name: 'Founder', path: '/founder-message', icon: UserCheck },
  { name: 'Pulse', path: '/blog', icon: Newspaper },
  { name: 'Contact', path: '/contact', icon: Phone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/10">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
              AITekNix
            </span>
          </Link>

          {/* Desktop Nav - Showing ALL Links Now */}
          <div className="hidden xl:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-bold uppercase tracking-tight transition-all hover:text-cyan-600 px-2 py-1 rounded-md ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-500'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 px-6 py-2 bg-slate-900 rounded-full text-white text-[12px] font-bold uppercase tracking-widest hover:bg-cyan-600 transition-all shadow-xl shadow-slate-900/10"
            >
              Start
            </Link>
          </div>

          {/* Medium Screen Nav (Tablets/Small Laptops) */}
          <div className="hidden lg:flex xl:hidden items-center gap-4">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] font-bold uppercase tracking-tight transition-all hover:text-cyan-600 ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-500'}`}
              >
                {link.name}
              </Link>
            ))}
             <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2 hover:bg-slate-50 rounded-lg transition-colors">
               <Menu size={24} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2 hover:bg-slate-50 rounded-lg transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu & Tablet Expansion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl z-[60] border-l border-slate-100 lg:hidden xl:hidden"
          >
             <div className="p-6 h-full flex flex-col bg-mesh opacity-30 pointer-events-none absolute inset-0" />
             <div className="p-6 relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-10">
                   <span className="text-lg font-bold text-slate-900 uppercase tracking-widest">Navigation</span>
                   <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
                      <X size={24} className="text-slate-500" />
                   </button>
                </div>
                <div className="space-y-1 overflow-y-auto pr-2 custom-scrollbar flex-grow">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all ${location.pathname === link.path ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                      <link.icon size={18} />
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-8 border-t border-slate-100 italic text-slate-400 text-xs text-center font-medium">
                   "Leading the Cognitive Era"
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Background overlay for mobile drawer */}
      <AnimatePresence>
        {isOpen && (
           <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-[55] lg:hidden xl:hidden"
           />
        )}
      </AnimatePresence>
    </nav>
  );
}
