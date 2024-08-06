import React from "react";
import { guideContent } from "../../js/data";

function Content({ boxFirst, boxSecond, boxThird, eventGifitng, language }) {
  let current;
  language === "Urdu/Hindi" ? (current = guideContent.Urdu) : (current = guideContent.English);
  return (
    <div className="text-data">
      <div className="box">
        {boxFirst ? (
          <>
            {current.firstBox1}
            <table className="b-collapse w-90 m-auto" style={{ fontSize: "2.2vw" }}>
              <thead>
                <th style={{ textAlign: "center" }} className="border-b bg-orange">
                  Mine Type
                </th>
                <th style={{ textAlign: "center" }} className="border-b bg-orange">
                  Coverage
                </th>
                <th style={{ textAlign: "center" }} className="border-b bg-orange">
                  Jashan Points Required
                </th>
                <th style={{ textAlign: "center" }} className="border-b bg-orange">
                  Success Rate
                </th>
                <th style={{ textAlign: "center" }} className="border-b bg-orange">
                  Failure Rate
                </th>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    Small Bomb
                  </td>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    1 grid
                  </td>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    10k
                  </td>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    50%
                  </td>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    50%
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    Land Mine
                  </td>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    A Cross of 5 grid
                  </td>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    20k
                  </td>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    80%
                  </td>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    20%
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    Super Mine
                  </td>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    Square grid of 9
                  </td>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    30k
                  </td>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    100%
                  </td>
                  <td style={{ textAlign: "center" }} className="border-b ">
                    0%
                  </td>
                </tr>
              </tbody>
            </table>
            {current.firstBox2}
          </>
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
