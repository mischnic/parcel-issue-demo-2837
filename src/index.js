// @flow

import * as React from "react";
import * as ReactDOM from "react-dom";

const App = function() {
  return (
    <>
      <p>Hello World</p>
    </>
  );
};

const container = document.getElementById("root");

if (container !== null) {
  ReactDOM.render(<App />, container);
} else {
  throw new TypeError("container is null");
}
