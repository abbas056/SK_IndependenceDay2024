import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { baserUrl } from "./../js/baserUrl";
import { nowDate, PrevDate } from "../js/helpers";

const ApiContext = createContext();
function EventProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [todayWinners, settodayWinners] = useState([]);
  const [previousWinners, setpreviousWinners] = useState([]);
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
        token: "A1B897DDD6E3E34E8CB022B730CAD9CFA5",
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
        .get(`${baserUrl}api/activity/eid2024/getUserEventInfo?userId=${user.uid}`)
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
      .get(`${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240617_animal&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${nowDate}`)
      .then((response) => {
        settodayWinners(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baserUrl}api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240617_animal&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${PrevDate}`)
      .then((response) => {
        setpreviousWinners(response.data);
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
          todayWinners: todayWinners.data,
          previousWinners: previousWinners.data,
        }}
      >
        {children}
      </ApiContext.Provider>
    </div>
  );
}

export { ApiContext, EventProvider };
