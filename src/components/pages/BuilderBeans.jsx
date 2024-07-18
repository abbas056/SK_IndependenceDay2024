import React from "react";
import pontsIcon from "../../assets/My-Jashan-Points-Icon.png";
import MyPoints from "../common/MyPoints";
import BuilderGame from "../Games/BuilderGame";

function BuilderBeans() {
  return (
    <>
      <MyPoints icon={pontsIcon} text="My Jashan Point: " />
      <BuilderGame />
    </>
  );
}

export default BuilderBeans;
