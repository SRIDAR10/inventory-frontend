import React, { ReactNode } from "react";
import Header from "@/components/inventory/Header";
import Sidebar from "@/components/inventory/Sidebar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex">
      {" "}
      <Sidebar/>
      <main className="w-full bg-slate-100 min-h-screen"><Header/> {children}</main>
    </div>
  );
};

export default Layout;
