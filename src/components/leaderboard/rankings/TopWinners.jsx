import React, { useContext } from "react";
import unknown from "../../../assets/unknown.png";
import frame1 from "../../../assets/1st-Frame.png";
import { captureImageError, estBeans, goTo } from "../../../js/helpers";
import { baserUrl } from "../../../js/baserUrl";
import beanIcon from "../../../assets/bean.png";
import enemiesIcon from "../../../assets/Daily-Enemies-Defeated-Icon.png";
import gemIcon from "../../../assets/gems.png";
import { ApiContext } from "../../../services/Api";
import { rank1, rank2, rank3 } from "../../../js/images";

function TopWinners({ userName, userScore, userAvatar, userId, index, userLevel, actorLevel, tab1, beansPot, subTabs, eventGifting }) {
  const { isLive } = useContext(ApiContext);

  let levelUrl;
  let level;
  let icon;
  if (tab1) {
    levelUrl = `${baserUrl}streamkar/common/img/ulv/`;
    level = userLevel;
    icon = enemiesIcon;
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
      <div className="rank p-abs">
        <img src={rank === 1 ? rank1 : rank === 2 ? rank2 : rank3} alt="" />
      </div>
      <div className={rank == 1 ? "first-user" : "runner-user"}>
        <div
          onClick={() => {
            goTo(isLive, userId, userId);
          }}
        >
          <img onError={captureImageError} className="rank-user-image" src={userAvatar ? userAvatar : unknown} alt="" />
          <img className="rank-border-image p-rel" src={frame1} alt="" />
        </div>
      </div>
      <div className="bottom-data d-flex fd-column al-center jc-center">
        <div className="bottom-info d-flex fd-column al-center jc-center gap-2">
          <div className="username">{userName && userName.slice(0, 10)}</div>
          <img style={subTabs.Talents ? { width: "7vw" } : { width: "12vw" }} src={levelUrl + level + ".png"} alt="" />
        </div>
        <div className="score-box d-flex fd-column al-center">
          <div className="points d-flex al-center jc-center gap-1">
            <img style={{ width: "6vw", height: "6vw" }} src={icon} alt="" />
            <span> {userScore}</span>
          </div>
          {eventGifting ? null : (
            <div className="estimated p-abs d-flex al-center jc-center">
              <span>{subTabs.Today ? "Est Beans:" : "Beans Won:"}</span>
              <div className="d-flex al-center jc-center">
                <img style={{ width: "5vw", height: "5vw" }} src={beanIcon} alt="" />
                <span>{estBeans(beansPot, rank)}</span>
                {/* <span>dummy value</span> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopWinners;
