import React from "react";
import { cross } from "../../js/helpers";
import { tab1Details, tab2Details, tab3Details } from "../../js/data";

function DetailsPopup({ close, mainTabs }) {
  let rewDetails;
  if (mainTabs.tab1) {
    rewDetails = tab1Details;
  } else if (mainTabs.tab2) {
    rewDetails = tab2Details;
  } else {
    rewDetails = tab3Details;
  }
  return (
    <div className="p-rel w-100 d-flex al-start jc-center" style={{ height: "100%" }}>
      <div className="details-popup f-tangoItalic">
        <div className="title f-hunter m-auto d-flex al-center jc-center p-abs c-white">Details</div>
        {mainTabs.tab1 ? (
          <div className="inner-content m-auto">
            <div className="head d-flex w-100">
              <div className="w-15 bg-brown d-flex border-b">Mine Type</div>
              <div className="w-15 bg-brown d-flex border-b">Success Rate</div>
              <div className="w-15 bg-brown d-flex border-b">Jashan Points Required</div>
              <div className="w-55 bg-brown d-flex border-b">Rewards</div>
            </div>
            <div className="body d-flex w-100">
              <div className="d-flex fd-column w-100">
                {rewDetails?.data?.map((data, i) => (
                  <div className="d-flex w-100" key={i}>
                    <div className="bg-light-yellow border-b w-15 d-flex al-center jc-center">{data.bomb}</div>
                    <div className=" bg-light-yellow border-b w-15 d-flex al-center jc-center">{data.successRate}</div>
                    <div className="bg-light-yellow border-b w-15 d-flex al-center jc-center">{data.pointsReq}</div>
                    <div className="rewards-container d-flex al-center f-wrap jc-center bg-light-yellow gap-1 w-55 border-b d-flex al-center jc-center">
                      {data.rewards.map((items, i) => {
                        return (
                          <div className=" d-flex fd-column al-center jc-center gap-1 w-30" key={i}>
                            <div className="rew-img d-flex al-center jc-center">
                              <img src={items.pic} alt="" />
                            </div>
                            <span className="details">{items.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : mainTabs.tab2 ? (
          <>
            <table className="table m-auto ">
              <thead className="w-100">
                <th className="w-25 border-b">Building Level</th>
                <th className="w-25 border-b">Constriction Points Required</th>
                <th className="w-25 border-b">Beans Produced Per Minute</th>
                <th className="w-25 border-b">Daily Limit of Beans Income</th>
              </thead>
              <tbody className="w-100">
                <tr className="w-100">
                  <td className="w-25 border-b">LV 1</td>
                  <td className="w-25 border-b">50</td>
                  <td className="w-25 border-b">0</td>
                  <td className="w-25 border-b">0</td>
                </tr>
                <tr className="w-100">
                  <td className="w-25 border-b">LV 2</td>
                  <td className="w-25 border-b">100</td>
                  <td className="w-25 border-b">0</td>
                  <td className="w-25 border-b">0</td>
                </tr>
                <tr className="w-100">
                  <td className="w-25 border-b">LV 3</td>
                  <td className="w-25 border-b">200</td>
                  <td className="w-25 border-b">40</td>
                  <td className="w-25 border-b">2400</td>
                </tr>
                <tr className="w-100">
                  <td className="w-25 border-b">LV 4</td>
                  <td className="w-25 border-b">300</td>
                  <td className="w-25 border-b">70</td>
                  <td className="w-25 border-b">4200</td>
                </tr>
                <tr className="w-100">
                  <td className="w-25 border-b">LV 5</td>
                  <td className="w-25 border-b">500</td>
                  <td className="w-25 border-b">120</td>
                  <td className="w-25 border-b">7200</td>
                </tr>
                <tr className="w-100">
                  <td className="w-25 border-b">LV 6</td>
                  <td className="w-25 border-b">800</td>
                  <td className="w-25 border-b">200</td>
                  <td className="w-25 border-b">No Limit Beans = Construction Points x15</td>
                </tr>
              </tbody>
            </table>
            <div className="inner-content m-auto">
              <div className="head d-flex w-100">
                <div className="w-20 bg-brown d-flex border-b">Button Name</div>
                <div className="w-20 bg-brown d-flex border-b">Jashan Points Required</div>
                <div className="w-60 bg-brown d-flex border-b">Rewards</div>
              </div>
              <div className="body d-flex w-100">
                <div className="d-flex fd-column w-100">
                  {rewDetails?.data?.map((data, i) => (
                    <div className="d-flex w-100" key={i}>
                      <div className="bg-light-yellow border-b w-20 d-flex al-center jc-center">{data.buttonName}</div>
                      <div className="bg-light-yellow border-b w-20 d-flex al-center jc-center">{data.pointsReq}</div>
                      <div className="rewards-container d-flex al-center f-wrap jc-center bg-light-yellow gap-1 w-60 border-b d-flex al-center jc-center">
                        {data.rewards.map((items, i) => {
                          return (
                            <div className=" d-flex fd-column al-center jc-start gap-1 w-30" key={i}>
                              <div className="rew-img d-flex al-center jc-center">
                                <img src={items.pic} alt="" />
                              </div>
                              <span className="details">{items.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="inner-content m-auto">
            <div className="head d-flex w-100">
              <div className="w-20 bg-brown d-flex border-b">Button Name</div>
              <div className="w-20 bg-brown d-flex border-b">Talent Points Required</div>
              <div className="w-60 bg-brown d-flex border-b">Rewards</div>
            </div>
            <div className="body d-flex w-100">
              <div className="d-flex fd-column w-100">
                {rewDetails?.data?.map((data, i) => (
                  <div className="d-flex w-100" key={i}>
                    <div className="bg-light-yellow border-b w-20 d-flex al-center jc-center">{data.buttonName}</div>
                    <div className="bg-light-yellow border-b w-20 d-flex al-center jc-center">{data.pointsReq}</div>
                    <div className="rewards-container d-flex al-center f-wrap jc-center bg-light-yellow gap-1 w-60 border-b d-flex al-center jc-center">
                      {data.rewards.map((items, i) => {
                        return (
                          <div className=" d-flex fd-column al-center jc-start gap-1 w-30" key={i}>
                            <div className="rew-img d-flex al-center jc-center">
                              <img src={items.pic} alt="" />
                            </div>
                            <span className="details">{items.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="close p-abs" onClick={close}>
          <img style={{ width: "10vw" }} src={cross()} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DetailsPopup;
