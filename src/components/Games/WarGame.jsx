import React, { useState } from "react";
import defeatIcon from "../../assets/Daily-Enemies-Defeated-Icon.png";
import smallBomb from "../../assets/Small-Bomb.png";
import landMine from "../../assets/Land-Mine.png";
import superMine from "../../assets/Super-Mine.png";
import startBtn from "../../assets/Start-Button.png";
import plus from "../../assets/Plus.png";
import filledBar from "../../assets/Filled-bar.png";
function WarGame() {
  const [values, setValues] = useState([1, 1, 1]);
  const [selectBomb, setSelectBomb] = useState(0);

  const handleIncrement = (index) => {
    const newValues = [...values];
    newValues[index] += 1;
    setValues(newValues);
  };

  const handleBomb = (index) => {
    setSelectBomb(index);
  };

  let inputValues;
  if (selectBomb === 1) {
    inputValues = values[0];
  } else if (selectBomb === 2) {
    inputValues = values[1];
  } else {
    inputValues = values[2];
  }

  return (
    <div className="war-game m-auto d-flex fd-column al-center f-tangoItalic gap-2">
      <div className="war-game-area d-flex al-center jc-center">Game animation</div>
      <div className="war-game-progress d-flex fd-column al-center jc-s-even c-yellow">
        War Victory Progress
        <div className="progress-bar d-flex al-center jc-center">
          <div className="bar d-flex al-center jc-start p-rel">
            <img src={filledBar} alt="" />
            <span className="count p-abs">10/20</span>
          </div>
          <span className="c-yellow">2000</span>
        </div>
      </div>
      <div className="btn-area d-flex al-center jc-center">
        <div className="select-img d-flex al-center jc-s-even">
          <div className="box d-flex fd-column al-center jc-center gap-1">
            <span className="c-yellow">Small Bomb</span>
            <div className="bomb d-flex al-center jc-center">
              <img className={selectBomb === 1 ? "gray-0" : "gray-1"} src={smallBomb} onClick={() => handleBomb(1)} alt="Small Bomb" />
            </div>
            <div className="input-counter d-flex al-center jc-center gap-1">
              <input type="number" value={values[0]} />
              <button onClick={() => handleIncrement(0)}>
                <img src={plus} alt="Plus" />
              </button>
            </div>
            <span>10k Pts Req</span>
          </div>
          <div className="box d-flex fd-column al-center jc-center gap-1">
            <span className="c-yellow">Land Mine</span>
            <div className="bomb d-flex al-center jc-center">
              <img className={selectBomb === 2 ? "gray-0" : "gray-1"} src={landMine} onClick={() => handleBomb(2)} alt="Land Mine" />
            </div>
            <div className="input-counter d-flex al-center jc-center gap-1">
              <input type="number" value={values[1]} />
              <button onClick={() => handleIncrement(1)}>
                <img src={plus} alt="Plus" />
              </button>
            </div>
            <span>20k Pts Req</span>
          </div>
          <div className="box d-flex fd-column al-center jc-center gap-1">
            <span className="c-yellow">Super Mine</span>
            <div className="bomb d-flex al-center jc-center">
              <img className={selectBomb === 3 ? "gray-0" : "gray-1"} src={superMine} onClick={() => handleBomb(3)} alt="Super Mine" />
            </div>
            <div className="input-counter d-flex al-center jc-center gap-1">
              <input type="number" value={values[2]} />
              <button onClick={() => handleIncrement(2)}>
                <img src={plus} alt="Plus" />
              </button>
            </div>
            <span>30k Pts Req</span>
          </div>
        </div>
        <button className="start-btn">
          <img src={startBtn} alt="Start Button" />
        </button>
      </div>
      <div className="score-counter d-flex al-center jc-center gap-1">
        <img src={defeatIcon} alt="" />
        <span>Daily Enemies Defeated: xx</span>
      </div>
    </div>
  );
}

export default WarGame;
