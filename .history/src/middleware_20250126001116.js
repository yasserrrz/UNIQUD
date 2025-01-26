import { NextResponse } from "next/server"

export function middleware(request) {
  const authToken = request.cookies.get("authToken")?.value
  const userRole = request.cookies.get("userRole")?.value

  if (!authToken) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (request.nextUrl.pathname.startsWith("dashboard/admin") && userRole !== "admin") {
    return NextResponse.redirect(new URL("d/user", request.url))
  }

  if (request.nextUrl.pathname.startsWith("/user") && userRole !== "user") {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/admin/:path*", "/dashboard/user/:path*"],
}

