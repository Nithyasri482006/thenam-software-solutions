import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Workflow,
  Globe,
  Smartphone,
  Code,
  Layers,
  Radio,
  Palette,
  ShieldCheck,
  Search,
  Coins,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface ServiceItem {
  id: string;
  category: 'AI & Automation' | 'Software Engineering' | 'Hardware & Security' | 'Growth & Strategy';
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  capabilities: string[];
  useCases: string[];
  accentColor: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'ai-ml',
    category: 'AI & Automation',
    icon: Cpu,
    title: 'AI & Machine Learning Development',
    description:
      'Architect and train production-ready machine learning models, natural language pipelines, computer vision systems, and predictive algorithms tailored to your dataset.',
    capabilities: [
      'Custom LLM fine-tuning & prompt orchestration',
      'Computer vision & automated visual inspection',
      'Predictive analytics & pattern forecasting',
      'Vector database retrieval (RAG systems)',
    ],
    useCases: ['Automated quality checks', 'Personalized recommendation engines', 'Intelligent search discovery'],
    accentColor: '#00D5E8',
  },
  {
    id: 'ai-agents',
    category: 'AI & Automation',
    icon: Workflow,
    title: 'AI Agents & Workflow Automation',
    description:
      'Design autonomous software agents capable of executing multi-step business logic, coordinating across APIs, and eliminating manual repetitive administration.',
    capabilities: [
      'Autonomous task planning & multi-agent systems',
      'Document processing & unstructured data extraction',
      'Customer support & CRM integration agents',
      'Enterprise workflow triggers & notification bots',
    ],
    useCases: ['Automated claims validation', 'Customer triage automation', 'Financial report compilation'],
    accentColor: '#00D5E8',
  },
  {
    id: 'web-dev',
    category: 'Software Engineering',
    icon: Globe,
    title: 'Website & Full-Stack Development',
    description:
      'Build lightning-fast, highly responsive web platforms engineered with modern TypeScript, React, Next.js, and scalable cloud architectures.',
    capabilities: [
      'Full-stack architecture with Next.js & React',
      'High-throughput REST & GraphQL APIs',
      'Sub-second page loading & Core Web Vitals optimization',
      'Accessible, mobile-responsive layout design',
    ],
    useCases: ['Enterprise corporate portals', 'Customer self-service portals', 'Interactive digital showcases'],
    accentColor: '#12D6A0',
  },
  {
    id: 'mobile-dev',
    category: 'Software Engineering',
    icon: Smartphone,
    title: 'Mobile Application Development',
    description:
      'Deliver fluid, cross-platform iOS and Android applications utilizing React Native. Designed for high performance, offline resilience, and intuitive touch interaction.',
    capabilities: [
      'Cross-platform React Native engineering',
      'Offline-first caching & local data synchronization',
      'Push notifications & background sync jobs',
      'Hardware integration (camera, GPS, BLE)',
    ],
    useCases: ['Field service technician tools', 'Consumer engagement apps', 'Internal staff communication'],
    accentColor: '#00D5E8',
  },
  {
    id: 'custom-software',
    category: 'Software Engineering',
    icon: Code,
    title: 'Custom Software Development',
    description:
      'Bespoke software systems designed from first principles to match your proprietary operational models, compliance rules, and enterprise infrastructure.',
    capabilities: [
      'Clean domain-driven architecture',
      'Legacy modernization & microservice decoupling',
      'Enterprise database design & migration',
      'Custom internal tooling & admin consoles',
    ],
    useCases: ['Proprietary manufacturing logic', 'Custom inventory tracking', 'Specialized partner portals'],
    accentColor: '#00D5E8',
  },
  {
    id: 'saas-dev',
    category: 'Software Engineering',
    icon: Layers,
    title: 'SaaS Product Development',
    description:
      'End-to-end engineering of multi-tenant cloud software products. From subscription billing and role-based permissions to elastic autoscaling.',
    capabilities: [
      'Multi-tenant data partitioning & isolation',
      'Stripe & payment gateway subscriptions',
      'Granular role-based access control (RBAC)',
      'Automated tenant provisioning & usage metering',
    ],
    useCases: ['B2B vertical SaaS platforms', 'Collaboration tools', 'Cloud analytics services'],
    accentColor: '#12D6A0',
  },
  {
    id: 'iot-systems',
    category: 'Hardware & Security',
    icon: Radio,
    title: 'IoT & Connected Systems',
    description:
      'Bridge hardware devices and cloud software. Telemetry pipelines, embedded firmware, sensor aggregation, and edge computing implementations.',
    capabilities: [
      'Embedded C/C++ firmware & microcontrollers',
      'MQTT, WebSockets, & industrial telemetry protocols',
      'Real-time edge analytics & anomaly detection',
      'Device fleets management & OTA firmware updates',
    ],
    useCases: ['Smart environmental monitoring', 'Asset tracking networks', 'Connected industrial machinery'],
    accentColor: '#12D6A0',
  },
  {
    id: 'ui-ux',
    category: 'Growth & Strategy',
    icon: Palette,
    title: 'UI/UX Design & Design Systems',
    description:
      'Craft distinctive, human-centered digital experiences that combine intuitive user journeys with meticulous typographic systems and cohesive aesthetic identity.',
    capabilities: [
      'User journey mapping & high-fidelity wireframing',
      'Scalable Figma component systems & tokens',
      'Interactive prototyping & usability testing',
      'WCAG AA accessibility compliance verification',
    ],
    useCases: ['Complex dashboard UX simplification', 'Mobile app redesigns', 'Enterprise design system libraries'],
    accentColor: '#00D5E8',
  },
  {
    id: 'cybersecurity',
    category: 'Hardware & Security',
    icon: ShieldCheck,
    title: 'Cybersecurity Solutions',
    description:
      'Protect applications and sensitive infrastructure with rigorous vulnerability audits, secure code reviews, and zero-trust authentication design.',
    capabilities: [
      'Vulnerability scanning & penetration testing',
      'Secure code reviews & OWASP compliance audits',
      'Zero-trust identity & cryptographic key management',
      'Automated security guardrails in CI/CD pipelines',
    ],
    useCases: ['Pre-launch security hardening', 'Financial compliance preparation', 'Cloud infrastructure auditing'],
    accentColor: '#00D5E8',
  },
  {
    id: 'seo-marketing',
    category: 'Growth & Strategy',
    icon: Search,
    title: 'SEO & Digital Marketing',
    description:
      'Drive sustainable organic acquisition through scientific search engine optimization, content structuring, high-speed Core Web Vitals, and keyword mapping.',
    capabilities: [
      'Search intent keyword architecture & gap analysis',
      'Technical SEO audits, crawlability & schema indexing',
      'Page speed & Core Web Vitals engineering',
      'Conversion rate optimization (CRO) & analytics',
    ],
    useCases: ['High-intent organic B2B lead generation', 'E-commerce visibility growth', 'Local search dominance'],
    accentColor: '#12D6A0',
  },
  {
    id: 'blockchain',
    category: 'Software Engineering',
    icon: Coins,
    title: 'Blockchain Development',
    description:
      'Build decentralized data architectures, auditable ledgers, and secure smart contracts where cryptographic verification and traceability are essential.',
    capabilities: [
      'Smart contract architecture & formal verification',
      'Immutable audit trails & supply chain verification',
      'Web3 wallet integrations & decentralized storage',
      'Private enterprise ledger deployments',
    ],
    useCases: ['Supply chain verification', 'Tamper-proof credential issuance', 'Auditable transaction logs'],
    accentColor: '#12D6A0',
  },
];

export const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Automation',
    'Software Engineering',
    'Hardware & Security',
    'Growth & Strategy',
  ];

  const filteredServices =
    selectedCategory === 'All'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <div className="relative min-h-screen pt-32 pb-24 bg-[#06111F] text-[#B8C7D9]">
      <SEOHead
        title="Services | Powerful Technology. Practical Solutions."
        description="Explore 11 verified engineering services from Thenam Software Solutions: AI development, workflow agents, full-stack web, mobile apps, IoT, cybersecurity, and SEO."
      />

      {/* Header */}
      <section className="pb-16 border-b border-[#0B2238] bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00D5E8] uppercase">
              Technology Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F8FF] font-display tracking-tight leading-[1.1] text-balance">
              Powerful Technology. Practical Solutions.
            </h1>
            <p className="text-lg text-[#B8C7D9] leading-relaxed">
              From intelligent applications to scalable software and digital growth, explore technology services designed around real-world needs.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00D5E8] ${
                  selectedCategory === cat
                    ? 'bg-[#00D5E8] text-[#06111F] font-bold shadow-lg shadow-[#00D5E8]/20'
                    : 'bg-[#0B2238] text-[#B8C7D9] hover:text-[#F4F8FF] hover:bg-[#0B2238]/80 border border-[#0B2238]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 border-b border-[#0B2238]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((svc) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="tech-card rounded-2xl p-7 flex flex-col justify-between space-y-6 hover:border-[#00D5E8]/40"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#06111F] border border-[#0B2238]"
                        style={{ color: svc.accentColor }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono text-[#B8C7D9]/80 uppercase">
                        {svc.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#F4F8FF] font-display">
                      {svc.title}
                    </h2>

                    <p className="text-xs text-[#B8C7D9] leading-relaxed">
                      {svc.description}
                    </p>

                    {/* Key Capabilities */}
                    <div className="pt-2 border-t border-[#0B2238] space-y-2">
                      <span className="text-[11px] font-bold tracking-wider text-[#F4F8FF] uppercase">
                        Key Capabilities:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#B8C7D9]">
                        {svc.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00D5E8] shrink-0 mt-1.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Use Cases */}
                    <div className="pt-2 border-t border-[#0B2238]">
                      <span className="text-[11px] font-bold tracking-wider text-[#F4F8FF] uppercase block mb-1.5">
                        Typical Use Cases:
                      </span>
                      <div className="text-xs text-[#B8C7D9] italic">
                        {svc.useCases.join(' · ')}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#0B2238]">
                    <Link
                      to="/contact"
                      state={{ preferredService: svc.title }}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D5E8] hover:text-[#F4F8FF] transition-colors"
                    >
                      <span>Discuss Your Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 border-b border-[#0B2238] bg-[#0B2238]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00D5E8] uppercase">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F8FF] font-display">
              How We Execute Every Engagement
            </h2>
            <p className="text-sm text-[#B8C7D9]">
              A 5-phase delivery model designed for predictability, transparent milestones, and zero architectural surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                idx: '01',
                title: 'Understand',
                desc: 'Deep-dive discovery to extract system goals, edge-cases, and target business KPIs.',
              },
              {
                idx: '02',
                title: 'Design',
                desc: 'Architecture blueprints, API specs, interactive UI wireframes, and database models.',
              },
              {
                idx: '03',
                title: 'Develop',
                desc: 'Sprint-based agile engineering with continuous reviews and type-checked codebases.',
              },
              {
                idx: '04',
                title: 'Test',
                desc: 'Comprehensive end-to-end testing, security penetration audits, and load validation.',
              },
              {
                idx: '05',
                title: 'Launch & Support',
                desc: 'Zero-downtime deployment, automated monitoring, SLA maintenance, and product scaling.',
              },
            ].map((p, i) => (
              <div key={i} className="tech-card rounded-2xl p-6 relative">
                <span className="text-2xl font-mono font-bold text-[#00D5E8]">
                  {p.idx}.
                </span>
                <h3 className="text-lg font-bold text-[#F4F8FF] font-display mt-3">
                  {p.title}
                </h3>
                <p className="text-xs text-[#B8C7D9] leading-relaxed mt-2">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F4F8FF] font-display">
            Let&apos;s Find the Right Solution for Your Business.
          </h2>
          <p className="text-sm text-[#B8C7D9] leading-relaxed">
            Speak directly with our solutions architects to evaluate technical feasibility, estimate delivery timelines, and blueprint your solution.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#06111F] bg-[#00D5E8] hover:bg-[#00D5E8]/90 rounded-full hover:shadow-[0_0_25px_rgba(0,213,232,0.4)] transition-all duration-300"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
