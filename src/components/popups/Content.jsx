import React from "react";
import { guideContent } from "../../js/data";

function Content({ boxFirst, boxSecond, boxThird, eventGifitng, language }) {
  let current;
  language === "Urdu/Hindi" ? (current = guideContent.Urdu) : (current = guideContent.English);
  return (
    <div className="text-data">
      <div className="box">
        {boxFirst ? (
          <>{current.firstBox}</>
        ) : boxSecond ? (
          current.secondBox
        ) : boxThird ? (
          current.thirdBox
        ) : (
          <>
            {current.h1}
            {current.desc1}
            {current.h2}
            {current.desc2}
          </>
        )}
      </div>
    </div>
  );
}

export default Content;
