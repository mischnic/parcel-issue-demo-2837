// @flow

import * as React from "react";
import { Suspense } from "react";

import AppRouter from "./AppRouter";

const App = function() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <AppRouter />
    </Suspense>
  );
};

export default App;
