import React from "react";
import unknown from "../../../assets/unknown.png";
import frame from "../../../assets/onward-Frame.png";
import { captureImageError, formatData } from "../../../js/helpers";
import { baserUrl } from "../../../js/baserUrl";
import raceIcon from "../../../assets/bean.png";
import beanIcon from "../../../assets/bean.png";
// import gemIcon from "../../../assets/gems.png";
import LeaderBoardSlider from "./../../leaderboard-slider/LeaderBoardSlider";

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
  let levelUrl;
  let level;
  let icon;

  if (tab2) {
    levelUrl = `${baserUrl}streamkar/common/img/ulv/`;
    level = userLevel;
    icon = raceIcon;
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
      {tab1 || tab3 ? (
        <div className="users-details-onward f-tangoItalic" key={index}>
          <div className="d-flex al-center p-rel jc-center">
            <div className="rank-id d-flex al-center jc-center">{listNumber}.</div>
            <div className="d-flex al-center gap-2">
              <img onError={captureImageError} className="rank-user-image" src={userAvatar ? userAvatar : unknown} alt="" />
              <a href={`http://www.kktv1.com/m/?roomid=${userId}`}>
                <img className="rank-border-image p-rel" src={frame} alt="" />
              </a>
              <div className="user-info d-flex fd-column gap-1">
                <span className="username">{userName && userName.slice(0, 12)}</span>
                <img style={tab3 ? { width: "7vw" } : { width: "10vw" }} src={levelUrl + level + ".png"} alt="" />
              </div>
            </div>
          </div>
          <div className="rewards-slide d-flex al-center jc-start gap-1">
            <LeaderBoardSlider description={formatData(arrayDesc)} />
          </div>
        </div>
      ) : (
        <div className="users-details-onward f-tangoItalic" key={index}>
          <div className="d-flex al-center p-rel jc-center">
            <div className="rank-id d-flex al-center jc-center">{listNumber}.</div>
            <div className="d-flex al-center gap-2">
              <img onError={captureImageError} className="rank-user-image" src={userAvatar ? userAvatar : unknown} alt="" />
              <a href={`http://www.kktv1.com/m/?roomid=${userId}`}>
                <img className="rank-border-image p-rel" src={frame} alt="" />
              </a>
              <div className="user-info d-flex fd-column gap-1">
                <span className="username">{userName && userName.slice(0, 12)}</span>
                <img style={subTabs.Talents ? { width: "7vw" } : { width: "10vw" }} src={levelUrl + level + ".png"} alt="" />
              </div>
            </div>
          </div>
          <div className="est-rew d-flex al-center jc-start gap-1">
            <img style={{ width: "5vw", height: "5vw" }} src={icon} alt="" />
            <span>{userScore}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default RestWinners;
