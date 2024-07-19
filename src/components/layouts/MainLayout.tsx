import React from "react";
import { Header } from "../common";

type Props = { children: React.ReactElement };

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
    </div>
  );
};
