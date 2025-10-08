import { Suspense } from 'react'
import AnimationStar from '@/components/AnimationStar'

type AuthLayoutProps = {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
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
        {children}
      </Suspense>
    </div>
  )
}

export default AuthLayout
