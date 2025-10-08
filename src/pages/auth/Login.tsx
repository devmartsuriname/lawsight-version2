import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardBody, Form, FormControl, FormGroup, FormLabel, Button, FormCheck } from 'react-bootstrap'
import { useAuth } from '@/contexts/AuthContext'
import { loginSchema, LoginFormData } from '@/utils/auth-validation'
import IconifyIcon from '@/components/admin/wrappers/IconifyIcon'
import PageTitle from '@/components/PageTitle'

const Login = () => {
  const navigate = useNavigate()
  const { signIn, isLoading: authLoading } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<Partial<LoginFormData>>({})
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name as keyof LoginFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    try {
      // Validate form data
      const validatedData = loginSchema.parse(formData)

      // Sign in
      const { error } = await signIn(validatedData.email, validatedData.password, rememberMe)

      if (!error) {
        navigate('/admin/dashboard')
      }
    } catch (error: any) {
      if (error.errors) {
        const fieldErrors: Partial<LoginFormData> = {}
        error.errors.forEach((err: any) => {
          if (err.path) {
            fieldErrors[err.path[0] as keyof LoginFormData] = err.message
          }
        })
        setErrors(fieldErrors)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <PageTitle subName="VP Engineering" title="Login" />
      
      <div className="min-vh-100 d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4">
              <Card className="shadow-lg border-0">
                <CardBody className="p-4 p-sm-5">
                  <div className="text-center mb-4">
                    <div className="mb-3">
                      <IconifyIcon icon="solar:shield-user-bold" className="text-primary" style={{ fontSize: '48px' }} />
                    </div>
                    <h4 className="mb-1">Welcome Back</h4>
                    <p className="text-muted">Sign in to continue to VP Admin</p>
                  </div>

                  <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-3">
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <FormControl
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        disabled={isLoading || authLoading}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <div className="invalid-feedback d-block">{errors.email}</div>
                      )}
                    </FormGroup>

                    <FormGroup className="mb-3">
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormControl
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        disabled={isLoading || authLoading}
                        autoComplete="current-password"
                      />
                      {errors.password && (
                        <div className="invalid-feedback d-block">{errors.password}</div>
                      )}
                    </FormGroup>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <FormCheck
                        type="checkbox"
                        id="remember-me"
                        label="Remember me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        disabled={isLoading || authLoading}
                      />
                      <Link to="/auth/forgot-password" className="text-muted text-decoration-none small">
                        Forgot password?
                      </Link>
                    </div>

                    <Button
                      type="submit"
                      className="w-100 btn-primary mb-3"
                      disabled={isLoading || authLoading}
                    >
                      {isLoading || authLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Signing in...
                        </>
                      ) : (
                        <>
                          <IconifyIcon icon="solar:login-3-outline" className="me-2" />
                          Sign In
                        </>
                      )}
                    </Button>

                    <div className="text-center">
                      <p className="text-muted mb-0">
                        Don't have an account?{' '}
                        <Link to="/auth/register" className="text-primary fw-medium">
                          Create Account
                        </Link>
                      </p>
                    </div>
                  </Form>
                </CardBody>
              </Card>

              <div className="text-center mt-4">
                <p className="text-muted">
                  <Link to="/" className="text-muted text-decoration-none">
                    <IconifyIcon icon="solar:arrow-left-outline" className="me-1" />
                    Back to home
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
