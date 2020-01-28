import React from "react";
import ReactDOM from "react-dom";

import style from "./Home.module.css";

import PageBody from "../../../components/common/PageBody";

import HeroImage from "./HeroImage";
import HeroOverlay from "./HeroOverlay";
import Intro from "./Intro";
import Programs from "./Programs";
import Organization from "./Organization";
import Partners from "./Partners";

export default class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className={style.Home}>
        <HeroImage />
        <HeroOverlay />
        <PageBody>
          <div className={style.HomePageBody}>
            <Intro />
            asdfjsdiofjosijdfi
            <hr />
            <Programs />
            <hr />
            <Organization />
            <hr />
            <Partners />
          </div>
        </PageBody>
      </div>
    );
  }
}