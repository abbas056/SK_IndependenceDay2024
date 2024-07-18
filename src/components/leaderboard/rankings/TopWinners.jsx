import React from "react";
import unknown from "../../../assets/unknown.png";
import frame1 from "../../../assets/1st-Frame.png";
import { captureImageError, currencySlang, estBeans } from "../../../js/helpers";
import { baserUrl } from "../../../js/baserUrl";
import beanIcon from "../../../assets/bean.png";
import raceIcon from "../../../assets/bean.png";

import gemIcon from "../../../assets/gems.png";

function TopWinners({ userName, userScore, userAvatar, userId, index, userLevel, actorLevel, tab2, beansPot, subTabs, eventGifting }) {
  let levelUrl;
  let level;
  let icon;
  if (tab2) {
    levelUrl = `${baserUrl}streamkar/common/img/ulv/`;
    level = userLevel;
    icon = raceIcon;
  } else if (eventGifting) {
    if (subTabs.Gifters) {
      levelUrl = `${baserUrl}streamkar/common/img/ulv/`;
      level = userLevel;
      icon = beanIcon;
    } else {
      levelUrl = `${baserUrl}streamkar/common/img/tlv/`;
      level = actorLevel;
      icon = `${baserUrl}streamkar/rewards/gems.png`;
    }
  }
  let rank = index + 1;
  return (
    <div className="innerData p-rel f-tangoItalic">
      <div className="rank p-abs">{rank}.</div>
      <div className={rank == 1 ? "first-user" : "runner-user"}>
        <img onError={captureImageError} className="rank-user-image" src={userAvatar ? userAvatar : unknown} alt="" />
        <a href={`http://www.kktv1.com/m/?roomid=${userId}`}>
          <img className="rank-border-image p-rel" src={frame1} alt="" />
        </a>
      </div>
      <div className="bottom-data">
        <div className="bottom-info">
          <div className="username">{userName && userName.slice(0, 10)}</div>
          <img style={subTabs.Talents ? { width: "7vw" } : { width: "10vw" }} src={levelUrl + level + ".png"} alt="" />
        </div>
        <div className="score-box d-flex fd-column al-center">
          <div className="points d-flex al-center jc-center gap-1">
            <img style={{ width: "5vw", height: "5vw" }} src={icon} alt="" />
            <span> {userScore}</span>
          </div>
          {eventGifting ? null : (
            <div className="estimated p-abs d-flex al-center jc-center">
              <span>Est Beans:</span>
              <div className="d-flex al-center jc-center">
                <img style={{ width: "5vw", height: "5vw" }} src={beanIcon} alt="" />
                <span>{estBeans(beansPot, rank)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopWinners;
