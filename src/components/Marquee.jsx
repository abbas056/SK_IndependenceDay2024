import React, { useContext } from "react";
import unknown from "../assets/unknown.png";
import FastMarquee from "react-fast-marquee";
import { ApiContext } from "../services/Api";
import { goTo, slicePlease } from "../js/helpers";
import borderImg from "../assets/Tickertape-Base-Frame.png";
function Marque() {
  const { dailyScoreToday, isLive } = useContext(ApiContext);
  const eidTossWinner = slicePlease(dailyScoreToday?.list, 0, 3);

  return (
    <>
      {eidTossWinner?.length === 0 ? null : (
        <div className="marque-container f-tangoItalic">
          <FastMarquee direction="left" gradient={false} gradientColor={[0, 0, 0]} speed={70}>
            {eidTossWinner?.map((item, index) => {
              const name = item.nickname;
              const nickName = name.slice(0, 8);
              const userId = item.userId;
              return (
                <div className="marquee-alternative" key={index}>
                  <div className="taxts d-flex al-center p-rel">
                    <div
                      className="d-flex jc-center al-center"
                      onClick={() => {
                        goTo(isLive, userId, userId);
                      }}
                    >
                      <img className="border-img p-abs" src={borderImg} alt="" />
                    </div>
                    <img className="user-img p-abs" src={item.portrait ? item.portrait : unknown} alt="" />
                    <div className="text">
                      <div className="content d-flex al-center fd-row">
                        <span className="nick-name">{nickName}...</span>
                        <p className="d-flex al-center jc-center ">
                          has defeated{" "}
                          <span className="c-yellow" style={{ marginRight: "1vw" }}>
                            {item?.userScore}
                          </span>{" "}
                          {item?.userScore === 1 ? "enemy" : "enemies"} & has ranked{" "}
                          <span className="c-yellow" style={{ marginRight: "1vw" }}>
                            {item?.ranking}
                          </span>{" "}
                          in Battle Field game.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </FastMarquee>
        </div>
      )}
    </>
  );
}

export default Marque;
