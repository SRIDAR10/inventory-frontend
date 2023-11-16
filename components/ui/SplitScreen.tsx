import React, {ReactNode} from 'react';

interface LayoutProps {
  children: ReactNode;
  leftWeight: number;
  rightWeight: number;
}

export const SplitScreen=({ children, leftWeight, rightWeight }:LayoutProps) => {
  const [left, right] = React.Children.toArray(children) as [React.ReactElement, React.ReactElement];

  return (
    <div className="flex">
      <div style={{ flex: leftWeight }}>{left}</div>
      <div className="mx-4 my-0 border-l bg-slate-400" />
      <div style={{ flex: rightWeight }}>{right}</div>
    </div>
  );
};