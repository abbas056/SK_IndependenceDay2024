import React from "react";

function PopupBtns({ mainTabs, popupSwitch }) {
  return (
    <div className="popup-buttons">
      <button className="p-fix f-tangoItalic" onClick={() => popupSwitch("guide")}>
        Guide
      </button>
      <button className="p-fix f-tangoItalic" onClick={() => popupSwitch("eventGifting")}>
        Event <br /> Gifitng
      </button>
      <button
        className="p-abs f-tangoItalic"
        style={mainTabs.tab1 || mainTabs.tab2 || mainTabs.tab4 ? { top: "133vw" } : { top: "160vw" }}
        onClick={() => popupSwitch("details")}
      >
        Details
      </button>
      <button
        className="p-abs f-tangoItalic"
        style={mainTabs.tab1 || mainTabs.tab2 || mainTabs.tab4 ? { top: "133vw" } : { top: "160vw" }}
        onClick={() => popupSwitch("records")}
      >
        Records
      </button>
    </div>
  );
}

export default PopupBtns;
