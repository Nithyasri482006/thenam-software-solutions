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
    <div className="relative min-h-screen bg-[#030712] text-[#F5F7FA]">
      <SEOHead
        title="Technology That Connects Ideas to Impact"
        description="We build intelligent software, AI-powered applications, education platforms, ERP systems, and digital growth solutions that help businesses and people move forward."
      />

      {/* ================= HERO SECTION (MATCHING DESIGN REFERENCE) ================= */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-tech-grid">
        {/* Cinematic Ambient Glow Behind the Leaf and Content */}
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[650px] h-[550px] bg-gradient-to-tr from-[#00B9C7]/20 via-[#0284C7]/15 to-[#7CCB32]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 left-1/6 w-[400px] h-[400px] bg-[#00E5FF]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Eyebrow, Main Headline, Description & Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow with Cyan Dash */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-[#00E5FF] uppercase">
                <span className="w-5 h-[2px] bg-[#00E5FF] inline-block" />
                <span>Software &bull; AI &bull; Digital Innovation</span>
              </div>

              {/* Main Headline Matching Reference */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-display text-balance">
                Technology That<br />
                Connects Ideas to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00B9C7] to-[#7CCB32]">
                  Impact.
                </span>
              </h1>

              {/* Exact Description from Reference */}
              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl font-normal">
                We build intelligent software, AI-powered applications, education platforms, ERP systems and digital growth solutions that help businesses and people move forward.
              </p>

              {/* Hero CTA Pill Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {/* Primary Button */}
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#030712] bg-gradient-to-r from-[#00E5FF] to-[#00B9C7] hover:shadow-[0_0_25px_rgba(0,185,199,0.55)] transition-all duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B9C7]"
                >
                  <span>Explore Our Solutions</span>
                  <ArrowRight className="w-4 h-4 text-[#030712]" />
                </Link>

                {/* Secondary Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#071322]/80 hover:bg-[#00B9C7]/20 border border-[#00B9C7]/50 hover:border-[#00B9C7] transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B9C7]"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Striking 3D Digital Network Leaf Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <HeroLeafNetwork />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT SHOWCASES (MATCHING DESIGN REFERENCE) ================= */}
      <section id="products-preview" className="pt-4 pb-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductShowcasePanels />
        </div>
      </section>

      {/* ================= SECTION A: WHAT WE DO ================= */}
      <section className="py-24 bg-[#040813] border-t border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00B9C7] uppercase">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Intelligent Software Engineering &amp; Connected Innovation
            </h2>
            <p className="text-base text-[#94A3B8] leading-relaxed">
              Thenam Software Solutions partners with enterprises, growth businesses, and educational institutions to architect, deploy, and scale high-impact digital systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Capability 1 */}
            <div className="tech-card rounded-2xl p-7 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-[#00B9C7]/10 border border-[#00B9C7]/20 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                AI Solutions &amp; Agents
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Applied machine learning models, custom AI agents, and intelligent workflow automation designed to solve real business bottlenecks.
              </p>
              <Link to="/services" className="pt-2 text-xs text-[#00B9C7] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore AI engineering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 2 */}
            <div className="tech-card rounded-2xl p-7 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-[#7CCB32]/10 border border-[#7CCB32]/20 flex items-center justify-center text-[#7CCB32] group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Modern Software Dev
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Scalable web and mobile applications constructed with modern TypeScript, React, Next.js, Python, and cloud-native architecture.
              </p>
              <Link to="/services" className="pt-2 text-xs text-[#7CCB32] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore software</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 3 */}
            <div className="tech-card rounded-2xl p-7 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-[#0284C7]/10 border border-[#0284C7]/20 flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Business Platforms
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Enterprise resource planning, operations coordination, and custom SaaS platforms like Thenam Connect to unify company data.
              </p>
              <Link to="/services" className="pt-2 text-xs text-[#38BDF8] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore ERP systems</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Capability 4 */}
            <div className="tech-card rounded-2xl p-7 space-y-4 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-xl bg-[#F2C94C]/10 border border-[#F2C94C]/20 flex items-center justify-center text-[#F2C94C] group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Digital Growth &amp; SEO
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
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
      <section className="py-24 bg-[#030712] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00B9C7] uppercase">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Engineered for Practical Impact
            </h2>
            <p className="text-sm text-[#94A3B8]">
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
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00E5FF]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-[#94A3B8] font-mono">{svc.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {svc.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#94A3B8]">
                    {svc.desc}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs text-[#00E5FF] hover:text-white pt-2 font-medium transition-colors"
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
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-full transition-all"
            >
              <span>Explore All 11 Verified Services</span>
              <ArrowRight className="w-4 h-4 text-[#00B9C7]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SECTION C: WHY CHOOSE THENAM ================= */}
      <section className="py-24 bg-[#050A14] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#7CCB32] uppercase">
                Why Choose Thenam
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display text-balance">
                Built on Integrity, Engineered for Longevity
              </h2>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                We believe in genuine technology that solves real business problems. We don&apos;t ship brittle prototypes or vanity buzzwords—we engineer software designed to scale with your team.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#00B9C7]/10 flex items-center justify-center text-[#00E5FF] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Solution-Focused Development</h3>
                    <p className="text-xs text-[#94A3B8] mt-0.5">Every technical architecture starts from your business objectives and operational realities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#7CCB32]/10 flex items-center justify-center text-[#7CCB32] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Modern &amp; Maintainable Code</h3>
                    <p className="text-xs text-[#94A3B8] mt-0.5">Strict TypeScript types, modular architecture, and zero-debt maintainability for your engineering team.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#F2C94C]/10 flex items-center justify-center text-[#F2C94C] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Collaborative Transparency</h3>
                    <p className="text-xs text-[#94A3B8] mt-0.5">Clear sprint demos, direct developer communication, and verified milestone deliverables.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="tech-card rounded-2xl p-6 border-l border-white/[0.08]">
                  <span className="text-3xl font-extrabold text-[#00E5FF] font-display">100%</span>
                  <h3 className="text-sm font-bold text-white mt-1">Production Tested</h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    All software passes rigorous integration testing, type-safety checks, and real-world boundary validation.
                  </p>
                </div>
                <div className="tech-card rounded-2xl p-6">
                  <span className="text-3xl font-extrabold text-[#7CCB32] font-display">2025</span>
                  <h3 className="text-sm font-bold text-white mt-1">Established Studio</h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    Founded in Chennai with a unified mission to craft purposeful AI systems and modern digital platforms.
                  </p>
                </div>
                <div className="tech-card rounded-2xl p-6">
                  <span className="text-3xl font-extrabold text-[#F2C94C] font-display">24/7</span>
                  <h3 className="text-sm font-bold text-white mt-1">Reliable Support</h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    Ongoing SLA maintenance, security monitoring, and continuous product enhancement post-launch.
                  </p>
                </div>
                <div className="tech-card rounded-2xl p-6">
                  <span className="text-3xl font-extrabold text-[#38BDF8] font-display">Full-Stack</span>
                  <h3 className="text-sm font-bold text-white mt-1">End-to-End Delivery</h3>
                  <p className="text-xs text-[#94A3B8] mt-2 leading-relaxed">
                    From UI/UX wireframes to backend APIs, database schemas, DevOps pipelines, and SEO execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION D: OUR DEVELOPMENT PROCESS ================= */}
      <section className="py-24 bg-[#030712] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00B9C7] uppercase">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Our Development Process
            </h2>
            <p className="text-sm text-[#94A3B8]">
              A disciplined five-stage methodology that turns strategic goals into resilient production software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'Analyze business workflows, user needs, and architectural constraints to clarify requirements.',
                color: 'text-[#00E5FF]',
              },
              {
                step: '02',
                title: 'Plan',
                desc: 'Map information architecture, choose technical stacks, and establish sprint deliverables.',
                color: 'text-[#0284C7]',
              },
              {
                step: '03',
                title: 'Build',
                desc: 'Implement clean frontend interfaces, resilient backend logic, and scalable data layers.',
                color: 'text-[#7CCB32]',
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
                color: 'text-[#00E5FF]',
              },
            ].map((p, idx) => (
              <div key={idx} className="tech-card rounded-2xl p-6 relative flex flex-col justify-between">
                <div>
                  <span className={`text-2xl font-mono font-bold ${p.color}`}>
                    {p.step}.
                  </span>
                  <h3 className="text-lg font-bold text-white font-display mt-3">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mt-2">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION E: CONTACT CTA ================= */}
      <section className="py-20 bg-gradient-to-b from-[#050A14] to-[#02050B] border-t border-white/[0.08] relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#00E5FF] uppercase">
            Start Your Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Have an Idea? Let&apos;s Build It.
          </h2>
          <p className="text-base text-[#CBD5E1] max-w-xl mx-auto leading-relaxed">
            Whether you need a custom AI agent, an enterprise web application, or want to deploy Thenam Campus or Thenam Connect, our engineers are ready.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#00B9C7] via-[#0284C7] to-[#1D4ED8] rounded-full hover:shadow-[0_0_30px_rgba(0,185,199,0.5)] transition-all duration-300 hover:scale-105"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
