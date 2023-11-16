import React from "react";
import { SalesData } from "../sampleData/SalesData";

const SalesActivity = () => {
  return (
    <div className="p-5">
      <div className="text-l mb-2">Sales Activity</div>
      <div className="flex space-x-1 py-2 gap-1">
        {SalesData.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow flex-grow  bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-400 cursor-pointer transition-all duration-300"
            >
              <div className={`flex justify-center ${item.color} text-2xl`}>
                {item.count}
              </div>
              <div className="flex justify-center text-[12px] text-gray-400">
                {item.metrics}
              </div>
              <div className="flex justify-center text-[12px] text-gray-400 space-x-1 items-center">
                <div> {item.icon}</div> <div>{item.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesActivity;
