import { Container, Row, Col } from 'react-bootstrap'
import StatCard from '@/components/admin/cards/StatCard'
import RevenueChart from '@/components/admin/charts/RevenueChart'
import SaleChart from '@/components/admin/charts/SaleChart'
import AdminCard from '@/components/admin/cards/AdminCard'
import DataTable from '@/components/admin/tables/DataTable'
import { dashboardStats, recentActivities } from '@/data/admin-mock'
import AdminPageTitle from '@/components/admin/AdminPageTitle'

const Dashboard = () => {
  const activityColumns = [
    {
      key: 'user',
      label: 'User',
      render: (item: typeof recentActivities[0]) => (
        <div className="d-flex align-items-center gap-2">
          <div className="avatar-sm bg-soft-primary rounded-circle d-flex align-items-center justify-content-center">
            <span className="text-primary fw-medium">{item.user.charAt(0)}</span>
          </div>
          <span className="fw-medium">{item.user}</span>
        </div>
      )
    },
    {
      key: 'action',
      label: 'Action',
      render: (item: typeof recentActivities[0]) => (
        <span>
          <span className="text-muted">{item.action}</span>{' '}
          <span className="fw-medium">{item.target}</span>
        </span>
      )
    },
    {
      key: 'timestamp',
      label: 'Time',
      render: (item: typeof recentActivities[0]) => (
        <span className="text-muted">{item.timestamp}</span>
      )
    }
  ]

  return (
    <Container fluid>
      <AdminPageTitle 
        title="Dashboard" 
        subtitle="Welcome back, manage your content and analytics"
      />
      
      {/* Stat Cards */}
      <Row className="mb-4">
          {dashboardStats.map((stat, idx) => (
            <Col md={6} xl={3} key={idx} className="mb-3">
              <StatCard {...stat} />
            </Col>
          ))}
        </Row>

        {/* Charts */}
        <Row className="mb-4">
          <RevenueChart />
          <SaleChart />
        </Row>

        {/* Recent Activity */}
        <Row>
          <Col lg={12}>
            <AdminCard title="Recent Activity" subtitle="Latest actions across the platform">
              <DataTable 
                columns={activityColumns} 
                data={recentActivities} 
                hover 
                responsive 
              />
            </AdminCard>
          </Col>
        </Row>
      </Container>
  )
}

export default Dashboard
