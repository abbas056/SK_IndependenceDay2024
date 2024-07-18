import React from "react";
import SliderItems from "./rewards-slider/SliderItems";
import title from "../assets/Reward-title.png";
import beanPot from "../assets/Beans-Pot.png";
import beanIcon from "../assets/bean.png";
function Tab1Rewards() {
  return (
    <div className="rewards-box p-rel m-auto d-flex al-center jc-center f-tangoItalic">
      <img className="title p-abs" src={title} alt="" />
      <div className="beans-pot d-flex fd-column al-center jc-center gap-1 c-white p-rel">
        <div className="pot d-flex al-center jc-center">
          <span className="p-abs">Beans Pot</span>
          <img src={beanPot} alt="" />
        </div>
        <div className="bean-num d-flex al-center jc-center">
          <img src={beanIcon} alt="" />
          <span style={{ color: "white" }}>xx</span>
        </div>
      </div>
      <div className="rewards">
        <SliderItems />
      </div>
    </div>
  );
}

export default Tab1Rewards;
