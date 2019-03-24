import * as React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <div>Test</div>} />
      </Switch>
    </Router>
  );
}

render(<App />, document.getElementById("root"));
