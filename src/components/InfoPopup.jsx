import React from "react";
import { cross } from "../js/helpers";

function InfoPopup({ info, close }) {
  return (
    <div className="overlay" style={{ visibility: info ? "visible" : "hidden" }}>
      {info ? (
        <div className="info-popup p-rel d-flex al-center jc-center f-tangoItalic">
          <div className="head f-hunter p-abs  d-flex al-center jc-center">Information</div>
          <div className="container d-flex al-center jc-center">
            <div className="body-text d-flex al-center jc-center fd-column">Beans Rewards will be sent at 24:00 GMT</div>
            <div className="modal-close p-abs" onClick={close}>
              <img src={cross()} alt="" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default InfoPopup;
