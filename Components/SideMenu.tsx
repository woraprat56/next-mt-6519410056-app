"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  BookOpen,
  FileText,
  Briefcase,
  Code,
  MessageCircle,
} from "lucide-react";

export default function SideMenu() {
  const pathname = usePathname();

  const menus = [
    { icon: Home, path: "/" },
    { icon: User, path: "/aboutme" },
    { icon: BookOpen, path: "/eduexp" },
    { icon: FileText, path: "/spec" },
    { icon: Briefcase, path: "/projects" },
    { icon: Code, path: "/skills" },
    { icon: MessageCircle, path: "/contactme" },
  ];

  return (
    <div className="w-[90px] bg-transparent border border-[#7D7373] rounded-[40px] py-10 flex flex-col items-center">
  <div className="flex flex-col items-center space-y-[50px]">
    {menus.map((item, index) => {
      const Icon = item.icon;
      const isActive = pathname === item.path;

      return (
        <Link key={index} href={item.path}>
          <Icon
            size={25}
            className={`cursor-pointer transition-colors ${
              isActive
                ? "text-orange-500"
                : "text-[#7D7373] hover:text-orange-500"
            }`}
          />
        </Link>
      );
    })}
  </div>
</div>
  );
}