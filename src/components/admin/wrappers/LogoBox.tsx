import { Link } from 'react-router-dom'

const LogoBox = () => {
  return (
    <div className="logo-box">
      <Link to="/admin/dashboard" className="logo-link">
        {/* Logo Light (for dark mode) */}
        <img 
          src="/logo-light.svg" 
          alt="VP Admin" 
          className="logo-lg logo-light" 
          style={{ height: 'var(--bs-logo-lg-height)' }}
        />
        {/* Logo Dark (for light mode) */}
        <img 
          src="/logo-dark.svg" 
          alt="VP Admin" 
          className="logo-lg logo-dark" 
          style={{ height: 'var(--bs-logo-lg-height)' }}
        />
        {/* Small Logo */}
        <img 
          src="/logo-sm.svg" 
          alt="VP" 
          className="logo-sm" 
          style={{ height: 'var(--bs-logo-sm-height)' }}
        />
      </Link>
    </div>
  )
}

export default LogoBox
