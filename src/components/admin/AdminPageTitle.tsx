interface AdminPageTitleProps {
  title: string
  subtitle?: string
}

const AdminPageTitle = ({ title, subtitle }: AdminPageTitleProps) => {
  return (
    <div className="admin-page-title mb-4">
      <h2 className="mb-1 fw-bold">{title}</h2>
      {subtitle && <p className="text-theme-muted mb-0">{subtitle}</p>}
    </div>
  )
}

export default AdminPageTitle
