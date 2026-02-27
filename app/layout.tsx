import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import MyCard from "@/Components/MyCard";
import SideMenu from "@/Components/SideMenu";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Midterm Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.className} bg-[#e6e6e6]`}>
        <div className="min-h-screen flex items-center justify-center">

          {/* App Container */}
          <div className="w-[1200px] min-h-[720px] bg-[#161616] rounded-[40px] flex items-center px-16 py-12 gap-16">

            {/* LEFT : Profile Card */}
            <MyCard />

            {/* CENTER : Page Content */}
            <div className="flex-1 flex items-center">
              {children}
            </div>

            {/* RIGHT : Side Menu */}
            <SideMenu />

          </div>

        </div>
      </body>
    </html>
  );
}