// Temporary mock auth hook for Phase 3
// Will be replaced with real Supabase authentication in Phase 4

import { useState } from 'react'

type User = {
  id: string
  email: string
  name: string
  avatar?: string
}

export const useAuth = () => {
  // Mock user for development
  const [user] = useState<User | null>({
    id: '1',
    email: 'admin@vpengineering.com',
    name: 'VP Admin',
    avatar: undefined
  })

  const logout = () => {
    console.log('Logout clicked - will be implemented in Phase 4')
    // Actual logout logic will be added in Phase 4
  }

  return {
    user,
    logout,
    isAuthenticated: !!user
  }
}
