import React from "react";
import fireBtn from "../../assets/Fire-Button.png";
function FireWorkGame() {
  return (
    <div className="firework-game m-auto d-flex fd-column al-center f-tangoItalic gap-2">
      <div className="firework-game-area d-flex al-center jc-center">Game animation</div>
      <div className="firework-game-bottom d-flex al-center jc-center">
        <div className="firework-game-bottom-chances d-flex al-center jc-center gap-1">
          <span>x1</span>
          <span>x10</span>
          <span>x100</span>
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
