import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { LayoutState, LayoutType, MenuType, OffcanvasControlType, LayoutOffcanvasStatesType, ThemeType } from '@/types/layout-context'
import { toggleDocumentAttribute } from '@/utils/layout'
import useQueryParams from '@/hooks/useQueryParams'
import useLocalStorage from '@/hooks/useLocalStorage'

const ThemeContext = createContext<LayoutType | undefined>(undefined)

export const useLayoutContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useLayoutContext can only be used within LayoutProvider')
  }
  return context
}

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const queryParams = useQueryParams()

  const override = !!(queryParams.layout_theme || queryParams.topbar_theme || queryParams.menu_theme || queryParams.menu_size)

  const INIT_STATE: LayoutState = {
    theme: queryParams['layout_theme'] ? (queryParams['layout_theme'] as ThemeType) : 'dark',
    topbarTheme: queryParams['topbar_theme'] ? (queryParams['topbar_theme'] as ThemeType) : 'dark',
    menu: {
      theme: queryParams['menu_theme'] ? (queryParams['menu_theme'] as MenuType['theme']) : 'dark',
      size: queryParams['menu_size'] ? (queryParams['menu_size'] as MenuType['size']) : 'default',
    },
  }

  const [settings, setSettings] = useLocalStorage<LayoutState>('__VP_ADMIN_CONFIG__', INIT_STATE, override)
  const [offcanvasStates, setOffcanvasStates] = useState<LayoutOffcanvasStatesType>({
    showThemeCustomizer: false,
    showActivityStream: false,
    showBackdrop: false,
  })

  const updateSettings = (_newSettings: Partial<LayoutState>) => setSettings({ ...settings, ..._newSettings })

  const changeTheme = (newTheme: ThemeType) => {
    updateSettings({ theme: newTheme })
  }

  const changeTopbarTheme = (newTheme: ThemeType) => {
    updateSettings({ topbarTheme: newTheme })
  }

  const changeMenuTheme = (newTheme: MenuType['theme']) => {
    updateSettings({ menu: { ...settings.menu, theme: newTheme } })
  }

  const changeMenuSize = (newSize: MenuType['size']) => {
    updateSettings({ menu: { ...settings.menu, size: newSize } })
  }

  const toggleThemeCustomizer: OffcanvasControlType['toggle'] = () => {
    setOffcanvasStates({ ...offcanvasStates, showThemeCustomizer: !offcanvasStates.showThemeCustomizer })
  }

  const toggleActivityStream: OffcanvasControlType['toggle'] = () => {
    setOffcanvasStates({ ...offcanvasStates, showActivityStream: !offcanvasStates.showActivityStream })
  }

  const themeCustomizer: LayoutType['themeCustomizer'] = {
    open: offcanvasStates.showThemeCustomizer,
    toggle: toggleThemeCustomizer,
  }

  const activityStream: LayoutType['activityStream'] = {
    open: offcanvasStates.showActivityStream,
    toggle: toggleActivityStream,
  }

  const toggleBackdrop = useCallback(() => {
    const htmlTag = document.getElementsByTagName('html')[0]
    if (offcanvasStates.showBackdrop) htmlTag.classList.remove('sidebar-enable')
    else htmlTag.classList.add('sidebar-enable')
    setOffcanvasStates({ ...offcanvasStates, showBackdrop: !offcanvasStates.showBackdrop })
  }, [offcanvasStates.showBackdrop])

  useEffect(() => {
    toggleDocumentAttribute('data-bs-theme', settings.theme)
    toggleDocumentAttribute('data-topbar-color', settings.topbarTheme)
    toggleDocumentAttribute('data-sidebar-color', settings.menu.theme)
    toggleDocumentAttribute('data-sidebar-size', settings.menu.size)
    return () => {
      toggleDocumentAttribute('data-bs-theme', settings.theme, true)
      toggleDocumentAttribute('data-topbar-color', settings.topbarTheme, true)
      toggleDocumentAttribute('data-sidebar-color', settings.menu.theme, true)
      toggleDocumentAttribute('data-sidebar-size', settings.menu.size, true)
    }
  }, [settings])

  const resetSettings = () => updateSettings(INIT_STATE)

  return (
    <ThemeContext.Provider
      value={useMemo(
        () => ({
          ...settings,
          themeMode: settings.theme,
          changeTheme,
          changeTopbarTheme,
          changeMenu: {
            theme: changeMenuTheme,
            size: changeMenuSize,
          },
          themeCustomizer,
          activityStream,
          toggleBackdrop,
          resetSettings,
        }),
        [settings, offcanvasStates]
      )}
    >
      {children}
      {offcanvasStates.showBackdrop && <div className="offcanvas-backdrop fade show" onClick={toggleBackdrop} />}
    </ThemeContext.Provider>
  )
}
