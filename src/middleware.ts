// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    // Cek akses ke halaman /admin dan /api
    if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
      // Belum login atau bukan admin
      if (!token || token.role !== "admin") {
        return NextResponse.redirect(new URL("/not-found", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      // Selalu true → biar NextAuth gak redirect otomatis ke /auth/signin
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};
