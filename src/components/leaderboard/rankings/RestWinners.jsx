import React, { useContext } from "react";
import unknown from "../../../assets/unknown.png";
import frame from "../../../assets/onward-Frame.png";
import { captureImageError, formatData, goTo } from "../../../js/helpers";
import { baserUrl } from "../../../js/baserUrl";
import enemiesIcon from "../../../assets/Daily-Enemies-Defeated-Icon.png";
import beanIcon from "../../../assets/bean.png";
// import gemIcon from "../../../assets/gems.png";
import LeaderBoardSlider from "./../../leaderboard-slider/LeaderBoardSlider";
import { ApiContext } from "../../../services/Api";

function RestWinners({
  userName,
  userScore,
  userAvatar,
  index,
  userId,
  listNumber,
  userLevel,
  actorLevel,
  tab1,
  tab2,
  tab3,
  desc,
  subTabs,
  eventGifting,
}) {
  const { isLive } = useContext(ApiContext);

  let levelUrl;
  let level;
  let icon;

  if (tab1) {
    levelUrl = `${baserUrl}streamkar/common/img/ulv/`;
    level = userLevel;
    icon = enemiesIcon;
  } else if (eventGifting) {
    if (subTabs.Talents) {
      levelUrl = `${baserUrl}streamkar/common/img/tlv/`;
      level = actorLevel;
      icon = `${baserUrl}streamkar/rewards/gems.png`;
    } else {
      levelUrl = `${baserUrl}streamkar/common/img/ulv/`;
      level = userLevel;
      icon = beanIcon;
    }
  } else if (tab3) {
    levelUrl = `${baserUrl}streamkar/common/img/tlv/`;
    level = actorLevel;
    icon = beanIcon;
  } else {
    levelUrl = `${baserUrl}streamkar/common/img/ulv/`;
    level = userLevel;
    icon = beanIcon;
  }
  let arrayDesc = desc && JSON.parse(desc);
  return (
    <>
      {tab2 || tab3 ? (
        <div className="users-details-onward f-tangoItalic p-rel" key={index}>
          <div className="rank-id d-flex al-center jc-center" style={{ top: "1vw", left: "43vw" }}>
            {listNumber}.
          </div>
          <div className="d-flex al-center p-rel jc-center">
            <div className="d-flex al-center gap-1">
              <div
                onClick={() => {
                  goTo(isLive, userId, userId);
                }}
              >
                <img onError={captureImageError} className="rank-user-image" src={userAvatar ? userAvatar : unknown} alt="" />
                <img className="rank-border-image p-rel" src={frame} alt="" />
              </div>
              <div className="user-info d-flex fd-column gap-1">
                <span className="username">{userName && userName.slice(0, 12)}</span>
                <img style={tab3 ? { width: "7vw" } : { width: "10vw" }} src={levelUrl + level + ".png"} alt="" />
              </div>
            </div>
          </div>
          <div className="rewards-slide d-flex al-center jc-end gap-1">
            <LeaderBoardSlider description={formatData(arrayDesc)} />
          </div>
        </div>
      ) : (
        <div className="users-details-onward f-tangoItalic" key={index}>
          <div className="d-flex al-center p-rel jc-center">
            <div className="rank-id d-flex al-center jc-center" style={tab1 ? { top: "-4vw", left: "38vw" } : { top: "-4vw", left: "34vw" }}>
              {listNumber}.
            </div>
            <div className="d-flex al-center gap-1">
              <div
                onClick={() => {
                  goTo(isLive, userId, userId);
                }}
              >
                <img onError={captureImageError} className="rank-user-image" src={userAvatar ? userAvatar : unknown} alt="" />
                <img className="rank-border-image p-rel" src={frame} alt="" />
              </div>
              <div className="user-info d-flex fd-column gap-1">
                <span className="username">{userName && userName.slice(0, 12)}</span>
                <img style={subTabs.Talents ? { width: "7vw" } : { width: "10vw" }} src={levelUrl + level + ".png"} alt="" />
              </div>
            </div>
          </div>
          <div className="est-rew d-flex al-center jc-start gap-1">
            <img style={{ width: "6vw", height: "6vw" }} src={icon} alt="" />
            <span>{userScore}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default RestWinners;
