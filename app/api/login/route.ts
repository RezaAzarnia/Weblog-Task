import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { LoginResult } from "@/app/_lib/types";

export async function POST(req: Request): Promise<NextResponse<LoginResult>> {
  const { username, password } = await req.json();
  try {
    if (!username || !password) {
      return NextResponse.json(
        {
          ok: false,
          status: 400,
          message: "fields are empty",
        },
        { status: 400 }
      );
    }
    if (username === "admin" && password === "admin") {
      const token = jwt.sign(
        { username, password },
        process.env.JWT_SECRET || ""
      );
      return NextResponse.json({
        ok: true,
        status: 200,
        token,
      });
    } else {
      return NextResponse.json(
        {
          ok: false,
          status: 404,
          message: "username or password is wrong",
        },
        { status: 404 }
      );
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          ok: false,
          status: 500,
          message: error.message || "Internal server error",
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        {
          ok: false,
          status: 500,
          message: "Internal server error",
        },
        { status: 500 }
      );
    }
  }
}
