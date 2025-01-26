import Link from "next/link";


export default function Home() {
 return(
  <>
   <div className="flex flex-col items-center justify-center h-screen"> 
    <h1 className="text-4xl font-bold">
       Hello 
    </h1>
    <p className="text-lg">Welcome To Reservations Management System</p>  
     <Link href="/login">
      <button className="bg-[#000] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Login
      </button>
     </Link>
    </div>
  </>
 )
}
