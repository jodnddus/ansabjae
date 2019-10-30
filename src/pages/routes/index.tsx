import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Auth from "../auth"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Auth} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;