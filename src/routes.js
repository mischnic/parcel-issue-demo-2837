import { lazy } from "react";

const routes = {
  "/": lazy(() => import("./pages/Home"))
};

export default routes;
