import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (token && request.nextUrl.pathname === "/login") {
    const newUrl = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }
  if (!token && request.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }
}

export const config = {
  matcher: ["/", "/login"],
};
