"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "@/hooks/use-toast";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const authToken = Cookies.get("authToken");
    const userRole = Cookies.get("userRole");
    if (authToken && userRole) {
      setUser({ role: userRole });
    }
  }, []);

  const login = (username, password) => {
    if (username === "user" && password === "password") {
      setUser({ role: "user" });
      Cookies.set("authToken", "user-token", { expires: 1 });
      Cookies.set("userRole", "user", { expires: 1 });
      router.push("/dashboard/user");
    } else if (username === "admin" && password === "admin") {
      setUser({ role: "admin" });
      Cookies.set("authToken", "admin-token", { expires: 1 });
      Cookies.set("userRole", "admin", { expires: 1 });
      router.push("/dashboard/admin");
    }else{
      toast({
        title: "Error",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("authToken");
    Cookies.remove("userRole");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
