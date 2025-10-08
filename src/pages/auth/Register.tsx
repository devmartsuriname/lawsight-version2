import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardBody, Form, FormControl, FormGroup, FormLabel, Button } from 'react-bootstrap'
import { useAuth } from '@/contexts/AuthContext'
import { registerSchema, RegisterFormData } from '@/utils/auth-validation'
import IconifyIcon from '@/components/admin/wrappers/IconifyIcon'
import PageTitle from '@/components/PageTitle'

const Register = () => {
  const navigate = useNavigate()
  const { signUp, isLoading: authLoading } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<RegisterFormData>>({})
  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name as keyof RegisterFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors({})

    try {
      // Validate form data
      const validatedData = registerSchema.parse(formData)

      // Sign up
      const { error } = await signUp(validatedData.email, validatedData.password)

      if (!error) {
        navigate('/auth/login')
      }
    } catch (error: any) {
      if (error.errors) {
        const fieldErrors: Partial<RegisterFormData> = {}
        error.errors.forEach((err: any) => {
          if (err.path) {
            fieldErrors[err.path[0] as keyof RegisterFormData] = err.message
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
      <PageTitle subName="VP Engineering" title="Register" />
      
      <div className="min-vh-100 d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5 col-xl-4">
              <Card className="shadow-lg border-0">
                <CardBody className="p-4 p-sm-5">
                  <div className="text-center mb-4">
                    <div className="mb-3">
                      <IconifyIcon icon="solar:user-plus-rounded-bold" className="text-primary" style={{ fontSize: '48px' }} />
                    </div>
                    <h4 className="mb-1">Create Account</h4>
                    <p className="text-muted">Get started with VP Admin</p>
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
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        disabled={isLoading || authLoading}
                        autoComplete="new-password"
                      />
                      {errors.password && (
                        <div className="invalid-feedback d-block">{errors.password}</div>
                      )}
                      <small className="text-muted">Must be at least 6 characters</small>
                    </FormGroup>

                    <FormGroup className="mb-4">
                      <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                      <FormControl
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                        disabled={isLoading || authLoading}
                        autoComplete="new-password"
                      />
                      {errors.confirmPassword && (
                        <div className="invalid-feedback d-block">{errors.confirmPassword}</div>
                      )}
                    </FormGroup>

                    <Button
                      type="submit"
                      className="w-100 btn-primary mb-3"
                      disabled={isLoading || authLoading}
                    >
                      {isLoading || authLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Creating account...
                        </>
                      ) : (
                        <>
                          <IconifyIcon icon="solar:user-plus-rounded-outline" className="me-2" />
                          Create Account
                        </>
                      )}
                    </Button>

                    <div className="text-center">
                      <p className="text-muted mb-0">
                        Already have an account?{' '}
                        <Link to="/auth/login" className="text-primary fw-medium">
                          Sign In
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

export default Register
