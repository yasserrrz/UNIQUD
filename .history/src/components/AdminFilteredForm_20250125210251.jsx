import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'

const AdminFilteredForm = ({filters}) => {
    const handleFilterChange = (e) => {
        const { name, value } = e.target    
        
  return (
    <>
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
    </>
  )
}

export default AdminFilteredForm