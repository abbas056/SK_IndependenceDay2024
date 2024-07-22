import React, { useState } from "react";
import { cross } from "../../js/helpers";
import EventGifts from "../common/EventGifts";
import Content from "./Content";
import down from "../../assets/Popups/other-popups/down-Arrow.png";
import right from "../../assets/Popups/other-popups/down-Arrow.png";
import { guideContent } from "../../js/data";

function GuidePopup({ close, language }) {
  let current;
  language === "Urdu/Hindi" ? (current = guideContent.Urdu) : (current = guideContent.English);
  const [collapsible, setcollapsible] = useState({
    boxFirst: true,
    boxSecond: false,
    boxThird: false,
    eventGifitng: false,
  });
  const collapsibleSwitch = (id) => {
    let newCat = {
      boxFirst: false,
      boxSecond: false,
      boxThird: false,
      eventGifitng: false,
    };
    setcollapsible(collapsible ? { ...newCat, [id]: true } : { ...newCat, [id]: false });
  };
  return (
    <div className="p-rel w-100 d-flex al-start jc-center" style={{ height: "100%" }}>
      <div className="guide-popup">
        <div className="title f-hunter m-auto d-flex al-center jc-center p-abs c-white">Guide</div>
        <div className="container fd-column d-flex al-center jc-center gap-4">
          <EventGifts />
          <div className="guide-popup-content fd-column d-flex al-center jc-center f-tangoItalic">
            <div className="heading">How to play</div>
            <div className="top-text">{current.topText}</div>
            <div className="how-to-play d-flex fd-column jc-center gap-2 m-auto">
              <div className="love-connection">
                <div className="toggle-btn p-rel jc-center al-center d-flex">
                  <div className=" title-text f-tangoItalic d-flex al-center jc-center fw-bold">Battle Field</div>
                  <img className="arrow" onClick={() => collapsibleSwitch("boxFirst")} src={collapsible.boxFirst ? down : right} alt="" />
                </div>
                {collapsible.boxFirst && <Content boxFirst={collapsible.boxFirst} language={language} />}
              </div>
              <div className="love-dare">
                <div className="toggle-btn p-rel jc-center al-center d-flex">
                  <div className=" title-text f-tangoItalic d-flex al-center jc-center fw-bold">Builder Beans</div>
                  <img className="arrow" onClick={() => collapsibleSwitch("boxSecond")} src={collapsible.boxSecond ? down : right} alt="" />
                </div>
                {collapsible.boxSecond && <Content boxSecond={collapsible.boxSecond} language={language} />}
              </div>
              <div className="talent-tree">
                <div className="toggle-btn p-rel jc-center al-center d-flex">
                  <div className=" title-text f-tangoItalic d-flex al-center jc-center fw-bold">Talent Fireworks</div>
                  <img className="arrow" onClick={() => collapsibleSwitch("boxThird")} src={collapsible.boxThird ? down : right} alt="" />
                </div>
                {collapsible.boxThird && <Content boxThird={collapsible.boxThird} language={language} />}
              </div>
              <div className="event-gifitng">
                <div className="toggle-btn p-rel jc-center al-center d-flex">
                  <div className=" title-text f-tangoItalic d-flex al-center jc-center fw-bold">Event Gifting</div>
                  <img className="arrow" onClick={() => collapsibleSwitch("eventGifitng")} src={collapsible.eventGifitng ? down : right} alt="" />
                </div>
                {collapsible.eventGifitng && <Content eventGifitng={collapsible.eventGifitng} language={language} />}
              </div>
            </div>
          </div>
        </div>
        <div className="close p-abs" onClick={close}>
          <img style={{ width: "10vw" }} src={cross()} alt="" />
        </div>
      </div>
    </div>
  );
}

export default GuidePopup;
