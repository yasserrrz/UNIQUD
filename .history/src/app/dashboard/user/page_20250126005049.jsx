

export default async function UserPage() {
    const url = `https://6793f4cd5eae7e5c4d9064e3.mockapi.io/reservation/api/users/5/reservation`
    const userReservation = await fetch(url , {cache: "no-store"}).then((res) => res.json())
  return (
    <div className="space-y-6">
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-3xl font-semibold text-gray-900">
          User Dashboard
        </h1>
        <p className="mt-2 text-sm text-gray-700">
            Manage all reservations across the system.
        </p>
      </div>
    </div>
    {/* <FilteredForm filters={users} /> */}
   
  </div>
  )
}
