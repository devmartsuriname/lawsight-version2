import { LucideIcon } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'increase' | 'decrease';
  icon: LucideIcon;
  iconColor: string;
  chartData?: { value: number }[];
}

export function StatCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconColor,
  chartData,
}: StatCardProps) {
  return (
    <div className="bg-gradient-to-br from-admin-bg-secondary to-admin-bg-tertiary border border-admin-border rounded-admin-lg p-6 shadow-admin-md hover:shadow-admin-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm text-admin-text-secondary mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-admin-text-primary">{value}</h3>
          
          {change && (
            <p className={`text-sm mt-2 ${
              changeType === 'increase' ? 'text-green-400' : 'text-red-400'
            }`}>
              {change}
            </p>
          )}
        </div>
        
        <div className={`p-3 ${iconColor} rounded-admin-md`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {chartData && chartData.length > 0 && (
        <div className="h-16 -mx-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={iconColor.includes('gold') ? '#c5a467' : '#8b5cf6'} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={iconColor.includes('gold') ? '#c5a467' : '#8b5cf6'} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={iconColor.includes('gold') ? '#c5a467' : '#8b5cf6'}
                strokeWidth={2}
                fill={`url(#gradient-${title})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
