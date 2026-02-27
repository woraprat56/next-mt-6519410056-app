"use client";

import { useState } from "react";

export default function ContactPage() {
  return (
    <div className="text-white w-full flex flex-col justify-center h-full">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">
        Contact <span className="text-orange-500">Me</span>
      </h1>

      <p className="text-gray-400 mb-10">
        Let’s get in touch!
      </p>

      {/* Form */}
      <form className="grid grid-cols-2 gap-x-16 gap-y-8 max-w-[700px]">

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-orange-500 text-sm mb-2">Email</label>
          <input
            type="text"
            className="bg-transparent border-b border-gray-600 focus:border-orange-500 outline-none pb-2"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-orange-500 text-sm mb-2">Phone</label>
          <input
            type="text"
            className="bg-transparent border-b border-gray-600 focus:border-orange-500 outline-none pb-2"
          />
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <label className="text-orange-500 text-sm mb-2">Name</label>
          <input
            type="text"
            className="bg-transparent border-b border-gray-600 focus:border-orange-500 outline-none pb-2"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col">
          <label className="text-orange-500 text-sm mb-2">Address</label>
          <input
            type="text"
            className="bg-transparent border-b border-gray-600 focus:border-orange-500 outline-none pb-2"
          />
        </div>

        {/* Content (เต็มแถว) */}
        <div className="col-span-2 flex flex-col mt-4">
          <label className="text-orange-500 text-sm mb-2">Content</label>
          <textarea
            rows={3}
            className="bg-transparent border-b border-gray-600 focus:border-orange-500 outline-none pb-2 resize-none"
          />
        </div>

        {/* Checkbox */}
        <div className="col-span-2 flex items-center gap-2 mt-4">
          <input type="checkbox" className="accent-orange-500" />
          <span className="text-gray-400 text-sm">
            I would like to receive the newsletter.
          </span>
        </div>

        {/* Submit */}
        <div className="col-span-2 mt-6">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition px-10 py-2 rounded-lg font-semibold"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  )
}