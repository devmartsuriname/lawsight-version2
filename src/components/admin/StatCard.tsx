import { ReactNode } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  iconColor?: 'gold' | 'purple' | 'blue' | 'green';
  chartData?: Array<{ value: number }>;
  loading?: boolean;
}

export default function StatCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = 'gold',
  chartData,
  loading = false,
}: StatCardProps) {
  const getIconBgClass = () => {
    switch (iconColor) {
      case 'purple':
        return 'from-purple-500/15 to-purple-500/5';
      case 'blue':
        return 'from-blue-500/15 to-blue-500/5';
      case 'green':
        return 'from-green-500/15 to-green-500/5';
      default:
        return 'from-admin-accent-gold/15 to-admin-accent-gold/5';
    }
  };

  const getIconColorClass = () => {
    switch (iconColor) {
      case 'purple':
        return 'text-purple-500';
      case 'blue':
        return 'text-blue-500';
      case 'green':
        return 'text-green-500';
      default:
        return 'text-admin-accent-gold';
    }
  };

  const getChangeColorClass = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-500';
      case 'negative':
        return 'text-red-500';
      default:
        return 'text-admin-text-secondary';
    }
  };

  const getChartColor = () => {
    switch (iconColor) {
      case 'purple':
        return '#8b5cf6';
      case 'blue':
        return '#3b82f6';
      case 'green':
        return '#10b981';
      default:
        return '#c5a467';
    }
  };

  if (loading) {
    return (
      <div className="bg-admin-bg-card rounded-admin-lg border border-admin-border-subtle p-6 shadow-admin-md animate-pulse">
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <div className="h-4 bg-admin-bg-tertiary rounded w-24"></div>
            <div className="h-8 bg-admin-bg-tertiary rounded w-32"></div>
          </div>
          <div className="h-12 w-12 bg-admin-bg-tertiary rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-admin-bg-card rounded-admin-lg border border-admin-border-subtle p-6 shadow-admin-md hover:shadow-admin-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-admin-text-secondary font-medium uppercase tracking-wide">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-admin-text-primary mt-2">
            {value}
          </h3>
          {change && (
            <p className={`text-sm font-medium mt-2 ${getChangeColorClass()}`}>
              {change}
            </p>
          )}
        </div>
        <div
          className={`h-12 w-12 rounded-lg bg-gradient-to-br ${getIconBgClass()} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className={`h-6 w-6 ${getIconColorClass()}`} />
        </div>
      </div>

      {chartData && chartData.length > 0 && (
        <div className="h-16 -mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={`gradient-${iconColor}`} x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={getChartColor()}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={getChartColor()}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={getChartColor()}
                strokeWidth={2}
                fillOpacity={1}
                fill={`url(#gradient-${iconColor})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
