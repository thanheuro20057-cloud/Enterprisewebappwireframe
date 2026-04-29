import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Role = 'admin' | 'retiree' | 'successor';

export function AuthPage() {
  const [selectedRole, setSelectedRole] = useState<Role>('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedRole === 'admin') {
      navigate('/onboarding');
    } else if (selectedRole === 'retiree') {
      navigate('/retiree/interview');
    } else {
      navigate('/successor/knowledge');
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-lg border border-[#cccccc] p-8 shadow-sm">
        {/* Role Selection Tabs */}
        <div className="flex rounded-lg border border-[#cccccc] p-1 mb-8">
          <button
            onClick={() => setSelectedRole('admin')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedRole === 'admin'
                ? 'bg-[#595959] text-white'
                : 'text-[#7f7f7f] hover:text-[#595959]'
            }`}
          >
            Admin
          </button>
          <button
            onClick={() => setSelectedRole('retiree')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedRole === 'retiree'
                ? 'bg-[#595959] text-white'
                : 'text-[#7f7f7f] hover:text-[#595959]'
            }`}
          >
            Retiree
          </button>
          <button
            onClick={() => setSelectedRole('successor')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedRole === 'successor'
                ? 'bg-[#595959] text-white'
                : 'text-[#7f7f7f] hover:text-[#595959]'
            }`}
          >
            Successor
          </button>
        </div>

        {/* Sign In Form */}
        <h2 className="text-2xl font-semibold text-[#595959] mb-6">
          Sign In as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
        </h2>

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#595959] mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-[#cccccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#595959] focus:border-transparent text-[#595959]"
              placeholder="Enter your email"
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
              className="w-full px-3 py-2 border border-[#cccccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#595959] focus:border-transparent text-[#595959]"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#595959] text-white rounded-md font-medium hover:bg-[#454545] transition-colors mt-6"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-[#7f7f7f] hover:text-[#595959]">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}
