// @flow
/** @jsx jsx */

import { jsx } from "@emotion/core";
import { Button } from "antd-mobile";
import { Observer } from "mobx-react-lite";
import { Translation } from "react-i18next";

import appStore from "../stores/app";

const Home = () => {
  return (
    <div>
      <h1 css={{ fontSize: "2rem" }}>Home</h1>
      <p>
        <Observer>{() => `count: ${appStore.count}`}</Observer>
      </p>
      <Button onClick={appStore.inc}>Inc</Button>
      <p>
        <Translation>{t => `App Title: ${t("app:title")}`}</Translation>
      </p>
    </div>
  );
};

export default Home;
