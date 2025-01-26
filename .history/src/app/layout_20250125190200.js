
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "./contexts/AuthContext"
import Sidebar from "./components/Sidebar"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Reservation Management System",
  description: "Manage hotel reservations",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className={`${inter.className} h-full`}>
        <AuthProvider>
          <LayoutContent>{children}</LayoutContent>
        </AuthProvider>
      </body>
    </html>
  )
}

function LayoutContent({ children }) {
  const pathname = usePathname()
  const showSidebar = pathname.startsWith("/user") || pathname.startsWith("/admin")

  return (
    <div className="min-h-full">
      {showSidebar && <Sidebar />}
      <main className={showSidebar ? "lg:pl-72" : ""}>
        <div className="px-4 py-10 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  )
}

