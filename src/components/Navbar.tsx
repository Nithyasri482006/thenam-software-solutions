import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ThenamLogo } from './ThenamLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products & Solutions', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
          : 'bg-[#030712]/50 backdrop-blur-md py-4 border-b border-white/[0.06]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Leaf Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B9C7] rounded-lg"
            aria-label="Thenam Software Solutions Homepage"
          >
            <ThenamLogo size="md" variant="horizontal" showSubtitle={true} />
          </Link>

          {/* Zone 2: Navigation Links (Clean single-line text links) */}
          <nav
            className="hidden lg:flex items-center gap-8 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`whitespace-nowrap transition-colors duration-200 relative py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00B9C7] ${
                    isActive
                      ? 'text-[#00E5FF] font-semibold'
                      : 'text-[#A8B0B8] hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#7CCB32] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Rounded Pill Button from Reference) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="relative group inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-[#071322]/80 hover:bg-[#00B9C7]/20 border border-[#00B9C7]/60 hover:border-[#00B9C7] rounded-full hover:shadow-[0_0_20px_rgba(0,185,199,0.35)] transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B9C7]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00B9C7] transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#A8B0B8] hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B9C7]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#07111E]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#00E5FF] bg-white/[0.06] font-semibold'
                      : 'text-[#CBD5E1] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#00B9C7] to-[#1D4ED8] rounded-lg shadow-lg shadow-cyan-950/50"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
