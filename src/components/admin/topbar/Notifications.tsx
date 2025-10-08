import IconifyIcon from '@/components/admin/wrappers/IconifyIcon'
import SimplebarReactClient from '@/components/admin/wrappers/SimplebarReactClient'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type NotificationType = {
  from: string
  content: string
  icon?: string
}

const NotificationItem = ({ from, content, icon }: NotificationType) => {
  return (
    <DropdownItem className="py-3 border-bottom text-wrap">
      <div className="d-flex">
        <div className="flex-shrink-0">
          {icon ? (
            <img src={icon} className="img-fluid me-2 avatar-sm rounded-circle" alt="avatar" />
          ) : (
            <div className="avatar-sm me-2">
              <span className="avatar-title bg-soft-info text-info fs-20 rounded-circle">
                {from.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
        <div className="flex-grow-1">
          <span className="mb-0 fw-semibold">{from}</span>
          <span className="mb-0 text-wrap">{content}</span>
        </div>
      </div>
    </DropdownItem>
  )
}

const Notifications = () => {
  const notificationList: NotificationType[] = []

  return (
    <Dropdown className="topbar-item">
      <DropdownToggle
        as={'a'}
        type="button"
        className="topbar-button position-relative content-none"
        id="page-header-notifications-dropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <IconifyIcon icon="solar:bell-bing-outline" className="fs-22 align-middle" />
        {notificationList.length > 0 && (
          <span className="position-absolute topbar-badge fs-10 translate-middle badge bg-danger rounded-pill">
            {notificationList.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        )}
      </DropdownToggle>
      <DropdownMenu className="py-0 dropdown-lg dropdown-menu-end" aria-labelledby="page-header-notifications-dropdown">
        <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
          <Row className="align-items-center">
            <Col>
              <h6 className="m-0 fs-16 fw-semibold">Notifications ({notificationList.length})</h6>
            </Col>
            <Col xs={'auto'}>
              <Link to="" className="text-theme-dark text-decoration-underline">
                <small>Clear All</small>
              </Link>
            </Col>
          </Row>
        </div>
        {notificationList.length > 0 ? (
          <SimplebarReactClient style={{ maxHeight: 280 }}>
            {notificationList.map((notification, idx) => (
              <NotificationItem key={idx} {...notification} />
            ))}
          </SimplebarReactClient>
        ) : (
          <div className="text-center py-4">
            <p className="text-theme-muted">No notifications</p>
          </div>
        )}
        {notificationList.length > 0 && (
          <div className="text-center py-3">
            <Link to="" className="btn btn-primary btn-sm">
              View All Notifications <IconifyIcon icon="bx:right-arrow-alt" className="ms-1" />
            </Link>
          </div>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}

export default Notifications
