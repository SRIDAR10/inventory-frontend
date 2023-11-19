import Integrations from "@/components/integrations/Integrations";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <Integrations />
      {children}
    </>
  );
};

export default layout;
