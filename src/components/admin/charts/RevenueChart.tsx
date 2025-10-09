import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { Col } from 'react-bootstrap'
import AdminCard from '@/components/admin/cards/AdminCard'
import { revenueData } from '@/data/admin-mock'
import { useLayoutContext } from '@/contexts/LayoutContext'

const getCssVar = (varName: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim()
}

const RevenueChart = () => {
  const { themeMode } = useLayoutContext()
  
  const chartOptions: ApexOptions = {
    series: [
      {
        name: 'Page Views',
        type: 'bar',
        data: revenueData.pageViews
      },
      {
        name: 'Clicks',
        type: 'area',
        data: revenueData.clicks
      },
      {
        name: 'Revenue',
        type: 'area',
        data: revenueData.revenue
      }
    ],
    chart: {
      height: 313,
      type: 'line',
      toolbar: {
        show: false
      },
      foreColor: getCssVar('--bs-body-color')
    },
    theme: {
      mode: themeMode === 'dark' ? 'dark' : 'light'
    },
    stroke: {
      dashArray: [0, 0, 2],
      width: [0, 2, 2],
      curve: 'smooth'
    },
    fill: {
      opacity: [1, 1, 1],
      type: ['solid', 'gradient', 'gradient'],
      gradient: {
        type: 'vertical',
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90]
      }
    },
    markers: {
      size: [0, 0],
      strokeWidth: 2,
      hover: {
        size: 4
      }
    },
    xaxis: {
      categories: revenueData.categories,
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      labels: {
        style: {
          colors: getCssVar('--bs-text-muted')
        }
      }
    },
    yaxis: {
      min: 0,
      axisBorder: {
        show: false
      },
      labels: {
        style: {
          colors: getCssVar('--bs-text-muted')
        }
      }
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: getCssVar('--bs-border-color'),
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      padding: {
        top: 0,
        right: -2,
        bottom: 10,
        left: 10
      }
    },
    legend: {
      show: true,
      horizontalAlign: 'center',
      offsetX: 0,
      offsetY: 5,
      itemMargin: {
        horizontal: 10,
        vertical: 0
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
        borderRadius: 3
      }
    },
    colors: ['#8b5cf6', '#c5a467', '#3b82f6'], // VP Purple, Gold, Blue
    tooltip: {
      theme: themeMode === 'dark' ? 'dark' : 'light',
      shared: true,
      y: [
        {
          formatter: function (y) {
            if (typeof y !== 'undefined') {
              return y.toFixed(1) + 'k'
            }
            return y
          }
        },
        {
          formatter: function (y) {
            if (typeof y !== 'undefined') {
              return y.toFixed(1) + 'k'
            }
            return y
          }
        }
      ]
    }
  }

  const headerActions = (
    <>
      <button type="button" className="btn btn-sm btn-outline-secondary">
        ALL
      </button>
      <button type="button" className="btn btn-sm btn-outline-secondary">
        1M
      </button>
      <button type="button" className="btn btn-sm btn-outline-secondary">
        6M
      </button>
      <button type="button" className="btn btn-sm btn-outline-secondary active">
        1Y
      </button>
    </>
  )

  return (
    <Col lg={8}>
      <AdminCard title="Revenue Overview" headerActions={headerActions} bodyClassName="pt-0">
        <div dir="ltr">
          <ReactApexChart 
            key={`revenue-chart-${themeMode}`}
            options={chartOptions} 
            series={chartOptions.series} 
            height={313} 
            type="line" 
          />
        </div>
      </AdminCard>
    </Col>
  )
}

export default RevenueChart
