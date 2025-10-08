import { FileText, FolderKanban, Calendar, Mail, TrendingUp, Users, Eye } from 'lucide-react';
import { StatCard } from '@/components/admin/StatCard';

// Mock data for demonstration
const stats = [
  {
    title: 'Total Posts',
    value: '24',
    change: '+12% from last month',
    changeType: 'increase' as const,
    icon: FileText,
    iconColor: 'bg-admin-accent-gold',
    chartData: [
      { value: 12 },
      { value: 19 },
      { value: 15 },
      { value: 22 },
      { value: 18 },
      { value: 24 },
    ],
  },
  {
    title: 'Active Projects',
    value: '8',
    change: '+2 new this week',
    changeType: 'increase' as const,
    icon: FolderKanban,
    iconColor: 'bg-admin-accent-purple',
    chartData: [
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 7 },
      { value: 8 },
      { value: 8 },
    ],
  },
  {
    title: 'Appointments',
    value: '32',
    change: '+8% from last week',
    changeType: 'increase' as const,
    icon: Calendar,
    iconColor: 'bg-admin-accent-blue',
    chartData: [
      { value: 20 },
      { value: 25 },
      { value: 28 },
      { value: 30 },
      { value: 29 },
      { value: 32 },
    ],
  },
  {
    title: 'Messages',
    value: '156',
    change: '+24 unread',
    changeType: 'increase' as const,
    icon: Mail,
    iconColor: 'bg-green-500',
    chartData: [
      { value: 120 },
      { value: 135 },
      { value: 142 },
      { value: 148 },
      { value: 152 },
      { value: 156 },
    ],
  },
];

const recentActivity = [
  { id: 1, type: 'post', title: 'New Infrastructure Plan Released', user: 'Admin', time: '2 hours ago' },
  { id: 2, type: 'appointment', title: 'Meeting with Community Leaders', user: 'Scheduler', time: '4 hours ago' },
  { id: 3, type: 'message', title: 'Contact form submission received', user: 'John Doe', time: '5 hours ago' },
  { id: 4, type: 'project', title: 'Healthcare Initiative Updated', user: 'Admin', time: '1 day ago' },
  { id: 5, type: 'post', title: 'Economic Development Report', user: 'Admin', time: '2 days ago' },
];

const quickActions = [
  { label: 'New Post', icon: FileText, color: 'bg-admin-accent-gold', path: '/admin/posts/new' },
  { label: 'New Project', icon: FolderKanban, color: 'bg-admin-accent-purple', path: '/admin/projects/new' },
  { label: 'View Appointments', icon: Calendar, color: 'bg-admin-accent-blue', path: '/admin/appointments' },
  { label: 'Check Messages', icon: Mail, color: 'bg-green-500', path: '/admin/contact-submissions' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-heading font-bold text-admin-text-primary mb-2">
          Dashboard
        </h1>
        <p className="text-admin-text-secondary">
          Welcome back, Administrator. Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-heading font-semibold text-admin-text-primary mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => window.location.href = action.path}
              className={`${action.color} p-6 rounded-admin-lg shadow-admin-md hover:shadow-admin-lg transition-all duration-300 group`}
            >
              <action.icon className="w-8 h-8 text-white mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-white font-semibold">{action.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity Table */}
      <div>
        <h2 className="text-xl font-heading font-semibold text-admin-text-primary mb-4">
          Recent Activity
        </h2>
        <div className="bg-admin-bg-secondary border border-admin-border rounded-admin-lg overflow-hidden shadow-admin-md">
          <table className="w-full">
            <thead className="bg-admin-bg-tertiary">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-admin-text-primary">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-admin-text-primary">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-admin-text-primary">User</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-admin-text-primary">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-t border-admin-border hover:bg-admin-bg-tertiary transition-colors ${
                    index % 2 === 0 ? 'bg-admin-bg-secondary' : 'bg-admin-bg-primary/50'
                  }`}
                >
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-admin-accent-gold/10 text-admin-accent-gold capitalize">
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-admin-text-primary">{item.title}</td>
                  <td className="px-6 py-4 text-sm text-admin-text-secondary">{item.user}</td>
                  <td className="px-6 py-4 text-sm text-admin-text-secondary">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
