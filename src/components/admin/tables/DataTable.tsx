import { Table } from 'react-bootstrap'
import { ReactNode } from 'react'

type Column<T> = {
  key: string
  label: string
  render?: (item: T) => ReactNode
}

type DataTableProps<T> = {
  columns: Column<T>[]
  data: T[]
  striped?: boolean
  hover?: boolean
  bordered?: boolean
  responsive?: boolean
  size?: 'sm' | 'lg'
  className?: string
}

function DataTable<T extends Record<string, any>>({
  columns,
  data,
  striped = false,
  hover = true,
  bordered = false,
  responsive = true,
  size,
  className = ''
}: DataTableProps<T>) {
  const renderCell = (item: T, column: Column<T>) => {
    if (column.render) {
      return column.render(item)
    }
    return item[column.key]
  }

  const tableContent = (
    <Table 
      striped={striped} 
      hover={hover} 
      bordered={bordered} 
      size={size}
      className={`mb-0 ${className}`}
      style={{
        backgroundColor: 'var(--bs-table-bg)',
        color: 'var(--bs-body-color)'
      }}
    >
      <thead 
        style={{
          backgroundColor: 'var(--bs-table-thead-bg)',
          color: 'var(--bs-headings-color)'
        }}
      >
        <tr>
          {columns.map((column) => (
            <th key={column.key} className="py-2">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody
        style={{
          backgroundColor: 'var(--bs-table-bg)'
        }}
      >
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="text-center text-theme-muted py-4">
              No data available
            </td>
          </tr>
        ) : (
          data.map((item, idx) => (
            <tr key={item.id || idx}>
              {columns.map((column) => (
                <td key={column.key} className="py-2">
                  {renderCell(item, column)}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </Table>
  )

  if (responsive) {
    return <div className="table-responsive">{tableContent}</div>
  }

  return tableContent
}

export default DataTable
