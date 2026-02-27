"use client";

import { useState } from "react";

export default function SpecPage() {
  return (
    <div className="text-white w-full">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-10">
        My <span className="text-orange-500">Specializations</span>
      </h1>

      {/* Cards */}
      <div className="flex flex-col gap-8">

        {/* Card 1 */}
        <div className="border border-orange-500 rounded-2xl p-6 flex justify-between items-start hover:bg-[#1f1f1f] transition">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Front end-developer
            </h2>
            <p className="text-gray-400 text-sm max-w-[500px]">
              Front-end is where I weave code and creativity to shape
              captivating and user-centric digital experiences.
            </p>
          </div>
          <span className="text-orange-500 text-xl">{`</>`}</span>
        </div>

        {/* Card 2 */}
        <div className="border border-orange-500 rounded-2xl p-6 flex justify-between items-start hover:bg-[#1f1f1f] transition">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              UI/UX Designer
            </h2>
            <p className="text-gray-400 text-sm max-w-[500px]">
              UI/UX design is my palette for blending art and user psychology
              into seamless and delightful interactions.
            </p>
          </div>
          <span className="text-orange-500 text-xl">🌐</span>
        </div>

        {/* Card 3 */}
        <div className="border border-orange-500 rounded-2xl p-6 flex justify-between items-start hover:bg-[#1f1f1f] transition">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Graphic designer
            </h2>
            <p className="text-gray-400 text-sm max-w-[500px]">
              As a graphic designer, I transform ideas into visually striking
              and impactful designs.
            </p>
          </div>
          <span className="text-orange-500 text-xl">✏️</span>
        </div>

      </div>
    </div>
  )
}