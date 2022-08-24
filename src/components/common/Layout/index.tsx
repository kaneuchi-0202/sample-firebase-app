import React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout: React.FC<{ children?: React.ReactElement }> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
