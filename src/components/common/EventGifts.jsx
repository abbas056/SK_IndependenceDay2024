import React from "react";
import { eventGifts } from "../../js/data";
import bean from "../../assets/bean.png";

function EventGifts() {
  return (
    <div className="event-gifts d-flex fd-column al-center jc-center gap-4 f-tangoItalic p-rel">
      <div className="heading p-abs fw-bold">Event Gifts</div>
      <div className="gifts d-flex al-center jc-center gap-1 p-rel">
        {eventGifts.map((item, index) => (
          <div className="gifts-box d-flex fd-column al-center jc-center gap-1" key={index}>
            <div className="gifts-box-frame d-flex fd-column al-center jc-center gap-2">
              <img style={{ width: "10vw" }} src={item.img} alt="" />
              <div className="gifts-box-name fw-bold">{item.name}</div>
            </div>
            <div className="gifts-box-cost p-abs d-flex al-center jc-center">
              <img src={bean} alt="" />
              <span>{item.cost}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventGifts;
