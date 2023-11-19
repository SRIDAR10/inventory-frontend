import React from "react";
import { IntegrationData } from "../sampleData/IntegrationData";
import { Clock1 } from "lucide-react";

const IntegrationCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {IntegrationData.map((integration) => (
        <div
          key={integration.name}
          className="shadow rounded-lg border border-slate-200 bg-white py-4 px-4 cursor-pointer flex flex-col items-center gap-3 transition-all duration-300"
        >
          <h3 className="text-l font-semibold">{integration.name}</h3>
          <p className="text-sm text-gray-600">{integration.category}</p>
          <div className="flex items-center gap-2">
            <Clock1 size={16} color="#4b4848" />
            <p className="text-xs text-gray-400">{integration.refreshRate}</p>
          </div>
          <a
            href={integration.connectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Connect
          </a>
        </div>
      ))}
    </div>
  );
};

export default IntegrationCard;
