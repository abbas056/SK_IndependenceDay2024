import { useState } from "react";
import Header from "./assets/Header.png";
import LanguageBar from "./components/common/LanguageBar";
import MainTabButtons from "./components/MainTabButtons";
import Popups from "./components/common/Popups";
import { overFlowAuto, overFlowHidden } from "./js/helpers";
import PopupBtns from "./components/PopupBtns";
import "./App.scss";

function App() {
  let [language, setLanguage] = useState("English");
  const [mainTabs, setMainTabs] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });
  const [popup, setPopup] = useState({
    guide: false,
    eventGifting: false,
    details: false,
    records: false,
  });
  const close = () => {
    setPopup(false);
    overFlowAuto();
    // setLoadMore(1);
  };
  const popupSwitch = (id) => {
    let newCat = {
      guide: false,
      eventGifting: false,
      details: false,
      records: false,
    };
    setPopup({ ...newCat, [id]: true });
    // gameRecord();
    overFlowHidden();
  };
  return (
    <>
      <span id="extraContent"></span>
      <div className="App">
        <div className="header">
          <img src={Header} alt="" />
        </div>
        <LanguageBar language={language} setLanguage={setLanguage} />
        <MainTabButtons mainTabs={mainTabs} setMainTabs={setMainTabs} />
        <PopupBtns mainTabs={mainTabs} popupSwitch={popupSwitch} />
        <Popups popup={popup} setPopup={setPopup} close={close} language={language} mainTabs={mainTabs} />
      </div>
    </>
  );
}

export default App;
