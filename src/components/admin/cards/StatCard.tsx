import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import IconifyIcon from '@/components/admin/wrappers/IconifyIcon'
import type { StatCardData } from '@/data/admin-mock'
import { useLayoutContext } from '@/contexts/LayoutContext'

type StatCardProps = StatCardData

const StatCard = ({ title, count, icon, series, trend }: StatCardProps) => {
  const { themeMode } = useLayoutContext()
  
  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 50,
      sparkline: {
        enabled: true
      }
    },
    series: [
      {
        data: series
      }
    ],
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    colors: ['#c5a467'], // VP Gold
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function () {
            return ''
          }
        }
      },
      marker: {
        show: false
      }
    },
    fill: {
      opacity: [1],
      type: ['gradient'],
      gradient: {
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 100]
      }
    }
  }

  return (
    <Card className="h-100">
      <CardBody>
        <Row className="align-items-center">
          <Col xs={6}>
            <p className="text-theme-muted mb-1 text-truncate">{title}</p>
            <h3 className="text-theme-dark mt-2 mb-0">{count}</h3>
            {trend && (
              <span className={`badge badge-soft-${trend.isPositive ? 'success' : 'danger'} mt-2`}>
                {trend.isPositive ? '↑' : '↓'} {trend.value}
              </span>
            )}
          </Col>
          <Col xs={6}>
            <div className="ms-auto avatar-md bg-soft-primary rounded d-flex align-items-center justify-content-center">
              <IconifyIcon icon={icon} className="fs-32 text-primary" />
            </div>
          </Col>
        </Row>
      </CardBody>
      <ReactApexChart 
        key={`stat-chart-${title}-${themeMode}`}
        options={chartOptions} 
        series={chartOptions.series} 
        height={50} 
        type="area" 
      />
    </Card>
  )
}

export default StatCard
