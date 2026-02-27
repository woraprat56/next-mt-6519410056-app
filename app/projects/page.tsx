"use client";

import { useState } from "react";
import Image from "next/image";
import profile from "../public/Profile.png";
import MyCard from "@/Components/MyCard";
import SideMenu from "@/Components/SideMenu";

export default function ProjectsPage() {
  return (
    <div className="w-full text-white">

      {/* Title */}
      <h1 className="text-[40px] font-semibold mb-4">
        Featured <span className="text-orange-500">Projects</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[20px] text-gray-300 mb-2">
        Manage Task App - fullstack web development
      </p>

      <p className="text-[16px] text-[#7D7373] mb-10 max-w-[650px]">
      {`Here's my latest project built with Next.js and Laravel,
      using TailwindCSS on the front-end. Watch the video
      to see the responsive landing page in action!`}
      </p>

      {/* Image Container */}
      <div className="bg-[#1c1c1c] p-6 rounded-2xl w-fit shadow-xl">
        <Image
      src="/Manage.JPG"
      alt="Manage Project"
      width={600}
      height={350}
      className="rounded-xl object-contain"
      />
      </div>

    </div>
  );
}