import React, { useState } from "react";
import fireBtn from "../../assets/Fire-Button.png";
function FireWorkGame() {
  const [speed, setSpeed] = useState(1);
  const selectSpeed = (speed) => {
    setSpeed(speed);
  };
  return (
    <div className="firework-game m-auto d-flex fd-column al-center f-tangoItalic gap-2">
      <div className="firework-game-area d-flex al-center jc-center">Game animation</div>
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
        <button className="firework-game-bottom-fire-btn d-flex fd-column al-center jc-center gap-1 f-tangoItalic">
          <img src={fireBtn} alt="" />
          <span>1 Chance = 30K Talent Points</span>
        </button>
      </div>
    </div>
  );
}

export default FireWorkGame;
