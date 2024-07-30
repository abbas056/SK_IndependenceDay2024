import React, { useContext, useState } from "react";
import MyPoints from "../common/MyPoints";
import pontsIcon from "../../assets/My-Jashan-Points-Icon.png";
import WarGame from "../Games/WarGame";
import Tab1Rewards from "../Tab1Rewards";
import LeaderBoard from "../leaderboard/LeaderBoad";
import { ApiContext } from "../../services/Api";
import { nowDate, PrevDate, slicePlease } from "../../js/helpers";
import title from "../../assets/Leaderboard-title.png";

function BattleField({ tab1 }) {
  const { userInfo, dailyScoreToday, dailyScorePrevious } = useContext(ApiContext);
  const [subTabs, setSubTabs] = useState({
    Today: true,
    Previous: false,
  });

  let todayKey = `DAILY_USER_${nowDate}`;
  let prevKey = `DAILY_USER_${PrevDate}`;
  let overallBeans = userInfo?.beansPotInfo?.OVERALL_BEANS;
  let overallGems = userInfo?.beansPotInfo?.OVERALL_GEMS;
  let gamePoints = userInfo?.gamePoints;
  let dailyScores = userInfo?.dailyScores;
  let totalScores = userInfo?.totalScores;

  let beansPot;
  let winners;

  if (subTabs.Today) {
    winners = dailyScoreToday;
    beansPot = userInfo?.beansPotInfo?.[todayKey];
  } else {
    winners = dailyScorePrevious;
    beansPot = userInfo?.beansPotInfo?.[prevKey];
  }

  const topWinners = slicePlease(winners?.list, 0, 3);
  const restWinners = slicePlease(winners?.list, 3, winners?.list?.length);
  return (
    <div>
      <MyPoints icon={pontsIcon} text="My Jashan Points: " points={gamePoints} />
      <WarGame dailyScores={dailyScores} gamePoints={gamePoints} totalScores={totalScores ? totalScores : 0} />
      <Tab1Rewards overallBeans={overallBeans} />
      <LeaderBoard
        tab1={tab1}
        topWinners={topWinners}
        restWinners={restWinners}
        arrayData={winners}
        maxheight={"187vw"}
        title={title}
        subTabs={subTabs}
        setSubTabs={setSubTabs}
        subBtn1name={"Today"}
        subBtn2name={"Previous"}
        beansPot={beansPot}
      />
    </div>
  );
}

export default BattleField;
