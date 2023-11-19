"use client";

import React from "react";
import DashboardActivites from "@/components/inventory/DashboardActivites";
import ProductDetails from "@/components/inventory/ProductDetails";
import TopSellingItems from "@/components/inventory/TopSellingItems";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  return (
    <>
      <div className="bg-[#ecf2fe] border-b border-slate-300">
        <DashboardActivites />
      </div>
      <div className="flex p-6">
        <div style={{ flex: 1 }}>
          <ProductDetails />
        </div>
        <div style={{ flex: 1 }}>
          <TopSellingItems />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
