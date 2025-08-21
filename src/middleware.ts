import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

 
    if (pathname.startsWith("/admin") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/not-found", req.url));
    }

      if (pathname.startsWith("/api") && token?.role !== "admin") {
      return NextResponse.redirect(new URL("/not-found", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, 
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/api/:path*", "/profile"],
};
