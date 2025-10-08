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

      <div className="min-h-screen flex items-center justify-center bg-[var(--admin-bg-primary)] px-4">
        <div className="w-full max-w-md">
          {/* Logo/Brand Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-[var(--admin-radius-lg)] bg-gradient-to-br from-[var(--admin-accent-gold)] to-[var(--admin-accent-gold-light)] shadow-[var(--admin-shadow-gold)] mb-4">
              <LogIn className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold admin-gradient-text mb-2">
              VP Admin Portal
            </h1>
            <p className="text-[var(--admin-text-secondary)]">
              Office of the Vice President
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-[var(--admin-bg-card)] rounded-[var(--admin-radius-xl)] border border-[var(--admin-border-subtle)] shadow-[var(--admin-shadow-xl)] p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[var(--admin-text-primary)] mb-2">
                Welcome back
              </h2>
              <p className="text-[var(--admin-text-secondary)]">
                Sign in to access the admin panel
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="rounded-[var(--admin-radius-md)] bg-red-500/10 border border-red-500/20 p-4">
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

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-[var(--admin-border-medium)] bg-[var(--admin-bg-tertiary)] text-[var(--admin-accent-gold)] focus:ring-[var(--admin-accent-gold)] focus:ring-offset-[var(--admin-bg-card)]"
                  />
                  <span className="text-sm text-[var(--admin-text-secondary)]">
                    Remember me
                  </span>
                </label>
                <Link
                  to="/auth/forgot-password"
                  className="text-sm font-medium text-[var(--admin-accent-gold)] hover:text-[var(--admin-accent-gold-light)] transition-colors"
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
              <p className="text-sm text-[var(--admin-text-secondary)]">
                Don't have an account?{' '}
                <Link
                  to="/auth/register"
                  className="font-medium text-[var(--admin-accent-gold)] hover:text-[var(--admin-accent-gold-light)] transition-colors"
                >
                  Register here
                </Link>
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-[var(--admin-text-muted)] mt-8">
            Protected by enterprise-grade security
          </p>
        </div>
      </div>
    </>
  );
}
