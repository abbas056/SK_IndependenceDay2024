import React, { useContext, useState } from "react";
import {
  beanIcon,
  canon,
  defeatIcon,
  enemiesDefeatIcon,
  filledBar,
  fiveBoxes,
  hand,
  jashanPointsIcon,
  landMine,
  nineBoxes,
  oneBox,
  plus,
  smallBomb,
  soldier,
  startBtn,
  superMine,
  warGif1,
  warGif2,
  warGif3,
} from "../../js/images";
import { callingApi, cross, overFlowAuto, overFlowHidden, rewardImages, success, unsuccess } from "../../js/helpers";
import { baserUrl } from "../../js/baserUrl";
import { ApiContext } from "../../services/Api";

function WarGame({ dailyScores, gamePoints, totalScores }) {
  const [values, setValues] = useState([1, 1, 1]);
  const [selectBomb, setSelectBomb] = useState(1);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [error, setError] = useState("Max value = 999");
  const [alert, setAlert] = useState(false);
  const [popup, setPopup] = useState([]);
  const [oops, setOops] = useState(false);
  const { refreshApi, userId, userToken } = useContext(ApiContext);
  const [animation, setanimation] = useState();

  const handleIncrement = (index) => {
    const newValues = [...values];
    newValues[index] += 1;
    setValues(newValues);
  };
  const maxScore = 2000;
  const widthPercentage = Math.min((totalScores / maxScore) * 100, 100);
  const handleBomb = (index) => {
    setSelectBomb(index);
  };

  const handleInput = (event, index) => {
    let value = event.target.value;
    let max = gamePoints < 999 ? gamePoints : 999;
    let val = value.replace(/[^0-9]/g, "");
    let number = parseInt(val) > max ? max : parseInt(val) <= 0 ? 1 : parseInt(val);

    const newValues = [...values];
    newValues[index] = number;
    setValues(newValues);

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
      setError("Wrong input value");
      setButtonDisabled(true);
    } else {
      setError("Max value = 999");
      setButtonDisabled(false);
    }
  };
  let type;
  let playCount;
  if (selectBomb === 1) {
    type = 1;
    playCount = values[0];
  } else if (selectBomb === 2) {
    type = 2;
    playCount = values[1];
  } else {
    type = 3;
    playCount = values[2];
  }
  const startBattle = () => {
    setButtonDisabled(true);
    callingApi(`${baserUrl}api/activity/independence/pak/battleField?playCount=${playCount}&type=${type}`, userId, userToken)
      .then(function (response) {
        if (response.msg === "success") {
          const successTime = response?.data?.successTimes;
          const winScore = successTime;
          const lossScore = playCount - successTime;
          if (successTime === 0) {
            setanimation(warGif1);
          } else if (successTime === 1) {
            setanimation(warGif2);
          } else {
            setanimation(warGif3);
          }
          setTimeout(() => {
            setAlert(true);
            setPopup(
              success(
                <div className="d-flex fd-column jc-center al-center gap-2">
                  <div className="head-text f-chewy p-abs">{successTime === 0 ? "Defeat!" : successTime === 1 ? "Victory!" : "Amazing Battle"}</div>
                  {successTime === 0 ? (
                    <span>It looks like you have lost the battle this time, here’s a reward for your effort, you have won</span>
                  ) : successTime === 1 ? (
                    <span>
                      You have successfully defeated {winScore}{" "}
                      <img style={{ width: "5vw", verticalAlign: "middle" }} src={enemiesDefeatIcon} alt="" /> & have won
                    </span>
                  ) : (
                    <span>
                      That was a great battle! You have successfully defeated {winScore} & lost {lossScore} battles, you have won
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
            refreshApi();
          }, 5000);
        } else if (response.msg === "POINT_NOT_ENOUGH") {
          setOops(true);
          setAlert(true);
          setPopup(
            unsuccess(
              <div className="d-flex fd-column jc-center al-center gap-2">
                <div className="head-text f-chewy p-abs">Oops!</div>
                <div>
                  You don’t have enough Jashan Points <img style={{ width: "5vw", verticalAlign: "middle" }} src={jashanPointsIcon} alt="" /> for the
                  battle right now, send more event gifts & come back again.
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
    setSelectBomb(1);
    setValues([1, 1, 1]);
    setanimation();
  };
  return (
    <>
      <div className="war-game m-auto d-flex fd-column al-center f-tangoItalic gap-4">
        <div className="war-game-battleField fd-column d-flex al-center jc-center p-rel">
          <img className="animation p-abs" src={animation} alt="" />
          <div className="soldiers d-flex al-center jc-s-even p-abs">
            <img src={soldier} alt="" />
            <img src={soldier} alt="" />
            <img src={soldier} alt="" />
            <img src={soldier} alt="" />
            <img src={soldier} alt="" />
          </div>
          <div className="p-abs">
            <button disabled={buttonDisabled}>
              <img
                onClick={() => {
                  startBattle();
                }}
                style={selectBomb === 1 ? { width: "13vw" } : { width: "40vw" }}
                src={selectBomb === 1 ? oneBox : selectBomb === 2 ? fiveBoxes : nineBoxes}
                alt=""
              />
            </button>
          </div>
          <img className="hand p-abs" src={hand} alt="" />
          <div className="canon p-abs">
            <img src={canon} alt="" />
          </div>
        </div>
        <div className="war-game-progress d-flex fd-column al-center jc-s-even">
          <div className="text fw-bold"> War Victory Progress</div>
          <div className="progress-bar d-flex al-center jc-center gap-2">
            <div className="bar d-flex al-center jc-start p-rel">
              <img style={{ width: `${widthPercentage}%` }} src={filledBar} alt="" />
              <span className="count p-abs">
                {totalScores ? totalScores : 0}/{maxScore}
              </span>
            </div>
            <div className="d-flex al-center jc-center">
              <span>2000</span>
              <img className="w-5vw h-5vw" src={beanIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="btn-area d-flex al-center jc-center">
          <div className="select-img d-flex al-center jc-s-even">
            <div
              className={
                selectBomb === 1 ? "box d-flex fd-column al-center jc-center gap-1 gray-0" : "box d-flex fd-column al-center jc-center gap-1 gray-1"
              }
            >
              <span className="c-yellow">Small Bomb</span>
              <div className="bomb d-flex al-center jc-center">
                <button onClick={() => handleBomb(1)} disabled={buttonDisabled}>
                  <img src={smallBomb} alt="Small Bomb" />
                </button>
              </div>
              <div className="input-counter d-flex al-center jc-center gap-1">
                <input type="number" value={values[0]} onChange={(event) => handleInput(event, 0)} />
                <button onClick={() => handleIncrement(0)} disabled={buttonDisabled}>
                  <img src={plus} alt="Plus" />
                </button>
              </div>
              <span>10k Pts Req</span>
            </div>
            <div
              className={
                selectBomb === 2 ? "box d-flex fd-column al-center jc-center gap-1 gray-0" : "box d-flex fd-column al-center jc-center gap-1 gray-1"
              }
            >
              <span className="c-yellow">Land Mine</span>
              <div className="bomb d-flex al-center jc-center">
                <button onClick={() => handleBomb(2)} disabled={buttonDisabled}>
                  <img src={landMine} alt="Land Mine" />
                </button>
              </div>
              <div className="input-counter d-flex al-center jc-center gap-1">
                <input type="number" value={values[1]} onChange={(event) => handleInput(event, 1)} />
                <button onClick={() => handleIncrement(1)} disabled={buttonDisabled}>
                  <img src={plus} alt="Plus" />
                </button>
              </div>
              <span>20k Pts Req</span>
            </div>
            <div
              className={
                selectBomb === 3 ? "box d-flex fd-column al-center jc-center gap-1 gray-0" : "box d-flex fd-column al-center jc-center gap-1 gray-1"
              }
            >
              <span className="c-yellow">Super Mine</span>
              <div className="bomb d-flex al-center jc-center">
                <button onClick={() => handleBomb(3)} disabled={buttonDisabled}>
                  <img src={superMine} alt="Super Mine" />
                </button>
              </div>
              <div className="input-counter d-flex al-center jc-center gap-1">
                <input type="number" value={values[2]} onChange={(event) => handleInput(event, 2)} />
                <button onClick={() => handleIncrement(2)} disabled={buttonDisabled}>
                  <img src={plus} alt="Plus" />
                </button>
              </div>
              <span>30k Pts Req</span>
            </div>
          </div>
          <button disabled={buttonDisabled} className="start-btn">
            <img
              className={buttonDisabled ? "gray-1" : "gray-0"}
              onClick={() => {
                startBattle();
              }}
              src={startBtn}
              alt="Start Button"
            />
          </button>
        </div>
        <div className="score-counter d-flex al-center jc-center gap-1">
          <img src={defeatIcon} alt="" />
          <span>Daily Enemies Defeated: {dailyScores ? dailyScores : 0}</span>
        </div>
      </div>
      <div className="overlay" style={{ visibility: alert ? "visible" : "hidden" }}>
        {alert ? (
          <div className="p-rel w-100 d-flex al-start jc-center" style={{ height: "100%" }}>
            <div className="game-popup d-flex al-center jc-center f-tangoItalic">
              {popup?.map((item, i) => {
                return (
                  <div className="container p-rel d-flex al-center jc-center " key={i} style={oops ? { height: "70vw" } : { height: "100vw" }}>
                    <div className="content m-auto p-abs d-flex al-center jc-center" style={oops ? { height: "50vw" } : { height: "80vw" }}>
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

export default WarGame;
