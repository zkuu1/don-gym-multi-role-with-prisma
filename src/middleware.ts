// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    // Jika akses /admin → cek apakah role admin
    if (pathname.startsWith("/admin")) {
      if (!token || token.role !== "admin") {
        return NextResponse.redirect(new URL("/not-found", req.url));
      }
    }

    // Jika akses /api → boleh kalau ada login
    if (pathname.startsWith("/api")) {
      if (!token) {
        return NextResponse.redirect(new URL("/not-found", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      // Supaya NextAuth tidak redirect otomatis ke /api/auth/signin
      authorized: () => true,
    },
  }
);

// Tentukan route yang kena middleware
export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};
