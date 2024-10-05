"use client";
import React from "react";
import { Post } from "../_lib/types";
import Image from "next/image";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { getPostDetail } from "../_lib/actions";
type Props = {
  postId: string;
};
export default function PostDetail({ postId }: Props) {
  const queryClient = useQueryClient();
  const cachedPosts = queryClient.getQueryData<{ posts: Post[] }>(["posts"]);
  const initialData = cachedPosts?.posts?.find((p) => p.id === +postId);

  const { data: post, isLoading } = useQuery<Post>({
    queryFn: () => getPostDetail(postId),
    queryKey: [`post,${postId}`],
    initialData,
  });
  if (isLoading) {
    return <h1 className="text-center text-2xl">در حال بارگذاری</h1>;
  }
  console.log(post);
  return (
    <div className="p-4 border border-lightGray rounded-md">
      {post && (
        <>
          <h1 className="text-3xl text-center mb-6">{post.title.rendered}</h1>
          <div className="w-full relative h-[500px]">
            <Image
              src={post?.featured_media_object.source_url}
              alt={post?.featured_media_object.title}
              fill
              priority={true}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 360px"
              className="object-cover"
            />
          </div>
          <div
            className="[&>p]:text-base [&>p]:text-stone-600 leading-3 text-justify mt-4"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </>
      )}
    </div>
  );
}
