// Mock data for admin dashboard
// To be replaced with real backend queries when backend is implemented

export type StatCardData = {
  title: string
  count: string
  icon: string
  series: number[]
  trend?: {
    value: string
    isPositive: boolean
  }
}

export const dashboardStats: StatCardData[] = [
  {
    title: 'Total Posts',
    count: '2,847',
    icon: 'solar:document-text-outline',
    series: [25, 28, 32, 38, 43, 55, 60, 48, 42, 51, 35],
    trend: { value: '12.5%', isPositive: true }
  },
  {
    title: 'Active Projects',
    count: '156',
    icon: 'solar:folder-with-files-outline',
    series: [87, 54, 64, 76, 81, 95, 70, 92, 83, 79, 86],
    trend: { value: '8.2%', isPositive: true }
  },
  {
    title: 'Pending Appointments',
    count: '42',
    icon: 'solar:calendar-outline',
    series: [41, 42, 35, 42, 36, 52, 43, 32, 42, 54, 45],
    trend: { value: '3.1%', isPositive: false }
  },
  {
    title: 'Contact Submissions',
    count: '1,284',
    icon: 'solar:chat-round-dots-outline',
    series: [18, 41, 40, 48, 57, 45, 30, 57, 63, 70, 61],
    trend: { value: '15.7%', isPositive: true }
  }
]

export type RevenueData = {
  categories: string[]
  pageViews: number[]
  clicks: number[]
  revenue: number[]
}

export const revenueData: RevenueData = {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  pageViews: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
  clicks: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
  revenue: [12, 16, 11, 22, 28, 25, 15, 29, 35, 45, 42, 48]
}

export type SalesCategory = {
  category: string
  orders: string
  percentage: string
  trend: string
  isPositive: boolean
}

export const salesByCategory: SalesCategory[] = [
  {
    category: 'Digital Products',
    orders: '187,232',
    percentage: '48.63%',
    trend: '2.5% Up',
    isPositive: true
  },
  {
    category: 'Consulting',
    orders: '126,874',
    percentage: '36.08%',
    trend: '8.5% Up',
    isPositive: true
  },
  {
    category: 'Other Services',
    orders: '90,127',
    percentage: '23.41%',
    trend: '10.98% Down',
    isPositive: false
  }
]

export type RecentActivity = {
  id: string
  user: string
  action: string
  target: string
  timestamp: string
  avatar?: string
}

export const recentActivities: RecentActivity[] = [
  {
    id: '1',
    user: 'John Doe',
    action: 'created',
    target: 'New Project: VP Portal',
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    user: 'Jane Smith',
    action: 'updated',
    target: 'Blog Post: Q4 Review',
    timestamp: '4 hours ago'
  },
  {
    id: '3',
    user: 'Mike Johnson',
    action: 'scheduled',
    target: 'Appointment: Client Meeting',
    timestamp: '6 hours ago'
  },
  {
    id: '4',
    user: 'Sarah Williams',
    action: 'submitted',
    target: 'Contact Form',
    timestamp: '8 hours ago'
  },
  {
    id: '5',
    user: 'David Brown',
    action: 'completed',
    target: 'Project: Website Redesign',
    timestamp: '1 day ago'
  }
]
