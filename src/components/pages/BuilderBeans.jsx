import React, { useContext } from "react";
import pontsIcon from "../../assets/My-Jashan-Points-Icon.png";
import MyPoints from "../common/MyPoints";
import BuilderGame from "../Games/BuilderGame";
import LeaderBoard from "../leaderboard/LeaderBoad";
import title from "../../assets/Winners-Title.png";
import { ApiContext } from "../../services/Api";

function BuilderBeans({ tab2 }) {
  const { userInfo, builderBeans } = useContext(ApiContext);
  let gamePoints = userInfo?.gamePoints;

  return (
    <>
      <MyPoints icon={pontsIcon} text="My Jashan Points: " points={gamePoints} />
      <BuilderGame />
      <LeaderBoard tab2={tab2} restWinners={builderBeans?.list} arrayData={builderBeans} maxheight={"270vw"} title={title} />
    </>
  );
}

export default BuilderBeans;
