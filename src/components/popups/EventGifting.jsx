import React, { useContext, useState } from "react";
import { cross, slicePlease } from "../../js/helpers";
import EventGifts from "../common/EventGifts";
// import SubButtons from "../sub-tabs/SubButtons";
// import SliderItems from "../rewards-slider/SliderItems";
// import GifitngLeaderboard from "../leaderboard/GifitngLeaderboard";
// import { ApiContext } from "../../services/Api";
import { giftingGifterrewards, giftingTalnetrewards } from "../../js/data";
import LeaderBoard from "../leaderboard/LeaderBoad";
import { ApiContext } from "../../services/Api";
import title from "../../assets/Leaderboard-title.png";
import SubButtons from "../sub-tabs/SubButtons";
import SliderItems from "../rewards-slider/SliderItems";
function EventGifting({ close, eventGifting }) {
  const { userInfo, beansSend, beansReceived } = useContext(ApiContext);
  const [subButtons, setsubButtons] = useState({
    Talents: true,
    Gifters: false,
  });
  const [subTabs, setSubTabs] = useState({
    Talents: true,
    Gifters: false,
  });
  let winners;
  let beansPot;
  if (subTabs.Talents) {
    winners = beansReceived;
    beansPot = userInfo?.beansTotalReceived;
  } else {
    winners = beansSend;
    beansPot = userInfo?.beansTotalSend;
  }

  const topWinners = slicePlease(winners?.list, 0, 3);
  const restWinners = slicePlease(winners?.list, 3, winners?.list?.length);

  let rewards;
  if (subButtons.Talents) {
    rewards = giftingTalnetrewards;
  } else {
    rewards = giftingGifterrewards;
  }

  const tabSwitch = (id) => {
    let newCat = {
      Talents: false,
      Gifters: false,
    };
    setsubButtons({ ...newCat, [id]: true });
  };
  return (
    <div className="p-rel w-100 d-flex al-start jc-center" style={{ height: "100%" }}>
      <div className="event-gifting">
        <div className="title f-hunter m-auto d-flex al-center jc-center p-abs">Event Gifting</div>
        <div className="container f-tangoItalic d-flex fd-column al-center jc-center">
          <EventGifts />
          <div className="gift-content d-flex fd-column al-center jc-center gap-4">
            <div className="heading">Gifting Rewards</div>
            <div className="topText d-flex al-center jc-center">Rewards for Talents and Gifters</div>
            <div className="sub-buttons-gifting d-flex jc-center al-center m-auto p-rel">
              <button onClick={() => tabSwitch(`Talents`)} className={subButtons.Talents ? "btn-active" : "btn"}>
                TALENTS
              </button>

              <button onClick={() => tabSwitch(`Gifters`)} className={subButtons.Gifters ? "btn-active" : "btn"}>
                GIFTERS
              </button>
            </div>
            <SliderItems eventGifting={eventGifting} rewards={rewards} />
          </div>
          <LeaderBoard
            eventGifting={eventGifting}
            topWinners={topWinners}
            restWinners={restWinners}
            arrayData={winners}
            maxheight={"187vw"}
            title={title}
            subTabs={subTabs}
            setSubTabs={setSubTabs}
            subBtn1name={"Talents"}
            subBtn2name={"Gifters"}
            beansPot={beansPot}
          />
          <div className="gifting-footer f-tangoItalic">All Rights Reserved </div>
        </div>
        <div className="close p-abs" onClick={close}>
          <img style={{ width: "10vw" }} src={cross()} alt="" />
        </div>
      </div>
    </div>
  );
}

export default EventGifting;
