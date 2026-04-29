import { motion, useReducedMotion } from 'motion/react';
import { Lock, Search, Users, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Shared easing — smooth deceleration, premium feel
const ease = [0.22, 1, 0.36, 1] as const;

// Reusable fade-up variant for scroll sections
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease, delay },
  }),
};

// Stagger container
const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

export function MarketingLandingPage() {
  const navigate = useNavigate();
  const shouldReduce = useReducedMotion();

  return (
    <div className="min-h-screen">
      {/* ─── SECTION 1: HERO ─────────────────────────────────────── */}
      <section className="min-h-screen bg-[#1e212b] relative overflow-hidden flex items-center justify-center">

        {/* Floating orbs — Motion-driven so they're buttery smooth */}
        <motion.div
          className="absolute top-0 left-1/4 w-[480px] h-[480px] rounded-full bg-[#4d8b31]/10 blur-3xl"
          animate={shouldReduce ? {} : {
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[640px] h-[640px] rounded-full bg-[#ffc800]/6 blur-3xl"
          animate={shouldReduce ? {} : {
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, -24, 0],
            y: [0, 18, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#ff8427]/4 blur-3xl"
          animate={shouldReduce ? {} : {
            scale: [1, 1.06, 1],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />

        {/* Radial center glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[320px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(77,139,49,0.18) 0%, transparent 70%)' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0, ease }}
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-8 max-w-5xl">

          {/* Brand wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 20, letterSpacing: '0.3em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.05em' }}
            transition={{ duration: 1.4, delay: 0.2, ease }}
            className="mb-2"
          >
            <span
              className="text-7xl font-bold bg-gradient-to-r from-[#ffc800] via-[#ff8427] to-[#4d8b31] bg-clip-text text-transparent"
              style={{ fontFamily: 'Inter, Geist, sans-serif' }}
            >
              ExitWise
            </span>
          </motion.div>

          {/* Divider rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9, ease }}
            className="mx-auto mb-10 h-px w-40 origin-center"
            style={{ background: 'linear-gradient(to right, transparent, rgba(77,139,49,0.65), transparent)' }}
          />

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 1.3, ease }}
            className="mb-5"
          >
            <p className="text-5xl font-bold bg-gradient-to-r from-[#ffc800] via-[#ff8427] to-white bg-clip-text text-transparent leading-tight">
              Preserve Institutional Knowledge Forever
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.75, ease }}
            className="text-xl mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.58)' }}
          >
            ExitWise captures decades of expertise from retiring employees through AI-powered
            interviews, ensuring critical knowledge stays within your organization.
          </motion.p>

          {/* CTA — single button, no View Demo */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.15, ease }}
          >
            <motion.button
              onClick={() => navigate('/auth')}
              className="px-12 py-4 rounded-lg bg-[#4d8b31] text-white font-semibold text-lg transition-colors duration-200"
              whileHover={shouldReduce ? {} : { scale: 1.04, backgroundColor: '#3d7026' }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              style={{ boxShadow: '0 0 0 0 rgba(77,139,49,0)' }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: APP PREVIEW ──────────────────────────────── */}
      <section className="min-h-screen bg-[#eef0f4] flex items-center justify-center py-24 px-8">
        <div className="max-w-7xl w-full">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={staggerItem} className="text-5xl font-semibold text-[#1e212b] mb-4">
              See ExitWise in Action
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-[#5c6270]">
              A powerful platform designed for enterprise knowledge management
            </motion.p>
          </motion.div>

          {/* Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease }}
            className="bg-white rounded-lg border border-[#d4d6db] overflow-hidden shadow-xl"
          >
            {/* Browser chrome */}
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

            {/* Dashboard skeleton */}
            <div className="p-8 bg-[#eef0f4]">
              <div className="mb-6">
                <div className="h-8 w-64 bg-[#1e212b] rounded"></div>
              </div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease, delay: i * 0.08 }}
                    className="bg-white rounded-lg border border-[#d4d6db] p-6"
                  >
                    <div className="h-3 w-24 bg-[#d4d6db] rounded mb-3"></div>
                    <div className="h-10 w-16 bg-[#1e212b] rounded mb-2"></div>
                    <div className="h-2 w-32 bg-[#d4d6db] rounded"></div>
                  </motion.div>
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
                        <motion.div
                          className="h-full bg-[#4d8b31] rounded"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${30 + i * 15}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.3 + i * 0.08, ease }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: HOW IT WORKS ─────────────────────────────── */}
      <section className="min-h-screen bg-[#eef0f4] flex items-center justify-center py-24 px-8">
        <div className="max-w-7xl w-full">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={staggerItem} className="text-5xl font-semibold text-[#1e212b] mb-4">
              How It Works
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-[#5c6270]">
              Three simple steps to preserve expertise
            </motion.p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="absolute top-16 left-0 right-0 h-px bg-[#d4d6db] origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, ease }}
            />
            <motion.div
              className="grid grid-cols-3 gap-8 relative"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {[
                { icon: Search, title: 'AI Knowledge Mapping', desc: 'Our AI analyzes your organization to identify critical knowledge gaps and retiring experts', step: 1 },
                { icon: Zap, title: 'Structured Capture', desc: 'Guided interviews extract implicit knowledge, workarounds, and relationships that documentation misses', step: 2 },
                { icon: Users, title: 'Successor Handoff', desc: 'Organized knowledge libraries enable seamless transitions and searchable expertise for teams', step: 3 },
              ].map(({ icon: Icon, title, desc, step }) => (
                <motion.div
                  key={step}
                  variants={staggerItem}
                  whileHover={shouldReduce ? {} : { y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="text-center cursor-default"
                >
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white border-2 border-[#d4d6db] rounded-lg mb-6">
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#4d8b31] text-white rounded-full flex items-center justify-center font-semibold">
                      {step}
                    </div>
                    <Icon className="w-12 h-12 text-[#4d8b31]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1e212b] mb-3">{title}</h3>
                  <p className="text-[#5c6270]">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: BENTO FEATURES ───────────────────────────── */}
      <section className="min-h-screen bg-[#eef0f4] flex items-center justify-center py-24 px-8">
        <div className="max-w-7xl w-full">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={staggerItem} className="text-5xl font-semibold text-[#1e212b] mb-4">
              Enterprise Features
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-[#5c6270]">
              Built for security, scale, and compliance
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {/* Large card */}
            <motion.div
              variants={staggerItem}
              whileHover={shouldReduce ? {} : { y: -3, boxShadow: '0 8px 32px rgba(30,33,43,0.10)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="col-span-2 bg-white rounded-lg border border-[#d4d6db] p-8 cursor-default"
            >
              <Lock className="w-12 h-12 text-[#4d8b31] mb-4" />
              <h3 className="text-2xl font-semibold text-[#1e212b] mb-3">Enterprise Security</h3>
              <p className="text-[#5c6270] leading-relaxed">
                SOC 2 Type II certified with end-to-end encryption, role-based access control, and
                comprehensive audit logs. Your knowledge stays protected with bank-level security.
              </p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              whileHover={shouldReduce ? {} : { y: -3, boxShadow: '0 8px 32px rgba(30,33,43,0.10)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="bg-white rounded-lg border border-[#d4d6db] p-8 cursor-default"
            >
              <Search className="w-12 h-12 text-[#ff8427] mb-4" />
              <h3 className="text-2xl font-semibold text-[#1e212b] mb-3">Semantic Search</h3>
              <p className="text-[#5c6270] leading-relaxed">Find answers instantly with AI-powered search that understands context and intent.</p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              whileHover={shouldReduce ? {} : { y: -3, boxShadow: '0 8px 32px rgba(30,33,43,0.10)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="bg-white rounded-lg border border-[#d4d6db] p-8 cursor-default"
            >
              <CheckCircle className="w-12 h-12 text-[#ffc800] mb-4" />
              <h3 className="text-2xl font-semibold text-[#1e212b] mb-3">Compliance Ready</h3>
              <p className="text-[#5c6270] leading-relaxed">Meet regulatory requirements with automated documentation and retention policies.</p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              whileHover={shouldReduce ? {} : { y: -3, boxShadow: '0 8px 32px rgba(30,33,43,0.06)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="col-span-2 bg-[#1e212b] rounded-lg p-8 cursor-default"
            >
              <Users className="w-12 h-12 text-[#ffc800] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-3">Unlimited Collaborators</h3>
              <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Scale across departments with unlimited users, custom workflows, and integrations
                with Slack, Teams, and your existing tools.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 5: FOOTER CTA ───────────────────────────────── */}
      <section className="bg-[#1e212b] py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={staggerItem}
              className="text-5xl font-bold text-white mb-4"
            >
              Capturing 30 Years of Judgment.
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-lg"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              Don't let institutional knowledge walk out the door.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <motion.button
              onClick={() => navigate('/auth')}
              className="px-12 py-4 rounded-lg bg-[#4d8b31] text-white font-semibold text-lg"
              whileHover={shouldReduce ? {} : { scale: 1.04, backgroundColor: '#3d7026' }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            >
              Get Started Free
            </motion.button>
          </motion.div>

          <div className="flex items-center justify-center gap-8" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <a href="#" className="hover:text-white transition-colors duration-200 text-sm">Privacy</a>
            <span className="text-white/15">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200 text-sm">Terms</a>
            <span className="text-white/15">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200 text-sm">Contact</a>
          </div>

          <div className="text-center mt-8 text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © 2026 ExitWise. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
