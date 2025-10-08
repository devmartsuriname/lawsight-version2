import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/integrations/supabase/client'
import { toast } from 'react-toastify'
import { setCookie, deleteCookie } from 'cookies-next'

type AuthContextType = {
  user: User | null
  session: Session | null
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (email: string, password: string, rememberMe?: boolean) => Promise<{ error: any }>
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const saveSession = (session: Session | null) => {
    if (session) {
      setCookie('vp-session', JSON.stringify(session), {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        sameSite: 'lax',
        secure: true
      })
    }
  }

  const removeSession = () => {
    deleteCookie('vp-session')
  }

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session)
        setUser(session?.user ?? null)
        
        // Handle session changes
        if (session) {
          saveSession(session)
        } else {
          removeSession()
        }
        
        setIsLoading(false)
      }
    )

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string, rememberMe = false) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        toast.error(error.message)
        return { error }
      }

      if (data.session) {
        if (rememberMe) {
          saveSession(data.session)
        }
        toast.success('Welcome back!')
      }

      return { error: null }
    } catch (error: any) {
      toast.error('An unexpected error occurred')
      return { error }
    }
  }

  const signUp = async (email: string, password: string) => {
    try {
      const redirectUrl = `${window.location.origin}/`
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl
        }
      })

      if (error) {
        if (error.message.includes('already registered')) {
          toast.error('This email is already registered. Please sign in instead.')
        } else {
          toast.error(error.message)
        }
        return { error }
      }

      if (data.user) {
        toast.success('Account created! Please check your email to verify your account.')
      }

      return { error: null }
    } catch (error: any) {
      toast.error('An unexpected error occurred')
      return { error }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        toast.error(error.message)
      } else {
        removeSession()
        toast.success('Logged out successfully')
      }
    } catch (error) {
      toast.error('An error occurred while logging out')
    }
  }

  const logout = signOut

  const value = {
    user,
    session,
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signUp,
    signOut,
    logout
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
