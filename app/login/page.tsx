import React from "react";
import Image from "next/image";
import picture from "@/app/public/img-23.png";
import LoginForm from "../_Components/LoginForm";
export default function page() {
  return (
    <div className="flex flex-row items-center min-h-screen gap-28">
      <div className="w-5/12 h-full">
        <div className="h-full w-full p-3.5 relative min-h-screen">
          <Image
            src={picture}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            fill
            quality={100}
            alt="login-picture"
            priority={true}
          />
          <div className="min-h-[90vh] flex">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-2xl space-y-4">
        <h1 className="text-3xl font-semibold">
          وارد
          <span className="text-lightOrange"> حساب </span>
          خود شوید
        </h1>
        <p className="text-base leading-9 text-gray-700 line-clamp-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>
    </div>
  );
}
