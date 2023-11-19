import React, { ReactNode } from "react";
import Header from "@/components/inventory/Header";
import Sidebar from "@/components/inventory/Sidebar";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/get-query-client";

interface Props {
  children: ReactNode;
}

const Layout = ({ children}: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="flex">
      {" "}
      <Sidebar/>
      <main className="w-full bg-slate-100 min-h-screen"><Header/> {children}</main>
    </div>
    </QueryClientProvider>
  );
};

export default Layout;
