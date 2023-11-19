"use client";

import React from "react";
import DashboardActivites from "@/components/inventory/DashboardActivites";
import ProductDetails from "@/components/inventory/ProductDetails";
import TopSellingItems from "@/components/inventory/TopSellingItems";

const Dashboard = () => {
  console.log("CLIENT SECRET", process.env.NEXT_PUBLIC_GITHUB_SECRET as string);
  console.log("CLIENT ID",  process.env.NEXT_PUBLIC_GITHUB_ID as string);
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
