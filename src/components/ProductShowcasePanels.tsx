import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Network,
  Search,
  ArrowRight,
  TrendingUp,
  Users,
  BookOpen,
  LayoutDashboard,
  FileText,
  Settings,
  Bell,
  CheckCircle,
  BarChart2,
  Activity,
  Layers,
} from 'lucide-react';

export const ProductShowcasePanels: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* 3 Product Panels Grid Matching the Reference Image */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ================= PANEL 1: THENAM CAMPUS ================= */}
        <div className="rounded-2xl p-5 bg-[#070D18]/90 border border-white/10 hover:border-[#00B9C7]/40 transition-all duration-300 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.7)] group flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
            {/* Left Mockup Dashboard (approx 7 cols) */}
            <div className="sm:col-span-7 rounded-xl bg-[#040811] border border-white/[0.08] p-3 flex flex-col justify-between overflow-hidden relative shadow-inner">
              {/* Mini App Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-[10px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#7CCB32]" />
                  <span className="font-bold text-white font-mono">Thenam Campus</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#64748B]">
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.04]">Search...</span>
                  <div className="w-4 h-4 rounded-full bg-[#00B9C7]/20 text-[#00E5FF] flex items-center justify-center text-[8px] font-bold">
                    TC
                  </div>
                </div>
              </div>

              {/* Mini Dashboard Body */}
              <div className="flex gap-2">
                {/* Left Mini Sidebar */}
                <div className="flex flex-col gap-1.5 text-[8px] text-[#64748B] shrink-0 border-r border-white/[0.06] pr-1.5">
                  <div className="p-1 rounded bg-[#00B9C7]/15 text-[#00E5FF]">
                    <LayoutDashboard className="w-2.5 h-2.5" />
                  </div>
                  <div className="p-1">
                    <BookOpen className="w-2.5 h-2.5" />
                  </div>
                  <div className="p-1">
                    <FileText className="w-2.5 h-2.5" />
                  </div>
                  <div className="p-1">
                    <Users className="w-2.5 h-2.5" />
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="flex-1 space-y-2 min-w-0">
                  {/* Banner */}
                  <div className="p-2 rounded-lg bg-gradient-to-r from-[#07242C] via-[#08303C] to-[#041420] border border-[#00B9C7]/20">
                    <span className="text-[7px] text-[#7CCB32] font-semibold tracking-wider uppercase block">
                      Learn &bull; Grow &bull; Build
                    </span>
                    <span className="text-[9px] font-bold text-white block mt-0.5 leading-tight truncate">
                      Your Next Era Starts Here
                    </span>
                    {/* Simulated curve */}
                    <div className="mt-1 h-3 flex items-end gap-0.5">
                      <div className="w-1.5 h-1.5 bg-[#00B9C7]/40 rounded-t" />
                      <div className="w-1.5 h-2 bg-[#00B9C7]/60 rounded-t" />
                      <div className="w-1.5 h-2.5 bg-[#7CCB32] rounded-t" />
                      <div className="w-1.5 h-3 bg-[#00E5FF] rounded-t" />
                      <div className="w-1.5 h-2 bg-[#7CCB32]/80 rounded-t" />
                    </div>
                  </div>

                  {/* Popular Courses Row */}
                  <div className="space-y-1">
                    <span className="text-[8px] text-[#94A3B8] font-medium block">Popular Courses</span>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="p-1 rounded bg-white/[0.03] border border-white/[0.06] text-center">
                        <div className="w-4 h-4 mx-auto rounded-full bg-[#00B9C7]/30 border border-[#00B9C7] flex items-center justify-center text-[7px] text-[#00E5FF]">
                          AI
                        </div>
                        <span className="text-[7px] text-[#CBD5E1] block mt-0.5 truncate">ML Models</span>
                      </div>
                      <div className="p-1 rounded bg-white/[0.03] border border-white/[0.06] text-center">
                        <div className="w-4 h-4 mx-auto rounded-full bg-[#7CCB32]/30 border border-[#7CCB32] flex items-center justify-center text-[7px] text-[#7CCB32]">
                          CS
                        </div>
                        <span className="text-[7px] text-[#CBD5E1] block mt-0.5 truncate">Cloud Dev</span>
                      </div>
                      <div className="p-1 rounded bg-white/[0.03] border border-white/[0.06] text-center">
                        <div className="w-4 h-4 mx-auto rounded-full bg-[#F2C94C]/30 border border-[#F2C94C] flex items-center justify-center text-[7px] text-[#F2C94C]">
                          SEC
                        </div>
                        <span className="text-[7px] text-[#CBD5E1] block mt-0.5 truncate">Security</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information & Action (approx 5 cols) */}
            <div className="sm:col-span-5 flex flex-col justify-between space-y-3">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#00B9C7]/10 border border-[#00B9C7]/30 flex items-center justify-center text-[#00E5FF] mb-2.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  Thenam Campus
                </h3>
                <span className="text-xs font-semibold text-[#00B9C7] block mt-0.5">
                  Education Platform
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed mt-2">
                  A modern education platform designed to support learning, student development and new opportunities.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#0A1424] hover:bg-[#00B9C7]/20 border border-[#00B9C7]/40 hover:border-[#00B9C7] transition-all group-hover:shadow-[0_0_15px_rgba(0,185,199,0.25)]"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00B9C7]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PANEL 2: THENAM CONNECT ================= */}
        <div className="rounded-2xl p-5 bg-[#070D18]/90 border border-white/10 hover:border-[#00B9C7]/40 transition-all duration-300 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.7)] group flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
            {/* Left Mockup Dashboard (approx 7 cols) */}
            <div className="sm:col-span-7 rounded-xl bg-[#040811] border border-white/[0.08] p-3 flex flex-col justify-between overflow-hidden relative shadow-inner">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-[10px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#00B9C7]" />
                  <span className="font-bold text-white font-mono">Thenam Connect</span>
                </div>
                <span className="text-[8px] font-mono text-[#00E5FF]">ONLINE</span>
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-4 gap-1 mb-2">
                <div className="p-1 rounded bg-white/[0.03] text-center border border-white/[0.04]">
                  <span className="text-[7px] text-[#64748B] block">Staff</span>
                  <span className="text-[10px] font-bold font-mono text-white">256</span>
                </div>
                <div className="p-1 rounded bg-white/[0.03] text-center border border-white/[0.04]">
                  <span className="text-[7px] text-[#64748B] block">Projects</span>
                  <span className="text-[10px] font-bold font-mono text-[#7CCB32]">48</span>
                </div>
                <div className="p-1 rounded bg-white/[0.03] text-center border border-white/[0.04]">
                  <span className="text-[7px] text-[#64748B] block">Tasks</span>
                  <span className="text-[10px] font-bold font-mono text-[#00E5FF]">12</span>
                </div>
                <div className="p-1 rounded bg-white/[0.03] text-center border border-white/[0.04]">
                  <span className="text-[7px] text-[#64748B] block">Alerts</span>
                  <span className="text-[10px] font-bold font-mono text-[#F2C94C]">13</span>
                </div>
              </div>

              {/* Chart & Radial Dial */}
              <div className="grid grid-cols-12 gap-1.5 items-center my-1">
                {/* Simulated throughput wave */}
                <div className="col-span-7 h-10 bg-gradient-to-r from-[#00E5FF]/10 to-transparent rounded p-1 flex items-end justify-between">
                  <div className="w-1 bg-[#00E5FF] h-3 rounded-t" />
                  <div className="w-1 bg-[#00E5FF] h-6 rounded-t" />
                  <div className="w-1 bg-[#7CCB32] h-4 rounded-t" />
                  <div className="w-1 bg-[#00E5FF] h-8 rounded-t" />
                  <div className="w-1 bg-[#7CCB32] h-5 rounded-t" />
                  <div className="w-1 bg-[#00E5FF] h-7 rounded-t" />
                </div>
                {/* Efficiency Dial */}
                <div className="col-span-5 text-center flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-[#00B9C7] flex items-center justify-center font-mono text-[9px] font-bold text-white shadow-[0_0_8px_rgba(0,185,199,0.3)]">
                    78%
                  </div>
                  <span className="text-[7px] text-[#64748B] mt-0.5">Efficiency</span>
                </div>
              </div>

              {/* Process Rows */}
              <div className="space-y-1 pt-1 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-[7px] font-mono">
                  <span className="text-[#CBD5E1]">WF-Inventory Sync</span>
                  <span className="text-[#7CCB32]">Optimal</span>
                </div>
                <div className="flex items-center justify-between text-[7px] font-mono">
                  <span className="text-[#CBD5E1]">WF-Billing Automation</span>
                  <span className="text-[#00E5FF]">Synced</span>
                </div>
              </div>
            </div>

            {/* Right Information & Action (approx 5 cols) */}
            <div className="sm:col-span-5 flex flex-col justify-between space-y-3">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#00B9C7]/10 border border-[#00B9C7]/30 flex items-center justify-center text-[#00E5FF] mb-2.5">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  Thenam Connect
                </h3>
                <span className="text-xs font-semibold text-[#00B9C7] block mt-0.5">
                  ERP Platform
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed mt-2">
                  A business-focused ERP platform designed to bring operational information and workflows together.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#0A1424] hover:bg-[#00B9C7]/20 border border-[#00B9C7]/40 hover:border-[#00B9C7] transition-all group-hover:shadow-[0_0_15px_rgba(0,185,199,0.25)]"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00B9C7]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PANEL 3: SEO SERVICES ================= */}
        <div className="rounded-2xl p-5 bg-[#070D18]/90 border border-white/10 hover:border-[#00B9C7]/40 transition-all duration-300 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.7)] group flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
            {/* Left Mockup Dashboard (approx 7 cols) */}
            <div className="sm:col-span-7 rounded-xl bg-[#040811] border border-white/[0.08] p-3 flex flex-col justify-between overflow-hidden relative shadow-inner">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-[10px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#F2C94C]" />
                  <span className="font-bold text-white font-mono">SEO Analytics</span>
                </div>
                <span className="text-[8px] font-mono text-[#7CCB32]">+142%</span>
              </div>

              {/* SERP Graph & Keyword List */}
              <div className="space-y-1.5">
                {/* Trend line */}
                <div className="p-1.5 rounded bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex justify-between text-[7px] text-[#94A3B8] mb-1">
                    <span>Position Depth</span>
                    <span className="text-[#00E5FF]">Top 3 Tier</span>
                  </div>
                  {/* Visual wave */}
                  <div className="h-6 flex items-end gap-1">
                    <div className="w-1 bg-[#00E5FF]/40 h-2" />
                    <div className="w-1 bg-[#00E5FF]/60 h-3" />
                    <div className="w-1 bg-[#7CCB32] h-4" />
                    <div className="w-1 bg-[#00E5FF] h-5" />
                    <div className="w-1 bg-[#7CCB32] h-4" />
                    <div className="w-1 bg-[#00E5FF] h-6" />
                  </div>
                </div>

                {/* Keyword table mini */}
                <div className="space-y-0.5 text-[7px] font-mono">
                  <div className="flex justify-between text-[#CBD5E1]">
                    <span className="truncate max-w-[80px]"># AI Software Studio</span>
                    <span className="text-[#7CCB32]">#1</span>
                  </div>
                  <div className="flex justify-between text-[#CBD5E1]">
                    <span className="truncate max-w-[80px]"># ERP Connect Hub</span>
                    <span className="text-[#00E5FF]">#2</span>
                  </div>
                </div>
              </div>

              {/* Traffic & Visibility Meter */}
              <div className="flex items-center justify-between pt-1 border-t border-white/[0.06]">
                <div className="text-[7px]">
                  <span className="text-[#64748B] block">Organic Traffic</span>
                  <span className="font-bold text-[#7CCB32] font-mono">&uarr; High Intent</span>
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-[#7CCB32] flex items-center justify-center font-mono text-[8px] font-bold text-white">
                  78%
                </div>
              </div>
            </div>

            {/* Right Information & Action (approx 5 cols) */}
            <div className="sm:col-span-5 flex flex-col justify-between space-y-3">
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#00B9C7]/10 border border-[#00B9C7]/30 flex items-center justify-center text-[#00E5FF] mb-2.5">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  SEO Services
                </h3>
                <span className="text-xs font-semibold text-[#00B9C7] block mt-0.5">
                  Search Engine Optimization
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed mt-2">
                  We help businesses improve their online presence through search optimization and digital growth strategies.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#0A1424] hover:bg-[#00B9C7]/20 border border-[#00B9C7]/40 hover:border-[#00B9C7] transition-all group-hover:shadow-[0_0_15px_rgba(0,185,199,0.25)]"
                >
                  <span>Explore Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00B9C7]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Tagline Divider from Reference Image */}
      <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-medium text-[#CBD5E1]">
        <span className="w-8 h-[1px] bg-[#00B9C7]/60" />
        <span className="tracking-wide">Smarter Solutions. A Brighter Future.</span>
        <span className="w-8 h-[1px] bg-[#00B9C7]/60" />
      </div>
    </div>
  );
};
