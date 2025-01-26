import React from 'react'

export default async function UserPage() {
    
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

export default UserPage