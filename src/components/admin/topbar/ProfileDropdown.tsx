import IconifyIcon from '@/components/admin/wrappers/IconifyIcon'
import { useAuth } from '@/contexts/AuthContext'
import { Dropdown, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProfileDropdown = () => {
  const { logout, user } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <Dropdown className="topbar-item">
      <DropdownToggle
        type="button"
        className="topbar-button content-none"
        id="page-header-user-dropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="d-flex align-items-center">
          <div className="rounded-circle bg-vp-gold/20 p-2">
            <IconifyIcon icon="solar:user-outline" className="fs-18 text-vp-gold" />
          </div>
        </span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-end">
        <DropdownHeader>Welcome{user?.email ? `, ${user.email.split('@')[0]}` : ''}!</DropdownHeader>
        <DropdownItem as={Link} to="/admin/profile">
          <IconifyIcon icon="solar:user-outline" className="align-middle me-2 fs-18" />
          <span className="align-middle">My Account</span>
        </DropdownItem>
        <DropdownItem as={Link} to="/admin/settings">
          <IconifyIcon icon="solar:settings-outline" className="align-middle me-2 fs-18" />
          <span className="align-middle">Settings</span>
        </DropdownItem>
        <div className="dropdown-divider my-1" />
        <DropdownItem className="text-danger" onClick={handleLogout}>
          <IconifyIcon icon="solar:logout-3-outline" className="align-middle me-2 fs-18" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ProfileDropdown
