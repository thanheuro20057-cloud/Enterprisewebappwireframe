import { useNavigate } from 'react-router-dom';
import { Shield, Star, Sparkles } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* WebGL-style flowing smoke background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-amber-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Trust Badge */}
        <div className="mb-12 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-orange-500/30 bg-white/5 backdrop-blur-md">
          <Shield className="w-4 h-4 text-orange-400" />
          <span className="text-orange-200/90 text-sm font-medium">Trusted by 500+ Enterprise Organizations</span>
          <Star className="w-4 h-4 text-yellow-400" />
        </div>

        {/* Headline */}
        <h1 className="mb-6 max-w-5xl">
          <div className="text-8xl font-bold mb-2 bg-gradient-to-r from-orange-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
            Preserve Institutional
          </div>
          <div className="text-8xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Knowledge Forever
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-orange-200/70 mb-12 max-w-2xl">
          ExitWise captures decades of expertise from retiring employees through AI-powered interviews, ensuring critical knowledge stays within your organization.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/auth')}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
          >
            Get Started Free
          </button>
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="px-8 py-4 rounded-full border border-orange-500/50 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
}
