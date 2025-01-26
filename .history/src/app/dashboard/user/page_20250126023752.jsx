import UserTable from "@/components/UserTable";


export default async function UserPage() {
    const url = `https://6793f4cd5eae7e5c4d9064e3.mockapi.io/reservation/api/reservation`;
    const userReservation = await fetch(url , {cache: "no-store"}).then((res) => res.json());
    const userData = await fetch(`https://6793f4cd5eae7e5c4d9064e3.mockapi.io/reservation/api/users/1`).then((res) => res.json());
  return (
    <div className="space-y-6">
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-3xl font-semibold text-gray-900">
          Hello {userData?.name}
        </h1>
        <p className="mt-2 text-sm text-gray-700">
            Welcome to your dashboard.
        </p>
      </div>
    </div>
    <UserTable reservations={userReservation} onCancel={() => {}} />
   
  </div>
  )
}
