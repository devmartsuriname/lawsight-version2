import { ADMIN_MENU_ITEMS } from '@/config/admin-menu'
import SimplebarReactClient from './wrappers/SimplebarReactClient'
import LogoBox from './wrappers/LogoBox'
import SidebarMenu from './sidebar/SidebarMenu'

const Sidebar = () => {
  const menuItems = ADMIN_MENU_ITEMS

  return (
    <div className="app-sidebar">
      <LogoBox />
      <SimplebarReactClient className="scrollbar" data-simplebar>
        <SidebarMenu menuItems={menuItems} />
      </SimplebarReactClient>
    </div>
  )
}

export default Sidebar
