import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { baserUrl } from "./../js/baserUrl";
import { nowDate, PrevDate } from "../js/helpers";

const ApiContext = createContext();
function EventProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [builderBeans, setBuilderBeans] = useState([]);
  const [talentFireworks, setTalentFireworks] = useState([]);
  const [beansSend, setBeansSend] = useState([]);
  const [beansReceived, setBeansReceived] = useState([]);
  const [dailyScoreToday, setDailyScoreToday] = useState([]);
  const [dailyScorePrevious, setDailyScorePrevious] = useState([]);
  const [user, setUser] = useState({
    uid: 0,
    token: undefined,
  });
  const refreshApi = () => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    try {
      // window.phone.getUserInfo(function (userInfo) {
      //   setUser({
      //     uid: userInfo.userId > 0 ? userInfo.userId : 0,
      //     token: userInfo.token !== "" ? userInfo.token : null,
      //   });
      // });
      setUser({
        uid: 596492376,
        token: "A1F86842C950814D7F8EAA779028066D27",
      });
    } catch (_error) {
      setUser({
        uid: 0,
        token: "",
      });

      console.error("Can't get userInfo by window.phone.getUserInfo");
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (user.uid > 0) {
      axios
        .get(`${baserUrl}api/activity/independence/pak/getUserEventInfo?userId=${user.uid}`)
        .then((response) => {
          setUserInfo(response.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [user, refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getWinnerRankInfo?eventDesc=20240812_pak&rankIndex=1&pageNum=1&pageSize=20`)
      .then((response) => {
        setBuilderBeans(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getWinnerRankInfo?eventDesc=20240812_pak&rankIndex=1&pageNum=1&pageSize=20`)
      .then((response) => {
        setTalentFireworks(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240812_pak&rankIndex=11&pageNum=1&pageSize=20`)
      .then((response) => {
        setBeansSend(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240812_pak&rankIndex=12&pageNum=1&pageSize=20`)
      .then((response) => {
        setBeansReceived(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240812_pak&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${nowDate}`)
      .then((response) => {
        setDailyScoreToday(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240812_pak&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${PrevDate}`)
      .then((response) => {
        setDailyScorePrevious(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <div>
      <ApiContext.Provider
        value={{
          isLoading,
          setIsLoading,
          refreshApi,
          userId: user.uid,
          userToken: user.token,
          userInfo: userInfo.data,
          builderBeans: builderBeans.data,
          talentFireworks: talentFireworks.data,
          beansSend: beansSend.data,
          beansReceived: beansReceived.data,
          dailyScoreToday: dailyScoreToday.data,
          dailyScorePrevious: dailyScorePrevious.data,
        }}
      >
        {children}
      </ApiContext.Provider>
    </div>
  );
}

export { ApiContext, EventProvider };
