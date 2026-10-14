import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cpu,
  Layers,
  GraduationCap,
  Briefcase,
  Search,
  Code2,
  Smartphone,
  Workflow,
  Radio,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HeroLeafNetwork } from '../components/HeroLeafNetwork';
import { ProductShowcasePanels } from '../components/ProductShowcasePanels';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#06111F] text-[#B8C7D9]">
      <SEOHead
        title="Technology That Connects Ideas to Impact"
        description="We build intelligent software, AI-powered applications, education platforms, ERP systems, and digital growth solutions that help businesses and people move forward."
      />

      {/* ================= HERO SECTION (MATCHING DESIGN REFERENCE EXACTLY) ================= */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #06111F 0%, #081B2E 40%, #0B2238 60%, #06111F 100%)' }}>
        {/* Tech grid background */}
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

        {/* Ambient glow spots */}
        <div className="absolute top-0 right-0 w-[700px] h-[600px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(0, 213, 232, 0.16) 0%, rgba(11, 34, 56, 0.25) 35%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at bottom left, rgba(0, 213, 232, 0.08) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center"
               style={{ minHeight: 'calc(100vh - 64px)', paddingTop: '72px', paddingBottom: '24px' }}>

            {/* ── LEFT COLUMN ── */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pr-4" style={{ paddingTop: '1.5rem', paddingBottom: '2rem' }}>

              {/* Eyebrow label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.26em', color: '#00D5E8', textTransform: 'uppercase' }}>
                <span style={{ width: '18px', height: '2px', background: '#00D5E8', display: 'inline-block', flexShrink: 0 }} />
                <span>Software &bull; AI &bull; Digital Innovation</span>
              </div>

              {/* Main Headline */}
              <h1
                className="font-extrabold text-[#F4F8FF] tracking-tight"
                style={{
                  fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                  lineHeight: 1.08,
                  margin: 0,
                }}
              >
                Technology That<br />
                Connects Ideas to{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #00D5E8 0%, #00B9C7 40%, #12D6A0 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Impact.
                </span>
              </h1>

              {/* Description */}
              <p style={{ color: '#B8C7D9', lineHeight: 1.65, fontSize: '15px', maxWidth: '470px', margin: 0 }}>
                We build intelligent software, AI-powered applications, education platforms, ERP systems and digital growth solutions that help businesses and people move forward.
              </p>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
                {/* Primary filled button */}
                <Link
                  to="/products"
                  id="hero-explore-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '13px 30px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#06111F',
                    background: 'linear-gradient(90deg, #00D5E8 0%, #00B9C7 100%)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(0, 213, 232, 0.35)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 32px rgba(0, 213, 232, 0.65)';
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0, 213, 232, 0.35)';
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  }}
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight style={{ width: '15px', height: '15px', color: '#06111F' }} />
                </Link>

                {/* Secondary outlined button */}
                <Link
                  to="/contact"
                  id="hero-start-project-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 28px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#F4F8FF',
                    background: 'rgba(11, 34, 56, 0.85)',
                    border: '1.5px solid rgba(0, 213, 232, 0.5)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0, 213, 232, 0.12)';
                    (e.currentTarget as HTMLElement).style.borderColor = '#00D5E8';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(11, 34, 56, 0.85)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 213, 232, 0.5)';
                  }}
                >
                  <span>Start a Project</span>
                  <ArrowRight style={{ width: '15px', height: '15px', color: '#00D5E8' }} />
                </Link>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Hero Leaf Visual ── */}
            <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end"
                 style={{ minHeight: '520px' }}>
              <HeroLeafNetwork />
            </div>

          </div>
        </div>
      </section>

      {/* ================= PRODUCT SHOWCASE CARDS (MATCHING DESIGN REFERENCE) ================= */}
      <section
        id="products-preview"
        className="relative z-20"
        style={{ background: 'linear-gradient(180deg, #06111F 0%, #071628 50%, #06111F 100%)', paddingTop: '28px', paddingBottom: '48px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductShowcasePanels />
        </div>
      </section>

      {/* ================= SECTION A: WHAT WE DO ================= */}
      <section className="py-24 bg-[#0B2238] border-t border-[#0B2238] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00D5E8] uppercase">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F8FF] font-display">
              Intelligent Software Engineering &amp; Connected Innovation
            </h2>
            <p className="text-base text-[#B8C7D9] leading-relaxed">
              Thenam Software Solutions partners with enterprises, growth businesses, and educational institutions to architect, deploy, and scale high-impact digital systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Capability 1 */}
            <div className="tech-card rounded-2xl p-7 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-[#00D5E8]/10 border border-[#00D5E8]/20 flex items-center justify-center text-[#00D5E8] group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F8FF] font-display">
                AI Solutions &amp; Agents
              </h3>
              <p className="text-sm text-[#B8C7D9] leading-relaxed">
                Applied machine learning models, custom AI agents, and intelligent workflow automation designed to solve real business bottlenecks.
              </p>
              <Link to="/services" className="pt-2 text-xs text-[#00D5E8] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore AI engineering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 2 */}
            <div className="tech-card rounded-2xl p-7 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-[#12D6A0]/10 border border-[#12D6A0]/20 flex items-center justify-center text-[#12D6A0] group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F8FF] font-display">
                Modern Software Dev
              </h3>
              <p className="text-sm text-[#B8C7D9] leading-relaxed">
                Scalable web and mobile applications constructed with modern TypeScript, React, Next.js, Python, and cloud-native architecture.
              </p>
              <Link to="/services" className="pt-2 text-xs text-[#12D6A0] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore software</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 3 */}
            <div className="tech-card rounded-2xl p-7 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-[#0284C7]/10 border border-[#0284C7]/20 flex items-center justify-center text-[#00D5E8] group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F8FF] font-display">
                Business Platforms
              </h3>
              <p className="text-sm text-[#B8C7D9] leading-relaxed">
                Enterprise resource planning, operations coordination, and custom SaaS platforms like Thenam Connect to unify company data.
              </p>
              <Link to="/services" className="pt-2 text-xs text-[#00D5E8] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore ERP systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 4 */}
            <div className="tech-card rounded-2xl p-7 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-[#F2C94C]/10 border border-[#F2C94C]/20 flex items-center justify-center text-[#F2C94C] group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F8FF] font-display">
                Digital Growth &amp; SEO
              </h3>
              <p className="text-sm text-[#B8C7D9] leading-relaxed">
                Technical search optimization, performance tuning, and data-driven organic marketing strategies that capture qualified audience demand.
              </p>
              <Link to="/services" className="pt-2 text-xs text-[#F2C94C] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore SEO services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION B: FEATURED SERVICES ================= */}
      <section className="py-24 bg-[#06111F] border-t border-[#0B2238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00D5E8] uppercase">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F8FF] font-display">
              Engineered for Practical Impact
            </h2>
            <p className="text-sm text-[#B8C7D9]">
              Verified technical capabilities spanning applied artificial intelligence, enterprise web systems, and connected device solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: 'AI & Machine Learning Development',
                desc: 'Production-ready predictive models, recommendation engines, and domain-adapted intelligence pipelines.',
                tag: 'Intelligence',
              },
              {
                icon: Workflow,
                title: 'AI Agents & Workflow Automation',
                desc: 'Multi-agent coordination, autonomous business task processors, and intelligent data extraction.',
                tag: 'Automation',
              },
              {
                icon: Code2,
                title: 'Website & Full-Stack Development',
                desc: 'Ultra-fast web platforms with React, Next.js, and TypeScript, engineered for zero downtime.',
                tag: 'Engineering',
              },
              {
                icon: Smartphone,
                title: 'Mobile Application Development',
                desc: 'Native iOS & Android performance via React Native, tailored for high-engagement mobile experiences.',
                tag: 'Mobile',
              },
              {
                icon: Radio,
                title: 'IoT & Connected Systems',
                desc: 'Hardware telemetry, edge computing, sensor aggregation, and embedded systems with ROS and C/C++.',
                tag: 'Hardware',
              },
              {
                icon: ShieldCheck,
                title: 'Cybersecurity Solutions',
                desc: 'Defensive audits, vulnerability assessments, and robust zero-trust architecture for enterprise applications.',
                tag: 'Security',
              },
            ].map((svc, i) => {
              const IconComp = svc.icon;
              return (
                <div key={i} className="tech-card rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-[#0B2238] flex items-center justify-center text-[#00D5E8]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-[#B8C7D9] font-mono">{svc.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F4F8FF] font-display">
                    {svc.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#B8C7D9]">
                    {svc.desc}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs text-[#00D5E8] hover:text-[#F4F8FF] pt-2 font-medium transition-colors"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F4F8FF] bg-[#0B2238] hover:bg-[#0E2C48] border border-[#0B2238] hover:border-[#00D5E8]/40 rounded-full transition-all"
            >
              <span>Explore All 11 Verified Services</span>
              <ArrowRight className="w-4 h-4 text-[#00D5E8]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SECTION C: WHY CHOOSE THENAM ================= */}
      <section className="py-24 bg-[#0B2238] border-t border-[#0B2238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#12D6A0] uppercase">
                Why Choose Thenam
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F8FF] font-display text-balance">
                Built on Integrity, Engineered for Longevity
              </h2>
              <p className="text-sm text-[#B8C7D9] leading-relaxed">
                We believe in genuine technology that solves real business problems. We don&apos;t ship brittle prototypes or vanity buzzwords—we engineer software designed to scale with your team.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#00D5E8]/10 flex items-center justify-center text-[#00D5E8] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F4F8FF]">Solution-Focused Development</h3>
                    <p className="text-xs text-[#B8C7D9] mt-0.5">Every technical architecture starts from your business objectives and operational realities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#12D6A0]/10 flex items-center justify-center text-[#12D6A0] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F4F8FF]">Modern &amp; Maintainable Code</h3>
                    <p className="text-xs text-[#B8C7D9] mt-0.5">Strict TypeScript types, modular architecture, and zero-debt maintainability for your engineering team.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#F2C94C]/10 flex items-center justify-center text-[#F2C94C] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#F4F8FF]">Collaborative Transparency</h3>
                    <p className="text-xs text-[#B8C7D9] mt-0.5">Clear sprint demos, direct developer communication, and verified milestone deliverables.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="tech-card rounded-2xl p-6 border-l border-white/[0.08]">
                  <span className="text-3xl font-extrabold text-[#00D5E8] font-display">100%</span>
                  <h3 className="text-sm font-bold text-[#F4F8FF] mt-1">Production Tested</h3>
                  <p className="text-xs text-[#B8C7D9] mt-2 leading-relaxed">
                    All software passes rigorous integration testing, type-safety checks, and real-world boundary validation.
                  </p>
                </div>
                <div className="tech-card rounded-2xl p-6">
                  <span className="text-3xl font-extrabold text-[#12D6A0] font-display">2025</span>
                  <h3 className="text-sm font-bold text-[#F4F8FF] mt-1">Established Studio</h3>
                  <p className="text-xs text-[#B8C7D9] mt-2 leading-relaxed">
                    Founded in Chennai with a unified mission to craft purposeful AI systems and modern digital platforms.
                  </p>
                </div>
                <div className="tech-card rounded-2xl p-6">
                  <span className="text-3xl font-extrabold text-[#F2C94C] font-display">24/7</span>
                  <h3 className="text-sm font-bold text-[#F4F8FF] mt-1">Reliable Support</h3>
                  <p className="text-xs text-[#B8C7D9] mt-2 leading-relaxed">
                    Ongoing SLA maintenance, security monitoring, and continuous product enhancement post-launch.
                  </p>
                </div>
                <div className="tech-card rounded-2xl p-6">
                  <span className="text-3xl font-extrabold text-[#00D5E8] font-display">Full-Stack</span>
                  <h3 className="text-sm font-bold text-[#F4F8FF] mt-1">End-to-End Delivery</h3>
                  <p className="text-xs text-[#B8C7D9] mt-2 leading-relaxed">
                    From UI/UX wireframes to backend APIs, database schemas, DevOps pipelines, and SEO execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION D: OUR DEVELOPMENT PROCESS ================= */}
      <section className="py-24 bg-[#06111F] border-t border-[#0B2238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00D5E8] uppercase">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F8FF] font-display">
              Our Development Process
            </h2>
            <p className="text-sm text-[#B8C7D9]">
              A disciplined five-stage methodology that turns strategic goals into resilient production software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'Analyze business workflows, user needs, and architectural constraints to clarify requirements.',
                color: 'text-[#00D5E8]',
              },
              {
                step: '02',
                title: 'Plan',
                desc: 'Map information architecture, choose technical stacks, and establish sprint deliverables.',
                color: 'text-[#00D5E8]',
              },
              {
                step: '03',
                title: 'Build',
                desc: 'Implement clean frontend interfaces, resilient backend logic, and scalable data layers.',
                color: 'text-[#12D6A0]',
              },
              {
                step: '04',
                title: 'Test & Launch',
                desc: 'Run comprehensive QA tests, security reviews, performance benchmarks, and deploy smoothly.',
                color: 'text-[#F2C94C]',
              },
              {
                step: '05',
                title: 'Improve & Scale',
                desc: 'Monitor real-world usage, tune telemetry, and iterate features as your business expands.',
                color: 'text-[#00D5E8]',
              },
            ].map((p, idx) => (
              <div key={idx} className="tech-card rounded-2xl p-6 relative flex flex-col justify-between">
                <div>
                  <span className={`text-2xl font-mono font-bold ${p.color}`}>
                    {p.step}.
                  </span>
                  <h3 className="text-lg font-bold text-[#F4F8FF] font-display mt-3">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#B8C7D9] leading-relaxed mt-2">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION E: CONTACT CTA ================= */}
      <section className="py-20 bg-gradient-to-b from-[#0B2238] to-[#06111F] border-t border-[#0B2238] relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#00D5E8] uppercase">
            Start Your Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F4F8FF] font-display tracking-tight">
            Have an Idea? Let&apos;s Build It.
          </h2>
          <p className="text-base text-[#B8C7D9] max-w-xl mx-auto leading-relaxed">
            Whether you need a custom AI agent, an enterprise web application, or want to deploy Thenam Campus or Thenam Connect, our engineers are ready.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#06111F] bg-[#00D5E8] hover:bg-[#00D5E8]/90 rounded-full shadow-[0_0_25px_rgba(0,213,232,0.4)] transition-all duration-300 hover:scale-105"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4 text-[#06111F]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
