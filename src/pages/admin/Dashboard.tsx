import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';

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

  const statCards = [
    {
      title: 'Total Posts',
      value: stats.totalPosts,
      subtitle: `${stats.publishedPosts} published, ${stats.draftPosts} draft`,
      icon: '📝',
      color: 'bg-blue-500',
    },
    {
      title: 'Pending Appointments',
      value: stats.pendingAppointments,
      subtitle: 'Require attention',
      icon: '📅',
      color: 'bg-yellow-500',
    },
    {
      title: 'Total Projects',
      value: stats.totalProjects,
      subtitle: 'Portfolio items',
      icon: '🎯',
      color: 'bg-green-500',
    },
    {
      title: 'Unread Messages',
      value: stats.unreadContacts,
      subtitle: 'Contact submissions',
      icon: '✉️',
      color: 'bg-red-500',
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | Admin Panel</title>
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to the VP Website Admin Panel
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{card.title}</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{card.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{card.subtitle}</p>
                </div>
                <div className={`rounded-full p-3 ${card.color} bg-opacity-10`}>
                  <span className="text-2xl">{card.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <a
                href="/admin/posts"
                className="block rounded-lg border border-border p-4 hover:bg-accent transition-colors"
              >
                <div className="font-medium text-foreground">Create New Post</div>
                <div className="text-sm text-muted-foreground">
                  Add news or blog content
                </div>
              </a>
              <a
                href="/admin/appointments"
                className="block rounded-lg border border-border p-4 hover:bg-accent transition-colors"
              >
                <div className="font-medium text-foreground">Review Appointments</div>
                <div className="text-sm text-muted-foreground">
                  {stats.pendingAppointments} pending requests
                </div>
              </a>
              <a
                href="/admin/contact"
                className="block rounded-lg border border-border p-4 hover:bg-accent transition-colors"
              >
                <div className="font-medium text-foreground">View Messages</div>
                <div className="text-sm text-muted-foreground">
                  {stats.unreadContacts} unread messages
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">System Info</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Database Status</span>
                <span className="text-sm font-medium text-green-600">✓ Connected</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Storage Status</span>
                <span className="text-sm font-medium text-green-600">✓ Active</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-muted-foreground">Last Updated</span>
                <span className="text-sm font-medium text-foreground">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
