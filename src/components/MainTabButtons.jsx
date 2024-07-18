import React from "react";
import BattleField from "./pages/BattleField";
import BuilderBeans from "./pages/BuilderBeans";
import TalentFireWork from "./pages/TalentFireWork";
import btn1 from "../assets/tab1btn.png";
import btn2 from "../assets/tab2btn.png";
import btn3 from "../assets/tab3btn.png";

function MainTabButtons({ mainTabs, setMainTabs }) {
  const tabSwitch = (id) => {
    let newCat = {
      tab1: false,
      tab2: false,
      tab3: false,
    };
    setMainTabs({ ...newCat, [id]: true });
  };

  const renderingTabs = () => {
    switch (true) {
      case mainTabs.tab1:
        return <BattleField tab1={mainTabs.tab1} />;
      case mainTabs.tab2:
        return <BuilderBeans tab2={mainTabs.tab2} />;
      case mainTabs.tab3:
        return <TalentFireWork tab3={mainTabs.tab3} />;
    }
  };
  return (
    <>
      <div className="tab-buttons d-flex jc-s-even ">
        <button onClick={() => tabSwitch("tab1")} className={mainTabs.tab1 ? "gray-0" : "gray-1"}>
          <img src={btn1} alt="" />
        </button>
        <button onClick={() => tabSwitch("tab2")} className={mainTabs.tab2 ? "gray-0" : "gray-1"}>
          <img src={btn2} alt="" />
        </button>
        <button onClick={() => tabSwitch("tab3")} className={mainTabs.tab3 ? "gray-0" : "gray-1"}>
          <img src={btn3} alt="" />
        </button>
      </div>
      <div>{renderingTabs()}</div>
    </>
  );
}

export default MainTabButtons;
