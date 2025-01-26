"use client"


import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "../contexts/AuthContext"
import { CalendarDays, Home, Users, LogOut, BarChart3, Settings, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = {
  main: [
    { name: "Dashboard", href: "/user", icon: Home },
    { name: "Reservations", href: "/user/reservations", icon: CalendarDays },
  ],
  admin: [
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "All Reservations", href: "/admin/reservations", icon: CalendarDays },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Hotels", href: "/admin/hotels", icon: Building2 },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ],
}

export default function Sidebar() {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const isAdmin = user?.role === "admin"

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 border-r border-gray-200">
        <div className="flex h-16 shrink-0 items-center">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=40E0D0" alt="Your Company" />
          <span className="ml-4 text-xl font-semibold text-gray-900">UniqueStay</span>
        </div>

        <nav className="flex flex-1 flex-col">
          <div className="space-y-1">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  pathname === item.href ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50",
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5",
                    pathname === item.href ? "text-white" : "text-gray-400 group-hover:text-gray-500",
                  )}
                />
                {item.name}
              </Link>
            ))}
          </div>

          {isAdmin && (
            <>
              <div className="mt-8">
                <h3 className="px-3 text-sm font-medium text-gray-500">Admin</h3>
                <div className="mt-2 space-y-1">
                  {navigation.admin.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        pathname === item.href ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50",
                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      )}
                    >
                      <item.icon
                        className={cn(
                          "mr-3 h-5 w-5",
                          pathname === item.href ? "text-white" : "text-gray-400 group-hover:text-gray-500",
                        )}
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </nav>
        <div className="">
          <ThemeControl />
        </div>
        <div className="mt-auto border-t border-gray-200 pt-4">
          <div className="flex items-center gap-3 px-3 py-2 text-sm">
            <div className="relative h-8 w-8">
              <span className="absolute inset-0 rounded-full bg-primary/10" />
              <span className="absolute inset-0 rounded-full flex items-center justify-center text-primary font-medium">
                {user?.name?.[0] || user?.role?.[0]?.toUpperCase()}
              </span>
            </div>
            <div>
              <p className="font-medium text-gray-700">{user?.name || user?.role}</p>
              <p className="text-xs text-gray-500">{user?.email || `${user?.role}@example.com`}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="mt-2 w-full group flex items-center gap-x-3 rounded-md p-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <LogOut className="h-5 w-5 text-gray-400 group-hover:text-gray-500" />
            Sign out
          </button>
        </div>
      </div>
    </div>
  )
}

