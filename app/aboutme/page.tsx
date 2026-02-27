"use client";

import { useState } from "react";

export default function AboutPage() {
  return (
    <div className="text-white w-full flex flex-col justify-center h-full">

      {/* Title */}
      <h1 className="text-3xl mb-4">
        About <span className="text-orange-500">Me</span>
      </h1>

      {/* Big Heading */}
      <h2 className="text-4xl font-bold leading-snug max-w-[650px] mb-6">
        I find fulfillment in blending visual design with the power of
        coding to create meaningful experiences.
      </h2>

      {/* Paragraph */}
      <p className="text-gray-400 max-w-[650px] leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
        tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
        architecto earum voluptates obcaecati corrupti voluptatem. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Iusto maxime tempora at
        neque a adipisci nulla voluptatem? Mollitia, officiis, architecto earum
        voluptates obcaecati corrupti voluptatem.
      </p>

    </div>
  )
}