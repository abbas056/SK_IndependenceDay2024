import React, { useContext } from "react";
import pontsIcon from "../../assets/My-Jashan-Points-Icon.png";
import MyPoints from "../common/MyPoints";
import BuilderGame from "../Games/BuilderGame";
import LeaderBoard from "../leaderboard/LeaderBoad";
import title from "../../assets/Winners-Title.png";
import { ApiContext } from "../../services/Api";

function BuilderBeans({ tab2 }) {
  const { tickertape } = useContext(ApiContext);
  return (
    <>
      <MyPoints icon={pontsIcon} text="My Jashan Points: " points={1} />
      <BuilderGame />
      <LeaderBoard tab2={tab2} restWinners={tickertape?.list} arrayData={tickertape} maxheight={"270vw"} title={title} />
    </>
  );
}

export default BuilderBeans;
