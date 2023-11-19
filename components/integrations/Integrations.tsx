import React from "react";
import IntegrationCard from "./IntegrationCard";

const Integrations = () => {
  return (
    <>
      <div className="p-5">
        <div className="text-xl font-semibold">
          Connect to your Warehouse with StockPulse!
        </div>
        <div className="flex py-2 flex-col">
          <IntegrationCard />
        </div>
      </div>
    </>
  );
};

export default Integrations;
