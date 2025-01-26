
import Sidebar from '@/components/SIdebar'


export const metadata = {
  title: "Reservation Management System",
  description: "Manage hotel reservations",
}

export default function DashboardLayout({ children }) {
 
  return (
    <div className="h-full bg-gray-100">
      
      

          <div className="flex flex-col h-full">
            <Navbar onToggleSidebar={toggleSidebar} />
            <div className="flex flex-1 overflow-hidden">
             
            <Sidebar />
            <div className="lg:pl-72">
              <div className="px-4 py-10 sm:px-6 lg:px-8">{children}</div>
            </div>
          </div>
       
    </div>
  )
}