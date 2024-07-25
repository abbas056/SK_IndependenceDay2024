import React, { useContext, useState } from "react";
import beanIcon from "../../assets/bean.png";
import barInner from "../../assets/Filled-bar2.png";
import buildBtn from "../../assets/build-Button.png";
import { building6, fountain, qaBtn } from "../../js/images";
import { ApiContext } from "../../services/Api";
import { callingApi, cross, overFlowAuto, overFlowHidden, success, unsuccess } from "../../js/helpers";
import { baserUrl } from "../../js/baserUrl";

function BuilderGame() {
  const [input, setInput] = useState(1);
  const [error, setError] = useState("Max value = 999");
  const [alert, setAlert] = useState(false);
  const [popup, setPopup] = useState([]);
  const [oops, setOops] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { refreshApi, userId, userToken } = useContext(ApiContext);
  let myChances = 10000;
  const handleInput = (event) => {
    let value = event.target.value;
    let max = myChances < 999 ? myChances : 999;
    let val = value.replace(/[^0-9]/g, "");
    let number = parseInt(val) > max ? max : parseInt(val) <= 0 ? 1 : parseInt(val);
    setInput(number);
    if (event.target.value === "") {
      setError("Enter some value");
      setButtonDisabled(true);
    } else if (
      value === `${max}.0` ||
      value === `${max}.00` ||
      value === `${max}.000` ||
      value === `${max}.0000` ||
      value === `${max}.00000` ||
      value === `${max}.000000` ||
      value === `${max}.0000000` ||
      value === `${max}.00000000` ||
      value === `${max}.000000000` ||
      value === `${max}.0000000000`
    ) {
      setInput(number);
      setError("Wrong input value");
      setButtonDisabled(true);
    } else {
      setError("Max value = 999");
      setButtonDisabled(false);
    }
  };

  const builTheBuilding = () => {
    setButtonDisabled(true);
    callingApi(`${baserUrl}api/activity/independence/pak/builderBeans?playCount=${input}`, userId, userToken)
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
    setInput(1);
  };
  return (
    <>
      <div className="builder-game m-auto d-flex fd-column al-center f-tangoItalic">
        <div className="builder-game-area d-flex al-center jc-center p-rel">
          <div className="builder-game-area-earnings d-flex al-center jc-center c-white p-abs">
            My accumulated earnings: 1000 <img src={beanIcon} alt="" />
          </div>
          <div className="estimated-rewards p-abs d-flex al-center jc-center gap-1">
            <div className="rewards d-flex al-center jc-center fw-bold">xx</div>
            <img src={qaBtn} alt="" />
          </div>
          <img className="fountain p-abs" src={fountain} alt="" />
          <img className="building p-abs" src={building6} alt="" />
        </div>
        <div className="builder-game-progress d-flex al-center jc-center fd-column">
          <div className="builder-game-progress-level d-flex al-center jc-center">Level 2</div>
          <div className="builder-game-progress-bar p-rel d-flex al-center jc-start">
            <img src={barInner} alt="" />
            <div className="builder-game-progress-bar-points p-abs m-auto">4000/8000 Construction Points</div>
          </div>
        </div>
        <div className="builder-game-bottom d-flex al-center jc-s-even">
          <div className="builder-game-bottom-chances d-flex al-center jc-s-even">
            <input
              className="input d-flex al-center jc-center"
              placeholder="Enter value"
              name="NumInput"
              type="number"
              value={input}
              min={0}
              max={999}
              onChange={handleInput}
            />
            <div className="counter d-flex al-center jc-center">x999</div>
          </div>
          <button disabled={buttonDisabled} className="builder-game-bottom-build-btn d-flex fd-column al-center jc-center gap-1">
            <img
              className={buttonDisabled ? "gray-1" : "gray-0"}
              onClick={() => {
                builTheBuilding();
              }}
              src={buildBtn}
              alt=""
            />
            <span>1 Chance = 20K Jashan Points</span>
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

export default BuilderGame;
