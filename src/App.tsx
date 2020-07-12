import React from "react";
import { NavBar } from "./components/NavBar";
import { HeaderMenu } from "./components/HeaderMenu";
import { Trade } from "./components/Trade";

export const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeaderMenu />
      <Trade />
    </>
  );
};
