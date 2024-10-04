"use server";
import { cookies } from "next/headers";
import { LoginResult } from "./types";

export async function loginUser(inputValues: unknown): Promise<LoginResult> {
  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputValues),
  });
  const data = await response.json();
  
  if (data.token) {
    cookies().set("token", data.token);
  }
  return data;
}
