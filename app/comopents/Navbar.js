import Image from "next/image";
import React from "react";
// import Image from "next/image";
import { HiMiniAdjustmentsVertical } from "react-icons/hi2";

export default function Navbar() {
  return (
    <div class="bg-white shadow-md px-4 py-2 flex justify-between items-center h-full">
      <div class="flex items-center space-x-2 ml-5">
        <HiMiniAdjustmentsVertical className="w-8 h-8" />
        <h1 className="text-3xl font-black">WhatBytes</h1>
      </div>
      <div class="flex items-center space-x-2 cursor-pointer border border-black pl-2 pr-2 pt-1 pb-1 rounded">
        <Image
          class="w-8 h-8 rounded-full object-cover"
          src="/assets/avatar.png"
          width={3}
          height={3}
          alt="Profile Image"
        />
        <span class="font-medium">Rahil Siddique</span>
      </div>
    </div>
  );
}
