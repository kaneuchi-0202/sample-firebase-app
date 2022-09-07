import { Outlet } from "@tanstack/react-location";
import React from "react";
import "./App.scss";
import { Layout } from "./components/common/Layout";
import "./styles/globals.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default App;
