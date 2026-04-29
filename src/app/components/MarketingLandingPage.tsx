import { useNavigate } from 'react-router-dom';
import { Shield, Star, Lock, Search, Users, Zap, CheckCircle } from 'lucide-react';

export function MarketingLandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Section 1: Hero - Dark Mode */}
      <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
        {/* WebGL-style background effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-amber-900/20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-5xl">
          {/* Trust Badge */}
          <div className="mb-12 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-orange-500/30 bg-white/5 backdrop-blur-md">
            <Shield className="w-4 h-4 text-orange-400" />
            <span className="text-orange-200/90 text-sm font-medium">
              Trusted by 500+ Enterprise Organizations
            </span>
            <Star className="w-4 h-4 text-yellow-400" />
          </div>

          {/* Headline */}
          <h1 className="mb-6">
            <div className="text-8xl font-bold bg-gradient-to-r from-orange-300 via-orange-400 to-amber-500 bg-clip-text text-transparent mb-4">
              Preserve Institutional Knowledge Forever
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-orange-200/70 mb-12 max-w-3xl mx-auto">
            ExitWise captures decades of expertise from retiring employees through AI-powered
            interviews, ensuring critical knowledge stays within your organization.
          </p>

          {/* CTA */}
          <button
            onClick={() => navigate('/auth')}
            className="px-10 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Section 2: App Previews */}
      <section className="min-h-screen bg-[#f2f2f2] flex items-center justify-center py-24 px-8">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-[#595959] mb-4">See ExitWise in Action</h2>
            <p className="text-xl text-[#7f7f7f]">
              A powerful platform designed for enterprise knowledge management
            </p>
          </div>

          {/* Browser Mockup */}
          <div className="bg-white rounded-lg border border-[#cccccc] overflow-hidden shadow-xl">
            {/* Browser Chrome */}
            <div className="bg-[#f2f2f2] border-b border-[#cccccc] px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#a5a5a5]"></div>
                <div className="w-3 h-3 rounded-full bg-[#a5a5a5]"></div>
                <div className="w-3 h-3 rounded-full bg-[#a5a5a5]"></div>
              </div>
              <div className="flex-1 ml-4">
                <div className="bg-white border border-[#cccccc] rounded px-4 py-1.5 text-sm text-[#7f7f7f]">
                  app.exitwise.io/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="p-8 bg-[#f2f2f2]">
              <div className="mb-6">
                <div className="h-8 w-64 bg-[#595959] rounded"></div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-lg border border-[#cccccc] p-6">
                    <div className="h-3 w-24 bg-[#cccccc] rounded mb-3"></div>
                    <div className="h-10 w-16 bg-[#595959] rounded mb-2"></div>
                    <div className="h-2 w-32 bg-[#cccccc] rounded"></div>
                  </div>
                ))}
              </div>

              {/* Table Preview */}
              <div className="bg-white rounded-lg border border-[#cccccc] p-6">
                <div className="h-4 w-48 bg-[#595959] rounded mb-6"></div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-3 w-40 bg-[#cccccc] rounded"></div>
                      <div className="h-3 w-32 bg-[#cccccc] rounded"></div>
                      <div className="h-3 w-32 bg-[#cccccc] rounded"></div>
                      <div className="flex-1 h-3 bg-[#cccccc] rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How it Works */}
      <section className="min-h-screen bg-[#f2f2f2] flex items-center justify-center py-24 px-8">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-semibold text-[#595959] mb-4">How It Works</h2>
            <p className="text-xl text-[#7f7f7f]">Three simple steps to preserve expertise</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-16 left-0 right-0 h-px bg-[#cccccc]"></div>

            {/* Steps */}
            <div className="grid grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white border-2 border-[#cccccc] rounded-lg mb-6">
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#595959] text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                  <Search className="w-12 h-12 text-[#595959]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#595959] mb-3">
                  AI Knowledge Mapping
                </h3>
                <p className="text-[#7f7f7f]">
                  Our AI analyzes your organization to identify critical knowledge gaps and retiring
                  experts
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white border-2 border-[#cccccc] rounded-lg mb-6">
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#595959] text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <Zap className="w-12 h-12 text-[#595959]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#595959] mb-3">Structured Capture</h3>
                <p className="text-[#7f7f7f]">
                  Guided interviews extract implicit knowledge, workarounds, and relationships that
                  documentation misses
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white border-2 border-[#cccccc] rounded-lg mb-6">
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#595959] text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                  <Users className="w-12 h-12 text-[#595959]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#595959] mb-3">Successor Handoff</h3>
                <p className="text-[#7f7f7f]">
                  Organized knowledge libraries enable seamless transitions and searchable expertise
                  for teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Features - Bento Box Grid */}
      <section className="min-h-screen bg-[#f2f2f2] flex items-center justify-center py-24 px-8">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-[#595959] mb-4">Enterprise Features</h2>
            <p className="text-xl text-[#7f7f7f]">Built for security, scale, and compliance</p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <div className="col-span-2 bg-white rounded-lg border border-[#cccccc] p-8">
              <Lock className="w-12 h-12 text-[#595959] mb-4" />
              <h3 className="text-2xl font-semibold text-[#595959] mb-3">Enterprise Security</h3>
              <p className="text-[#7f7f7f] leading-relaxed">
                SOC 2 Type II certified with end-to-end encryption, role-based access control, and
                comprehensive audit logs. Your knowledge stays protected with bank-level security.
              </p>
            </div>

            {/* Feature Card */}
            <div className="bg-white rounded-lg border border-[#cccccc] p-8">
              <Search className="w-12 h-12 text-[#595959] mb-4" />
              <h3 className="text-2xl font-semibold text-[#595959] mb-3">Semantic Search</h3>
              <p className="text-[#7f7f7f] leading-relaxed">
                Find answers instantly with AI-powered search that understands context and intent.
              </p>
            </div>

            {/* Feature Card */}
            <div className="bg-white rounded-lg border border-[#cccccc] p-8">
              <CheckCircle className="w-12 h-12 text-[#595959] mb-4" />
              <h3 className="text-2xl font-semibold text-[#595959] mb-3">Compliance Ready</h3>
              <p className="text-[#7f7f7f] leading-relaxed">
                Meet regulatory requirements with automated documentation and retention policies.
              </p>
            </div>

            {/* Feature Card */}
            <div className="col-span-2 bg-white rounded-lg border border-[#cccccc] p-8">
              <Users className="w-12 h-12 text-[#595959] mb-4" />
              <h3 className="text-2xl font-semibold text-[#595959] mb-3">
                Unlimited Collaborators
              </h3>
              <p className="text-[#7f7f7f] leading-relaxed">
                Scale across departments with unlimited users, custom workflows, and integrations
                with Slack, Teams, and your existing tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Footer */}
      <section className="bg-[#f2f2f2] py-24 px-8 border-t border-[#cccccc]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#595959] mb-8">
              Capturing 30 Years of Judgment.
            </h2>
          </div>

          <div className="flex items-center justify-center gap-8 text-[#7f7f7f]">
            <a href="#" className="hover:text-[#595959] transition-colors">
              Privacy
            </a>
            <span className="text-[#cccccc]">|</span>
            <a href="#" className="hover:text-[#595959] transition-colors">
              Terms
            </a>
            <span className="text-[#cccccc]">|</span>
            <a href="#" className="hover:text-[#595959] transition-colors">
              Contact
            </a>
          </div>

          <div className="text-center mt-8 text-sm text-[#a5a5a5]">
            © 2026 ExitWise. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
