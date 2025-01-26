"use client"

import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { useAuth } from "../contexts/AuthContext"
import Logo from "@/assets/unnamed.png"



export default function Navbar({ onToggleSidebar }) {
  const { user } = useAuth()

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Button
                variant="ghost"
                className="lg:hidden"
                onClick={onToggleSidebar}
              >
                <Menu size={24} />
              </Button>
              <img
                className="h-8 w-auto"
                src={Logo.src}
                alt="UniqueStay"
              />
              
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-sm font-medium text-gray-700">
                Welcome, {user?.name || user?.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
