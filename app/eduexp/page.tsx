"use client";

import { useState } from "react";
import Image from "next/image";
import profile from "../public/Profile.png";
import MyCard from "@/Components/MyCard";
import SideMenu from "@/Components/SideMenu";

export default function EduExpContent() {
  return (
    <div className="flex-1 text-white leading-relaxed">

      <h1 className="text-4xl font-bold mb-12">
        Education &{" "}
        <span className="text-orange-500">Experience</span>
      </h1>

      <div className="space-y-10">

        {/* Experience */}
        <div>
          <p className="text-orange-500 mb-2">2022 - Present</p>

          <p className="font-semibold">UI/UX Designer</p>
          <p className="text-gray-400 mb-3">Freelance</p>

          <p className="font-semibold">Fullstack Web Developer</p>
          <p className="text-gray-400">Freelance</p>
        </div>

        {/* University */}
        <div>
          <p className="text-gray-400 mb-2">2022 - 2025</p>
          <p className="font-semibold">
            Bachelor Degree in Technology Digital and Innovation
          </p>
          <p className="text-gray-400">
            Southeast Asia University
          </p>
        </div>

        {/* High School */}
        <div>
          <p className="text-gray-400 mb-2">2016 - 2021</p>
          <p className="font-semibold">High school</p>
          <p className="text-gray-400">
            Taweethapisek School
          </p>
        </div>

      </div>
    </div>
  )
}