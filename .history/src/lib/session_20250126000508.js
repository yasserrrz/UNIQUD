'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// Define user roles
export type UserRole = 'admin' | 'user' | 'guest'

// Session interface
export interface Session {
  userId: string
  role: UserRole
}

// Decrypt and verify session
export async function getSession(): Promise<Session | null> {
  const cookieStore = cookies()
  const sessionCookie = cookieStore.get('session')?.value

  if (!sessionCookie) {
    return null
  }

  try {
    // In a real app, you'd decrypt and verify the session token
    // This is a simplified example
    const session = JSON.parse(sessionCookie) as Session
    return session
  } catch {
    return null
  }
}

// Verify user role and redirect if unauthorized
export async function protectRoute(allowedRoles: UserRole[]) {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  if (!allowedRoles.includes(session.role)) {
    redirect('/unauthorized')
  }

  return session
}