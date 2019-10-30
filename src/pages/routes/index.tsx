import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import Signin from "../signin";
import Signup from "../signup";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;