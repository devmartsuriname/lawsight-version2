import IconifyIcon from '@/components/admin/wrappers/IconifyIcon'
import { useLayoutContext } from '@/contexts/LayoutContext'

const ThemeModeToggle = () => {
  const { theme, changeTheme } = useLayoutContext()
  const isDark = theme === 'dark'
  
  return (
    <div className="topbar-item">
      <button 
        type="button" 
        onClick={() => changeTheme(isDark ? 'light' : 'dark')} 
        className="topbar-button" 
        id="light-dark-mode"
      >
        {theme === 'dark' ? (
          <IconifyIcon icon="ri:sun-line" className="fs-22 dark-mode" />
        ) : (
          <IconifyIcon icon="ri:moon-line" className="fs-22 light-mode" />
        )}
      </button>
    </div>
  )
}

export default ThemeModeToggle
