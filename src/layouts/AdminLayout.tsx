import AnimationStar from '@/components/AnimationStar'
import Sidebar from '@/components/admin/Sidebar'
import Topbar from '@/components/admin/Topbar'
import { Container } from 'react-bootstrap'
import { Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useLayoutContext } from '@/contexts/LayoutContext'
import '@/styles/admin-root.scss'

const AdminLayout = () => {
  const { theme, menu } = useLayoutContext()

  // Apply theme and sidebar attributes to <html> element
  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('data-bs-theme', theme || 'light')
    html.setAttribute('data-sidebar-size', menu.size || 'default')
    
    return () => {
      html.removeAttribute('data-bs-theme')
      html.removeAttribute('data-sidebar-size')
    }
  }, [theme, menu.size])

  return (
    <div className="admin-root">
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
  )
}

export default AdminLayout
