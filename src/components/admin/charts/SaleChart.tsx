import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Col } from 'react-bootstrap'
import AdminCard from '@/components/admin/cards/AdminCard'
import { salesByCategory } from '@/data/admin-mock'
import { useLayoutContext } from '@/contexts/LayoutContext'

const SaleChart = () => {
  const { themeMode } = useLayoutContext()
  const chartData = [44.25, 52.68, 45.98]
  
  const chartOptions: ApexOptions = {
    chart: {
      height: 180,
      type: 'donut'
    },
    series: chartData,
    legend: {
      show: false
    },
    stroke: {
      width: 0
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: false,
            total: {
              showAlways: true,
              show: true
            }
          }
        }
      }
    },
    labels: ['Direct', 'Affiliate', 'Sponsored'],
    colors: ['#8b5cf6', '#c5a467', '#3b82f6'], // VP Purple, Gold, Blue
    dataLabels: {
      enabled: false
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          }
        }
      }
    ],
    fill: {
      type: 'gradient'
    }
  }

  const headerActions = (
    <>
      <button type="button" className="btn btn-sm btn-outline-light">
        ALL
      </button>
      <button type="button" className="btn btn-sm btn-outline-light">
        1M
      </button>
      <button type="button" className="btn btn-sm btn-outline-light">
        6M
      </button>
      <button type="button" className="btn btn-sm btn-outline-light active">
        1Y
      </button>
    </>
  )

  return (
    <Col lg={4}>
      <AdminCard title="Sales By Category" headerActions={headerActions}>
        <div dir="ltr">
          <ReactApexChart 
            key={`sale-chart-${themeMode}`}
            height={180} 
            options={chartOptions} 
            series={chartOptions.series} 
            type="donut" 
          />
        </div>
        <div className="table-responsive mt-3">
          <table className="table table-nowrap table-borderless table-sm table-centered mb-0">
            <thead style={{
              backgroundColor: 'var(--bs-table-thead-bg)',
              color: 'var(--bs-headings-color)'
            }}>
              <tr>
                <th className="py-1">Category</th>
                <th className="py-1">Orders</th>
                <th className="py-1">Perc.</th>
              </tr>
            </thead>
            <tbody>
              {salesByCategory.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.category}</td>
                  <td>{item.orders}</td>
                  <td>
                    {item.percentage}
                    <span className={`badge badge-soft-${item.isPositive ? 'success' : 'danger'} float-end`}>
                      {item.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminCard>
    </Col>
  )
}

export default SaleChart
