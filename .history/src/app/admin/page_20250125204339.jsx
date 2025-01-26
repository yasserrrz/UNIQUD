"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default  function AdminDashboard() {
  const { user } = useAuth()
  const [reservations, setReservations] = useState([])
  const [filters, setFilters] = useState({
    status: "",
    dateRange: "",
    hotel: "",
    user: "",
  })

  useEffect(() => {
    fetchReservations()
  }, [])

  const fetchReservations = async () => {
   
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })
  }

  const filteredReservations = reservations.filter(
    (res) =>
      (filters.status === "" || res.status === filters.status) &&
      (filters.hotel === "" || res.hotel.toLowerCase().includes(filters.hotel.toLowerCase())) &&
      (filters.user === "" || res.user.toLowerCase().includes(filters.user.toLowerCase())),
  )

  const handleAction = (id, action) => {
    setReservations(
      reservations.map((res) =>
        res.id === id ? { ...res, status: action === "approve" ? "Approved" : "Cancelled" } : res,
      ),
    )
  }

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-sm text-gray-700">Manage all reservations across the system.</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div>
          <Label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </Label>
          <Input
            type="text"
            name="status"
            id="status"
            value={filters.status}
            onChange={handleFilterChange}
            placeholder="Filter by status"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <Label htmlFor="hotel" className="block text-sm font-medium text-gray-700">
            Hotel
          </Label>
          <Input
            type="text"
            name="hotel"
            id="hotel"
            value={filters.hotel}
            onChange={handleFilterChange}
            placeholder="Filter by hotel"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <Label htmlFor="user" className="block text-sm font-medium text-gray-700">
            User
          </Label>
          <Input
            type="text"
            name="user"
            id="user"
            value={filters.user}
            onChange={handleFilterChange}
            placeholder="Filter by user"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
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
                      ID
                    </TableHead>
                    <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">User</TableHead>
                    <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Hotel</TableHead>
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
                  {filteredReservations.map((reservation) => (
                    <TableRow key={reservation.id}>
                      <TableCell className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {reservation.id}
                      </TableCell>
                      <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {reservation.user}
                      </TableCell>
                      <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {reservation.hotel}
                      </TableCell>
                      <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {reservation.checkIn}
                      </TableCell>
                      <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {reservation.checkOut}
                      </TableCell>
                      <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Badge
                          variant={
                            reservation.status === "Pending"
                              ? "default"
                              : reservation.status === "Approved"
                                ? "success"
                                : "destructive"
                          }
                        >
                          {reservation.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        {reservation.status === "Pending" && (
                          <>
                            <Button
                              onClick={() => handleAction(reservation.id, "approve")}
                              variant="outline"
                              size="sm"
                              className="mr-2"
                            >
                              Approve
                            </Button>
                            <Button
                              onClick={() => handleAction(reservation.id, "cancel")}
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
    </div>
  )
}

