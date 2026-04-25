/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', org: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. Our team will get back to you shortly.');
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-mesh min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 text-slate-900"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium font-sans">
            Have questions about our AI-powered solutions or institutional partnerships? Our experts are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0 border border-cyan-100 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-600 font-bold">drakhtar@aiteknix.com</p>
                  <p className="text-slate-400 text-sm font-semibold">moka2205@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-slate-600 font-bold">+91 9019531196</p>
                  <p className="text-slate-400 text-sm font-semibold">HQ Support - India</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Headquarters</h3>
                  <p className="text-slate-600 font-medium">RCIIF, Plot No: 72C, Sector 11, Kharghar</p>
                  <p className="text-slate-400 text-sm font-semibold">Navi Mumbai - 410210, India</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Globe className="text-cyan-600" size={20} />
                Global Expansion Goals
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Targeting and scaling impact in key world markets including GCC, USA, and the Asia-Pacific region.
              </p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-200 shadow-2xl shadow-slate-200/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1 font-sans">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1 font-sans">Organization</label>
                  <input 
                    type="text" 
                    placeholder="University/Platform"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all font-sans"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1 font-sans">Official Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@organization.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1 font-sans">Your Message</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="How can AICoE help your mission?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 transition-all font-sans"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-slate-900 text-white font-bold text-lg rounded-2xl hover:bg-cyan-600 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3 group font-display"
              >
                Submit Request
              </button>
              
              <p className="text-center text-slate-400 text-xs font-semibold font-sans">
                By clicking "Submit Request", you agree to our <a href="#" className="underline hover:text-slate-900">Privacy Policy</a>.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <section className="mt-32">
          <div className="h-[400px] bg-white rounded-[40px] border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-mesh opacity-20" />
            <div className="text-center relative z-10">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-100 shadow-inner">
                <MapPin size={32} className="text-cyan-600" />
              </div>
              <p className="text-slate-800 font-bold text-xl">Innovation Hub Mumbai</p>
              <p className="text-slate-500 font-medium">RCIIF, Kharghar, Navi Mumbai - 410210</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
