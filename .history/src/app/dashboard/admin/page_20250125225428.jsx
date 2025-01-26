

export default async  function AdminPage() {
   const users = await fetch('/api/users')
  return (
    <div>AdminPage</div>
  )
}

