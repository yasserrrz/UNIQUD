export function middleware(request) {
    const authToken = request.cookies.get("authToken")?.value;
    const userRole = request.cookies.get("userRole")?.value;
  
    console.log("Middleware triggered - Path:", request.nextUrl.pathname);
    console.log("authToken:", authToken);
    console.log("userRole:", userRole);
  
    if (!authToken) {
      console.log("Redirecting to login...");
      return NextResponse.redirect(new URL("/", request.url));
    }
  
    if (request.nextUrl.pathname.startsWith("/dashboard/admin") && userRole !== "admin") {
      console.log("Redirecting to /dashboard/user");
      return NextResponse.redirect(new URL("/dashboard/user", request.url));
    }
  
    if (request.nextUrl.pathname.startsWith("/dashboard/user") && userRole !== "user") {
      console.log("Redirecting to /dashboard/admin");
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    }
  
    console.log("Proceeding to requested page...");
    return NextResponse.next();
  }
  