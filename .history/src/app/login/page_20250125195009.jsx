"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
 const login = () => {}

  const handleSubmit = (e) => {
    e.preventDefault()
    login(username, password)
  }

  return (
   
  )
}

