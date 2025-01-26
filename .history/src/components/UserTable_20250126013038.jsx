import { Table } from "lucide-react";
import { TableHeader, TableRow } from "./ui/table";

export default function UserTable({ reservations, onCancel }) {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-xl font-semibold text-gray-900">Your Reservations</h2>
              <p className="mt-2 text-sm text-gray-700">
                A list of all your reservations including their status and details.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                          Hotel
                        </TableHead>
                        <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Check-in
                        </TableHead>
                        <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Check-out
                        </TableHead>
                        <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</TableHead>
                        <TableHead className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reservations.map((reservation) => (
                        <TableRow key={reservation.id}>
                          <TableCell className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {reservation.hotel}
                          </TableCell>
                          <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {reservation.checkIn}
                          </TableCell>
                          <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {reservation.checkOut}
                          </TableCell>
                          <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <Badge variant={reservation.status === "Pending" ? "default" : "secondary"}>
                              {reservation.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            {reservation.status === "Pending" && (
                              <Button onClick={() => onCancel(reservation.id)} variant="destructive" size="sm">
                                Cancel
                              </Button>
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
        </div>
      )
}