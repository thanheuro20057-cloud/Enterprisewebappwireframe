import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, CheckCircle } from 'lucide-react';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#eef0f4] flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-lg border border-[#d4d6db] p-8 shadow-sm">

        <button
          onClick={() => navigate('/auth')}
          className="flex items-center gap-2 text-sm text-[#5c6270] hover:text-[#1e212b] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to login
        </button>

        {!submitted ? (
          <>
            <div className="mb-8">
              <div className="w-12 h-12 bg-[#eef0f4] rounded-lg flex items-center justify-center mb-4 border border-[#d4d6db]">
                <Mail className="w-6 h-6 text-[#4d8b31]" />
              </div>
              <h1 className="text-3xl font-semibold text-[#1e212b] mb-2">Forgot password?</h1>
              <p className="text-[#5c6270] text-sm">No worries — enter your work email and we'll send you a reset link.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1e212b] mb-2">Work Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-[#d4d6db] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4d8b31] focus:border-transparent text-[#1e212b] text-sm"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <button type="submit" className="w-full py-3 bg-[#4d8b31] text-white rounded-lg font-medium hover:bg-[#3d7026] transition-colors mt-2 text-sm">
                Send Reset Link
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-[#5c6270]">
              Don't have an account?{' '}
              <button onClick={() => navigate('/signup')} className="text-[#4d8b31] hover:underline font-medium">
                Sign up
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-[#eef0f4] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#d4d6db]">
              <CheckCircle className="w-8 h-8 text-[#4d8b31]" />
            </div>
            <h1 className="text-3xl font-semibold text-[#1e212b] mb-3">Check your email</h1>
            <p className="text-[#5c6270] text-sm mb-2">We sent a password reset link to</p>
            <p className="font-medium text-[#1e212b] mb-8">{email}</p>

            <button
              onClick={() => navigate('/auth')}
              className="w-full py-3 bg-[#4d8b31] text-white rounded-lg font-medium hover:bg-[#3d7026] transition-colors text-sm"
            >
              Back to Login
            </button>

            <p className="mt-6 text-sm text-[#5c6270]">
              Didn't receive the email?{' '}
              <button onClick={() => setSubmitted(false)} className="text-[#4d8b31] hover:underline font-medium">
                Try again
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
