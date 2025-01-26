import AdminFilteredForm from "@/components/AdminFilteredForm";
import AdminTable from "@/components/AdminTable";

export default async function AdminPage(props) {
  const searchParams = await props.searchParams;
  const url = new URL(
    `https://6793f4cd5eae7e5c4d9064e3.mockapi.io/reservation/api/users`
  );
//   the filteration and search is not working  in this mock api
//   if (searchParams.status) {
//     url.searchParams.append("status", searchParams.status);
//   }
//   if (searchParams.user) {
//     url.searchParams.append("user", searchParams.user);
//   }
//   if (searchParams.hotel) {
//     url.searchParams.append("hotel", searchParams.hotel);
//   }

  const users = await fetch(url, { cache: "no-store" }).then((res) =>
    res.json()
  );
 

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage all reservations across the system.
          </p>
        </div>
      </div>
      <AdminFilteredForm filters={users} />
      <AdminTable filteredReservations={users} />
    </div>
  );
}
