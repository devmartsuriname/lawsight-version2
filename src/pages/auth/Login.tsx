import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import AdminInput from '@/components/admin/AdminInput';
import AdminButton from '@/components/admin/AdminButton';
import { Mail, Lock, LogIn } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        checkUserRoleAndRedirect(session.user.id);
      }
    });
  }, []);

  const checkUserRoleAndRedirect = async (userId: string) => {
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .in('role', ['admin', 'editor']);

    if (data && data.length > 0) {
      navigate('/admin/dashboard');
    } else {
      navigate('/');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      await checkUserRoleAndRedirect(data.user.id);
    }

    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Login | Office of the Vice President</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-admin-bg-primary px-4 py-8">
        <div className="w-full max-w-md">
          {/* Logo/Brand Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-admin-lg bg-gradient-to-br from-admin-accent-gold to-admin-accent-gold-light shadow-admin-gold mb-4">
              <LogIn className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-admin-accent-gold to-admin-accent-gold-light bg-clip-text text-transparent mb-2">
              VP Admin Portal
            </h1>
            <p className="text-admin-text-secondary">
              Office of the Vice President
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-admin-bg-card rounded-admin-xl border border-admin-border-subtle shadow-admin-xl p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-admin-text-primary mb-2">
                Welcome back
              </h2>
              <p className="text-sm text-admin-text-secondary">
                Sign in to access the admin panel
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {error && (
                <div className="rounded-admin-md bg-red-500/10 border border-red-500/20 p-4">
                  <p className="text-sm text-red-500">{error}</p>
                </div>
              )}

              <AdminInput
                label="Email address"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                icon={Mail}
              />

              <AdminInput
                label="Password"
                type="password"
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                icon={Lock}
              />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-admin-border-medium bg-admin-bg-tertiary text-admin-accent-gold focus:ring-admin-accent-gold focus:ring-offset-admin-bg-card"
                  />
                  <span className="text-sm text-admin-text-secondary">
                    Remember me
                  </span>
                </label>
                <Link
                  to="/auth/forgot-password"
                  className="text-sm font-medium text-admin-accent-gold hover:text-admin-accent-gold-light transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <AdminButton
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={loading}
                icon={LogIn}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </AdminButton>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-admin-text-secondary">
                Don't have an account?{' '}
                <Link
                  to="/auth/register"
                  className="font-medium text-admin-accent-gold hover:text-admin-accent-gold-light transition-colors"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-admin-text-muted mt-8">
            Protected by enterprise-grade security
          </p>
        </div>
      </div>
    </>
  );
}
