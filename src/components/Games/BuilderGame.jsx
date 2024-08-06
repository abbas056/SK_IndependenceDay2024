import React, { useContext, useState } from "react";
import beanIcon from "../../assets/bean.png";
import barInner from "../../assets/Filled-bar2.png";
import buildBtn from "../../assets/build-Button.png";
import { buildingEffect, buildingIcon, fountain, jashanPointsIcon, mascotBuilderL, mascotBuilderR, qaBtn } from "../../js/images";
import { ApiContext } from "../../services/Api";
import { buildings, callingApi, cross, overFlowAuto, overFlowHidden, rewardImages, success, unsuccess } from "../../js/helpers";
import { baserUrl } from "../../js/baserUrl";

function BuilderGame({ gamePoints, currentLevel, dailyConstructionPoints, dailyAccumulateEarn, totalAccumulateEarn, expectBeans, infoPopup }) {
  const { refreshApi, userId, userToken, buttonDisabled, setButtonDisabled } = useContext(ApiContext);
  const [input, setInput] = useState(1);
  const [error, setError] = useState("Max value = 999");
  const [alert, setAlert] = useState(false);
  const [popup, setPopup] = useState([]);
  const [oops, setOops] = useState(false);
  const [effect, setEffect] = useState(false);
  const [disableInput, setdisableInput] = useState(false);

  const handleInput = (event) => {
    let value = event.target.value;
    let max = gamePoints < 999 ? gamePoints : 999;
    let val = value.replace(/[^0-9]/g, "");
    let number = parseInt(val) > max ? max : parseInt(val) <= 0 ? 1 : parseInt(val);
    setInput(number);
    if (event.target.value === "") {
      setError("Enter some value");
      setButtonDisabled(true);
    } else if (
      input === `${value}.0` ||
      input === `${value}.00` ||
      input === `${value}.000` ||
      input === `${value}.0000` ||
      input === `${value}.00000` ||
      input === `${value}.000000` ||
      input === `${value}.0000000` ||
      input === `${value}.00000000` ||
      input === `${value}.000000000` ||
      input === `${value}.0000000000`
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
    setdisableInput(true);
    setButtonDisabled(true);
    callingApi(`${baserUrl}api/activity/independence/pak/builderBeans?playCount=${input}`, userId, userToken)
      .then(function (response) {
        if (response.msg === "success") {
          refreshApi();
          setEffect(true);
          setTimeout(() => {
            setAlert(true);
            setPopup(
              success(
                <div className="d-flex fd-column jc-center al-center gap-2">
                  <div className="head-text f-chewy p-abs">{response?.data?.isLevelUp === false ? "Congratulations!" : "Level Up!"}</div>
                  {response?.data?.isLevelUp === false ? (
                    <span>
                      You have successfully constructed your building{" "}
                      <img style={{ width: "5vw", verticalAlign: "bottom" }} src={buildingIcon} alt="" /> & have won
                    </span>
                  ) : (
                    <span>
                      You have successfully upgraded your building <img style={{ width: "5vw", verticalAlign: "bottom" }} src={buildingIcon} alt="" />{" "}
                      to Level {response?.data?.currentLevel} & have won
                    </span>
                  )}
                  <div
                    className={
                      response?.data?.rewardList.length > 6 ? "rews-box rews-box-max d-flex al-start jc-center" : "rews-box d-flex al-start jc-center"
                    }
                  >
                    {response?.data?.rewardList.map((item, index) => {
                      return (
                        <div className="d-flex al-center jc-center fd-column gap-1" key={index} style={{ width: "30%" }}>
                          <div className="reward-img d-flex al-center jc-center">
                            <img src={rewardImages(item?.desc)} alt="" />
                          </div>
                          <div className="name f-bold">
                            <div>{item.desc}</div>x{" "}
                            {item?.desc == "Beans" || item?.desc == "Gems" ? (
                              item?.count
                            ) : (
                              <>
                                {item.count} {item.count === 1 ? "day" : "days"}
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            );
            overFlowHidden();
            setOops(false);
          }, 2000);
        } else if (response.msg === "GAME_POINT_NOT_ENOUGH") {
          setOops(true);
          setAlert(true);
          setPopup(
            unsuccess(
              <div className="d-flex fd-column jc-center al-center gap-2">
                <div className="head-text f-chewy p-abs">Oops!</div>
                <div>
                  You don’t have enough Jashan Points <img style={{ width: "5vw", verticalAlign: "bottom" }} src={jashanPointsIcon} alt="" /> to
                  construct the building right now, send more event gifts & come back again.
                </div>
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
    setEffect(false);
    setdisableInput(false);
  };
  const maxPoints = 8000;
  const widthPercentage = Math.min((dailyConstructionPoints / maxPoints) * 100, 100);
  return (
    <>
      <div className="builder-game m-auto d-flex fd-column al-center f-tangoItalic">
        <div className="builder-game-area d-flex al-center jc-center p-rel">
          <div className="builder-game-area-earnings d-flex al-center jc-center c-white p-abs">
            My accumulated earnings: {totalAccumulateEarn ? totalAccumulateEarn : 0} <img src={beanIcon} alt="" />
          </div>
          <div className="estimated-rewards p-abs d-flex al-center jc-center gap-1">
            <div className="rewards d-flex al-center jc-center fw-bold">
              Today's Estimated <br /> Rewards: {dailyAccumulateEarn ? dailyAccumulateEarn : 0}
            </div>
            <button
              onClick={() => {
                infoPopup();
              }}
            >
              <img src={qaBtn} alt="" />
            </button>
          </div>
          <img className="fountain p-abs" src={fountain} alt="" />
          <img className="effect p-abs" style={effect ? { display: "block" } : { display: "none" }} src={buildingEffect} alt="" />
          <div className="mascot">
            <img className="p-abs" style={effect ? { display: "block" } : { display: "none" }} src={mascotBuilderL} alt="" />
            <img className="p-abs" style={effect ? { display: "block" } : { display: "none" }} src={mascotBuilderL} alt="" />
            <img className="p-abs" style={effect ? { display: "block" } : { display: "none" }} src={mascotBuilderR} alt="" />
          </div>
          <img className="building p-abs" src={buildings(currentLevel)} alt="" />
        </div>
        <div className="builder-game-progress d-flex al-center jc-center fd-column">
          <div className="builder-game-progress-level d-flex al-center jc-center">Level {currentLevel ? currentLevel : 0}</div>
          <div className="builder-game-progress-bar p-rel d-flex al-center jc-start">
            <div className="bar-outer d-flex al-center jc-start">
              <img style={{ width: `${widthPercentage}%` }} src={barInner} alt="" />
            </div>
            <div className="builder-game-progress-bar-points p-abs m-auto">
              {dailyConstructionPoints ? dailyConstructionPoints : 0}/8000 Construction Points
            </div>
          </div>
        </div>
        <div className="builder-game-bottom d-flex al-center jc-s-even">
          <div className="builder-game-bottom-chances d-flex al-center jc-s-even p-rel">
            <input
              disabled={disableInput}
              className="input d-flex al-center jc-center"
              placeholder="Enter value"
              name="NumInput"
              type="number"
              value={input}
              min={0}
              max={999}
              onChange={handleInput}
            />
            <span className="error p-abs">{error}</span>
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
