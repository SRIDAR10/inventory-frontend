import React from "react";

const InventorySummary = () => {
  return (
    <div className="p-5">
      <div className="text-l mb-2">Inventory Summary</div>
      <div className="flex py-2 flex-col">
        <div className="shadow mb-2 rounded-lg border border-slate-200 hover:border-blue-400 bg-white py-4 px-4 cursor-pointer flex items-center gap-3 justify-between transition-all duration-300">
          <h2 className="text-slate-500 uppercase text-[12px]">Quantity in Hand</h2>
          <h4 className="text-slate-500 text-[14px]">10</h4>
        </div>
        <div className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white py-4 px-4 cursor-pointer flex items-center gap-3 justify-between transition-all duration-300">
          <h2 className="text-slate-500 uppercase text-[12px]">Quantity to be received</h2>
          <h4 className="text-slate-500 text-[14px]">10</h4>
        </div>
      </div>
    </div>
  );
};

export default InventorySummary;
