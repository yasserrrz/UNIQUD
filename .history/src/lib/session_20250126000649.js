'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

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