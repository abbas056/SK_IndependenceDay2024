import React, { useState } from "react";
import beanIcon from "../../assets/bean.png";
import barInner from "../../assets/Filled-bar2.png";
import buildBtn from "../../assets/build-Button.png";

function BuilderGame() {
  const [input, setInput] = useState(1);

  return (
    <div className="builder-game m-auto d-flex fd-column al-center f-tangoItalic gap-2">
      <div className="builder-game-earnings d-flex al-center jc-center c-white">
        My accumulated earnings: 1000 <img src={beanIcon} alt="" />
      </div>
      <div className="builder-game-area d-flex al-center jc-center">Game animation</div>
      <div className="builder-game-progress d-flex al-center jc-center fd-column">
        <div className="builder-game-progress-level d-flex al-center jc-center">Level 2</div>
        <div className="builder-game-progress-bar p-rel d-flex al-center jc-start">
          <img src={barInner} alt="" />
          <div className="builder-game-progress-bar-points p-abs m-auto">4000/8000 Construction Points</div>
        </div>
      </div>
      <div className="builder-game-bottom d-flex al-center jc-center">
        <div className="builder-game-bottom-chances d-flex al-center jc-center">
          <input
            className="input d-flex al-center jc-center"
            placeholder="Enter value"
            name="NumInput"
            type="number"
            value={input}
            min={0}
            max={999}
          />
          <div className="counter d-flex al-center jc-center">x999</div>
        </div>
        <button className="builder-game-bottom-build-btn d-flex fd-column al-center jc-center gap-1">
          <img src={buildBtn} alt="" />
          <span>1 Chance = 20K Jashan Points</span>
        </button>
      </div>
    </div>
  );
}

export default BuilderGame;
