import React from "react";
import {
  History,
  Plus,
  Users,
  Bell,
  Settings,
  ChevronDown,
  LayoutGrid
} from "lucide-react";
import { SearchInput } from "./SearchInput";

const Header = () => {
  return (
    <div className="bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-300 shadow-200">
      <div className="flex gap-3">
        <button>
          <History className="w-6 h-6" />
        </button>
        <SearchInput />
      </div>

      <div className="flex items-center gap-3">
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 bg-blue-600 rounded-lg">
            <Plus className="h-4 w-4 text-slate-50" />
          </button>
        </div>
        <div className="pr-2 border-r border-gray-300 space-x-2">
          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Users className="h-4 w-4 text-slate-900" />
          </button>
          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Bell className="h-4 w-4 text-slate-900" />
          </button>
          <button className="p-1 hover:bg-slate-200 rounded-lg">
            <Settings className="h-4 w-4 text-slate-900" />
          </button>
        </div>
        <div className="flex gap-6">
          <button className="flex items-center">
            <span>Garat</span>
            <ChevronDown className="w-4 h-3" />
          </button>
          <button className="flex items-center">
            <LayoutGrid className="w-6 h-6 text-slate-900" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
