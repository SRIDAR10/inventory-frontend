"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Subscription from "./Subscription";
import { DefaultNavItems, InventoryNestedNavItems } from "./DefaultNavItems";
import { cn } from "@/lib/utils";

//TODO: handle collapsible side bar
const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [openInventory, setOpenInventory] = useState(false);

  const toggleSidebarCollapsedHandler = () => {
    setCollapsed((prev) => !prev);
  };

  const handleOnClick = (page: string, url: string) => {
    if (page === "Inventory") {
      setOpenInventory(!openInventory);
      return;
    }
    router.replace(url);
  };

  return (
    <div
      className={cn(
        "flex flex-col w-64 min-h-screen bg-slate-800 text-slate-50 justify-between"
      )}
    >
      <Link
        className="rounded-b-lg flex space-x-2 items-center bg-slate-950 py-3 px-2 round"
        href="#"
      >
        <ShoppingCart />
        <span className="font-bold text-xl">Inventory</span>
      </Link>

      <nav className="flex flex-col gap-3 p-3 px-3 py-6">

      {/* EXTRACT THIS TO A SEPARATE COMPONENT */}
        {DefaultNavItems.map((navItem) => {
          return (
            <>
              <button
                key={navItem.label}
                className={cn("flex items-center space-x-2 p-2", {
                  "bg-blue-500 text-slate-50 rounded-md":
                    pathname === navItem.href,
                  "hover:bg-slate-900 rounded-md": pathname !== navItem.href,
                })}
                onClick={() => handleOnClick(navItem.label, navItem.href)}
              >
                {navItem.icon}
                <span>{navItem.label}</span>
              </button>
              {navItem.label === "Inventory" &&
                openInventory &&
                InventoryNestedNavItems.map((subNavItem) => {
                  return (
                    <button
                      key={subNavItem.label}
                      className={cn("flex items-center p-2 pl-8", {
                        "bg-blue-500 text-slate-50 rounded-md":
                          pathname === subNavItem.href,
                        "hover:bg-slate-900 rounded-md":
                          pathname !== subNavItem.href,
                      })}
                      onClick={() =>
                        handleOnClick(subNavItem.label, subNavItem.href)
                      }
                    >
                      <span>{subNavItem.label}</span>
                    </button>
                  );
                })}
            </>
          );
        })}
      </nav>

      <div className="mb-0 mt-auto">
        <Subscription />

        <div className="flex flex-col justify-end items-center  bg-slate-950">
          <div className="flex space-x-2 items-center py-3 px-2">
            <button onClick={toggleSidebarCollapsedHandler}>
              <ChevronLeft />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
