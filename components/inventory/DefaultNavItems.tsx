import React from "react";
import {
  Home,
  BaggageClaim,
  ShoppingBag,
  ShoppingBasket,
  Cable,
  BarChart4,
  Files,
} from "lucide-react";

export const DefaultNavItems = [
  {
    label: "Home",
    icon: <Home className="w-4 h-4" />,
    href: "/inventory/home/dashboard",
  },
  {
    label: "Inventory",
    icon: <BaggageClaim className="w-4 h-4" />,
    href: "/inventory/inventory",
  },
  {
    label: "Sales",
    icon: <ShoppingBag className="w-4 h-4" />,
    href: "/inventory/sales",
  },
  {
    label: "Purchases",
    icon: <ShoppingBasket className="w-4 h-4" />,
    href: "/inventory/purchases",
  },
  {
    label: "Reports",
    icon: <Cable className="w-4 h-4" />,
    href: "/inventory/reports",
  },
  {
    label: "Integrations",
    icon: <BarChart4 className="w-4 h-4" />,
    href: "/inventory/integrations",
  },
  {
    label: "Documents",
    icon: <Files className="w-4 h-4" />,
    href: "/inventory/documents",
  },
];

export const InventoryNestedNavItems = [
  {
    label: "Items",
    href: "/inventory/inventory/items",
  },
  {
    label: "Item Groups",
    href: "/inventory/inventory/itemgroups",
  },
  {
    label: "Adjustments",
    href: "/inventory/inventory/adjustments",
  }
];

export const HomeBarNavLinks=[
{
    label: "Dashboard",
    href: "/inventory/home/dashboard",
},
{
    label: "Getting Started",
    href: "/inventory/home/getting-started",
},
{
    label: "Recent Update",
    href: "/inventory/home/update",
},
{
    label:"Announcements",
    href:"/inventory/home/announcement",
}
];
