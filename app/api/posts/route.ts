import { NextResponse } from "next/server";
import { JsonWebTokenError } from "jsonwebtoken";
import data from "@/data/blog.json";
import { verifyJWT } from "@/app/_lib/helpers";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("Authorization");

    if (!token) {
      return NextResponse.json(
        { status: 401, message: "Unauthorized: Token is missing" },
        { status: 401 }
      );
    }
    const user = verifyJWT(token);
    if (user?.username == "admin") {
      return NextResponse.json(
        {
          posts: data,
          status: 200,
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        status: 403,
        message: "Forbidden: You are not authorized to access this data",
      },
      { status: 403 }
    );
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return NextResponse.json(
        {
          error: "unAuthorized user",
          status: 401,
        },
        { status: 401 }
      );
    }
    return NextResponse.json(
      {
        status: 500,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
