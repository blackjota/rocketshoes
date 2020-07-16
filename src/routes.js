import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index.js";
import Cart from "./pages/Cart/index.js";
import React from "react";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/" component={Cart} />
    </Switch>
  );
}
