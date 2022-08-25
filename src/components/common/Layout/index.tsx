import React from "react";
import { useScrollTop } from "../../../lib/hooks/useScrollTop";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout: React.FC<{ children?: React.ReactElement }> = ({
  children,
}) => {
  useScrollTop();

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
