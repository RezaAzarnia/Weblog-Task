"use client";
import React from "react";
import { getWeblogPosts } from "../_lib/actions";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";
import { Post } from "../_lib/types";

export default function PostsList() {
  const { data, isLoading ,error} = useQuery<{posts:Post[]}>({
    queryFn: () => getWeblogPosts(),
    queryKey: ["posts"],
  });

  if (isLoading) {
    return <h1 className="text-center">در حال بار گذاری</h1>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data?.posts?.map((post:Post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}
