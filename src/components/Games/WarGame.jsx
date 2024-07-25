import React, { useContext, useState } from "react";
import {
  beanIcon,
  canon,
  defeatIcon,
  filledBar,
  fiveBoxes,
  hand,
  landMine,
  nineBoxes,
  oneBox,
  plus,
  smallBomb,
  soldier,
  startBtn,
  superMine,
} from "../../js/images";
import { callingApi, cross, overFlowAuto, overFlowHidden, success, unsuccess } from "../../js/helpers";
import { baserUrl } from "../../js/baserUrl";
import { ApiContext } from "../../services/Api";

function WarGame({ dailyScores }) {
  const [values, setValues] = useState([1, 1, 1]);
  const [selectBomb, setSelectBomb] = useState(1);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [error, setError] = useState("Max value = 999");
  const [alert, setAlert] = useState(false);
  const [popup, setPopup] = useState([]);
  const [oops, setOops] = useState(false);
  const { refreshApi, userId, userToken } = useContext(ApiContext);

  const myChances = 10000;

  const handleIncrement = (index) => {
    const newValues = [...values];
    newValues[index] += 1;
    setValues(newValues);
  };

  const handleBomb = (index) => {
    setSelectBomb(index);
  };

  const handleInput = (event, index) => {
    let value = event.target.value;
    let max = myChances < 999 ? myChances : 999;
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
    setSelectBomb(1);
    setValues([1, 1, 1]);
  };
  return (
    <>
      <div className="war-game m-auto d-flex fd-column al-center f-tangoItalic gap-4">
        <div className="war-game-battleField fd-column d-flex al-center jc-center p-rel">
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
              <img src={filledBar} alt="" />
              <span className="count p-abs">10/20</span>
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
                <img src={smallBomb} onClick={() => handleBomb(1)} alt="Small Bomb" />
              </div>
              <div className="input-counter d-flex al-center jc-center gap-1">
                <input type="number" value={values[0]} onChange={(event) => handleInput(event, 0)} />
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
                <img src={landMine} onClick={() => handleBomb(2)} alt="Land Mine" />
              </div>
              <div className="input-counter d-flex al-center jc-center gap-1">
                <input type="number" value={values[1]} onChange={(event) => handleInput(event, 1)} />
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
                <img src={superMine} onClick={() => handleBomb(3)} alt="Super Mine" />
              </div>
              <div className="input-counter d-flex al-center jc-center gap-1">
                <input type="number" value={values[2]} onChange={(event) => handleInput(event, 2)} />
                <button onClick={() => handleIncrement(2)}>
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

export default WarGame;
