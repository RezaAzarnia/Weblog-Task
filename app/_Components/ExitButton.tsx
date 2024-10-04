"use client";
import React from "react";
import { logout } from "../_lib/actions";

export default function ExitButton() {
  return (
    <button
      className="bg-lightOrange px-4 py-2 text-base rounded-md hover:bg-orange-500 transition-colors text-white"
      onClick={async () => await logout()}
    >
      خروج
    </button>
  );
}
