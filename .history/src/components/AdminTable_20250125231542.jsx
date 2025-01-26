import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";

const AdminTable = ({ filteredReservations }) => {
  const handleAction = (id, action) => {
    console.log(`Reservation ID: ${id} - Action: ${action}`);
  };

  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    ID
                  </TableHead>
                  <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    User
                  </TableHead>
                  <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Hotel
                  </TableHead>
                  <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Check-in
                  </TableHead>
                  <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Check-out
                  </TableHead>
                  <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </TableHead>

                  <TableHead className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReservations?.map((reservation) => (
                  <TableRow key={reservation?.id}>
                    <TableCell className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {reservation?.id}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {reservation?.UserName}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {reservation?.hotel}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {new Date(reservation?.checkIn).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {new Date(reservation?.checkOut).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <Badge
                        variant={
                          reservation?.status === true
                            ? "success"
                            : reservation?.status === false
                            ? "danger"
                            : "destructive"
                        }
                      >
                        {reservation?.status === true ? "Approved" : "Pending"}
                      </Badge>
                    </TableCell>
                    <TableCell className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      { !reservation?.status   && (
                        <>
                          <Button
                            onClick={() =>
                              handleAction(reservation?.id, "approve")
                            }
                            variant="outline"
                            size="sm"
                            className="mr-2"
                          >
                            Approve
                          </Button>
                          <Button
                            onClick={() =>
                              handleAction(reservation?.id, "cancel")
                            }
                            variant="destructive"
                            size="sm"
                          >
                            Cancel
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
