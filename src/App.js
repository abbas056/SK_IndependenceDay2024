import { useContext, useEffect, useRef, useState } from "react";
// import Header from "./assets/Header.png";
import LanguageBar from "./components/common/LanguageBar";
import MainTabButtons from "./components/MainTabButtons";
import Popups from "./components/common/Popups";
import { overFlowAuto, overFlowHidden } from "./js/helpers";
import PopupBtns from "./components/PopupBtns";
import balloons from "./assets/Ballons.png";
import { baserUrl } from "./js/baserUrl";
import { ApiContext } from "./services/Api";
import upBtn from "./assets/up-btn.png";
import Footer from "./components/common/Footer";
import axios from "axios";
import Header from "./assets/Header.svga";
import "./App.scss";
import Svga from "./components/Svga";
import Marque from "./components/Marquee";

function App() {
  const headerRef = useRef(0);

  let [language, setLanguage] = useState("English");
  const [gameRecords, setgameRecords] = useState([]);
  const [loadMore, setLoadMore] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
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
  const { userId, userInfo } = useContext(ApiContext);
  const [showBtnUp, setShowBtnUp] = useState(false);

  let type;
  if (mainTabs.tab1) {
    type = 1;
  } else if (mainTabs.tab2) {
    type = 2;
  } else if (mainTabs.tab3) {
    type = 3;
  }

  const popupSwitch = (id) => {
    let newCat = {
      guide: false,
      eventGifting: false,
      details: false,
      records: false,
    };
    setPopup({ ...newCat, [id]: true });
    overFlowHidden();
  };

  const loadMoreHistory = () => {
    setLoadMore(loadMore + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${baserUrl}api/activity/eidF/getRecordInfo?eventDesc=20240812_pak&rankIndex=21&pageNum=${loadMore}&pageSize=20&type=${type}&userId=${userId}`
      )
      .then((response) => {
        if (loadMore >= 2) {
          setgameRecords((prev) => [...prev, response?.data?.data?.list]);
        } else {
          setgameRecords([response?.data?.data?.list]);
        }
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [userInfo, loadMore, userId]);

  const close = () => {
    setPopup(false);
    overFlowAuto();
    setLoadMore(1);
  };

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setShowBtnUp(true);
      } else {
        setShowBtnUp(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <span id="extraContent"></span>
      <div className="App">
        <div className="header">
          <Svga src={Header} playerRef={headerRef} id="headerRef" cssClass={`header-svga`} />
          {/* <img src={Header} alt="" /> */}
          <img className="baloons" src={balloons} alt="" />
        </div>
        <LanguageBar language={language} setLanguage={setLanguage} />
        {mainTabs.tab1 ? <Marque /> : null}
        <MainTabButtons mainTabs={mainTabs} setMainTabs={setMainTabs} />
        <PopupBtns mainTabs={mainTabs} popupSwitch={popupSwitch} />
        <Popups
          popup={popup}
          setPopup={setPopup}
          close={close}
          language={language}
          mainTabs={mainTabs}
          loadMore={loadMoreHistory}
          isLoading={isLoading}
          gameRecord={gameRecords}
        />
        <Footer />
        {showBtnUp && (
          <button className="btn-up" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src={upBtn} alt="" />
          </button>
        )}
      </div>
    </>
  );
}

export default App;
