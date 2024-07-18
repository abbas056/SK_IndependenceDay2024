import React from "react";
import beanIcon from "../../assets/bean.png";

function BuilderGame() {
  return (
    <div className="builder-game m-auto d-flex fd-column al-center f-tangoItalic gap-2">
      <div className="builder-game-earnings d-flex al-center jc-center c-white">
        My accumulated earnings: 1000 <img src={beanIcon} alt="" />
      </div>
      <div className="builder-game-area d-flex al-center jc-center">Game animation</div>
    </div>
  );
}

export default BuilderGame;
