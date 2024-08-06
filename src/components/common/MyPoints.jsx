import React from "react";
import bg1 from "../../assets/Talent-Points-Base.png";
import bg2 from "../../assets/MyPoints-Base.png";
function MyPoints({ text, icon, points, tab3 }) {
  return (
    <div
      className="my-points d-flex al-center jc-center gap-1 m-auto f-tangoItalic fw-bold"
      style={
        tab3
          ? { backgroundImage: `url(${bg1})`, backgroundSize: "100% 100%", paddingBottom: "2vw", height: "13vw" }
          : { backgroundImage: `url(${bg2})`, backgroundSize: "100% 100%", paddingTop: "3vw", height: "15vw" }
      }
    >
      <img src={icon} alt="" />
      <span>
        {text} {points ? points : 0}
      </span>
    </div>
  );
}

export default MyPoints;
