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
          ? 'glass-nav py-3'
          : 'py-3.5 border-b border-[#0B2238]'
      }`}
      style={
        !isScrolled
          ? { background: 'rgba(6, 17, 31, 0.88)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">

          {/* Zone 1: Brand Wordmark & Leaf Logo */}
          <Link
            to="/"
            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5E8] rounded-lg"
            aria-label="Thenam Software Solutions Homepage"
            id="navbar-logo"
          >
            <ThenamLogo size="md" variant="horizontal" showSubtitle={true} />
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Main Navigation"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-${link.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}
                  style={{
                    position: 'relative',
                    padding: '4px 0',
                    whiteSpace: 'nowrap',
                    color: isActive ? '#00D5E8' : '#B8C7D9',
                    fontWeight: isActive ? 600 : 500,
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#F4F8FF';
                  }}
                  onMouseLeave={e => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#B8C7D9';
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #00D5E8, #12D6A0)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Start a Project CTA */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              to="/contact"
              id="navbar-start-project"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 20px',
                borderRadius: '50px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#F4F8FF',
                background: 'rgba(11, 34, 56, 0.85)',
                border: '1.5px solid rgba(0, 213, 232, 0.45)',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0, 213, 232, 0.15)';
                (e.currentTarget as HTMLElement).style.borderColor = '#00D5E8';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0, 213, 232, 0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(11, 34, 56, 0.85)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 213, 232, 0.45)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <span>Start a Project</span>
              <ArrowRight style={{ width: '14px', height: '14px', color: '#00D5E8' }} />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#B8C7D9] hover:text-[#F4F8FF] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D5E8]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#06111F]/98 backdrop-blur-2xl border-b border-[#0B2238] px-6 py-6 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#00D5E8] bg-white/[0.05] font-semibold'
                      : 'text-[#B8C7D9] hover:text-[#F4F8FF] hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-[#0B2238]">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-[#06111F] bg-[#00D5E8] hover:bg-[#00D5E8]/90 rounded-lg shadow-lg shadow-cyan-950/50"
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
