import React from "react";
import { useState } from "react";
import { useScrollTop } from "../../../lib/hooks/useScrollTop";
import { SideMenu } from "../../SideMenu";
import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout: React.FC<{ children?: React.ReactElement }> = ({
  children,
}) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const onClickHamburger = () => {
    setShowSideMenu(!showSideMenu);
  };

  useScrollTop();

  return (
    <div>
      <Header show={showSideMenu} onClickHamburger={onClickHamburger} />
      <main>{children}</main>
      <Footer />
      <SideMenu show={showSideMenu} onClickHamburger={onClickHamburger} />
    </div>
  );
};
