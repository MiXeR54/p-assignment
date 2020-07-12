import React from "react";
import { NavBar } from "./components/NavBar";
import { HeaderMenu } from "./components/HeaderMenu";
import { Trade } from "./components/Trades/Trade";
import { Dialog } from "./components/Dialog/Dialog";
import { Grid } from "@material-ui/core";
import { Details } from "./components/Details/Details";

export const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeaderMenu />
      <Grid xs={12} container direction="row">
        <Grid xs={3} item>
          <Trade />
        </Grid>
        <Grid xs={6} item>
          <Dialog />
        </Grid>
        <Grid xs={3} item>
          <Details />
        </Grid>
      </Grid>
    </>
  );
};
