import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "./contexts/AuthContext"
import Sidebar from "./components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Reservation Management System",
  description: "Manage hotel reservations",
}

export default function DashboardLayout({ children }) {
 
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={`${inter.className} h-full`}>
        <AuthProvider>
          <div className="min-h-full">
            <Sidebar />
            <main className="lg:pl-72">
              <div className="px-4 py-10 sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}