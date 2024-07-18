import React, { useContext, useState } from "react";
import MyPoints from "../common/MyPoints";
import pontsIcon from "../../assets/My-Jashan-Points-Icon.png";
import WarGame from "../Games/WarGame";
import Tab1Rewards from "../Tab1Rewards";
import LeaderBoard from "../leaderboard/LeaderBoad";
import { ApiContext } from "../../services/Api";
import { slicePlease } from "../../js/helpers";
import title from "../../assets/Leaderboard-title.png";

function BattleField({ tab1 }) {
  const { userInfo, todayWinners, previousWinners } = useContext(ApiContext);

  const tab1Tickertape = [];
  const [subTabs, setSubTabs] = useState({
    Today: true,
    Previous: false,
  });

  let winners;
  if (subTabs.Today) {
    winners = todayWinners;
    // beansPot = userInfo?.beansPotInfo?.[todayKey];
  } else {
    winners = previousWinners;
    // beansPot = userInfo?.beansPotInfo?.[prevKey];
  }

  const topWinners = slicePlease(winners?.list, 0, 3);
  const restWinners = slicePlease(winners?.list, 3, winners?.list?.length);
  return (
    <div>
      <MyPoints icon={pontsIcon} text="My Jashan Point: " />
      <WarGame />
      <Tab1Rewards />
      <LeaderBoard
        tab1={tab1}
        topWinners={topWinners}
        restWinners={restWinners}
        arrayData={winners}
        maxheight={"159vw"}
        title={title}
        subTabs={subTabs}
        setSubTabs={setSubTabs}
        subBtn1name={"Today"}
        subBtn2name={"Previous"}
      />
    </div>
  );
}

export default BattleField;
