import React from "react";
import trophy from "../../assets/Trophy.png";

function SubButtons({ subBtn1name, subBtn2name, subTabs, setSubTabs }) {
  const tabSwitch = (id) => {
    let newCat = {
      [subBtn1name]: false,
      [subBtn2name]: false,
    };
    setSubTabs({ ...newCat, [id]: true });
  };
  return (
    <div className="sub-buttons d-flex jc-center al-center m-auto p-rel">
      <button onClick={() => tabSwitch(`${subBtn1name}`)} className={subTabs[subBtn1name] ? "btn-active" : "btn"}>
        {subBtn1name}
      </button>
      <img className="trophy p-abs" src={trophy} alt="" />
      <button onClick={() => tabSwitch(`${subBtn2name}`)} className={subTabs[subBtn2name] ? "btn-active" : "btn"}>
        {subBtn2name === "Previous" ? subBtn2name + " " + "Day" : subBtn2name}
      </button>
    </div>
  );
}

export default SubButtons;
