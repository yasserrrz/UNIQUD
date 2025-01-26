import AdminFilteredForm from "@/components/AdminFilteredForm";
import AdminTable from "@/components/AdminTable"


export default async  function AdminPage(props) {
    const searchParams = await props.searchParams;
    console
   const users = await fetch( , { cache: 'no-store' }).then((res) => res.json());
   console.log(users)
   console.log(searchParams)

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-sm text-gray-700">Manage all reservations across the system.</p>
        </div>
      </div>
      <AdminFilteredForm filters={users} />
      <AdminTable filteredReservations={users} />
    </div>
  )
}

