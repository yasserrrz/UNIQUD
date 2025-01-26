'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// // Define user roles
// export type UserRole = 'admin' | 'user' | 'guest'

// // Session interface
// export interface Session {
//   userId: string
//   role: UserRole
// }

// Decrypt and verify session
export async function getSession() {
  const cookieStore = cookies()
  const sessionCookie = cookieStore.get('session')?.value

  if (!sessionCookie) {
    return null
  }

  try {
    const session = JSON.parse(sessionCookie)
    return session
  } catch {
    return null
  }
}

// Verify user role and redirect if unauthorized
export async function protectRoute(allowedRoles) {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  if (!allowedRoles.includes(session.role)) {
    redirect('/unauthorized')
  }

  return session
}