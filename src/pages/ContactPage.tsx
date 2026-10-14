import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowRight,
  Shield,
  FileCheck,
  RotateCcw,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ThenamLogo } from '../components/ThenamLogo';

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  budget: string;
  timeline: string;
}

interface SubmissionResult {
  success: boolean;
  inquiryId?: string;
  message?: string;
  receivedAt?: string;
}

export const ContactPage: React.FC = () => {
  const location = useLocation();
  const stateService = (location.state as { preferredService?: string })?.preferredService;

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: stateService || 'AI & Machine Learning Development',
    message: '',
    budget: '$5k - $15k',
    timeline: '1 - 3 Months',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);

  const servicesOptions = [
    'AI & Machine Learning Development',
    'AI Agents & Workflow Automation',
    'Website & Full-Stack Development',
    'Mobile Application Development',
    'Thenam Campus (Education Platform)',
    'Thenam Connect (ERP Platform)',
    'SEO & Search Engine Optimization',
    'Custom Software Engineering',
    'IoT & Connected Embedded Systems',
    'Cybersecurity & Infrastructure Audit',
    'UI/UX Design Systems',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validations
    if (!form.name.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }
    if (!form.email.trim() || !form.email.includes('@')) {
      setErrorMessage('Please provide a valid business email address.');
      return;
    }
    if (!form.message.trim() || form.message.length < 15) {
      setErrorMessage('Please provide a brief project description (at least 15 characters).');
      return;
    }

    setIsSubmitting(true);

    try {
      // Real API request to Vite backend /api/contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry to server.');
      }

      // Persist submission record locally so client retains inquiry receipt
      const savedInquiries = JSON.parse(localStorage.getItem('thenam_inquiries') || '[]');
      savedInquiries.unshift({
        id: data.inquiryId,
        form,
        submittedAt: data.receivedAt || new Date().toISOString(),
      });
      localStorage.setItem('thenam_inquiries', JSON.stringify(savedInquiries.slice(0, 10)));

      setSubmissionResult({
        success: true,
        inquiryId: data.inquiryId,
        message: data.message,
        receivedAt: data.receivedAt,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error communicating with the server.';
      setErrorMessage(`${msg} Please verify your details or contact us directly at admin@thensoftwaresolutions.com.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmissionResult(null);
    setForm({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: 'AI & Machine Learning Development',
      message: '',
      budget: '$5k - $15k',
      timeline: '1 - 3 Months',
    });
  };

  return (
    <div className="relative min-h-screen pt-32 pb-24 bg-[#06111F] text-[#B8C7D9]">
      <SEOHead
        title="Contact Us | Let's Build Something Extraordinary"
        description="Contact Thenam Software Solutions in Porur, Chennai. Discuss your AI, web development, Thenam Campus, or Thenam Connect project directly with our engineering team."
      />

      {/* Header */}
      <section className="pb-16 border-b border-[#0B2238] bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#00D5E8] uppercase">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F8FF] font-display tracking-tight leading-[1.1] text-balance">
              Let&apos;s Build Something Extraordinary.
            </h1>
            <p className="text-lg text-[#B8C7D9] leading-relaxed">
              Have a business challenge, software idea, or digital product in mind? Tell us what you need, and let&apos;s explore the right solution together.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Verified Contact Information & Office Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#12D6A0] uppercase">
                  Verified Studio Information
                </span>
                <h2 className="text-2xl font-bold text-[#F4F8FF] font-display">
                  Thenam Software Solutions
                </h2>
                <p className="text-sm text-[#B8C7D9] leading-relaxed">
                  We are based in Porur, Chennai, engineering digital products and intelligent software for forward-thinking organizations worldwide.
                </p>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                <div className="tech-card rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00D5E8]/10 text-[#00D5E8] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#F4F8FF] uppercase tracking-wider">
                      Studio Address
                    </h3>
                    <p className="text-sm text-[#B8C7D9] mt-1 font-medium">
                      Porur, Chennai, Tamil Nadu, India
                    </p>
                    <p className="text-xs text-[#B8C7D9]/70 mt-0.5">Software Engineering &amp; AI Research Hub</p>
                  </div>
                </div>

                <div className="tech-card rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#12D6A0]/10 text-[#12D6A0] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#F4F8FF] uppercase tracking-wider">
                      Direct Phone &amp; WhatsApp
                    </h3>
                    <a
                      href="tel:+916380456410"
                      className="text-sm text-[#00D5E8] hover:underline font-mono block mt-1"
                    >
                      +91 63804 56410
                    </a>
                    <a
                      href="https://wa.me/916380456410"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#12D6A0] hover:underline mt-0.5 inline-block"
                    >
                      Open WhatsApp Chat &rarr;
                    </a>
                  </div>
                </div>

                <div className="tech-card rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00D5E8]/10 text-[#00D5E8] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#F4F8FF] uppercase tracking-wider">
                      Business Inquiry Email
                    </h3>
                    <a
                      href="mailto:admin@thensoftwaresolutions.com"
                      className="text-sm text-[#B8C7D9] hover:text-[#00D5E8] block mt-1"
                    >
                      admin@thensoftwaresolutions.com
                    </a>
                    <p className="text-xs text-[#B8C7D9]/70 mt-0.5">Response SLA: Guaranteed within 24 hours</p>
                  </div>
                </div>

                <div className="tech-card rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#12D6A0]/10 text-[#12D6A0] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#F4F8FF] uppercase tracking-wider">
                      Engineering Studio Hours
                    </h3>
                    <p className="text-sm text-[#B8C7D9] mt-1">
                      Monday &ndash; Friday: 9:00 AM &ndash; 6:30 PM IST
                    </p>
                    <p className="text-xs text-[#B8C7D9]/70 mt-0.5">Active technical support &amp; sprint consultations</p>
                  </div>
                </div>
              </div>

              {/* Assurance Box */}
              <div className="p-5 rounded-2xl bg-[#071827] border border-[#0B2238] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#00D5E8]">
                  <Shield className="w-4 h-4" />
                  <span>Confidentiality &amp; NDA Assurance</span>
                </div>
                <p className="text-xs text-[#B8C7D9] leading-relaxed">
                  All shared project scopes, data architectures, and product ideas are treated with strict confidentiality. Mutual non-disclosure agreements available upon request.
                </p>
              </div>
            </div>

            {/* Right Column: Genuine Integrated Contact Form */}
            <div className="lg:col-span-7">
              <div className="tech-card rounded-3xl p-8 sm:p-10 border border-[#0B2238] hover:border-[#00D5E8]/30 glow-border-teal bg-[#071827] relative">
                {submissionResult?.success ? (
                  /* Success State */
                  <div className="py-8 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-[#12D6A0]/15 text-[#12D6A0] flex items-center justify-center mx-auto border border-[#12D6A0]/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[#F4F8FF] font-display">
                        Project Inquiry Received!
                      </h3>
                      <p className="text-sm text-[#B8C7D9] max-w-md mx-auto leading-relaxed">
                        {submissionResult.message}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#06111F] border border-[#0B2238] max-w-sm mx-auto text-left space-y-1.5 font-mono text-xs">
                      <div className="flex justify-between text-[#B8C7D9]">
                        <span>Reference ID:</span>
                        <span className="text-[#00D5E8] font-bold">{submissionResult.inquiryId}</span>
                      </div>
                      <div className="flex justify-between text-[#B8C7D9]">
                        <span>Timestamp:</span>
                        <span className="text-[#F4F8FF]">
                          {new Date(submissionResult.receivedAt || Date.now()).toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-[#B8C7D9]">
                        <span>Assigned Office:</span>
                        <span className="text-[#12D6A0]">Porur, Chennai</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#B8C7D9]/70">
                      A confirmation email has been logged to our internal dispatch system.
                    </p>

                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F4F8FF] bg-[#0B2238] hover:bg-[#0B2238]/80 border border-[#0B2238] rounded-xl transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                ) : (
                  /* Active Form */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-[#0B2238] pb-4">
                      <h2 className="text-xl font-bold text-[#F4F8FF] font-display">
                        Project Discovery Brief
                      </h2>
                      <p className="text-xs text-[#B8C7D9] mt-1">
                        Fill in your project specifications to receive an initial architecture review and scope estimate.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-[#F4F8FF] block">
                          Full Name <span className="text-[#00D5E8]">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#06111F] border border-[#0B2238] text-sm text-[#F4F8FF] placeholder-[#64748B] focus:border-[#00D5E8] focus:outline-none focus:ring-1 focus:ring-[#00D5E8] transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-[#F4F8FF] block">
                          Business Email <span className="text-[#00D5E8]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#06111F] border border-[#0B2238] text-sm text-[#F4F8FF] placeholder-[#64748B] focus:border-[#00D5E8] focus:outline-none focus:ring-1 focus:ring-[#00D5E8] transition-colors"
                        />
                      </div>

                      {/* Company Name (Optional) */}
                      <div className="space-y-1.5">
                        <label htmlFor="company" className="text-xs font-semibold text-[#F4F8FF] block">
                          Company / Institution <span className="text-[#B8C7D9]/60 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Organization name"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#06111F] border border-[#0B2238] text-sm text-[#F4F8FF] placeholder-[#64748B] focus:border-[#00D5E8] focus:outline-none focus:ring-1 focus:ring-[#00D5E8] transition-colors"
                        />
                      </div>

                      {/* Phone / WhatsApp (Optional) */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold text-[#F4F8FF] block">
                          Phone / WhatsApp <span className="text-[#B8C7D9]/60 font-normal">(Optional)</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#06111F] border border-[#0B2238] text-sm text-[#F4F8FF] placeholder-[#64748B] focus:border-[#00D5E8] focus:outline-none focus:ring-1 focus:ring-[#00D5E8] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Required */}
                    <div className="space-y-1.5">
                      <label htmlFor="service" className="text-xs font-semibold text-[#F4F8FF] block">
                        Service or Platform Required <span className="text-[#00D5E8]">*</span>
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#06111F] border border-[#0B2238] text-sm text-[#F4F8FF] focus:border-[#00D5E8] focus:outline-none focus:ring-1 focus:ring-[#00D5E8] transition-colors"
                      >
                        {servicesOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#06111F] text-[#F4F8FF]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Description */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-[#F4F8FF] block">
                        Project Description &amp; Technical Objectives <span className="text-[#00D5E8]">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Describe your desired outcomes, users, timeline, or current technical stack..."
                        className="w-full px-4 py-3 rounded-xl bg-[#06111F] border border-[#0B2238] text-sm text-[#F4F8FF] placeholder-[#64748B] focus:border-[#00D5E8] focus:outline-none focus:ring-1 focus:ring-[#00D5E8] transition-colors resize-none"
                      />
                    </div>

                    {/* Budget & Timeline (Optional) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="budget" className="text-xs font-semibold text-[#F4F8FF] block">
                          Estimated Budget <span className="text-[#B8C7D9]/60 font-normal">(Optional)</span>
                        </label>
                        <select
                          id="budget"
                          value={form.budget}
                          onChange={(e) => setForm({ ...form, budget: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-[#06111F] border border-[#0B2238] text-xs text-[#F4F8FF] focus:border-[#00D5E8] focus:outline-none"
                        >
                          <option value="Under $5k">Under $5k / Exploratory Sprint</option>
                          <option value="$5k - $15k">$5k &ndash; $15k / Core Build</option>
                          <option value="$15k - $50k">$15k &ndash; $50k / Enterprise Platform</option>
                          <option value="$50k+">$50k+ / Large-scale Ecosystem</option>
                          <option value="Undetermined">To Be Discussed</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="timeline" className="text-xs font-semibold text-[#F4F8FF] block">
                          Desired Timeline <span className="text-[#B8C7D9]/60 font-normal">(Optional)</span>
                        </label>
                        <select
                          id="timeline"
                          value={form.timeline}
                          onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-[#06111F] border border-[#0B2238] text-xs text-[#F4F8FF] focus:border-[#00D5E8] focus:outline-none"
                        >
                          <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                          <option value="1 - 3 Months">1 &ndash; 3 Months (Standard)</option>
                          <option value="3 - 6 Months">3 &ndash; 6 Months</option>
                          <option value="Flexible / Q1-Q2">Flexible Planning</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-[#06111F] bg-[#00D5E8] hover:bg-[#00D5E8]/90 hover:shadow-[0_0_25px_rgba(0,213,232,0.4)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#06111F]/30 border-t-[#06111F] rounded-full animate-spin" />
                            <span>Submitting to Solutions Team...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Project Inquiry</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-[#B8C7D9]/70">
                      By submitting this form, your request is logged into our Chennai solutions pipeline.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Closing Statement */}
      <section className="pt-16 text-center border-t border-[#0B2238]">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-lg sm:text-xl font-medium text-[#F4F8FF] font-display italic">
            &ldquo;Every great solution starts with a conversation.&rdquo;
          </p>
          <p className="text-xs text-[#B8C7D9]/70 mt-2 font-mono">
            Thenam Software Solutions &middot; Porur, Chennai &middot; admin@thensoftwaresolutions.com
          </p>
        </div>
      </section>
    </div>
  );
};
