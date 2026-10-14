import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Briefcase,
  Search,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  BarChart3,
  Database,
  Sliders,
  CheckCircle2,
  ExternalLink,
  Laptop,
  Network,
  Cpu,
  ShieldAlert,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const ProductsPage: React.FC = () => {
  // Interactive preview state for Thenam Campus
  const [activeCampusTab, setActiveCampusTab] = useState<'courses' | 'projects' | 'skills'>('courses');
  // Interactive preview state for Thenam Connect
  const [activeConnectModule, setActiveConnectModule] = useState<'operations' | 'finance' | 'inventory'>('operations');

  return (
    <div className="relative min-h-screen pt-32 pb-24 bg-[#030712] text-[#F5F7FA]">
      <SEOHead
        title="Products & Solutions | Thenam Campus & Thenam Connect"
        description="Explore Thenam's digital platforms: Thenam Campus education platform, Thenam Connect ERP platform, and specialized SEO growth services."
      />

      {/* Hero Header */}
      <section className="pb-16 border-b border-white/[0.06] bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00E5FF] uppercase">
              Thenam Product Ecosystem
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.1] text-balance">
              Digital Products Designed to Make a Difference.
            </h1>
            <p className="text-lg text-[#CBD5E1] leading-relaxed">
              Explore Thenam&apos;s digital platforms and services built to support learning, streamline business operations, and strengthen online visibility.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT A: THENAM CAMPUS ================= */}
      <section id="thenam-campus" className="py-24 border-b border-white/[0.06] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Product Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded bg-[#7CCB32]/10 text-[#7CCB32] border border-[#7CCB32]/20">
                  EDUCATION PLATFORM
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                Thenam Campus
              </h2>

              <p className="text-base text-[#CBD5E1] leading-relaxed">
                Thenam Campus is an education-focused digital platform designed to support learning, student development, and educational opportunities.
              </p>

              {/* Capabilities */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#7CCB32]/15 text-[#7CCB32] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Learning &amp; Academic Resources</h3>
                    <p className="text-xs text-[#94A3B8]">Centralized repository for curriculums, lecture materials, interactive assessments, and syllabus tracking.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#7CCB32]/15 text-[#7CCB32] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Educational Opportunities</h3>
                    <p className="text-xs text-[#94A3B8]">Connected notices for research grants, inter-college hackathons, seminars, and academic workshops.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#7CCB32]/15 text-[#7CCB32] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Student Projects &amp; Innovation</h3>
                    <p className="text-xs text-[#94A3B8]">Collaborative project workspaces, mentor review pipelines, and institutional showcase galleries.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#7CCB32]/15 text-[#7CCB32] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Career &amp; Skill Development</h3>
                    <p className="text-xs text-[#94A3B8]">Industry-aligned competency roadmaps, credential badges, and placement readiness tracking.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  state={{ preferredService: 'Thenam Campus Deployment' }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#7CCB32] to-[#00B9C7] rounded-xl hover:shadow-[0_0_20px_rgba(124,203,50,0.4)] transition-all"
                >
                  <span>Explore Thenam Campus</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-[11px] text-[#64748B]">Platform for Universities &amp; Colleges</span>
              </div>
            </div>

            {/* Illustrative Education Dashboard Concept */}
            <div className="lg:col-span-7">
              <div className="tech-card rounded-2xl p-6 border border-[#7CCB32]/25 glow-border-green bg-[#071318]/90">
                {/* Dashboard top bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#7CCB32]" />
                    <span className="text-sm font-bold text-white font-display">Thenam Campus Workspace</span>
                    <span className="text-[10px] text-[#94A3B8] font-mono">(Illustrative UI Concept)</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] rounded-lg">
                    <button
                      onClick={() => setActiveCampusTab('courses')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                        activeCampusTab === 'courses' ? 'bg-[#7CCB32] text-black font-semibold' : 'text-[#94A3B8]'
                      }`}
                    >
                      Academics
                    </button>
                    <button
                      onClick={() => setActiveCampusTab('projects')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                        activeCampusTab === 'projects' ? 'bg-[#7CCB32] text-black font-semibold' : 'text-[#94A3B8]'
                      }`}
                    >
                      Projects
                    </button>
                    <button
                      onClick={() => setActiveCampusTab('skills')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                        activeCampusTab === 'skills' ? 'bg-[#7CCB32] text-black font-semibold' : 'text-[#94A3B8]'
                      }`}
                    >
                      Competencies
                    </button>
                  </div>
                </div>

                {/* Dashboard dynamic preview body */}
                <div className="py-5 space-y-4">
                  {activeCampusTab === 'courses' && (
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-[#7CCB32]" />
                          <div>
                            <span className="text-xs font-bold text-white block">Applied Machine Learning &amp; Neural Nets</span>
                            <span className="text-[11px] text-[#94A3B8]">Semester 6 · 14 Interactive Modules</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#7CCB32]">88% Complete</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Laptop className="w-4 h-4 text-[#00E5FF]" />
                          <div>
                            <span className="text-xs font-bold text-white block">Full-Stack Cloud Engineering</span>
                            <span className="text-[11px] text-[#94A3B8]">Semester 5 · Next.js &amp; Distributed Systems</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#00E5FF]">74% Complete</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Award className="w-4 h-4 text-[#F2C94C]" />
                          <div>
                            <span className="text-xs font-bold text-white block">Cybersecurity &amp; Cryptographic Architecture</span>
                            <span className="text-[11px] text-[#94A3B8]">Semester 6 · Zero Trust Protocols</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#F2C94C]">92% Complete</span>
                      </div>
                    </div>
                  )}

                  {activeCampusTab === 'projects' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                        <span className="text-xs font-bold text-white block">Autonomous Agri-IoT Sensor Node</span>
                        <p className="text-[11px] text-[#94A3B8]">Real-time soil hydration telemetry using LoRaWAN.</p>
                        <div className="flex items-center justify-between text-[11px] pt-1">
                          <span className="text-[#7CCB32]">Faculty Approved</span>
                          <span className="font-mono text-[#94A3B8]">Sprint 4/5</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                        <span className="text-xs font-bold text-white block">Biometric Student Entry Hub</span>
                        <p className="text-[11px] text-[#94A3B8]">Edge camera processing for contactless campus attendance.</p>
                        <div className="flex items-center justify-between text-[11px] pt-1">
                          <span className="text-[#00E5FF]">Field Testing</span>
                          <span className="font-mono text-[#94A3B8]">Sprint 3/4</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeCampusTab === 'skills' && (
                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs text-[#CBD5E1]">
                          <span>Distributed Systems &amp; APIs</span>
                          <span className="font-mono text-[#7CCB32]">Advanced (Level 4)</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#7CCB32] to-[#00E5FF] w-[85%]" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs text-[#CBD5E1]">
                          <span>AI Agent Prompt Architecture</span>
                          <span className="font-mono text-[#00E5FF]">Proficient (Level 3)</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#00E5FF] to-[#0284C7] w-[70%]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>Campus-wide Single Sign-On (SSO)</span>
                  <span className="text-[#7CCB32]">Role-based access for Faculty &amp; Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT B: THENAM CONNECT ================= */}
      <section id="thenam-connect" className="py-24 border-b border-white/[0.06] bg-[#070D16] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Illustrative ERP Dashboard Concept */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="tech-card rounded-2xl p-6 border border-[#00B9C7]/25 glow-border-teal bg-[#07111D]/90">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#00E5FF]" />
                    <span className="text-sm font-bold text-white font-display">Thenam Connect ERP Portal</span>
                    <span className="text-[10px] text-[#94A3B8] font-mono">(Illustrative UI Concept)</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] rounded-lg">
                    <button
                      onClick={() => setActiveConnectModule('operations')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                        activeConnectModule === 'operations' ? 'bg-[#00B9C7] text-black font-semibold' : 'text-[#94A3B8]'
                      }`}
                    >
                      Operations
                    </button>
                    <button
                      onClick={() => setActiveConnectModule('inventory')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                        activeConnectModule === 'inventory' ? 'bg-[#00B9C7] text-black font-semibold' : 'text-[#94A3B8]'
                      }`}
                    >
                      Inventory
                    </button>
                    <button
                      onClick={() => setActiveConnectModule('finance')}
                      className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                        activeConnectModule === 'finance' ? 'bg-[#00B9C7] text-black font-semibold' : 'text-[#94A3B8]'
                      }`}
                    >
                      Finance
                    </button>
                  </div>
                </div>

                {/* Body Content */}
                <div className="py-5 space-y-4">
                  {/* Metric Ribbon */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] text-[#94A3B8] uppercase block">Active Pipelines</span>
                      <span className="text-lg font-bold font-mono text-white">42 Streams</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] text-[#94A3B8] uppercase block">Fulfillment SLA</span>
                      <span className="text-lg font-bold font-mono text-[#7CCB32]">99.4%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] text-[#94A3B8] uppercase block">Department Sync</span>
                      <span className="text-lg font-bold font-mono text-[#00E5FF]">Real-Time</span>
                    </div>
                  </div>

                  {/* Operational Data Table Concept */}
                  <div className="rounded-xl border border-white/[0.08] overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-white/[0.04] text-[#CBD5E1] border-b border-white/[0.06]">
                        <tr>
                          <th className="py-2.5 px-3">Workflow ID</th>
                          <th className="py-2.5 px-3">Department</th>
                          <th className="py-2.5 px-3">State</th>
                          <th className="py-2.5 px-3 text-right">Throughput</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.04] text-[#94A3B8] font-mono">
                        <tr>
                          <td className="py-2.5 px-3 text-white">WF-OPS-109</td>
                          <td className="py-2.5 px-3">Supply Procurement</td>
                          <td className="py-2.5 px-3 text-[#7CCB32]">Active</td>
                          <td className="py-2.5 px-3 text-right">1,480 units</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 text-white">WF-FIN-204</td>
                          <td className="py-2.5 px-3">Invoice Reconciliation</td>
                          <td className="py-2.5 px-3 text-[#00E5FF]">Balanced</td>
                          <td className="py-2.5 px-3 text-right">342 invoices</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 text-white">WF-LOG-318</td>
                          <td className="py-2.5 px-3">Fleet Route Dispatch</td>
                          <td className="py-2.5 px-3 text-[#F2C94C]">In Transit</td>
                          <td className="py-2.5 px-3 text-right">98.2% on-time</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>Connected REST API &amp; Webhook Hub</span>
                  <span className="text-[#00E5FF]">PostgreSQL + Redis Realtime Sync</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded bg-[#00B9C7]/10 text-[#00E5FF] border border-[#00B9C7]/20">
                  ERP PLATFORM
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                Thenam Connect
              </h2>

              <p className="text-base text-[#CBD5E1] leading-relaxed">
                Thenam Connect is a business-focused ERP platform designed to bring operational information and workflows into a connected digital environment.
              </p>

              {/* Capabilities */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#00B9C7]/15 text-[#00E5FF] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Business Management Dashboards</h3>
                    <p className="text-xs text-[#94A3B8]">Cross-departmental executive visibility unifying operations, sales pipelines, and billing metrics in real time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#00B9C7]/15 text-[#00E5FF] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Organized Multi-Stage Workflows</h3>
                    <p className="text-xs text-[#94A3B8]">Configurable approval chains and task queues that prevent operational handoff delays.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#00B9C7]/15 text-[#00E5FF] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Centralized Operational Information</h3>
                    <p className="text-xs text-[#94A3B8]">A single source of truth for client records, inventory registers, purchase orders, and supplier files.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#00B9C7]/15 text-[#00E5FF] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Reporting, Visibility &amp; Process Coordination</h3>
                    <p className="text-xs text-[#94A3B8]">Automated monthly compliance audits, ledger balances, and cross-team alignment notifications.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  state={{ preferredService: 'Thenam Connect ERP' }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#00B9C7] via-[#0284C7] to-[#1D4ED8] rounded-xl hover:shadow-[0_0_20px_rgba(0,185,199,0.4)] transition-all"
                >
                  <span>Explore Thenam Connect</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-[11px] text-[#64748B]">Tailored for Mid-Sized &amp; Enterprise Teams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT C: SEO SERVICES ================= */}
      <section id="seo-services" className="py-24 border-b border-white/[0.06] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded bg-[#F2C94C]/10 text-[#F2C94C] border border-[#F2C94C]/20">
                  DIGITAL GROWTH STUDIO
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                SEO &amp; Search Optimization Services
              </h2>

              <p className="text-base text-[#CBD5E1] leading-relaxed">
                We help businesses improve their online presence through search optimization, keyword research, content strategy, technical SEO, and website improvements.
              </p>

              {/* Capabilities */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#F2C94C]/15 text-[#F2C94C] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Keyword Research &amp; Search Intent</h3>
                    <p className="text-xs text-[#94A3B8]">Identification of high-commercial intent terms, search volume gaps, and competitive SERP positioning.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#F2C94C]/15 text-[#F2C94C] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">On-Page SEO &amp; Semantic Architecture</h3>
                    <p className="text-xs text-[#94A3B8]">Heading hierarchy, semantic HTML tags, internal link trees, and conversion-focused metadata design.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#F2C94C]/15 text-[#F2C94C] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Technical SEO &amp; Performance Engineering</h3>
                    <p className="text-xs text-[#94A3B8]">Core Web Vitals acceleration, Schema.org rich snippet JSON-LD, sitemaps, and robots governance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#F2C94C]/15 text-[#F2C94C] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Organic Search Strategy &amp; Analytics</h3>
                    <p className="text-xs text-[#94A3B8]">Transparent monthly impression tracking, click-through optimization, and qualified conversion metrics.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  state={{ preferredService: 'SEO & Digital Marketing' }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#F2C94C] to-[#7CCB32] text-black rounded-xl hover:shadow-[0_0_20px_rgba(242,201,76,0.4)] transition-all"
                >
                  <span className="text-black font-bold">Explore SEO Services</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </Link>
                <span className="text-[11px] text-[#64748B]">Audits · Strategy · Growth</span>
              </div>
            </div>

            {/* Illustrative SEO Dashboard Concept */}
            <div className="lg:col-span-7">
              <div className="tech-card rounded-2xl p-6 border border-[#F2C94C]/25 glow-border-teal bg-[#10130E]/90">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-[#F2C94C]" />
                    <span className="text-sm font-bold text-white font-display">SEO Growth Analytics Hub</span>
                    <span className="text-[10px] text-[#94A3B8] font-mono">(Illustrative UI Concept)</span>
                  </div>
                  <span className="text-xs font-mono text-[#7CCB32]">Google Index 100% Valid</span>
                </div>

                {/* Body */}
                <div className="py-5 space-y-4">
                  {/* Scores */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] text-[#94A3B8] uppercase block">Lighthouse Speed</span>
                      <span className="text-lg font-bold font-mono text-[#7CCB32]">98 / 100</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] text-[#94A3B8] uppercase block">SERP Visibility</span>
                      <span className="text-lg font-bold font-mono text-[#00E5FF]">+142%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[10px] text-[#94A3B8] uppercase block">Schema Validation</span>
                      <span className="text-lg font-bold font-mono text-[#F2C94C]">Valid JSON-LD</span>
                    </div>
                  </div>

                  {/* Keyword Position Visualization */}
                  <div className="rounded-xl border border-white/[0.08] p-4 bg-white/[0.02] space-y-3">
                    <span className="text-xs font-bold text-white block">Search Position Benchmarks</span>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex items-center justify-between">
                        <span className="text-[#CBD5E1]">&ldquo;Thenam Software Solutions&rdquo;</span>
                        <span className="text-[#7CCB32]">Position #1 (Branded Authority)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#CBD5E1]">&ldquo;AI Development Company Chennai&rdquo;</span>
                        <span className="text-[#00E5FF]">Top 3 Target Tier</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#CBD5E1]">&ldquo;Education Platform Thenam Campus&rdquo;</span>
                        <span className="text-[#F2C94C]">Top 1 Indexed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span>Technical Crawler Health: 0 Errors</span>
                  <span className="text-[#F2C94C]">Structured Data Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Enterprise Solutions */}
      <section className="py-20 border-b border-white/[0.06] bg-[#070D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00E5FF] uppercase">
              Extended Solutions
            </span>
            <h2 className="text-3xl font-bold text-white font-display">
              Domain-Specific Solutions
            </h2>
            <p className="text-sm text-[#94A3B8]">
              Proven technological frameworks ready to adapt to your enterprise workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="tech-card rounded-2xl p-6 space-y-3">
              <Cpu className="w-6 h-6 text-[#00E5FF]" />
              <h3 className="text-lg font-bold text-white font-display">AI-Assisted Workflows</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Connect legacy enterprise data silos with natural language retrieval pipelines and intelligent document processing.
              </p>
            </div>
            <div className="tech-card rounded-2xl p-6 space-y-3">
              <Network className="w-6 h-6 text-[#7CCB32]" />
              <h3 className="text-lg font-bold text-white font-display">IoT Monitoring Systems</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Aggregated industrial sensor monitoring, edge device health telemetry, and automated threshold alerts.
              </p>
            </div>
            <div className="tech-card rounded-2xl p-6 space-y-3">
              <Laptop className="w-6 h-6 text-[#F2C94C]" />
              <h3 className="text-lg font-bold text-white font-display">Digital Transformation</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Migrate on-premise operations to modern cloud infrastructures with zero data loss and automated backups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Looking for a Custom Solution?
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Need a tailored software architecture or wanting to integrate Thenam Campus or Thenam Connect into your existing IT infrastructure?
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#00B9C7] via-[#0284C7] to-[#1D4ED8] rounded-full hover:shadow-[0_0_25px_rgba(0,185,199,0.4)] transition-all duration-300"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
