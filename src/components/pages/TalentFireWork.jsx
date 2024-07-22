import React, { useContext } from "react";
import pontsIcon from "../../assets/Talent-Points-Icon.png";
import MyPoints from "../common/MyPoints";
import FireWorkGame from "../Games/FireWorkGame";
import LeaderBoard from "../leaderboard/LeaderBoad";
import { ApiContext } from "../../services/Api";
import title from "../../assets/Winners-Title.png";

function TalentFireWork({ tab3 }) {
  const { tickertape } = useContext(ApiContext);

  return (
    <div>
      <MyPoints icon={pontsIcon} text="My Talent Points: " points={1} tab3={tab3} />
      <FireWorkGame />
      <LeaderBoard tab3={tab3} restWinners={tickertape?.list} arrayData={tickertape} maxheight={"270vw"} title={title} />
    </div>
  );
}

export default TalentFireWork;
