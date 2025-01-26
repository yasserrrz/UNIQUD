"use client"

import * as React from "react"
import { Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
       <div className="flex items-center space-x-2 p-2 rounded-full border border-gray-300 dark:border-gray-700">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme("light")}
        className="flex-1"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Light theme</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme("dark")}
        className="flex-1"
      >
        <Moon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Dark theme</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme("system")}
        className="flex-1"
      >
        <SystemIcon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">System theme</span>
      </Button>
    </div>
  )
}
