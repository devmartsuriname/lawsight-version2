import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import AdminInput from '@/components/admin/AdminInput';
import AdminButton from '@/components/admin/AdminButton';
import { Mail, Lock, User, UserPlus, CheckCircle } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    const { error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName,
        },
        emailRedirectTo: `${window.location.origin}/auth/login`,
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <>
        <Helmet>
          <title>Registration Successful | Office of the Vice President</title>
          <meta name="robots" content="noindex" />
        </Helmet>

        <div className="min-h-screen flex items-center justify-center bg-admin-bg-primary px-4">
          <div className="w-full max-w-md">
            <div className="bg-admin-bg-card rounded-admin-xl border border-admin-border-subtle shadow-admin-xl p-8 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-admin-lg mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-admin-text-primary mb-3">
                Registration Successful!
              </h2>
              <p className="text-admin-text-secondary mb-8">
                Please check your email to verify your account before signing in.
              </p>
              <AdminButton
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => navigate('/auth/login')}
              >
                Go to Login
              </AdminButton>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Register | Office of the Vice President</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-admin-bg-primary px-4 py-8">
        <div className="w-full max-w-md">
          {/* Logo/Brand Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-admin-lg bg-gradient-to-br from-admin-accent-gold to-admin-accent-gold-light shadow-admin-gold mb-4">
              <UserPlus className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-admin-accent-gold to-admin-accent-gold-light bg-clip-text text-transparent mb-2">
              VP Admin Portal
            </h1>
            <p className="text-admin-text-secondary">
              Office of the Vice President
            </p>
          </div>

          {/* Register Card */}
          <div className="bg-admin-bg-card rounded-admin-xl border border-admin-border-subtle shadow-admin-xl p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-admin-text-primary mb-2">
                Create Admin Account
              </h2>
              <p className="text-sm text-admin-text-secondary">
                Register to access the admin panel
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              {error && (
                <div className="rounded-admin-md bg-red-500/10 border border-red-500/20 p-4">
                  <p className="text-sm text-red-500">{error}</p>
                </div>
              )}

              <AdminInput
                label="Full Name"
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                icon={User}
              />

              <AdminInput
                label="Email address"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@example.com"
                icon={Mail}
              />

              <AdminInput
                label="Password"
                type="password"
                name="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                icon={Lock}
                helperText="Minimum 6 characters"
              />

              <AdminInput
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                icon={Lock}
              />

              <div className="pt-2">
                <AdminButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={loading}
                  icon={UserPlus}
                >
                  {loading ? 'Creating account...' : 'Create Account'}
                </AdminButton>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-admin-text-secondary">
                Already have an account?{' '}
                <Link
                  to="/auth/login"
                  className="font-medium text-admin-accent-gold hover:text-admin-accent-gold-light transition-colors"
                >
                  Sign in
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
