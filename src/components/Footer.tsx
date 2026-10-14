import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { ThenamLogo } from './ThenamLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#06111F] border-t border-[#0B2238] text-[#B8C7D9] pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D5E8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#12D6A0]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5E8] rounded-lg">
              <ThenamLogo size="lg" variant="horizontal" showSubtitle={true} />
            </Link>
            <p className="text-sm leading-relaxed text-[#B8C7D9] max-w-sm pt-2">
              Your technology partner for intelligent software, digital growth, and connected innovation. We build modern web and mobile applications, AI-powered solutions, and business platforms that help businesses move forward.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/thenam-software-solutions"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#071827] border border-[#0B2238] flex items-center justify-center text-[#B8C7D9] hover:text-[#00D5E8] hover:border-[#00D5E8]/40 hover:bg-[#0B2238] transition-all"
                aria-label="Thenam Software Solutions LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/thenamsoftware"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#071827] border border-[#0B2238] flex items-center justify-center text-[#B8C7D9] hover:text-[#00D5E8] hover:border-[#00D5E8]/40 hover:bg-[#0B2238] transition-all"
                aria-label="Thenam Software Solutions Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/thenamsoftwaresolutions"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#071827] border border-[#0B2238] flex items-center justify-center text-[#B8C7D9] hover:text-[#00D5E8] hover:border-[#00D5E8]/40 hover:bg-[#0B2238] transition-all"
                aria-label="Thenam Software Solutions GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h2 className="text-xs font-semibold tracking-wider uppercase text-[#F4F8FF] font-display mb-4">
              Explore
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#00D5E8] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00D5E8] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00D5E8] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#00D5E8] transition-colors">
                  Products &amp; Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00D5E8] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Digital Products */}
          <div>
            <h2 className="text-xs font-semibold tracking-wider uppercase text-[#F4F8FF] font-display mb-4">
              Flagship Products
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products" className="group flex items-center gap-1.5 hover:text-[#00D5E8] transition-colors">
                  <span>Thenam Campus</span>
                  <span className="text-[10px] text-[#12D6A0] font-mono">EdTech</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="group flex items-center gap-1.5 hover:text-[#00D5E8] transition-colors">
                  <span>Thenam Connect</span>
                  <span className="text-[10px] text-[#00D5E8] font-mono">ERP</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="group flex items-center gap-1.5 hover:text-[#00D5E8] transition-colors">
                  <span>SEO &amp; Growth Studio</span>
                  <span className="text-[10px] text-[#F2C94C] font-mono">SEO</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00D5E8] transition-colors">
                  AI Agents &amp; Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00D5E8] transition-colors">
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Info */}
          <div>
            <h2 className="text-xs font-semibold tracking-wider uppercase text-[#F4F8FF] font-display mb-4">
              Contact &amp; Studio
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00D5E8] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-[#B8C7D9]">
                  Porur, Chennai, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#12D6A0] shrink-0" />
                <a
                  href="tel:+916380456410"
                  className="text-xs text-[#B8C7D9] hover:text-[#F4F8FF] font-mono transition-colors"
                >
                  +91 63804 56410
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00D5E8] shrink-0" />
                <a
                  href="mailto:admin@thensoftwaresolutions.com"
                  className="text-xs text-[#B8C7D9] hover:text-[#F4F8FF] transition-colors truncate"
                >
                  admin@thensoftwaresolutions.com
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs text-[#00D5E8] hover:text-[#F4F8FF] transition-colors"
                >
                  <span>Request a Discovery Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="pt-8 border-t border-[#0B2238] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            &copy; {new Date().getFullYear()} Thenam Software Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Chennai, India</span>
            <span aria-hidden="true">&bull;</span>
            <span>Intelligent Digital Ecosystems</span>
            <span aria-hidden="true">&bull;</span>
            <a
              href="https://www.thenamsoftwaresolutions.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#B8C7D9] transition-colors"
            >
              thenamsoftwaresolutions.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
