import React, { useContext, useEffect, useState } from "react";
import {
  beanIcon,
  canon,
  defeatIcon,
  enemiesDefeatIcon,
  filledBar,
  fireworkAnimation,
  fiveBoxes,
  hand,
  jashanPointsIcon,
  landMine,
  mineIcon,
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

function WarGame({ dailyScores, gamePoints, totalScores, visitTimeDaily }) {
  const { refreshApi, userId, userToken, buttonDisabled, setButtonDisabled } = useContext(ApiContext);
  const [values, setValues] = useState([1, 1, 1]);
  const [selectBomb, setSelectBomb] = useState();
  const [disableInput, setDisableInput] = useState(false);
  const [alert, setAlert] = useState(false);
  const [popup, setPopup] = useState([]);
  const [oops, setOops] = useState(false);
  const [animation, setAnimation] = useState();
  const [isAnimating, setIsAnimating] = useState(false);
  const [gridActive, setGridActive] = useState([]);

  let type;
  let playCount;
  const maxScore = 20;
  const progress = totalScores % maxScore;
  const widthPercentage = progress === maxScore ? 100 : Math.min((progress / maxScore) * 100, 100);
  const adjustedProgress = progress === 0 && totalScores !== 0 ? maxScore : progress;

  useEffect(() => {
    if (adjustedProgress === maxScore) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const handleIncrement = (index) => {
    if (selectBomb === 1 && values[0] < 999 && index === 0) {
      const newValues = [...values];
      newValues[index] += 1;
      setValues(newValues);
    } else if (selectBomb === 2 && values[1] < 999 && index === 1) {
      const newValues = [...values];
      newValues[index] += 1;
      setValues(newValues);
    } else if (selectBomb === 3 && values[2] < 999 && index === 2) {
      const newValues = [...values];
      newValues[index] += 1;
      setValues(newValues);
    }
  };

  const handleBomb = (index) => {
    if (!buttonDisabled) {
      setSelectBomb(index);
    }
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
      setValues([1, 1, 1]);
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
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  };

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
    if (!buttonDisabled) {
      setDisableInput(true);
      setButtonDisabled(true);
      if (!selectBomb) {
        setOops(true);
        setAlert(true);
        setPopup(
          unsuccess(
            <div className="d-flex fd-column jc-center al-center gap-2">
              <div className="head-text f-chewy p-abs">Select Mine!</div>
              <div>
                You have to select a type of Mine <img style={{ width: "5vw", verticalAlign: "middle" }} src={mineIcon} alt="" /> first in order to
                battle with enemies.
              </div>
            </div>
          )
        );
        overFlowHidden();
      } else {
        callingApi(`${baserUrl}api/activity/independence/pak/battleField?playCount=${playCount}&type=${type}`, userId, userToken)
          .then(function (response) {
            if (response.msg === "success") {
              const successTime = response?.data?.successTimes;
              const winScore = successTime;
              const lossScore = playCount - successTime;
              if (successTime === 0) {
                setAnimation(warGif1);
              } else if (successTime === playCount) {
                setAnimation(warGif2);
              } else if (successTime !== 0 && successTime !== playCount) {
                setAnimation(warGif3);
              }
              setTimeout(() => {
                setAlert(true);
                setPopup(
                  success(
                    <div className="d-flex fd-column jc-center al-center gap-2">
                      <div className="head-text f-chewy p-abs">
                        {successTime === 0
                          ? "Defeat!"
                          : successTime === playCount
                          ? "Victory!"
                          : successTime !== 0 && successTime !== playCount
                          ? "Amazing Battle"
                          : null}
                      </div>
                      {successTime === 0 ? (
                        <span>It looks like you have lost the battle this time, here’s a reward for your effort, you have won</span>
                      ) : successTime === playCount ? (
                        <span>
                          You have successfully defeated {winScore}{" "}
                          <img style={{ width: "5vw", verticalAlign: "middle" }} src={enemiesDefeatIcon} alt="" /> & have won
                        </span>
                      ) : successTime !== 0 && successTime !== playCount ? (
                        <span>
                          That was a great battle! You have successfully defeated {winScore} & lost {lossScore}{" "}
                          {lossScore === 0 || lossScore === 1 ? "battle" : "battles"}, you have won
                        </span>
                      ) : null}
                      <div
                        className={
                          response?.data?.rewardList.length > 6
                            ? "rews-box rews-box-max d-flex al-start jc-center"
                            : "rews-box d-flex al-start jc-center"
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
                                {item?.desc === "Beans" || item?.desc === "Gems" ? (
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
            } else if (response.msg === "GAME_POINT_NOT_ENOUGH") {
              setOops(true);
              setAlert(true);
              setPopup(
                unsuccess(
                  <div className="d-flex fd-column jc-center al-center gap-2">
                    <div className="head-text f-chewy p-abs">Oops!</div>
                    <div>
                      You don’t have enough Jashan Points <img style={{ width: "5vw", verticalAlign: "middle" }} src={jashanPointsIcon} alt="" /> for
                      the battle right now, send more event gifts & come back again.
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
      }
    }
  };
  const grid = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A6",
    "#FF8333",
    "#8D33FF",
    "#FF3383",
    "#33FF8D",
    "#5733FF",
    "#FF33D1",
    "#D1FF33",
    "#33D1FF",
    "#FF5733",
    "#57FF33",
    "#8DFF33",
    "#3357FF",
    "#FF5733",
    "#33FF57",
    "#FF33A6",
    "#FF8333",
    "#33FF8D",
    "#5733FF",
    "#FF33D1",
    "#D1FF33",
    "#33D1FF",
  ];
  const getRowColFromIndex = (index) => {
    const row = Math.floor(index / 5);
    const col = index % 5;
    return { row, col };
  };
  const gridClicked = (id) => {
    if (gridActive.length === 0) {
      const { row, col } = getRowColFromIndex(id);
      let arr = [];

      if (selectBomb === 1) {
        arr = [id];
        startBattle();
      } else if (selectBomb === 2) {
        const directions = [
          [0, 1],
          [1, 0],
          [0, -1],
          [-1, 0],
        ];
        arr.push(id);
        for (const [dr, dc] of directions) {
          const r = row + dr;
          const c = col + dc;
          if (r >= 0 && r < 5 && c >= 0 && c < 5) {
            arr.push(r * 5 + c);
          }
        }
        startBattle();
      } else if (selectBomb === 3) {
        for (let r = row - 1; r <= row + 1; r++) {
          for (let c = col - 1; c <= col + 1; c++) {
            if (r >= 0 && r < 5 && c >= 0 && c < 5) {
              arr.push(r * 5 + c);
            }
          }
        }
        startBattle();
      }
      setGridActive(arr);
    }
  };
  const closeAlert = () => {
    overFlowAuto();
    setAlert(false);
    setButtonDisabled(false);
    setOops(false);
    setSelectBomb(undefined);
    setValues([1, 1, 1]);
    setAnimation(undefined);
    setDisableInput(false);
    setGridActive([]);
  };
  return (
    <>
      <div className="war-game m-auto d-flex fd-column al-center f-tangoItalic gap-4">
        <div className="war-game-battleField fd-column d-flex al-center jc-center p-rel">
          {animation && <img className="animation p-abs" src={animation} alt="" />}
          <img style={isAnimating ? { display: "block" } : { display: "none" }} className="firework-animation p-abs" src={fireworkAnimation} alt="" />
          <div className="soldiers d-flex al-center jc-s-even p-abs">
            <img src={soldier} alt="" />
            <img src={soldier} alt="" />
            <img src={soldier} alt="" />
            <img src={soldier} alt="" />
            <img src={soldier} alt="" />
          </div>
          <div className="grid">
            {grid.map((d, i) => {
              return <div className={`gridboxes ${gridActive.includes(i) ? "active" : ""}`} onClick={() => gridClicked(i)}></div>;
            })}
          </div>
          {visitTimeDaily === 0 ? <img className="hand p-abs" src={hand} alt="" /> : null}
          <div className="canon p-abs">
            <img src={canon} alt="" />
          </div>
        </div>
        <div className="war-game-progress d-flex fd-column al-center jc-s-even">
          <div className="text fw-bold"> War Victory Progress</div>
          <div className="progress-bar d-flex al-center jc-center gap-2">
            <div className="bar d-flex al-center jc-start p-rel">
              <div className="bar-outer d-flex al-center jc-start">
                <img style={{ width: `${widthPercentage}%` }} src={filledBar} alt="" />
              </div>
              <span className="count p-abs">
                {progress ? progress : 0}/{maxScore}
              </span>
            </div>
            <div className="d-flex al-center jc-center">
              <span>2000</span>
              <img className="w-5vw h-5vw" src={beanIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="btn-area p-rel d-flex al-center jc-center">
          <div className="select-img d-flex al-center jc-s-even">
            <div
              className={
                selectBomb === 1 ? "box d-flex fd-column al-center jc-center gap-1 gray-0" : "box d-flex fd-column al-center jc-center gap-1 gray-1"
              }
            >
              <span className="c-yellow">Small Bomb</span>
              <div className="bomb d-flex al-center jc-center">
                <button onClick={() => handleBomb(1)}>
                  <img src={smallBomb} alt="Small Bomb" />
                </button>
              </div>
              <div className="input-counter d-flex al-center jc-center gap-1">
                <input disabled={disableInput} type="number" value={values[0]} onChange={(event) => handleInput(event, 0)} />
                <button onClick={() => handleIncrement(0)}>
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
                <button onClick={() => handleBomb(2)}>
                  <img src={landMine} alt="Land Mine" />
                </button>
              </div>
              <div className="input-counter d-flex al-center jc-center gap-1">
                <input disabled={disableInput} type="number" value={values[1]} onChange={(event) => handleInput(event, 1)} />
                <button onClick={() => handleIncrement(1)}>
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
                <button onClick={() => handleBomb(3)}>
                  <img src={superMine} alt="Super Mine" />
                </button>
              </div>
              <div className="input-counter d-flex al-center jc-center gap-1">
                <input disabled={disableInput} type="number" value={values[2]} onChange={(event) => handleInput(event, 2)} />
                <button onClick={() => handleIncrement(2)}>
                  <img src={plus} alt="Plus" />
                </button>
              </div>
              <span>30k Pts Req</span>
            </div>
          </div>
          <button disabled={buttonDisabled} className="start-btn d-flex fd-column al-center jc-center" onClick={startBattle}>
            <img className={buttonDisabled ? "gray-1" : "gray-0"} src={startBtn} alt="Start Button" />
          </button>
        </div>
        <div className="score-counter d-flex al-center jc-center gap-1">
          <img src={defeatIcon} alt="" />
          <span>
            Daily Enemies Defeated <br /> {dailyScores ? dailyScores : 0}
          </span>
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
                    <div className="modal-close p-abs" onClick={closeAlert}>
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
