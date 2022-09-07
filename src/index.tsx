import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebaseInit from "./firebase";
import { ReactLocation, Router, RouterProps } from "@tanstack/react-location";

const Index = () => import("./pages/Index").then((mod) => <mod.default />);
const Service = () => import("./pages/Service").then((mod) => <mod.default />);
const Empty = () => import("./pages/Empty").then((mod) => <mod.default />);

const location = new ReactLocation();

const Root: React.FC = () => {
  const routes: RouterProps["routes"] = [
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: () => Index(),
        },
        {
          path: "/service",
          element: () => Service(),
        },
        {
          path: "*",
          element: () => Empty(),
        },
      ],
    },
  ];

  return (
    <Router
      location={location}
      routes={routes}
      defaultPendingMs={50}
      defaultPendingElement={<App />}
    ></Router>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// init firebase
firebaseInit();
