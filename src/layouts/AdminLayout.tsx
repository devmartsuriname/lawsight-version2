import AnimationStar from '@/components/AnimationStar'
import Sidebar from '@/components/admin/Sidebar'
import Topbar from '@/components/admin/Topbar'
import { Container } from 'react-bootstrap'
import { Suspense } from 'react'

type AdminLayoutProps = {
  children: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="wrapper">
      <Suspense fallback={<div>Loading...</div>}>
        <Topbar />
      </Suspense>
      <Sidebar />
      <AnimationStar />
      <div className="page-content">
        <Container fluid>{children}</Container>
        <footer className="footer">
          <Container fluid>
            <div className="row">
              <div className="col-12 text-center">
                {new Date().getFullYear()} © VP Engineering. All rights reserved.
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  )
}

export default AdminLayout
