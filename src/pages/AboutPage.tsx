import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Target,
  Sparkles,
  Shield,
  Users,
  Cpu,
  Layers,
  ArrowRight,
  Terminal,
  Zap,
  CheckCircle,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ThenamLogo } from '../components/ThenamLogo';

export const AboutPage: React.FC = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-24 bg-[#06111F] text-[#B8C7D9]">
      <SEOHead
        title="About Us | Technology With Purpose. Innovation Without Limits."
        description="Learn about Thenam Software Solutions, an AI and digital product studio established in Chennai engineering intelligent software, digital growth, and connected systems."
      />

      {/* Hero Section */}
      <section className="relative pb-20 border-b border-[#0B2238] bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#00D5E8] uppercase">
              <span>About Thenam Software Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F8FF] tracking-tight font-display leading-[1.1] text-balance">
              Technology With Purpose. Innovation Without Limits.
            </h1>

            <p className="text-xl text-[#B8C7D9] leading-relaxed">
              Thenam Software Solutions brings together software engineering, intelligent technologies, and creative problem-solving to help transform ideas into useful digital experiences.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#B8C7D9]">
              <span>Headquarters: Porur, Chennai, India</span>
              <span aria-hidden="true">&bull;</span>
              <span>Founded: 2025</span>
              <span aria-hidden="true">&bull;</span>
              <span className="text-[#12D6A0]">Applied AI &amp; Software Studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 border-b border-[#0B2238] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#00D5E8] uppercase">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F8FF] font-display">
                Engineering Digital Ecosystems from Chennai to the World
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#B8C7D9] leading-relaxed">
                <p>
                  Thenam Software Solutions was founded in 2025 in Chennai, India, as an applied artificial intelligence and product engineering studio. We recognized that while software technology was moving rapidly, many organizations were left with fragmented tools, unmanageable codebases, and disconnected operations.
                </p>
                <p>
                  We formed Thenam with a single purpose: to build technology that moves people and businesses forward. By combining thoughtful engineering rigor with modern AI workflows, full-stack web platforms, and connected IoT systems, we help our partners navigate modern digital transformations without unnecessary complexity.
                </p>
                <p>
                  Today, our engineering studio designs, builds, and maintains custom enterprise applications alongside our flagship digital platforms—<strong>Thenam Campus</strong> for educational institutions and <strong>Thenam Connect</strong> for enterprise resource planning.
                </p>
              </div>
            </div>

            {/* Emblem and Philosophy Card */}
            <div className="lg:col-span-5">
              <div className="tech-card rounded-3xl p-8 border border-[#0B2238] glow-border-teal bg-[#071827] text-center space-y-6">
                <ThenamLogo size="xl" variant="full" showSubtitle={true} />
                <div className="pt-4 border-t border-[#0B2238] text-left space-y-3">
                  <h3 className="text-sm font-bold text-[#F4F8FF] uppercase tracking-wider text-center">
                    The Emblem: Nature Meets Neural Systems
                  </h3>
                  <p className="text-xs text-[#B8C7D9] leading-relaxed text-center">
                    The Thenam leaf emblem unites organic biological growth with cybernetic intelligence. The blue-cyan neural lattice represents computing logic and algorithms, while the green-golden leaf represents living prosperity and continuous human evolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-b border-[#0B2238] bg-[#0B2238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission */}
            <div className="tech-card rounded-2xl p-8 space-y-4 border-t-2 border-t-[#00D5E8]">
              <div className="w-12 h-12 rounded-xl bg-[#00D5E8]/10 flex items-center justify-center text-[#00D5E8]">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#F4F8FF] font-display">
                Our Mission
              </h2>
              <blockquote className="text-lg text-[#F4F8FF] font-medium leading-relaxed italic">
                &ldquo;To create useful, reliable, and innovative digital solutions that help businesses and people move forward.&rdquo;
              </blockquote>
              <p className="text-xs text-[#B8C7D9] leading-relaxed pt-2">
                We measure our success not by lines of code written, but by the tangible operational clarity and growth our software delivers to users every day.
              </p>
            </div>

            {/* Our Vision */}
            <div className="tech-card rounded-2xl p-8 space-y-4 border-t-2 border-t-[#12D6A0]">
              <div className="w-12 h-12 rounded-xl bg-[#12D6A0]/10 flex items-center justify-center text-[#12D6A0]">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#F4F8FF] font-display">
                Our Vision
              </h2>
              <blockquote className="text-lg text-[#F4F8FF] font-medium leading-relaxed italic">
                &ldquo;To make technology more accessible, intelligent, and impactful through thoughtful software and digital innovation.&rdquo;
              </blockquote>
              <p className="text-xs text-[#B8C7D9] leading-relaxed pt-2">
                We envision an interconnected digital landscape where artificial intelligence and software infrastructure elevate human ingenuity across commerce, education, and industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20 border-b border-[#0B2238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00D5E8] uppercase">
              Principles &amp; Culture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F8FF] font-display">
              Our Core Values
            </h2>
            <p className="text-sm text-[#B8C7D9]">
              The fundamental tenets that guide our technical choices, client relationships, and team standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Innovation',
                desc: 'Pursuing novel approaches, modern architectural patterns, and applied machine learning to solve hard engineering problems.',
                color: 'text-[#00D5E8]',
              },
              {
                title: 'Quality',
                desc: 'Uncompromising craft in code structure, type safety, test coverage, and documentation to build durable software.',
                color: 'text-[#00D5E8]',
              },
              {
                title: 'Collaboration',
                desc: 'Direct, honest partnerships with stakeholders, maintaining clarity, open channels, and continuous feedback loops.',
                color: 'text-[#12D6A0]',
              },
              {
                title: 'User-Focused Design',
                desc: 'Creating accessible, intuitive interfaces where complexity is handled gracefully behind clean interactions.',
                color: 'text-[#F2C94C]',
              },
              {
                title: 'Continuous Improvement',
                desc: 'Constantly evaluating system metrics, refining workflows, and modernizing toolchains to remain at the leading edge.',
                color: 'text-[#00D5E8]',
              },
              {
                title: 'Responsible Technology',
                desc: 'Building with privacy by design, robust cybersecurity safeguards, and ethical data handling across all AI systems.',
                color: 'text-[#12D6A0]',
              },
            ].map((v, i) => (
              <div key={i} className="tech-card rounded-2xl p-6 space-y-3">
                <span className={`text-base font-bold font-display ${v.color}`}>
                  {v.title}
                </span>
                <p className="text-xs text-[#B8C7D9] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 border-b border-[#0B2238] bg-[#0B2238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#12D6A0] uppercase">
              Engineering Mindset
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F8FF] font-display">
              Our Engineering Approach
            </h2>
            <p className="text-sm text-[#B8C7D9]">
              How we understand requirements, design suitable solutions, develop software, test carefully, and continue improving products.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: '01',
                title: 'Understand Requirements Thoroughly',
                desc: 'We begin by diagnosing the root business context, data flows, and end-user constraints before writing any code. We avoid speculative over-engineering in favor of targeted solutions.',
              },
              {
                step: '02',
                title: 'Design Suitable Architecture & Interfaces',
                desc: 'We craft human-centric UI wireframes and map scalable database schemas. Every interface is tested for WCAG accessibility, clear hierarchy, and keyboard navigability.',
              },
              {
                step: '03',
                title: 'Develop Resilient Full-Stack Systems',
                desc: 'Using TypeScript, React, Python, Node.js, and cloud backends, we build modular codebases with strict interfaces, clean APIs, and clear separation of concerns.',
              },
              {
                step: '04',
                title: 'Test Rigorously Across Environments',
                desc: 'We execute automated unit tests, integration suites, cross-browser audits, and security vulnerability scans to guarantee zero regressions prior to production release.',
              },
              {
                step: '05',
                title: 'Continuously Improve & Support',
                desc: 'Post-deployment, we monitor performance telemetry, review search engine indices, and collaborate on feature enhancements as your operational scale grows.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="tech-card rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-5">
                  <span className="text-xl font-mono font-bold text-[#00D5E8] shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#F4F8FF] font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#B8C7D9] leading-relaxed mt-1 max-w-3xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
                <div className="shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#12D6A0]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F8FF] font-display">
            Work With Us
          </h2>
          <p className="text-sm text-[#B8C7D9] leading-relaxed">
            Ready to explore how Thenam Software Solutions can accelerate your digital roadmap? Our engineering team in Chennai is ready to collaborate.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#06111F] bg-[#00D5E8] hover:bg-[#00D5E8]/90 rounded-full shadow-[0_0_25px_rgba(0,213,232,0.4)] transition-all duration-300"
            >
              <span>Initiate Project Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#06111F]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
