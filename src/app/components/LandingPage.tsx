import { useNavigate } from 'react-router-dom';
import { Shield, Star } from 'lucide-react';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1e212b] relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4d8b31]/10 via-[#1e212b] to-[#ffc800]/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4d8b31]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#ffc800]/8 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff8427]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        {/* Trust Badge */}
        <div className="mb-12 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#4d8b31]/30 bg-white/5 backdrop-blur-md">
          <Shield className="w-4 h-4 text-[#4d8b31]" />
          <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>Trusted by 500+ Enterprise Organizations</span>
          <Star className="w-4 h-4 text-[#ffc800]" />
        </div>

        <h1 className="mb-6 max-w-5xl">
          <div className="text-8xl font-bold mb-2 bg-gradient-to-r from-[#ffc800] via-[#ff8427] to-[#4d8b31] bg-clip-text text-transparent">
            Preserve Institutional
          </div>
          <div className="text-8xl font-bold bg-gradient-to-r from-[#ffc800] via-white to-[#4d8b31] bg-clip-text text-transparent">
            Knowledge Forever
          </div>
        </h1>

        <p className="text-xl mb-12 max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
          ExitWise captures decades of expertise from retiring employees through AI-powered interviews, ensuring critical knowledge stays within your organization.
        </p>

        <button
          onClick={() => navigate('/auth')}
          className="px-10 py-4 rounded-full bg-[#4d8b31] text-white font-semibold text-lg hover:bg-[#3d7026] hover:shadow-lg hover:shadow-[#4d8b31]/40 transition-all duration-300 hover:scale-105"
        >
          Get Started Free
        </button>
      </div>
    </div>
  );
}