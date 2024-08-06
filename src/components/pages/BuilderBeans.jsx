import React, { useContext, useState } from "react";
import pontsIcon from "../../assets/My-Jashan-Points-Icon.png";
import MyPoints from "../common/MyPoints";
import BuilderGame from "../Games/BuilderGame";
import LeaderBoard from "../leaderboard/LeaderBoad";
import title from "../../assets/Winners-Title.png";
import InfoPopup from "../InfoPopup";
import { ApiContext } from "../../services/Api";
import { overFlowAuto, overFlowHidden } from "../../js/helpers";

function BuilderBeans({ tab2 }) {
  const { userInfo, builderBeans } = useContext(ApiContext);
  const [info, setInfo] = useState(false);

  let gamePoints = userInfo?.gamePoints;
  let currentLevel = userInfo?.currentLevel;
  let dailyConstructionPoints = userInfo?.dailyConstructionPoints;
  let dailyAccumulateEarn = userInfo?.dailyAccumulateEarn;
  let totalAccumulateEarn = userInfo?.totalAccumulateEarn;
  let expectBeans = userInfo?.expectBeans;

  const infoPopup = () => {
    setInfo(true);
    overFlowHidden();
  };
  const close = () => {
    setInfo(false);
    overFlowAuto();
  };

  return (
    <>
      <MyPoints icon={pontsIcon} text="My Jashan Points: " points={gamePoints} />
      <BuilderGame
        gamePoints={gamePoints}
        currentLevel={currentLevel}
        dailyConstructionPoints={dailyConstructionPoints ? dailyConstructionPoints : 0}
        dailyAccumulateEarn={dailyAccumulateEarn}
        totalAccumulateEarn={totalAccumulateEarn}
        expectBeans={expectBeans}
        infoPopup={infoPopup}
      />
      <InfoPopup info={info} close={close} />
      <LeaderBoard tab2={tab2} restWinners={builderBeans?.list} arrayData={builderBeans} maxheight={"270vw"} title={title} />
    </>
  );
}

export default BuilderBeans;
