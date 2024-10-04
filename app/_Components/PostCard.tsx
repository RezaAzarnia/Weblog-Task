import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "../_lib/types";
type Props = {
  post: Post;
};
export default function PostCard({ post }: Props) {
  return (
    <div className="flex flex-col max-w-[360px] border border-lightGray min-h-[450px] rounded-md relative">
      <Link href={`post/${post.id}`} className="flex-1">
        <div className="relative w-full h-[240px]">
          <Image
            src={post.featured_media_object.source_url}
            alt={post.featured_media_object.title}
            fill
            priority={true}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 360px" 
          />
        </div>
      </Link>
      <div className="flex items-center mt-2 absolute top-0 right-1">
        {post.categories.map((item) => {
          return (
            <div
              className="px-4  rounded-full bg-orange-500 w-auto"
              key={item.id}
            >
              <span className="text-xs text-white">
                {item.name.split(" ").at(1)}
              </span>
            </div>
          );
        })}
      </div>
      <div className="p-3">
        <h1 className="text-xl mb-3 font-semibold text-justify hover:text-orange-500 transition-colors">
          <Link href={`post/${post.id}`}>{post?.title.rendered}</Link>
        </h1>
        <div
          className="[&>p]:text-sm [&>p]:text-stone-600 leading-3 text-justify "
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        ></div>
      </div>
    </div>
  );
}
