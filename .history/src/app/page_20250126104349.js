import LoginForm from "./components/LoginForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=40E0D0"
                alt="Your Company"
              />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Welcome to UniqueStay</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Sign in to manage your hotel reservations</p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white/60 backdrop-blur-sm py-8 px-4 shadow-xl ring-1 ring-gray-900/10 sm:rounded-lg sm:px-10">
            <LoginForm />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Need help? Contact our support team at{" "}
            <a href="mailto:support@uniquestay.com" className="font-medium text-primary hover:text-primary/90">
              support@uniquestay.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

