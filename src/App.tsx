import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";

import { NavBar } from "./components/Header/NavBar/NavBar";
import { HeaderMenu } from "./components/Header/HeaderMenu/HeaderMenu";
import { Trade } from "./components/Trades/Trade";
import { Details } from "./components/Details/Details";
import { Chat } from "./components/Dialog/Chat";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact />
        <Route exact path="/sell" component={HeaderMenu} />
        <Route exact path="/sell/trades">
          <HeaderMenu />
          <Grid container>
            <Grid xs={12} md={3} item>
              <Trade />
            </Grid>
          </Grid>
        </Route>
        <Route exact path="/sell/trades/:trade?">
          <HeaderMenu />
          <Grid container>
            <Grid xs={12} md={3} item>
              <Trade />
            </Grid>
            <Grid xs={12} md={6} item>
              <Chat />
            </Grid>
            <Grid xs={12} md={3} item>
              <Details />
            </Grid>
          </Grid>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
