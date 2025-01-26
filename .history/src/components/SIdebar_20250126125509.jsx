"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "../contexts/AuthContext"
import { CalendarDays, Home, Users, LogOut, BarChart3, Settings, Building2, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = {
  main: [
    { name: "Dashboard", href: "dashboard/user", icon: Home },
    { name: "Logout", href: "/logout", icon: LogOut },
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <>
      {/* Mobile toggle button */}
      <Button variant="ghost" className="fixed top-4 right-2 z-50 lg:hidden" onClick={toggleSidebar}>
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 border-b">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=40E0D0" alt="UniqueStay" />
            <span className="ml-2 text-xl font-semibold text-gray-900">UniqueStay</span>
          </div>

          <nav className="flex-1 px-4 py-4 overflow-y-auto">
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
            )}
          </nav>

          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
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
              className="mt-4 w-full group flex items-center gap-x-3 rounded-md p-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <LogOut className="h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

