"use client"
import { Building2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { HomeBarNavLinks } from "./DefaultNavItems";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const HomeNavBar = () => {
  const pathname = usePathname();
  console.log("home path name", pathname);
  const router = useRouter()
  return (
    <div className="p-5">
      <div className="flex space-x-3">
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
          <Building2 />
        </div>
        <div className="flex flex-col">
          <p>Hello, Sridar</p>
          <span>Garat</span>
        </div>
      </div>
      <nav className="flex space-x-10 pt-4 border-b-2 border-slate-300">
        {/* <Link href="" className="border-b-4 pb-5 border-blue-500">Dashboard</Link> */}
        {HomeBarNavLinks.map((navLinks) => {
          return (
            <button
              key={navLinks.label}
              className={cn("pb-4", {
                "border-b-4 border-blue-500":
                  pathname === navLinks.href,
              })}
              onClick={()=>router.push(navLinks.href)}
            >
              {navLinks.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default HomeNavBar;