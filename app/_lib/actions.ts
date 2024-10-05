"use server";

import { cookies } from "next/headers";
import { LoginResult, Post } from "./types";
import { redirect } from "next/navigation";
import { handleError } from "./helpers";

export async function loginUser(inputValues: unknown): Promise<LoginResult> {
  const response = await fetch(`${process.env.BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputValues),
  });
  const data = await response.json();
  if (data.token) {
    cookies().set("token", data.token, { path: "/", httpOnly: true });
  }
  return data;
}
export async function getWeblogPosts(): Promise<{ posts: Post[] }> {
  const token = cookies().get("token")?.value;
  const response = await fetch(`${process.env.BASE_URL}/api/posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const errorMessage = await handleError(response);
  if (errorMessage) throw new Error(errorMessage);
  const data = await response.json();
  return data;
}

export async function getPostDetail(postId: string): Promise<Post> {
  const token = cookies().get("token")?.value;
  const response = await fetch(`${process.env.BASE_URL}/api/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const errorMessage = await handleError(response);
  if (errorMessage) throw new Error(errorMessage);
  const data = await response.json();
  return data.post;
}

export async function logout() {
  cookies().delete("token");
  redirect("/login");
}
