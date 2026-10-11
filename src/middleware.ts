import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, COOKIE_NAME } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Bypass static assets and public system paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/vendor") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/track")
  ) {
    return NextResponse.next();
  }

  // 2. Check session token from cookie
  const sessionCookie = req.cookies.get(COOKIE_NAME)?.value;
  const isAuthenticated = await verifySessionToken(sessionCookie);

  // 3. Handle /unlock page
  if (pathname === "/unlock") {
    if (isAuthenticated) {
      const returnUrl = req.nextUrl.searchParams.get("returnUrl") || "/";
      return NextResponse.redirect(new URL(returnUrl, req.url));
    }
    return NextResponse.next();
  }

  // 4. Handle protected API endpoints (e.g., AI generation, tweaking)
  if (pathname.startsWith("/api/")) {
    if (!isAuthenticated) {
      return NextResponse.json(
        {
          error: "访问受限：需要提供有效的访问口令",
          requiresAuth: true,
        },
        { status: 401 }
      );
    }
    return NextResponse.next();
  }

  // 5. Handle protected page routes
  if (!isAuthenticated) {
    const unlockUrl = new URL("/unlock", req.url);
    if (pathname !== "/") {
      unlockUrl.searchParams.set("returnUrl", pathname + req.nextUrl.search);
    }
    return NextResponse.redirect(unlockUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
