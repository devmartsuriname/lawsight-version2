import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AnimationStar from '@/components/AnimationStar'

const AuthLayout = () => {
  return (
    <div className="auth-wrapper min-vh-100 position-relative">
      <AnimationStar />
      <Suspense fallback={
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default AuthLayout
