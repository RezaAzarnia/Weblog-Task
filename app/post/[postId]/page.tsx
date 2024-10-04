import BackButton from "@/app/_Components/BackButton";
import PostDetail from "@/app/_Components/PostDetail";
import { getPostDetail } from "@/app/_lib/actions";
import { Metadata } from "next";
import React from "react";
type Props = {
  params: {
    postId: string;
  };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postId } = params;
  const post = await getPostDetail(postId);

  return {
    title: ` ${post.title.rendered}`,
    description: post.excerpt.rendered,
    robots: { index: true, follow: true },
  };
}
export default function page({ params }: Props) {
  const { postId } = params;

  return (
    <div className="w-full min-h-screen max-w-6xl h-full my-20 mx-auto">
      <div className="mb-2 text-end">
        <BackButton />
      </div>
      <PostDetail postId={postId} />
    </div>
  );
}
