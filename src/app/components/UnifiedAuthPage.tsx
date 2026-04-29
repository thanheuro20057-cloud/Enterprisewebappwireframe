import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function UnifiedAuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  const handleSocialAuth = (provider: string) => {
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-lg border border-[#cccccc] p-8 shadow-sm">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-[#595959] mb-2">Welcome back</h1>
          <p className="text-[#7f7f7f]">Sign in to your ExitWise account</p>
        </div>

        {/* Social Auth Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={() => handleSocialAuth('google')}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#cccccc] rounded-lg text-[#595959] font-medium hover:bg-[#f2f2f2] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          <button
            onClick={() => handleSocialAuth('microsoft')}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-[#cccccc] rounded-lg text-[#595959] font-medium hover:bg-[#f2f2f2] transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 23 23">
              <path fill="#f3f3f3" d="M0 0h23v23H0z" />
              <path fill="#f35325" d="M1 1h10v10H1z" />
              <path fill="#81bc06" d="M12 1h10v10H12z" />
              <path fill="#05a6f0" d="M1 12h10v10H1z" />
              <path fill="#ffba08" d="M12 12h10v10H12z" />
            </svg>
            Continue with Microsoft
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#cccccc]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-[#7f7f7f]">OR CONTINUE WITH</span>
          </div>
        </div>

        {/* Email/Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#595959] mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-[#cccccc] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#595959] focus:border-transparent text-[#595959]"
              placeholder="you@company.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#595959] mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-[#cccccc] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#595959] focus:border-transparent text-[#595959]"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#595959] text-white rounded-lg font-medium hover:bg-[#454545] transition-colors mt-6"
          >
            Log in
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-2">
          <a href="#" className="block text-sm text-[#7f7f7f] hover:text-[#595959] transition-colors">
            Forgot your password?
          </a>
          <div className="text-sm text-[#7f7f7f]">
            Don't have an account?{' '}
            <a href="#" className="text-[#595959] hover:underline font-medium">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
