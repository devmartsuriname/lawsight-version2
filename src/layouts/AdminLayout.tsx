import AnimationStar from '@/components/AnimationStar'
import Sidebar from '@/components/admin/Sidebar'
import Topbar from '@/components/admin/Topbar'
import { Container } from 'react-bootstrap'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import '@/styles/admin-root.scss'

const AdminLayout = () => {
  return (
    <div className="admin-root">
      <div className="wrapper">
        <Suspense fallback={<div>Loading...</div>}>
          <Topbar />
        </Suspense>
        <Sidebar />
        <AnimationStar />
        <div className="page-content">
          <Container fluid>
            <Outlet />
          </Container>
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
    </div>
  )
}

export default AdminLayout
