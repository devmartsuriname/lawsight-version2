import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await signIn(email, password);
    
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-admin-bg-primary via-admin-bg-secondary to-admin-bg-tertiary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-admin-accent-gold/10 rounded-full mb-4">
            <Lock className="w-12 h-12 text-admin-accent-gold" />
          </div>
          <h1 className="text-3xl font-heading font-bold text-admin-text-primary mb-2">
            Admin Portal
          </h1>
          <p className="text-admin-text-secondary">
            Office of the Vice President — Secure Access
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-admin-bg-secondary border border-admin-border rounded-admin-lg shadow-admin-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-admin-md p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-admin-text-primary mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-admin-text-secondary" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-admin-bg-tertiary border border-admin-border rounded-admin-md text-admin-text-primary placeholder-admin-text-secondary focus:outline-none focus:ring-2 focus:ring-admin-accent-gold focus:border-transparent transition-all"
                  placeholder="admin@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-admin-text-primary mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-admin-text-secondary" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-admin-bg-tertiary border border-admin-border rounded-admin-md text-admin-text-primary placeholder-admin-text-secondary focus:outline-none focus:ring-2 focus:ring-admin-accent-gold focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-gradient-to-r from-admin-accent-gold to-yellow-600 text-white font-semibold rounded-admin-md hover:shadow-admin-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-admin-text-secondary">
            Don't have an account?{' '}
            <Link to="/admin/register" className="text-admin-accent-gold hover:underline">
              Register
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-admin-text-secondary mt-6">
          © 2025 Office of the Vice President — All Rights Reserved
        </p>
      </div>
    </div>
  );
}
