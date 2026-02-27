"use client";

import Image from "next/image";
import profile from "../public/Profile.png";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa6";

export default function MyCard() {
  return (
    <div className="w-[340px] bg-[#1c1c1c] text-white rounded-[30px] px-8 py-8 shadow-2xl flex flex-col border border-gray-500">

      <h1 className="text-[28px] font-medium mb-7">
        <span className="text-orange-500">W</span>oraprat
      </h1>

      <div className="bg-white rounded-2xl flex justify-center items-center p-6 mb-7">
        <Image
          src="/Profile.png"
          alt="Profile"
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

      <h2 className="text-center text-[24px] mb-1 tracking-wide">
        STU ID: 6519410056
      </h2>

      <p className="text-center text-[#7D7373] text-[20px] mb-8">
        Fullstack Web Developer
      </p>

      <div className="flex justify-center gap-8 text-[32px] text-gray-300 mb-8">
        <FaFacebook className="hover:text-orange-500 transition cursor-pointer" />
        <FaXTwitter className="hover:text-orange-500 transition cursor-pointer" />
        <FaInstagram className="hover:text-orange-500 transition cursor-pointer" />
        <FaLinkedinIn className="hover:text-orange-500 transition cursor-pointer" />
        <FaGoogle className="hover:text-orange-500 transition cursor-pointer" />
      </div>

      <button className="w-full bg-orange-500 hover:bg-orange-600 text-[#1D1C1D] text-[20px] py-4 rounded-full transition font-medium tracking-wide">
        HIRE ME !
      </button>
    </div>
  );
}