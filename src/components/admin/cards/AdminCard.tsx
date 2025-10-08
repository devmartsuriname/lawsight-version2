import { Card, CardBody, CardHeader } from 'react-bootstrap'
import { ReactNode } from 'react'

type AdminCardProps = {
  title?: string
  subtitle?: string
  headerActions?: ReactNode
  children: ReactNode
  className?: string
  bodyClassName?: string
}

const AdminCard = ({ 
  title, 
  subtitle, 
  headerActions, 
  children, 
  className = '', 
  bodyClassName = '' 
}: AdminCardProps) => {
  return (
    <Card className={`h-100 ${className}`}>
      {(title || headerActions) && (
        <CardHeader className="d-flex align-items-center justify-content-between gap-2">
          <div className="flex-grow-1">
            {title && <h4 className="card-title mb-0">{title}</h4>}
            {subtitle && <p className="text-muted mb-0 mt-1">{subtitle}</p>}
          </div>
          {headerActions && <div className="d-flex gap-2">{headerActions}</div>}
        </CardHeader>
      )}
      <CardBody className={bodyClassName}>{children}</CardBody>
    </Card>
  )
}

export default AdminCard
