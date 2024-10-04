import { Metadata } from "next";
import ExitButton from "./_Components/ExitButton";
import PostsList from "./_Components/PostsList";

export const metadata: Metadata = {
  title: " پست ها",
  description: "صفحه پست های وبلاگ",
  robots: { index: true, follow: true },
};
export default function Home() {
  return (
    <>
      <div className="max-w-screen-xl m-auto h-full p-8">
        <ExitButton />
        <h1 className="text-3xl mt-4 mb-12 text-orange-800 text-center">
          پست های تسک راهکاران گستران
        </h1>
        <PostsList />
      </div>
    </>
  );
}
