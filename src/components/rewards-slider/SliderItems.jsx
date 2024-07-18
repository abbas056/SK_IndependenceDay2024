import React from "react";
import RewardSlider, { CarouselItem } from "./RewardSlider";
import { eidiTossRewards } from "./../../js/data";
function SliderItems() {
  return (
    <>
      <div className="rewards-slider m-auto">
        <div className="sliderItem d-flex fd-column m-auto p-rel">
          <RewardSlider>
            {eidiTossRewards &&
              eidiTossRewards?.map((item, i) => {
                let index = i + 1;
                return (
                  <CarouselItem key={i}>
                    <div className="inner-box d-flex fd-column al-center jc-center f-tangoItalic">
                      <div className="rank d-flex fd-column al-center jc-center p-abs">
                        <span>
                          Top {index}{" "}
                          {index === 1 ? (
                            <sup style={{ marginLeft: "-0.7vw" }}>st</sup>
                          ) : index === 2 ? (
                            <sup style={{ marginLeft: "-0.7vw" }}>nd</sup>
                          ) : (
                            <sup style={{ marginLeft: "-0.7vw" }}>rd</sup>
                          )}
                        </span>
                      </div>
                      <div className="rewardImg d-flex al-center jc-center">
                        {item?.frame?.map((_items, index) => (
                          <div className="img-box d-flex al-center jc-center" key={index}>
                            <img src={_items.pic} alt="" key={index} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="desc d-flex fd-column jc-center al-center">{item.desc}</div>
                  </CarouselItem>
                );
              })}
          </RewardSlider>
        </div>
      </div>
    </>
  );
}

export default SliderItems;
