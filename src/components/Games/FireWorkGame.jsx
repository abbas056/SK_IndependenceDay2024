import React, { useContext, useState } from "react";
import fireBtn from "../../assets/Fire-Button.png";
import { baloons, firecrackers1, firecrackers2, mascot1, Mascot2 } from "../../js/images";
import { callingApi, cross, overFlowAuto, overFlowHidden, success, unsuccess } from "../../js/helpers";
import { ApiContext } from "../../services/Api";
import { baserUrl } from "../../js/baserUrl";
function FireWorkGame() {
  const [speed, setSpeed] = useState(1);
  const [alert, setAlert] = useState(false);
  const [popup, setPopup] = useState([]);
  const [oops, setOops] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { refreshApi, userId, userToken } = useContext(ApiContext);

  const selectSpeed = (speed) => {
    setSpeed(speed);
  };

  const fireTheCracker = () => {
    setButtonDisabled(true);
    callingApi(`${baserUrl}api/activity/independence/pak/talentFireworks?playCount=${speed}`, userId, userToken)
      .then(function (response) {
        if (response.msg === "success") {
          setTimeout(() => {
            setAlert(true);
            setPopup(
              success(
                <div className="d-flex fd-column jc-center al-center gap-2">
                  <div className="head-text f-chewy p-abs">Congratulations!</div>
                  Success
                </div>
              )
            );
            overFlowHidden();
            setOops(false);
            refreshApi();
          }, 1500);
        } else if (response.msg === "POINT_NOT_ENOUGH") {
          setOops(true);
          setAlert(true);
          setPopup(
            unsuccess(
              <div className="d-flex fd-column jc-center al-center gap-2">
                <div className="head-text f-chewy p-abs">Oops!</div>
                <div>You don't have enough Talent points right now, receive more event gifts & come back again.</div>
              </div>
            )
          );
          overFlowHidden();
        } else {
          setOops(true);
          setAlert(true);
          setPopup(
            unsuccess(
              <div className="d-flex fd-column jc-center al-center gap-2">
                <div className="head-text f-chewy p-abs">Oops!</div>
                <div>{response.msg}</div>
              </div>
            )
          );
          overFlowHidden();
        }
      })
      .catch(function (error) {
        setOops(true);
        setAlert(true);
        setPopup(
          unsuccess(
            <div className="d-flex fd-column jc-center al-center gap-2">
              <div className="head-text f-chewy p-abs">Oops!</div>
              <div>{error.message}</div>
            </div>
          )
        );
        overFlowHidden();
      });
  };
  const close = () => {
    overFlowAuto();
    setAlert(false);
    setButtonDisabled(false);
    setOops(false);
    setSpeed(1);
  };
  return (
    <>
      <div className="firework-game m-auto d-flex fd-column al-center f-tangoItalic gap-2">
        <div className="firework-game-area d-flex al-center jc-center p-rel">
          <div className="mascot d-flex p-abs">
            <img src={baloons} alt="" />
            <img src={mascot1} alt="" />
            <img src={Mascot2} alt="" />
            <img src={baloons} alt="" />
            <div className="firecrackers p-abs">
              <img src={firecrackers1} alt="" />
              <img src={firecrackers2} alt="" />
            </div>
          </div>
        </div>
        <div className="firework-game-bottom d-flex al-center jc-center">
          <div className="firework-game-bottom-chances d-flex al-center jc-center gap-1">
            <span
              className={speed === 1 ? "gray-0" : "gray-1"}
              onClick={() => {
                selectSpeed(1);
              }}
            >
              x1
            </span>
            <span
              className={speed === 10 ? "gray-0" : "gray-1"}
              onClick={() => {
                selectSpeed(10);
              }}
            >
              x10
            </span>
            <span
              className={speed === 100 ? "gray-0" : "gray-1"}
              onClick={() => {
                selectSpeed(100);
              }}
            >
              x100
            </span>
          </div>
          <button disabled={buttonDisabled} className="firework-game-bottom-fire-btn d-flex fd-column al-center jc-center gap-1 f-tangoItalic">
            <img
              className={buttonDisabled ? "gray-1" : "gray-0"}
              onClick={() => {
                fireTheCracker();
              }}
              src={fireBtn}
              alt=""
            />
            <span>1 Chance = 30K Talent Points</span>
          </button>
        </div>
      </div>
      <div className="overlay" style={{ visibility: alert ? "visible" : "hidden" }}>
        {alert ? (
          <div className="p-rel w-100 d-flex al-start jc-center" style={{ height: "100%" }}>
            <div className="game-popup d-flex al-center jc-center f-tangoItalic">
              {popup?.map((item, i) => {
                return (
                  <div className="container p-rel d-flex al-center jc-center " key={i} style={oops ? { height: "70vw" } : { height: "110vw" }}>
                    <div className="content m-auto p-abs d-flex al-center jc-center" style={oops ? { height: "50vw" } : { height: "90vw" }}>
                      <div className="body-text d-flex al-center jc-center fd-column">{item.data}</div>
                    </div>
                    <div className="modal-close p-abs" onClick={close}>
                      <img src={cross()} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default FireWorkGame;
