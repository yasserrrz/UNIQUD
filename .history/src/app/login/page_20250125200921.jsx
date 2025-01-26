"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Logo from "@/assets/unnamed.png"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
 const login = () => {}

  const handleSubmit = (e) => {
    e.preventDefault()
    login(username, password)
  }

  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto  w-auto"
          src={Logo.src}
          alt="Your Company"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </Label>
        <div className="mt-1">
          <Input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#104B99] focus:outline-none focus:ring-[#104B99] sm:text-sm"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </Label>
        <div className="mt-1">
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#104B99] focus:outline-none focus:ring-[#104B99] sm:text-sm"
          />
        </div>
      </div>

      <div>
        <Button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-[#104B99] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#1d3d66] focus:outline-none focus:ring-2 focus:ring-[#104B99] focus:ring-offset-2"
        >
          Sign in
        </Button>
      </div>
    </form>
        </div>
      </div>
    </div>
  )
}

