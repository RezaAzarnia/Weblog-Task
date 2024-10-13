import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { JWTExpired } from "jose/errors";

const publicPath = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const loginUrl = new URL("/login", request.nextUrl.origin);
  const { pathname } = request.nextUrl;
  if (publicPath.includes(pathname)) {
    return NextResponse.next();
  }
  if(!token){
    return NextResponse.redirect(loginUrl);

  }
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    if (token) {
      const { payload } = await jwtVerify(token, secret);
      return NextResponse.next();
    }
  } catch (error) {
    if (error instanceof JWTExpired) {
      console.log("fetch new refresh token and set to cookies");
      return;
    }

    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/", "/login", "/post/:id*"],
};
