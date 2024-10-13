import { NextResponse } from "next/server";
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

    verifyJWT(token);

    return NextResponse.json(
      {
        posts: data,
        status: 200,
      },
      { status: 200 }
    );
  } catch (error : any) {
    return NextResponse.json(
      {
        status: 500,
        message:error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
