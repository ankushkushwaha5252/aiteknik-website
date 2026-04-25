/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Cpu, Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-slate-900">AITekNix</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering the next generation with cutting-edge AI education and industry-leading solutions. Join us in building the future of intelligence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-500 hover:bg-indigo-500 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-500 hover:bg-indigo-500 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-500 hover:bg-indigo-500 hover:text-white transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Programs</h4>
            <ul className="space-y-4">
              <li><Link to="/programs" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">School AI (K-12)</Link></li>
              <li><Link to="/programs" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">Undergrad Programs</Link></li>
              <li><Link to="/programs" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">Research & PG</Link></li>
              <li><Link to="/programs" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">Corporate Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">Our Team</Link></li>
              <li><Link to="/partners" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">Partnerships</Link></li>
              <li><Link to="/business-model" className="text-slate-500 hover:text-indigo-600 text-sm transition-colors">Business Model</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin className="text-indigo-500 shrink-0" size={18} />
                <span>RCIIF, Plot No: 72C, Sector 11, Kharghar, Navi Mumbai - 410210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone className="text-indigo-500 shrink-0" size={18} />
                <span>+91 9019531196</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail className="text-indigo-500 shrink-0" size={18} />
                <span>drakhtar@aiteknix.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs text-center md:text-left">
            © 2026 AITekNix – AI Center of Excellence. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
