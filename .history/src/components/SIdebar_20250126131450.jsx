"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "../contexts/AuthContext"
import { CalendarDays, Home, Users, LogOut, BarChart3, Settings, Building2, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Logo from "@/assets/unnamed.png"


const navigation = {
  user: [
    { name: "Dashboard", href: "/dashboard/user", icon: Home },
   
  ],
  admin: [
    { name: "Dashboard", href: "/dashboard/admin", icon: BarChart3 },
    
  ],
}

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const isAdmin = user?.role === "admin"
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [isOpen, onClose])

  return (
    <>
  
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

     
      <div
        ref={sidebarRef}
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 border-b">
            <img className="h-8 w-auto" src={Logo.src} alt="UniqueStay" />
            <span className="ml-2 text-xl font-semibold text-gray-900">UniqueStay</span>
          </div>

          <nav className="flex-1 px-4 py-4 overflow-y-auto">
       

            {isAdmin ? (
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
            ): <>
              <div className="mt-8">
                <h3 className="px-3 text-sm font-medium text-gray-500">User</h3>
                <div className="mt-2 space-y-1">
                  {navigation?.user?.map((item) => (
                    <Link
                      key={item?.name}
                      href={item?.href}
                      className={cn(
                        pathname === item?.href ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50",
                        "group flex item?s-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      )}
                    >
                      <item.icon
                        className={cn(
                          "mr-3 h-5 w-5",
                          pathname === item?.href ? "text-white" : "text-gray-400 group-hover:text-gray-500",
                        )}
                      />
                      {item?.name}
                    </Link>
                  ))}
                </div>
              </div>
            </>}
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

