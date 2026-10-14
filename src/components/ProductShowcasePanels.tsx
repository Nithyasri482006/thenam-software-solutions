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

/* ─── Shared card wrapper ─── */
const ShowcaseCard: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <div
    id={id}
    style={{
      borderRadius: '16px',
      padding: '20px',
      background: '#071827',
      border: '1px solid rgba(11, 34, 56, 0.9)',
      boxShadow: '0 10px 40px -10px rgba(0,0,0,0.7)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 213, 232, 0.40)';
      (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 40px -10px rgba(0,0,0,0.7), 0 0 0 1px rgba(0, 213, 232, 0.15)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(11, 34, 56, 0.9)';
      (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 40px -10px rgba(0,0,0,0.7)';
    }}
  >
    {children}
  </div>
);

/* ─── Dashboard frame wrapper ─── */
const DashboardFrame: React.FC<{ children: React.ReactNode; dotColor: string; title: string; badge?: React.ReactNode }> = ({
  children, dotColor, title, badge
}) => (
  <div style={{
    borderRadius: '12px',
    background: '#06111F',
    border: '1px solid rgba(11, 34, 56, 0.8)',
    padding: '10px',
    overflow: 'hidden',
    flexShrink: 0,
  }}>
    {/* Window chrome */}
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      paddingBottom: '8px', marginBottom: '8px',
      borderBottom: '1px solid rgba(11, 34, 56, 0.6)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: dotColor }} />
        <span style={{ fontFamily: 'monospace', fontSize: '9px', fontWeight: 700, color: '#F4F8FF' }}>{title}</span>
      </div>
      {badge}
    </div>
    {children}
  </div>
);

export const ProductShowcasePanels: React.FC = () => {
  return (
    <div>
      {/* 3 Product Cards — single horizontal row */}
      <div className="product-cards-grid">

        {/* ═══════════════════════════════════════════════════════════
            CARD 1 — THENAM CAMPUS
        ═══════════════════════════════════════════════════════════ */}
        <ShowcaseCard id="card-thenam-campus">
          <div style={{ display: 'flex', gap: '14px', flex: 1 }}>

            {/* Left: Dashboard mockup */}
            <div style={{ flex: '0 0 55%', minWidth: 0 }}>
              <DashboardFrame dotColor="#12D6A0" title="Thenam Campus"
                badge={
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <span style={{ fontSize: '8px', padding: '1px 5px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: '#64748B' }}>Search...</span>
                    <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'rgba(0, 213, 232, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', color: '#00D5E8', fontWeight: 700 }}>TC</div>
                  </div>
                }
              >
                <div style={{ display: 'flex', gap: '6px' }}>
                  {/* Sidebar */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderRight: '1px solid rgba(11, 34, 56, 0.8)', paddingRight: '5px', flexShrink: 0 }}>
                    <div style={{ padding: '3px', borderRadius: '4px', background: 'rgba(0, 213, 232, 0.15)' }}>
                      <LayoutDashboard style={{ width: '9px', height: '9px', color: '#00D5E8' }} />
                    </div>
                    <div style={{ padding: '3px' }}><BookOpen style={{ width: '9px', height: '9px', color: '#64748B' }} /></div>
                    <div style={{ padding: '3px' }}><FileText style={{ width: '9px', height: '9px', color: '#64748B' }} /></div>
                    <div style={{ padding: '3px' }}><Users style={{ width: '9px', height: '9px', color: '#64748B' }} /></div>
                    <div style={{ padding: '3px' }}><Settings style={{ width: '9px', height: '9px', color: '#64748B' }} /></div>
                  </div>

                  {/* Main content */}
                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {/* Hero banner */}
                    <div style={{
                      padding: '6px 7px',
                      borderRadius: '6px',
                      background: 'linear-gradient(135deg, rgba(7,36,44,1) 0%, rgba(11,34,56,1) 50%, rgba(6,17,31,1) 100%)',
                      border: '1px solid rgba(0, 213, 232, 0.2)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      <span style={{ fontSize: '6px', color: '#12D6A0', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block' }}>
                        Learn • Grow • Build
                      </span>
                      <span style={{ fontSize: '8px', fontWeight: 700, color: '#F4F8FF', display: 'block', marginTop: '2px', lineHeight: 1.2 }}>
                        Your Next Era<br />Starts Here
                      </span>
                      {/* Mini bar chart */}
                      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', marginTop: '5px', height: '14px' }}>
                        {[4, 7, 5, 10, 8, 12, 9].map((h, i) => (
                          <div key={i} style={{ width: '4px', height: `${h}px`, background: i < 3 ? 'rgba(0, 213, 232, 0.35)' : i < 5 ? '#12D6A0' : '#00D5E8', borderRadius: '2px 2px 0 0' }} />
                        ))}
                      </div>
                    </div>

                    {/* Popular Courses */}
                    <div>
                      <span style={{ fontSize: '7px', color: '#B8C7D9', display: 'block', marginBottom: '3px', fontWeight: 500 }}>Popular Courses</span>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3px' }}>
                        {[
                          { label: 'AI', name: 'ML Models', color: '#00D5E8', bg: 'rgba(0, 213, 232, 0.2)' },
                          { label: 'CS', name: 'Cloud Dev', color: '#12D6A0', bg: 'rgba(18, 214, 160, 0.2)' },
                          { label: 'SEC', name: 'Security', color: '#F2C94C', bg: 'rgba(242, 201, 76, 0.2)' },
                        ].map((c, i) => (
                          <div key={i} style={{ padding: '3px', borderRadius: '4px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(11, 34, 56, 0.8)', textAlign: 'center' }}>
                            <div style={{ width: '14px', height: '14px', margin: '0 auto', borderRadius: '50%', background: c.bg, border: `1px solid ${c.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px', color: c.color, fontWeight: 700 }}>{c.label}</div>
                            <span style={{ fontSize: '6px', color: '#B8C7D9', display: 'block', marginTop: '2px' }}>{c.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Student avatars row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px', borderTop: '1px solid rgba(11, 34, 56, 0.8)', paddingTop: '5px' }}>
                      {['#00D5E8', '#12D6A0', '#F2C94C', '#38BDF8'].map((c, i) => (
                        <div key={i} style={{ width: '14px', height: '14px', borderRadius: '50%', background: `linear-gradient(135deg, ${c}, ${c}88)`, border: '1px solid rgba(255,255,255,0.15)', flexShrink: 0 }} />
                      ))}
                      <span style={{ fontSize: '6px', color: '#64748B', marginLeft: '2px' }}>+2.4k students</span>
                    </div>
                  </div>
                </div>
              </DashboardFrame>
            </div>

            {/* Right: Info & Action */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
              <div>
                <div style={{
                  width: '34px', height: '34px', borderRadius: '10px',
                  background: 'rgba(0, 213, 232, 0.1)', border: '1px solid rgba(0, 213, 232, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px',
                }}>
                  <GraduationCap style={{ width: '18px', height: '18px', color: '#00D5E8' }} />
                </div>
                <h3 style={{ fontFamily: "'Outfit','Plus Jakarta Sans',sans-serif", fontSize: '17px', fontWeight: 700, color: '#F4F8FF', margin: 0, lineHeight: 1.2 }}>
                  Thenam Campus
                </h3>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#00D5E8', display: 'block', marginTop: '3px' }}>
                  Education Platform
                </span>
                <p style={{ fontSize: '11px', color: '#B8C7D9', lineHeight: 1.55, marginTop: '8px' }}>
                  A modern education platform designed to support learning, student development and new opportunities.
                </p>
              </div>

              <div style={{ marginTop: '14px' }}>
                <Link
                  to="/products"
                  id="campus-explore-btn"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px', borderRadius: '50px',
                    fontSize: '11px', fontWeight: 600, color: '#F4F8FF',
                    background: '#0B2238', border: '1px solid rgba(0, 213, 232, 0.45)',
                    textDecoration: 'none', transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0, 213, 232, 0.15)';
                    (e.currentTarget as HTMLElement).style.borderColor = '#00D5E8';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(0, 213, 232, 0.25)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = '#0B2238';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 213, 232, 0.45)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <span>Explore Now</span>
                  <ArrowRight style={{ width: '13px', height: '13px', color: '#00D5E8' }} />
                </Link>
              </div>
            </div>
          </div>
        </ShowcaseCard>

        {/* ═══════════════════════════════════════════════════════════
            CARD 2 — THENAM CONNECT
        ═══════════════════════════════════════════════════════════ */}
        <ShowcaseCard id="card-thenam-connect">
          <div style={{ display: 'flex', gap: '14px', flex: 1 }}>

            {/* Left: Dashboard mockup */}
            <div style={{ flex: '0 0 55%', minWidth: 0 }}>
              <DashboardFrame dotColor="#00D5E8" title="Thenam Connect"
                badge={<span style={{ fontSize: '7px', fontFamily: 'monospace', color: '#00D5E8', fontWeight: 700 }}>ONLINE</span>}
              >
                {/* KPI Strip */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3px', marginBottom: '6px' }}>
                  {[
                    { label: 'Staff', value: '256', color: '#F4F8FF' },
                    { label: 'Projects', value: '48', color: '#12D6A0' },
                    { label: 'Tasks', value: '12', color: '#00D5E8' },
                    { label: 'Alerts', value: '13', color: '#F2C94C' },
                  ].map((kpi, i) => (
                    <div key={i} style={{ padding: '3px', borderRadius: '4px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(11, 34, 56, 0.8)', textAlign: 'center' }}>
                      <span style={{ fontSize: '6px', color: '#64748B', display: 'block' }}>{kpi.label}</span>
                      <span style={{ fontSize: '10px', fontWeight: 700, fontFamily: 'monospace', color: kpi.color }}>{kpi.value}</span>
                    </div>
                  ))}
                </div>

                {/* Chart row */}
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '5px' }}>
                  {/* Bar chart */}
                  <div style={{ flex: 1, height: '38px', background: 'rgba(0, 213, 232, 0.06)', borderRadius: '4px', padding: '3px', display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                    {[5, 12, 8, 18, 10, 15].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}px`, background: i % 2 === 0 ? '#00D5E8' : '#12D6A0', borderRadius: '2px 2px 0 0', opacity: 0.85 }} />
                    ))}
                  </div>
                  {/* Efficiency dial */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #00D5E8',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '8px', fontWeight: 700, fontFamily: 'monospace', color: '#F4F8FF',
                      boxShadow: '0 0 8px rgba(0, 213, 232, 0.3)',
                    }}>78%</div>
                    <span style={{ fontSize: '6px', color: '#64748B', marginTop: '2px', display: 'block' }}>Efficiency</span>
                  </div>
                </div>

                {/* Process rows */}
                <div style={{ borderTop: '1px solid rgba(11, 34, 56, 0.8)', paddingTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {[
                    { name: 'WF-Inventory Sync', status: 'Optimal', statusColor: '#12D6A0' },
                    { name: 'WF-Billing Auto', status: 'Synced', statusColor: '#00D5E8' },
                    { name: 'HR Payroll Run', status: 'Running', statusColor: '#F2C94C' },
                  ].map((row, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '7px', fontFamily: 'monospace' }}>
                      <span style={{ color: '#B8C7D9' }}>{row.name}</span>
                      <span style={{ color: row.statusColor }}>{row.status}</span>
                    </div>
                  ))}
                </div>
              </DashboardFrame>
            </div>

            {/* Right: Info & Action */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
              <div>
                <div style={{
                  width: '34px', height: '34px', borderRadius: '10px',
                  background: 'rgba(0, 213, 232, 0.1)', border: '1px solid rgba(0, 213, 232, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px',
                }}>
                  <Network style={{ width: '18px', height: '18px', color: '#00D5E8' }} />
                </div>
                <h3 style={{ fontFamily: "'Outfit','Plus Jakarta Sans',sans-serif", fontSize: '17px', fontWeight: 700, color: '#F4F8FF', margin: 0, lineHeight: 1.2 }}>
                  Thenam Connect
                </h3>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#00D5E8', display: 'block', marginTop: '3px' }}>
                  ERP Platform
                </span>
                <p style={{ fontSize: '11px', color: '#B8C7D9', lineHeight: 1.55, marginTop: '8px' }}>
                  A business-focused ERP platform designed to bring operational information and workflows together.
                </p>
              </div>

              <div style={{ marginTop: '14px' }}>
                <Link
                  to="/products"
                  id="connect-explore-btn"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px', borderRadius: '50px',
                    fontSize: '11px', fontWeight: 600, color: '#F4F8FF',
                    background: '#0B2238', border: '1px solid rgba(0, 213, 232, 0.45)',
                    textDecoration: 'none', transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0, 213, 232, 0.15)';
                    (e.currentTarget as HTMLElement).style.borderColor = '#00D5E8';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(0, 213, 232, 0.25)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = '#0B2238';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 213, 232, 0.45)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <span>Explore Now</span>
                  <ArrowRight style={{ width: '13px', height: '13px', color: '#00D5E8' }} />
                </Link>
              </div>
            </div>
          </div>
        </ShowcaseCard>

        {/* ═══════════════════════════════════════════════════════════
            CARD 3 — SEO SERVICES
        ═══════════════════════════════════════════════════════════ */}
        <ShowcaseCard id="card-seo-services">
          <div style={{ display: 'flex', gap: '14px', flex: 1 }}>

            {/* Left: Dashboard mockup */}
            <div style={{ flex: '0 0 55%', minWidth: 0 }}>
              <DashboardFrame dotColor="#F2C94C" title="SEO Analytics"
                badge={<span style={{ fontSize: '8px', fontFamily: 'monospace', color: '#12D6A0', fontWeight: 700 }}>+142%</span>}
              >
                {/* Organic traffic graph */}
                <div style={{ padding: '5px', borderRadius: '5px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(11, 34, 56, 0.8)', marginBottom: '5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '6px', color: '#B8C7D9', marginBottom: '4px' }}>
                    <span>Organic Traffic</span>
                    <span style={{ color: '#00D5E8' }}>Top 3 Tier</span>
                  </div>
                  <div style={{ height: '24px', display: 'flex', alignItems: 'flex-end', gap: '2px' }}>
                    {[4, 7, 6, 11, 9, 14, 12, 16].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}px`, background: i < 4 ? `rgba(0, 213, 232, ${0.3 + i*0.1})` : '#12D6A0', borderRadius: '2px 2px 0 0' }} />
                    ))}
                  </div>
                </div>

                {/* Keyword rankings */}
                <div style={{ marginBottom: '5px' }}>
                  <span style={{ fontSize: '6px', color: '#B8C7D9', display: 'block', marginBottom: '3px', fontWeight: 600, letterSpacing: '0.08em' }}>KEYWORD RANKINGS</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {[
                      { kw: '# software development', rank: '#1', color: '#12D6A0' },
                      { kw: '# digital solutions', rank: '#2', color: '#00D5E8' },
                      { kw: '# AI applications', rank: '#3', color: '#00D5E8' },
                    ].map((k, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '7px', fontFamily: 'monospace' }}>
                        <span style={{ color: '#B8C7D9', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '80px' }}>{k.kw}</span>
                        <span style={{ color: k.color, fontWeight: 700 }}>{k.rank}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visibility meter */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(11, 34, 56, 0.8)', paddingTop: '5px' }}>
                  <div>
                    <span style={{ fontSize: '6px', color: '#64748B', display: 'block' }}>Search Visibility</span>
                    <span style={{ fontSize: '7px', fontWeight: 700, color: '#12D6A0', fontFamily: 'monospace' }}>↑ High Intent</span>
                  </div>
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%', border: '2px solid #12D6A0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '8px', fontWeight: 700, fontFamily: 'monospace', color: '#F4F8FF',
                  }}>78%</div>
                </div>
              </DashboardFrame>
            </div>

            {/* Right: Info & Action */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
              <div>
                <div style={{
                  width: '34px', height: '34px', borderRadius: '10px',
                  background: 'rgba(0, 213, 232, 0.1)', border: '1px solid rgba(0, 213, 232, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px',
                }}>
                  <Search style={{ width: '18px', height: '18px', color: '#00D5E8' }} />
                </div>
                <h3 style={{ fontFamily: "'Outfit','Plus Jakarta Sans',sans-serif", fontSize: '17px', fontWeight: 700, color: '#F4F8FF', margin: 0, lineHeight: 1.2 }}>
                  SEO Services
                </h3>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#00D5E8', display: 'block', marginTop: '3px' }}>
                  Search Engine Optimization
                </span>
                <p style={{ fontSize: '11px', color: '#B8C7D9', lineHeight: 1.55, marginTop: '8px' }}>
                  We help businesses improve their online presence through search optimization and digital growth strategies.
                </p>
              </div>

              <div style={{ marginTop: '14px' }}>
                <Link
                  to="/products"
                  id="seo-explore-btn"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '8px 16px', borderRadius: '50px',
                    fontSize: '11px', fontWeight: 600, color: '#F4F8FF',
                    background: '#0B2238', border: '1px solid rgba(0, 213, 232, 0.45)',
                    textDecoration: 'none', transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(0, 213, 232, 0.15)';
                    (e.currentTarget as HTMLElement).style.borderColor = '#00D5E8';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(0, 213, 232, 0.25)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = '#0B2238';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 213, 232, 0.45)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <span>Explore Now</span>
                  <ArrowRight style={{ width: '13px', height: '13px', color: '#00D5E8' }} />
                </Link>
              </div>
            </div>
          </div>
        </ShowcaseCard>
      </div>

      {/* ─── Bottom tagline ─── */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
        padding: '32px 0 16px',
        fontSize: '13px', fontWeight: 500, color: '#B8C7D9', letterSpacing: '0.04em',
        position: 'relative',
      }}>
        {/* Cyan light trails at edges */}
        <div style={{
          position: 'absolute', left: 0, bottom: 0, right: 0, top: 0,
          pointerEvents: 'none', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', bottom: '10px', left: '-50px', width: '300px', height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(0, 213, 232, 0.4) 50%, transparent 100%)',
            filter: 'blur(2px)',
          }} />
          <div style={{
            position: 'absolute', bottom: '10px', right: '-50px', width: '300px', height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, rgba(18, 214, 160, 0.35) 50%, transparent 100%)',
            filter: 'blur(2px)',
          }} />
        </div>
        <span style={{ width: '32px', height: '1px', background: 'rgba(0, 213, 232, 0.6)', display: 'inline-block' }} />
        <span>Smarter Solutions. A Brighter Future.</span>
        <span style={{ width: '32px', height: '1px', background: 'rgba(0, 213, 232, 0.6)', display: 'inline-block' }} />
      </div>
    </div>
  );
};
