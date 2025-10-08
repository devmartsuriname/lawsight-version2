import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import StatCard from '@/components/admin/StatCard';
import AdminCard from '@/components/admin/AdminCard';
import AdminButton from '@/components/admin/AdminButton';
import AdminTable from '@/components/admin/AdminTable';
import {
  FileText,
  Calendar,
  Target,
  Mail,
  Plus,
  TrendingUp,
  Users,
  Activity,
} from 'lucide-react';

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  pendingAppointments: number;
  totalProjects: number;
  unreadContacts: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    pendingAppointments: 0,
    totalProjects: 0,
    unreadContacts: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [posts, appointments, projects, contacts] = await Promise.all([
        supabase.from('posts').select('status', { count: 'exact' }),
        supabase
          .from('appointments')
          .select('*', { count: 'exact' })
          .eq('status', 'new'),
        supabase.from('projects').select('*', { count: 'exact' }),
        supabase
          .from('contact_submissions')
          .select('*', { count: 'exact' })
          .eq('is_read', false),
      ]);

      const publishedCount =
        posts.data?.filter((p) => p.status === 'published').length || 0;
      const draftCount = posts.data?.filter((p) => p.status === 'draft').length || 0;

      setStats({
        totalPosts: posts.count || 0,
        publishedPosts: publishedCount,
        draftPosts: draftCount,
        pendingAppointments: appointments.count || 0,
        totalProjects: projects.count || 0,
        unreadContacts: contacts.count || 0,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  // Mock chart data for sparklines
  const generateChartData = (baseValue: number) => {
    return Array.from({ length: 7 }, (_, i) => ({
      value: Math.floor(baseValue * (0.7 + Math.random() * 0.6)),
    }));
  };

  const recentActivity = [
    {
      action: 'New post published',
      user: 'Admin',
      timestamp: '2 hours ago',
      type: 'success',
    },
    {
      action: 'Appointment scheduled',
      user: 'System',
      timestamp: '5 hours ago',
      type: 'info',
    },
    {
      action: 'Project updated',
      user: 'Admin',
      timestamp: '1 day ago',
      type: 'warning',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard | Admin Panel</title>
      </Helmet>

      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-admin-text-primary mb-2">
              Welcome back, Admin
            </h1>
            <p className="text-sm sm:text-base text-admin-text-secondary">
              Here's what's happening with your website today.
            </p>
          </div>
          <AdminButton icon={Plus} variant="primary" size="lg" className="w-full sm:w-auto">
            Quick Add
          </AdminButton>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCard
            title="Total Posts"
            value={stats.totalPosts}
            change={`${stats.publishedPosts} published, ${stats.draftPosts} draft`}
            changeType="neutral"
            icon={FileText}
            iconColor="gold"
            chartData={generateChartData(stats.totalPosts)}
            loading={loading}
          />
          <StatCard
            title="Pending Appointments"
            value={stats.pendingAppointments}
            change="Require attention"
            changeType="neutral"
            icon={Calendar}
            iconColor="blue"
            chartData={generateChartData(stats.pendingAppointments)}
            loading={loading}
          />
          <StatCard
            title="Total Projects"
            value={stats.totalProjects}
            change="Portfolio items"
            changeType="neutral"
            icon={Target}
            iconColor="purple"
            chartData={generateChartData(stats.totalProjects)}
            loading={loading}
          />
          <StatCard
            title="Unread Messages"
            value={stats.unreadContacts}
            change="Contact submissions"
            changeType="neutral"
            icon={Mail}
            iconColor="green"
            chartData={generateChartData(stats.unreadContacts)}
            loading={loading}
          />
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Quick Actions */}
          <AdminCard title="Quick Actions" variant="gradient" className="lg:col-span-1">
            <div className="space-y-3">
              <AdminButton
                icon={FileText}
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => (window.location.href = '/admin/posts')}
              >
                Create New Post
              </AdminButton>
              <AdminButton
                icon={Target}
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => (window.location.href = '/admin/projects')}
              >
                Add Project
              </AdminButton>
              <AdminButton
                icon={Calendar}
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => (window.location.href = '/admin/appointments')}
              >
                Review Appointments
              </AdminButton>
              <AdminButton
                icon={Mail}
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => (window.location.href = '/admin/contact')}
              >
                View Messages
              </AdminButton>
            </div>
          </AdminCard>

          {/* Recent Activity */}
          <AdminCard title="Recent Activity" subtitle="Latest system events" className="lg:col-span-2">
            <AdminTable
              columns={[
                { key: 'action', label: 'Action', width: '40%' },
                { key: 'user', label: 'User', width: '20%' },
                { key: 'timestamp', label: 'Time', width: '20%', align: 'right' },
                { key: 'type', label: 'Status', width: '20%', align: 'center' },
              ]}
              data={recentActivity.map((item) => ({
                ...item,
                type: (
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.type === 'success'
                        ? 'bg-green-500/10 text-green-500'
                        : item.type === 'info'
                        ? 'bg-blue-500/10 text-blue-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}
                  >
                    {item.type}
                  </span>
                ),
              }))}
              loading={loading}
              emptyMessage="No recent activity"
            />
          </AdminCard>
        </div>

        {/* System Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <AdminCard variant="glass" hover>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-admin-lg bg-gradient-to-br from-admin-accent-gold/15 to-admin-accent-gold/5 flex items-center justify-center">
                <Users className="h-6 w-6 text-admin-accent-gold" />
              </div>
              <div>
                <p className="text-sm text-admin-text-secondary">Active Users</p>
                <p className="text-2xl font-bold text-admin-text-primary">1,234</p>
              </div>
            </div>
          </AdminCard>

          <AdminCard variant="glass" hover>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-admin-lg bg-gradient-to-br from-purple-500/15 to-purple-500/5 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-admin-text-secondary">Page Views</p>
                <p className="text-2xl font-bold text-admin-text-primary">45.2K</p>
              </div>
            </div>
          </AdminCard>

          <AdminCard variant="glass" hover className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-admin-lg bg-gradient-to-br from-blue-500/15 to-blue-500/5 flex items-center justify-center">
                <Activity className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-admin-text-secondary">Server Status</p>
                <p className="text-2xl font-bold text-green-500">Healthy</p>
              </div>
            </div>
          </AdminCard>
        </div>
      </div>
    </>
  );
}
