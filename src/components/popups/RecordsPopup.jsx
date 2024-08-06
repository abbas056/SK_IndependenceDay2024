import React from "react";
import { cross, rewardImages } from "../../js/helpers";
import Loader from "../common/Loader";

function RecordsPopup({ mainTabs, close, loadMore, isLoading, gameRecord }) {
  let rewardsList = gameRecord[0] ? gameRecord.flat() : [];
  return (
    <div className="p-rel w-100 d-flex al-start jc-center" style={{ height: "100%" }}>
      <div className="records-popup p-rel">
        <div className="inner-content p-rel">
          <div className="title f-hunter  m-auto d-flex al-center jc-center p-abs">Records</div>
          <div className="table m-auto d-flex jc-center al-start f-tangoItalic fd-column">
            <div className="heading d-flex f-bold">
              <div className="w-25 border-b d-flex  al-center jc-center bg-brown">Time (GMT)</div>
              {mainTabs.tab1 ? <div className="w-25 border-b d-flex  al-center jc-center bg-brown">Battle Results</div> : null}
              <div className="w-100 border-b d-flex  al-center jc-center bg-brown">Rewards</div>
            </div>

            <div className={gameRecord?.data?.count === 0 ? "table-data d-flex al-center jc-center" : "table-data d-flex al-start jc-center"}>
              {gameRecord?.data?.count === 0 ? (
                <p className="no-data f-tangoItalic w-100">No Records Found</p>
              ) : (
                <div className="content d-flex fd-column">
                  {rewardsList?.map((array, index) => {
                    const apiDate = array?.time;
                    const rewardDTOList = array?.rewardDTOList;
                    const formattedDate = new Date(apiDate).toLocaleString();
                    const score = array?.score;
                    const winScore = Math.floor(score / 1000);
                    const lossScore = Math.floor(score % 1000);
                    return (
                      <div key={index} className="d-flex w-100">
                        <div className="w-25 border-b d-flex al-center  jc-center">{formattedDate}</div>
                        {mainTabs.tab1 ? (
                          <div className="w-25 border-b d-flex  al-center jc-center" style={{ whiteSpace: "pre-line" }}>
                            {mainTabs.tab1
                              ? `${
                                  score === 1
                                    ? "Failure"
                                    : score === 1000
                                    ? "Success"
                                    : winScore +
                                      " " +
                                      `${winScore === 1 ? "Success" : "Success"} ` +
                                      "\n" +
                                      lossScore +
                                      " " +
                                      `${lossScore === 1 ? "Failure" : "Failure"}`
                                }`
                              : `${score}`}
                          </div>
                        ) : null}
                        <div className=" w-100  border-b d-flex f-wrap  jc-center al-start  gap-1">
                          {rewardDTOList?.map((obj, index) => {
                            return (
                              <div key={index} className="rews d-flex al-center jc-center fd-column gap-1" style={{ width: "12vw" }}>
                                <div className="rew-img d-flex al-center jc-center">
                                  <img src={rewardImages(obj.desc)} alt="" />
                                </div>
                                <div className="desc">
                                  {obj.desc == "Coins" || obj.desc == "Beans" || obj.desc == "Gems" ? (
                                    <>
                                      {obj.desc} {obj.count}
                                    </>
                                  ) : (
                                    <>
                                      {obj.desc} x {obj.count}
                                    </>
                                  )}
                                  {obj.desc == "Coins" || obj.desc == "Beans" || obj.desc == "Gems" ? null : <>{obj.count == 1 ? " day" : " days"}</>}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <>
            {gameRecord[gameRecord?.length - 1]?.length >= 20 ? (
              <div className="see-btn" onClick={loadMore}>
                <button className="see-more f-tangoItalic">{isLoading ? <Loader /> : "See More"}</button>
              </div>
            ) : null}
          </>
        </div>
        <div className="close p-abs" onClick={close}>
          <img style={{ width: "10vw" }} src={cross()} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RecordsPopup;
