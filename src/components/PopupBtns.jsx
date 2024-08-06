import React, { useContext } from "react";
import { ApiContext } from "../services/Api";

function PopupBtns({ mainTabs, popupSwitch }) {
  const { buttonDisabled } = useContext(ApiContext);

  return (
    <div className="popup-buttons">
      <button disabled={buttonDisabled} className="p-fix f-tangoItalic" onClick={() => popupSwitch("guide")}>
        Guide
      </button>
      <button disabled={buttonDisabled} className="p-fix f-tangoItalic" onClick={() => popupSwitch("eventGifting")}>
        Event <br /> Gifitng
      </button>
      <button
        disabled={buttonDisabled}
        className="p-abs f-tangoItalic"
        style={mainTabs.tab1 ? { top: "150vw" } : { top: "132vw" }}
        onClick={() => popupSwitch("details")}
      >
        Details
      </button>
      <button
        disabled={buttonDisabled}
        className="p-abs f-tangoItalic"
        style={mainTabs.tab1 ? { top: "150vw" } : { top: "132vw" }}
        onClick={() => popupSwitch("records")}
      >
        Records
      </button>
    </div>
  );
}

export default PopupBtns;
