// @flow
/** @jsx jsx */

import { jsx } from "@emotion/core";
import { Button } from "antd-mobile";
import { Observer } from "mobx-react-lite";

import appStore from "../stores/app";

const Home = () => {
  return (
    <div>
      <h1 css={{ fontSize: "2rem" }}>Home</h1>
      <p>
        <Observer>{() => `count: ${appStore.count}`}</Observer>
      </p>
      <Button onClick={appStore.inc}>Inc</Button>
    </div>
  );
};

export default Home;
