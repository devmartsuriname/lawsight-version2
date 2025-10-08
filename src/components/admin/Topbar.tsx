import LeftSideBarToggle from './topbar/LeftSideBarToggle'
import ProfileDropdown from './topbar/ProfileDropdown'
import ThemeModeToggle from './topbar/ThemeModeToggle'
import Notifications from './topbar/Notifications'
import { Container } from 'react-bootstrap'
import IconifyIcon from './wrappers/IconifyIcon'

const Topbar = () => {
  return (
    <header className="app-topbar">
      <div>
        <Container fluid>
          <div className="navbar-header">
            <div className="d-flex align-items-center gap-2">
              <LeftSideBarToggle />
              <form className="app-search d-none d-md-block me-auto">
                <div className="position-relative">
                  <input 
                    type="search" 
                    className="form-control" 
                    placeholder="Search..." 
                    autoComplete="off" 
                  />
                  <IconifyIcon icon="solar:magnifer-outline" className="search-widget-icon" />
                </div>
              </form>
            </div>
            <div className="d-flex align-items-center gap-2">
              <ThemeModeToggle />
              <Notifications />
              <ProfileDropdown />
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Topbar
