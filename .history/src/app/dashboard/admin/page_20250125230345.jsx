import AdminTable from "@/components/AdminTable"


export default async  function AdminPage() {
   const users = await fetch('https://6793f4cd5eae7e5c4d9064e3.mockapi.io/reservation/api/users' , { cache: 'no-store' }).then((res) => res.json());
   console.log(users)
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-sm text-gray-700">Manage all reservations across the system.</p>
        </div>
      </div>
      <AdminTable filteredReservations={users} />
    </div>
  )
}

