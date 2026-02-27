"use client";

import { useState } from "react";
import { FaReact, FaFigma, FaGithub, FaJs } from "react-icons/fa"
import { SiNextdotjs, SiCss3 } from "react-icons/si"

export default function SkillsContent() {
  return (
    <div className="flex-1 text-white">

      <h1 className="text-4xl font-bold mb-12">
        My <span className="text-orange-500">Skills</span>
      </h1>

      <div className="grid grid-cols-4 gap-12">

        {/* React */}
        <div className="flex flex-col items-center">
          <div className="w-[120px] h-[170px] rounded-[80px] border border-orange-500 flex flex-col items-center justify-center">
            <FaReact size={45} className="text-cyan-400 mb-3" />
            <p className="text-orange-500">60%</p>
          </div>
          <p className="mt-4 text-gray-400">React</p>
        </div>

        {/* Figma */}
        <div className="flex flex-col items-center">
          <div className="w-[120px] h-[170px] rounded-[80px] border border-gray-600 flex flex-col items-center justify-center">
            <FaFigma size={40} className="mb-3" />
            <p className="text-orange-500">85%</p>
          </div>
          <p className="mt-4 text-gray-400">Figma</p>
        </div>

        {/* HTML/CSS */}
        <div className="flex flex-col items-center">
          <div className="w-[120px] h-[170px] rounded-[80px] border border-gray-600 flex flex-col items-center justify-center">
            <SiCss3 size={40} className="mb-3 text-blue-500" />
            <p className="text-orange-500">80%</p>
          </div>
          <p className="mt-4 text-gray-400">HTML/CSS</p>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center">
          <div className="w-[120px] h-[170px] rounded-[80px] border border-gray-600 flex flex-col items-center justify-center">
            <SiNextdotjs size={40} className="mb-3" />
            <p className="text-orange-500">80%</p>
          </div>
          <p className="mt-4 text-gray-400">Next.js</p>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center">
          <div className="w-[120px] h-[170px] rounded-[80px] border border-gray-600 flex flex-col items-center justify-center">
            <FaJs size={40} className="mb-3 text-yellow-400" />
            <p className="text-orange-500">60%</p>
          </div>
          <p className="mt-4 text-gray-400">JavaScript</p>
        </div>

        {/* GitHub */}
        <div className="flex flex-col items-center">
          <div className="w-[120px] h-[170px] rounded-[80px] border border-gray-600 flex flex-col items-center justify-center">
            <FaGithub size={40} className="mb-3" />
            <p className="text-orange-500">90%</p>
          </div>
          <p className="mt-4 text-gray-400">GitHub</p>
        </div>

      </div>
    </div>
  )
}