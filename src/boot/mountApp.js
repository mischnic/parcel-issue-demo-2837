// @flow

import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

const container = document.getElementById("root");

if (container !== null) {
  ReactDOM.render(<App />, container);
} else {
  throw new TypeError("container is null");
}
