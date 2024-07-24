import React, { useContext } from "react";
import pontsIcon from "../../assets/Talent-Points-Icon.png";
import MyPoints from "../common/MyPoints";
import FireWorkGame from "../Games/FireWorkGame";
import LeaderBoard from "../leaderboard/LeaderBoad";
import { ApiContext } from "../../services/Api";
import title from "../../assets/Winners-Title.png";

function TalentFireWork({ tab3 }) {
  const { userInfo, talentFireworks } = useContext(ApiContext);
  let talentPoints = userInfo?.talentPoints;

  return (
    <div>
      <MyPoints icon={pontsIcon} text="My Talent Points: " points={talentPoints} tab3={tab3} />
      <FireWorkGame />
      <LeaderBoard tab3={tab3} restWinners={talentFireworks?.list} arrayData={talentFireworks} maxheight={"270vw"} title={title} />
    </div>
  );
}

export default TalentFireWork;
