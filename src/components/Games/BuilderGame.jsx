import React, { useState } from "react";
import beanIcon from "../../assets/bean.png";
import barInner from "../../assets/Filled-bar2.png";
import buildBtn from "../../assets/build-Button.png";
import { building6, fountain, qaBtn } from "../../js/images";

function BuilderGame() {
  const [input, setInput] = useState(1);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [error, setError] = useState("Max value = 999");
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
  return (
    <div className="builder-game m-auto d-flex fd-column al-center f-tangoItalic">
      <div className="builder-game-earnings d-flex al-center jc-center c-white">
        My accumulated earnings: 1000 <img src={beanIcon} alt="" />
      </div>
      <div className="builder-game-area d-flex al-center jc-center p-rel">
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
        <button className="builder-game-bottom-build-btn d-flex fd-column al-center jc-center gap-1">
          <img src={buildBtn} alt="" />
          <span>1 Chance = 20K Jashan Points</span>
        </button>
      </div>
    </div>
  );
}

export default BuilderGame;
