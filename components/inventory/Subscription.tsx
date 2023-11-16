import React from "react";

const Subscription = () => {
  return (
    <div className="bg-slate-900 px-1 rounded-md mb-2">
      <div className=" text-slate-50 border-l-2 rounded-md border-yellow-500 p-2.5 mb-1.5">
        Your <b>Premium</b> plan's trial expires in{" "}
        <span className="text-yellow-600">13 days.</span>
      </div>
      <hr className="border-t-2 border-slate-500" />
      <div className="flex pb-1">
      <button className="border-r-2 border-slate-500 text-sm p-2">
        Change Plan
      </button>
      <button className="p-2 text-sm">Upgrade</button>
      </div>
    </div>
  );
};

export default Subscription;
