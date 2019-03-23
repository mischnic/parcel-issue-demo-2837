// @flow

import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { map } from "lodash";

import routes from "./routes";

function AppRouter() {
  return (
    <Router>
      <Switch>
        {map(routes, (component, path) => (
          <Route exact key={path} path={path} component={component} />
        ))}
      </Switch>
    </Router>
  );
}

export default AppRouter;
