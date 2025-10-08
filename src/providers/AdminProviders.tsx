import { ReactNode } from 'react'
import { LayoutProvider } from '@/contexts/LayoutContext'

type AdminProvidersProps = {
  children: ReactNode
}

/**
 * AdminProviders - Wrapper for all admin-specific context providers
 * 
 * This component combines all providers needed for the admin area:
 * - LayoutProvider: Manages sidebar, theme, and layout state
 * 
 * Future providers to add here:
 * - NotificationProvider: Real-time notifications
 * - AdminSettingsProvider: Admin-specific settings
 * - WebSocketProvider: Real-time data updates
 */
const AdminProviders = ({ children }: AdminProvidersProps) => {
  return (
    <LayoutProvider>
      {children}
    </LayoutProvider>
  )
}

export default AdminProviders
