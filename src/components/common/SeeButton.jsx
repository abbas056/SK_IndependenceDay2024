import React from "react";
// import seeMore from "../../assets/See-More-Button.png";
// import seeLess from "../../assets/See-Less-Button.png";
function SeeButton({ active, handleChangeActive, eventGifting }) {
  return (
    <div className="see-buttons " style={eventGifting ? { bottom: "8vw" } : { bottom: "6vw" }}>
      {active ? (
        <button className="m-auto" onClick={handleChangeActive}>
          See More
        </button>
      ) : (
        <button className="m-auto" onClick={handleChangeActive}>
          See Less
        </button>
      )}
    </div>
  );
}

export default SeeButton;
