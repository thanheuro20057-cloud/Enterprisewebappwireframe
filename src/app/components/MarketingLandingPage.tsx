import { motion } from 'motion/react';
import { Shield, Star, Lock, Search, Users, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function MarketingLandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Section 1: Hero — Dark */}
      <section className="min-h-screen bg-[#1e212b] relative overflow-hidden flex items-center justify-center">
        {/* Background orbs */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4d8b31]/10 via-[#1e212b] to-[#ffc800]/10"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4d8b31]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#ffc800]/8 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff8427]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Radial glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(77,139,49,0.15) 0%, transparent 70%)' }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.4, ease: 'easeOut' }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-5xl">

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, letterSpacing: '0.35em', y: 18 }}
            animate={{ opacity: 1, letterSpacing: '0.06em', y: 0 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3"
          >
            <span
              className="text-7xl font-bold tracking-wide bg-gradient-to-r from-[#ffc800] via-[#ff8427] to-[#4d8b31] bg-clip-text text-transparent"
              style={{ fontFamily: 'Inter, Geist, sans-serif' }}
            >
              ExitWise
            </span>
          </motion.div>

          {/* Rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.6, ease: 'easeOut' }}
            className="mx-auto mb-10 h-px w-48 origin-center"
            style={{ background: 'linear-gradient(to right, transparent, rgba(77,139,49,0.6), transparent)' }}
          />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <div className="text-5xl font-bold bg-gradient-to-r from-[#ffc800] via-[#ff8427] to-[#ffffff] bg-clip-text text-transparent mb-4">
              Preserve Institutional Knowledge Forever
            </div>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 2.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl mb-12 max-w-3xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            ExitWise captures decades of expertise from retiring employees through AI-powered
            interviews, ensuring critical knowledge stays within your organization.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 3.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4"
          >
            <button
              onClick={() => navigate('/auth')}
              className="px-10 py-4 rounded-lg bg-[#4d8b31] text-white font-semibold text-lg hover:bg-[#3d7026] hover:shadow-lg hover:shadow-[#4d8b31]/30 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="px-10 py-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              View Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: App Preview */}
      <section className="min-h-screen bg-[#eef0f4] flex items-center justify-center py-24 px-8">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-[#1e212b] mb-4">See ExitWise in Action</h2>
            <p className="text-xl text-[#5c6270]">A powerful platform designed for enterprise knowledge management</p>
          </div>

          {/* Browser Mockup */}
          <div className="bg-white rounded-lg border border-[#d4d6db] overflow-hidden shadow-xl">
            {/* Browser Chrome */}
            <div className="bg-[#eef0f4] border-b border-[#d4d6db] px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff8427]/60"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffc800]/60"></div>
                <div className="w-3 h-3 rounded-full bg-[#4d8b31]/60"></div>
              </div>
              <div className="flex-1 ml-4">
                <div className="bg-white border border-[#d4d6db] rounded px-4 py-1.5 text-sm text-[#5c6270]">
                  app.exitwise.io/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="p-8 bg-[#eef0f4]">
              <div className="mb-6">
                <div className="h-8 w-64 bg-[#1e212b] rounded"></div>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-lg border border-[#d4d6db] p-6">
                    <div className="h-3 w-24 bg-[#d4d6db] rounded mb-3"></div>
                    <div className="h-10 w-16 bg-[#1e212b] rounded mb-2"></div>
                    <div className="h-2 w-32 bg-[#d4d6db] rounded"></div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-lg border border-[#d4d6db] p-6">
                <div className="h-4 w-48 bg-[#4d8b31] rounded mb-6"></div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-3 w-40 bg-[#d4d6db] rounded"></div>
                      <div className="h-3 w-32 bg-[#d4d6db] rounded"></div>
                      <div className="h-3 w-32 bg-[#d4d6db] rounded"></div>
                      <div className="flex-1 h-3 bg-[#eef0f4] rounded overflow-hidden">
                        <div className="h-full bg-[#4d8b31] rounded" style={{ width: `${30 + i * 15}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How it Works */}
      <section className="min-h-screen bg-[#eef0f4] flex items-center justify-center py-24 px-8">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-semibold text-[#1e212b] mb-4">How It Works</h2>
            <p className="text-xl text-[#5c6270]">Three simple steps to preserve expertise</p>
          </div>

          <div className="relative">
            <div className="absolute top-16 left-0 right-0 h-px bg-[#d4d6db]"></div>
            <div className="grid grid-cols-3 gap-8 relative">
              {[
                { icon: Search, title: 'AI Knowledge Mapping', desc: 'Our AI analyzes your organization to identify critical knowledge gaps and retiring experts', step: 1 },
                { icon: Zap, title: 'Structured Capture', desc: 'Guided interviews extract implicit knowledge, workarounds, and relationships that documentation misses', step: 2 },
                { icon: Users, title: 'Successor Handoff', desc: 'Organized knowledge libraries enable seamless transitions and searchable expertise for teams', step: 3 },
              ].map(({ icon: Icon, title, desc, step }) => (
                <div key={step} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white border-2 border-[#d4d6db] rounded-lg mb-6">
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#4d8b31] text-white rounded-full flex items-center justify-center font-semibold">
                      {step}
                    </div>
                    <Icon className="w-12 h-12 text-[#4d8b31]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1e212b] mb-3">{title}</h3>
                  <p className="text-[#5c6270]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Features Bento */}
      <section className="min-h-screen bg-[#eef0f4] flex items-center justify-center py-24 px-8">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-[#1e212b] mb-4">Enterprise Features</h2>
            <p className="text-xl text-[#5c6270]">Built for security, scale, and compliance</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-lg border border-[#d4d6db] p-8">
              <Lock className="w-12 h-12 text-[#4d8b31] mb-4" />
              <h3 className="text-2xl font-semibold text-[#1e212b] mb-3">Enterprise Security</h3>
              <p className="text-[#5c6270] leading-relaxed">
                SOC 2 Type II certified with end-to-end encryption, role-based access control, and
                comprehensive audit logs. Your knowledge stays protected with bank-level security.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-[#d4d6db] p-8">
              <Search className="w-12 h-12 text-[#ff8427] mb-4" />
              <h3 className="text-2xl font-semibold text-[#1e212b] mb-3">Semantic Search</h3>
              <p className="text-[#5c6270] leading-relaxed">Find answers instantly with AI-powered search that understands context and intent.</p>
            </div>
            <div className="bg-white rounded-lg border border-[#d4d6db] p-8">
              <CheckCircle className="w-12 h-12 text-[#ffc800] mb-4" />
              <h3 className="text-2xl font-semibold text-[#1e212b] mb-3">Compliance Ready</h3>
              <p className="text-[#5c6270] leading-relaxed">Meet regulatory requirements with automated documentation and retention policies.</p>
            </div>
            <div className="col-span-2 bg-[#1e212b] rounded-lg border border-[#1e212b] p-8">
              <Users className="w-12 h-12 text-[#ffc800] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">Unlimited Collaborators</h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Scale across departments with unlimited users, custom workflows, and integrations
                with Slack, Teams, and your existing tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Footer */}
      <section className="bg-[#1e212b] py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              Capturing 30 Years of Judgment.
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Don't let institutional knowledge walk out the door.
            </p>
          </div>

          <div className="flex items-center justify-center mb-10">
            <button
              onClick={() => navigate('/auth')}
              className="px-10 py-4 rounded-lg bg-[#4d8b31] text-white font-semibold text-lg hover:bg-[#3d7026] transition-all duration-300 hover:scale-105"
            >
              Get Started Free
            </button>
          </div>

          <div className="flex items-center justify-center gap-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <a href="#" className="hover:text-white transition-colors text-sm">Privacy</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors text-sm">Terms</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white transition-colors text-sm">Contact</a>
          </div>

          <div className="text-center mt-8 text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2026 ExitWise. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
