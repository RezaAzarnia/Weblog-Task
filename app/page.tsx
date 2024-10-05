import { Metadata } from "next";
import ExitButton from "./_Components/ExitButton";
import PostsList from "./_Components/PostsList";
import {
  dehydrate,
  Hydrate,
  QueryClient,
} from "@tanstack/react-query";
import { getWeblogPosts } from "./_lib/actions";

export const metadata: Metadata = {
  title: " پست ها",
  description: "صفحه پست های وبلاگ",
  robots: { index: true, follow: true },
};
export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryFn: getWeblogPosts,
    queryKey: ["posts"],
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <div className="max-w-screen-xl m-auto h-full p-8">
        <ExitButton />
        <h1 className="text-3xl mt-4 mb-12 text-orange-800 text-center">
          پست های تسک راهکاران گستران
        </h1>
        <PostsList />
      </div>
    </Hydrate>
  );
}
