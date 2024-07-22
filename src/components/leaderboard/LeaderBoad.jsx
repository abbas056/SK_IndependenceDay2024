import React, { useState, useRef, useContext } from "react";
import TopWinners from "./rankings/TopWinners";
import RestWinners from "./rankings/RestWinners";
import Loader from "./../common/Loader";
import SeeButton from "./../common/SeeButton";
import { ApiContext } from "../../services/Api";
import SubButtons from "../sub-tabs/SubButtons";
import bg1 from "../../assets/LeaderBoard-bg.png";
// import bg2 from "../../assets/lb-bg.png";

function LeaderBoard({
  tab1,
  tab2,
  tab3,
  subTabs,
  setSubTabs,
  subBtn1name,
  subBtn2name,
  topWinners,
  restWinners,
  arrayData,
  maxheight,
  title,
  beansPot,
  eventGifting,
}) {
  const { isLoading } = useContext(ApiContext);
  const [active, setActive] = useState(true);
  const restBoard = useRef(null);
  const handleChangeActive = () => {
    setActive((previous) => {
      return !previous;
    });
    if (!active) {
      restBoard.current.scrollTop = 0;
    }
  };
  return (
    <>
      <div className="leaderboard p-rel m-auto" style={eventGifting ? { width: "95%", marginTop: "10vw" } : { width: "98%", marginTop: "20vw" }}>
        <div className="leaderboard-title m-auto p-abs d-flex al-center jc-center c-white f-chewy">
          {eventGifting ? <div className="gifting-head">Leaderboard</div> : <img src={title} alt="" />}
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {tab2 || tab3 ? (
              <>
                <div className="rank-section">
                  {arrayData?.count === 0 ? (
                    <p className="no-data f-acme">No Records Found</p>
                  ) : (
                    <div className="rank-section-inner">
                      <div
                        ref={restBoard}
                        className={active ? "rest-position-holders " : "rest-position-holders rest-position-holders-max"}
                        style={{ maxHeight: `${maxheight}` }}
                      >
                        {restWinners &&
                          restWinners?.map(({ nickname, userScore, userLevel, actorLevel, portrait, userId, desc }, index) => (
                            <div key={index}>
                              <RestWinners
                                userName={nickname}
                                userScore={userScore}
                                userAvatar={portrait}
                                index={index}
                                userId={userId}
                                listNumber={index + 1}
                                userLevel={userLevel}
                                actorLevel={actorLevel}
                                tab2={tab2}
                                tab3={tab3}
                                desc={desc}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                  {arrayData?.count > 10 ? <SeeButton active={active} handleChangeActive={handleChangeActive} /> : null}
                </div>
              </>
            ) : (
              <>
                <SubButtons subTabs={subTabs} setSubTabs={setSubTabs} subBtn1name={subBtn1name} subBtn2name={subBtn2name} />
                <div className="rank-section">
                  {arrayData?.count === 0 ? (
                    <p className="no-data f-acme">No Records Found</p>
                  ) : (
                    <div className="rank-section-inner">
                      <div className="top-position-holders d-flex jc-center al-start m-auto">
                        {topWinners?.map(({ nickname, userScore, userLevel, actorLevel, portrait, userId }, index) => {
                          return (
                            <div className="user-container p-rel" key={index}>
                              <TopWinners
                                userName={nickname}
                                userScore={userScore}
                                userAvatar={portrait}
                                userId={userId}
                                index={index}
                                userLevel={userLevel}
                                actorLevel={actorLevel}
                                beansPot={beansPot}
                                tab1={tab1}
                                subTabs={subTabs}
                                eventGifting={eventGifting}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div
                        ref={restBoard}
                        className={active ? "rest-position-holders " : "rest-position-holders rest-position-holders-max"}
                        style={{ maxHeight: `${maxheight}` }}
                      >
                        {restWinners &&
                          restWinners?.map(({ nickname, userScore, userLevel, actorLevel, portrait, userId }, index) => (
                            <div key={index}>
                              <RestWinners
                                userName={nickname}
                                userScore={userScore}
                                userAvatar={portrait}
                                index={index}
                                userId={userId}
                                listNumber={index + 4}
                                userLevel={userLevel}
                                actorLevel={actorLevel}
                                tab1={tab1}
                                subTabs={subTabs}
                                eventGifting={eventGifting}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                  {arrayData?.count > 10 ? <SeeButton active={active} handleChangeActive={handleChangeActive} eventGifting={eventGifting} /> : null}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default LeaderBoard;
