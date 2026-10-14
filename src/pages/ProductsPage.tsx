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
    <div className="relative min-h-screen pt-32 pb-24 bg-[#06111F] text-[#B8C7D9]">
      <SEOHead
        title="Products & Solutions | Thenam Campus & Thenam Connect"
        description="Explore Thenam's digital platforms: Thenam Campus education platform, Thenam Connect ERP platform, and specialized SEO growth services."
      />

      {/* Hero Header */}
      <section className="pb-16 border-b border-[#0B2238] bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00D5E8] uppercase">
              Thenam Product Ecosystem
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F8FF] font-display tracking-tight leading-[1.1] text-balance">
              Digital Products Designed to Make a Difference.
            </h1>
            <p className="text-lg text-[#B8C7D9] leading-relaxed">
              Explore Thenam&apos;s digital platforms and services built to support learning, streamline business operations, and strengthen online visibility.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT A: THENAM CAMPUS ================= */}
      <section id="thenam-campus" className="py-24 border-b border-[#0B2238] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Product Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded bg-[#12D6A0]/10 text-[#12D6A0] border border-[#12D6A0]/20">
                  EDUCATION PLATFORM
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F8FF] font-display">
                Thenam Campus
              </h2>

              <p className="text-base text-[#B8C7D9] leading-relaxed">
                Thenam Campus is an education-focused digital platform designed to support learning, student development, and educational opportunities.
              </p>

              {/* Capabilities */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#12D6A0]/15 text-[#12D6A0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F8FF]">Learning &amp; Academic Resources</h3>
                    <p className="text-xs text-[#B8C7D9]">Centralized repository for curriculums, lecture materials, interactive assessments, and syllabus tracking.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#12D6A0]/15 text-[#12D6A0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F8FF]">Educational Opportunities</h3>
                    <p className="text-xs text-[#B8C7D9]">Connected notices for research grants, inter-college hackathons, seminars, and academic workshops.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#12D6A0]/15 text-[#12D6A0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F8FF]">Student Projects &amp; Innovation</h3>
                    <p className="text-xs text-[#B8C7D9]">Collaborative project workspaces, mentor review pipelines, and institutional showcase galleries.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#12D6A0]/15 text-[#12D6A0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F8FF]">Career &amp; Skill Development</h3>
                    <p className="text-xs text-[#B8C7D9]">Industry-aligned competency roadmaps, credential badges, and placement readiness tracking.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  state={{ preferredService: 'Thenam Campus Deployment' }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#06111F] bg-[#12D6A0] rounded-xl hover:bg-[#12D6A0]/90 hover:shadow-[0_0_20px_rgba(18,214,160,0.4)] transition-all"
                >
                  <span>Explore Thenam Campus</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-[11px] text-[#B8C7D9]/70">Platform for Universities &amp; Colleges</span>
              </div>
            </div>

            {/* Illustrative Education Dashboard Concept */}
            <div className="lg:col-span-7">
              <div className="tech-card rounded-2xl p-6 border border-[#12D6A0]/30 glow-border-green bg-[#071827]">
                {/* Dashboard top bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#0B2238]">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#12D6A0]" />
                    <span className="text-sm font-bold text-[#F4F8FF] font-display">Thenam Campus Workspace</span>
                    <span className="text-[10px] text-[#B8C7D9]/70 font-mono">(Illustrative UI Concept)</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1 bg-[#06111F] border border-[#0B2238] rounded-lg">
                    <button
                      onClick={() => setActiveCampusTab('courses')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors ${
                        activeCampusTab === 'courses' ? 'bg-[#12D6A0] text-[#06111F]' : 'text-[#B8C7D9] hover:text-[#F4F8FF]'
                      }`}
                    >
                      Academics
                    </button>
                    <button
                      onClick={() => setActiveCampusTab('projects')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors ${
                        activeCampusTab === 'projects' ? 'bg-[#12D6A0] text-[#06111F]' : 'text-[#B8C7D9] hover:text-[#F4F8FF]'
                      }`}
                    >
                      Projects
                    </button>
                    <button
                      onClick={() => setActiveCampusTab('skills')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors ${
                        activeCampusTab === 'skills' ? 'bg-[#12D6A0] text-[#06111F]' : 'text-[#B8C7D9] hover:text-[#F4F8FF]'
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
                      <div className="p-3.5 rounded-xl bg-[#06111F]/70 border border-[#0B2238] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-[#12D6A0]" />
                          <div>
                            <span className="text-xs font-bold text-[#F4F8FF] block">Applied Machine Learning &amp; Neural Nets</span>
                            <span className="text-[11px] text-[#B8C7D9]">Semester 6 · 14 Interactive Modules</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#12D6A0] font-semibold">88% Complete</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#06111F]/70 border border-[#0B2238] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Laptop className="w-4 h-4 text-[#00D5E8]" />
                          <div>
                            <span className="text-xs font-bold text-[#F4F8FF] block">Full-Stack Cloud Engineering</span>
                            <span className="text-[11px] text-[#B8C7D9]">Semester 5 · Next.js &amp; Distributed Systems</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#00D5E8] font-semibold">74% Complete</span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#06111F]/70 border border-[#0B2238] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Award className="w-4 h-4 text-[#12D6A0]" />
                          <div>
                            <span className="text-xs font-bold text-[#F4F8FF] block">Cybersecurity &amp; Cryptographic Architecture</span>
                            <span className="text-[11px] text-[#B8C7D9]">Semester 6 · Zero Trust Protocols</span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#12D6A0] font-semibold">92% Complete</span>
                      </div>
                    </div>
                  )}

                  {activeCampusTab === 'projects' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-[#06111F]/70 border border-[#0B2238] space-y-2">
                        <span className="text-xs font-bold text-[#F4F8FF] block">Autonomous Agri-IoT Sensor Node</span>
                        <p className="text-[11px] text-[#B8C7D9]">Real-time soil hydration telemetry using LoRaWAN.</p>
                        <div className="flex items-center justify-between text-[11px] pt-1">
                          <span className="text-[#12D6A0] font-semibold">Faculty Approved</span>
                          <span className="font-mono text-[#B8C7D9]">Sprint 4/5</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-[#06111F]/70 border border-[#0B2238] space-y-2">
                        <span className="text-xs font-bold text-[#F4F8FF] block">Biometric Student Entry Hub</span>
                        <p className="text-[11px] text-[#B8C7D9]">Edge camera processing for contactless campus attendance.</p>
                        <div className="flex items-center justify-between text-[11px] pt-1">
                          <span className="text-[#00D5E8] font-semibold">Field Testing</span>
                          <span className="font-mono text-[#B8C7D9]">Sprint 3/4</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeCampusTab === 'skills' && (
                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs text-[#B8C7D9]">
                          <span>Distributed Systems &amp; APIs</span>
                          <span className="font-mono text-[#12D6A0]">Advanced (Level 4)</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[#0B2238] overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#12D6A0] to-[#00D5E8] w-[85%]" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs text-[#B8C7D9]">
                          <span>AI Agent Prompt Architecture</span>
                          <span className="font-mono text-[#00D5E8]">Proficient (Level 3)</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[#0B2238] overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#00D5E8] to-[#12D6A0] w-[70%]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#0B2238] flex items-center justify-between text-[11px] text-[#B8C7D9]">
                  <span>Campus-wide Single Sign-On (SSO)</span>
                  <span className="text-[#12D6A0]">Role-based access for Faculty &amp; Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT B: THENAM CONNECT ================= */}
      <section id="thenam-connect" className="py-24 border-b border-[#0B2238] bg-[#0B2238]/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Illustrative ERP Dashboard Concept */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="tech-card rounded-2xl p-6 border border-[#00D5E8]/30 glow-border-teal bg-[#071827]">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#0B2238]">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#00D5E8]" />
                    <span className="text-sm font-bold text-[#F4F8FF] font-display">Thenam Connect ERP Portal</span>
                    <span className="text-[10px] text-[#B8C7D9]/70 font-mono">(Illustrative UI Concept)</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-1 bg-[#06111F] border border-[#0B2238] rounded-lg">
                    <button
                      onClick={() => setActiveConnectModule('operations')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors ${
                        activeConnectModule === 'operations' ? 'bg-[#00D5E8] text-[#06111F]' : 'text-[#B8C7D9] hover:text-[#F4F8FF]'
                      }`}
                    >
                      Operations
                    </button>
                    <button
                      onClick={() => setActiveConnectModule('inventory')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors ${
                        activeConnectModule === 'inventory' ? 'bg-[#00D5E8] text-[#06111F]' : 'text-[#B8C7D9] hover:text-[#F4F8FF]'
                      }`}
                    >
                      Inventory
                    </button>
                    <button
                      onClick={() => setActiveConnectModule('finance')}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors ${
                        activeConnectModule === 'finance' ? 'bg-[#00D5E8] text-[#06111F]' : 'text-[#B8C7D9] hover:text-[#F4F8FF]'
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
                    <div className="p-3 rounded-xl bg-[#06111F]/70 border border-[#0B2238]">
                      <span className="text-[10px] text-[#B8C7D9]/70 uppercase block">Active Pipelines</span>
                      <span className="text-lg font-bold font-mono text-[#F4F8FF]">42 Streams</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#06111F]/70 border border-[#0B2238]">
                      <span className="text-[10px] text-[#B8C7D9]/70 uppercase block">Fulfillment SLA</span>
                      <span className="text-lg font-bold font-mono text-[#12D6A0]">99.4%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#06111F]/70 border border-[#0B2238]">
                      <span className="text-[10px] text-[#B8C7D9]/70 uppercase block">Department Sync</span>
                      <span className="text-lg font-bold font-mono text-[#00D5E8]">Real-Time</span>
                    </div>
                  </div>

                  {/* Operational Data Table Concept */}
                  <div className="rounded-xl border border-[#0B2238] overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#06111F] text-[#B8C7D9] border-b border-[#0B2238]">
                        <tr>
                          <th className="py-2.5 px-3">Workflow ID</th>
                          <th className="py-2.5 px-3">Department</th>
                          <th className="py-2.5 px-3">State</th>
                          <th className="py-2.5 px-3 text-right">Throughput</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#0B2238] text-[#B8C7D9] font-mono">
                        <tr>
                          <td className="py-2.5 px-3 text-[#F4F8FF]">WF-OPS-109</td>
                          <td className="py-2.5 px-3">Supply Procurement</td>
                          <td className="py-2.5 px-3 text-[#12D6A0]">Active</td>
                          <td className="py-2.5 px-3 text-right">1,480 units</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 text-[#F4F8FF]">WF-FIN-204</td>
                          <td className="py-2.5 px-3">Invoice Reconciliation</td>
                          <td className="py-2.5 px-3 text-[#00D5E8]">Balanced</td>
                          <td className="py-2.5 px-3 text-right">342 invoices</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-3 text-[#F4F8FF]">WF-LOG-318</td>
                          <td className="py-2.5 px-3">Fleet Route Dispatch</td>
                          <td className="py-2.5 px-3 text-[#00D5E8]">In Transit</td>
                          <td className="py-2.5 px-3 text-right">98.2% on-time</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#0B2238] flex items-center justify-between text-[11px] text-[#B8C7D9]">
                  <span>Connected REST API &amp; Webhook Hub</span>
                  <span className="text-[#00D5E8]">PostgreSQL + Redis Realtime Sync</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded bg-[#00D5E8]/10 text-[#00D5E8] border border-[#00D5E8]/20">
                  ERP PLATFORM
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F8FF] font-display">
                Thenam Connect
              </h2>

              <p className="text-base text-[#B8C7D9] leading-relaxed">
                Thenam Connect is a business-focused ERP platform designed to bring operational information and workflows into a connected digital environment.
              </p>

              {/* Capabilities */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#00D5E8]/15 text-[#00D5E8] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F8FF]">Business Management Dashboards</h3>
                    <p className="text-xs text-[#B8C7D9]">Cross-departmental executive visibility unifying operations, sales pipelines, and billing metrics in real time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#00D5E8]/15 text-[#00D5E8] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F8FF]">Organized Multi-Stage Workflows</h3>
                    <p className="text-xs text-[#B8C7D9]">Configurable approval chains and task queues that prevent operational handoff delays.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#00D5E8]/15 text-[#00D5E8] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F8FF]">Centralized Operational Information</h3>
                    <p className="text-xs text-[#B8C7D9]">A single source of truth for client records, inventory registers, purchase orders, and supplier files.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#00D5E8]/15 text-[#00D5E8] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F8FF]">Reporting, Visibility &amp; Process Coordination</h3>
                    <p className="text-xs text-[#B8C7D9]">Automated monthly compliance audits, ledger balances, and cross-team alignment notifications.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  state={{ preferredService: 'Thenam Connect ERP' }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#06111F] bg-[#00D5E8] rounded-xl hover:bg-[#00D5E8]/90 hover:shadow-[0_0_20px_rgba(0,213,232,0.4)] transition-all"
                >
                  <span>Explore Thenam Connect</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-[11px] text-[#B8C7D9]/70">Tailored for Mid-Sized &amp; Enterprise Teams</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT C: SEO SERVICES ================= */}
      <section id="seo-services" className="py-24 border-b border-[#0B2238] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded bg-[#12D6A0]/10 text-[#12D6A0] border border-[#12D6A0]/20">
                  DIGITAL GROWTH STUDIO
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F8FF] font-display">
                SEO &amp; Search Optimization Services
              </h2>

              <p className="text-base text-[#B8C7D9] leading-relaxed">
                We help businesses improve their online presence through search optimization, keyword research, content strategy, technical SEO, and website improvements.
              </p>

              {/* Capabilities */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#12D6A0]/15 text-[#12D6A0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F8FF]">Keyword Research &amp; Search Intent</h3>
                    <p className="text-xs text-[#B8C7D9]">Identification of high-commercial intent terms, search volume gaps, and competitive SERP positioning.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#12D6A0]/15 text-[#12D6A0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F8FF]">On-Page SEO &amp; Semantic Architecture</h3>
                    <p className="text-xs text-[#B8C7D9]">Heading hierarchy, semantic HTML tags, internal link trees, and conversion-focused metadata design.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#12D6A0]/15 text-[#12D6A0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F8FF]">Technical SEO &amp; Performance Engineering</h3>
                    <p className="text-xs text-[#B8C7D9]">Core Web Vitals acceleration, Schema.org rich snippet JSON-LD, sitemaps, and robots governance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-[#12D6A0]/15 text-[#12D6A0] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#F4F8FF]">Organic Search Strategy &amp; Analytics</h3>
                    <p className="text-xs text-[#B8C7D9]">Transparent monthly impression tracking, click-through optimization, and qualified conversion metrics.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  state={{ preferredService: 'SEO & Digital Marketing' }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#06111F] bg-[#00D5E8] rounded-xl hover:bg-[#00D5E8]/90 hover:shadow-[0_0_20px_rgba(0,213,232,0.4)] transition-all"
                >
                  <span>Explore SEO Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-[11px] text-[#B8C7D9]/70">Audits · Strategy · Growth</span>
              </div>
            </div>

            {/* Illustrative SEO Dashboard Concept */}
            <div className="lg:col-span-7">
              <div className="tech-card rounded-2xl p-6 border border-[#00D5E8]/30 glow-border-teal bg-[#071827]">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#0B2238]">
                  <div className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-[#00D5E8]" />
                    <span className="text-sm font-bold text-[#F4F8FF] font-display">SEO Growth Analytics Hub</span>
                    <span className="text-[10px] text-[#B8C7D9]/70 font-mono">(Illustrative UI Concept)</span>
                  </div>
                  <span className="text-xs font-mono text-[#12D6A0] font-semibold">Google Index 100% Valid</span>
                </div>

                {/* Body */}
                <div className="py-5 space-y-4">
                  {/* Scores */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-[#06111F]/70 border border-[#0B2238]">
                      <span className="text-[10px] text-[#B8C7D9]/70 uppercase block">Lighthouse Speed</span>
                      <span className="text-lg font-bold font-mono text-[#12D6A0]">98 / 100</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#06111F]/70 border border-[#0B2238]">
                      <span className="text-[10px] text-[#B8C7D9]/70 uppercase block">SERP Visibility</span>
                      <span className="text-lg font-bold font-mono text-[#00D5E8]">+142%</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#06111F]/70 border border-[#0B2238]">
                      <span className="text-[10px] text-[#B8C7D9]/70 uppercase block">Schema Validation</span>
                      <span className="text-lg font-bold font-mono text-[#12D6A0]">Valid JSON-LD</span>
                    </div>
                  </div>

                  {/* Keyword Position Visualization */}
                  <div className="rounded-xl border border-[#0B2238] p-4 bg-[#06111F]/70 space-y-3">
                    <span className="text-xs font-bold text-[#F4F8FF] block">Search Position Benchmarks</span>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex items-center justify-between">
                        <span className="text-[#B8C7D9]">&ldquo;Thenam Software Solutions&rdquo;</span>
                        <span className="text-[#12D6A0]">Position #1 (Branded Authority)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#B8C7D9]">&ldquo;AI Development Company Chennai&rdquo;</span>
                        <span className="text-[#00D5E8]">Top 3 Target Tier</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#B8C7D9]">&ldquo;Education Platform Thenam Campus&rdquo;</span>
                        <span className="text-[#12D6A0]">Top 1 Indexed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#0B2238] flex items-center justify-between text-[11px] text-[#B8C7D9]">
                  <span>Technical Crawler Health: 0 Errors</span>
                  <span className="text-[#00D5E8]">Structured Data Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Enterprise Solutions */}
      <section className="py-20 border-b border-[#0B2238] bg-[#0B2238]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00D5E8] uppercase">
              Extended Solutions
            </span>
            <h2 className="text-3xl font-bold text-[#F4F8FF] font-display">
              Domain-Specific Solutions
            </h2>
            <p className="text-sm text-[#B8C7D9]">
              Proven technological frameworks ready to adapt to your enterprise workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="tech-card rounded-2xl p-6 space-y-3">
              <Cpu className="w-6 h-6 text-[#00D5E8]" />
              <h3 className="text-lg font-bold text-[#F4F8FF] font-display">AI-Assisted Workflows</h3>
              <p className="text-xs text-[#B8C7D9] leading-relaxed">
                Connect legacy enterprise data silos with natural language retrieval pipelines and intelligent document processing.
              </p>
            </div>
            <div className="tech-card rounded-2xl p-6 space-y-3">
              <Network className="w-6 h-6 text-[#12D6A0]" />
              <h3 className="text-lg font-bold text-[#F4F8FF] font-display">IoT Monitoring Systems</h3>
              <p className="text-xs text-[#B8C7D9] leading-relaxed">
                Aggregated industrial sensor monitoring, edge device health telemetry, and automated threshold alerts.
              </p>
            </div>
            <div className="tech-card rounded-2xl p-6 space-y-3">
              <Laptop className="w-6 h-6 text-[#00D5E8]" />
              <h3 className="text-lg font-bold text-[#F4F8FF] font-display">Digital Transformation</h3>
              <p className="text-xs text-[#B8C7D9] leading-relaxed">
                Migrate on-premise operations to modern cloud infrastructures with zero data loss and automated backups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F8FF] font-display">
            Looking for a Custom Solution?
          </h2>
          <p className="text-sm text-[#B8C7D9] leading-relaxed">
            Need a tailored software architecture or wanting to integrate Thenam Campus or Thenam Connect into your existing IT infrastructure?
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#06111F] bg-[#00D5E8] hover:bg-[#00D5E8]/90 rounded-full hover:shadow-[0_0_25px_rgba(0,213,232,0.4)] transition-all duration-300"
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
