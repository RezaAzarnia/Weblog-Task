"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
    const router = useRouter()
  return <button onClick={()=>router.back()} className="bg-lightOrange text-white rounded-md p-1">برگشت</button>;
}
