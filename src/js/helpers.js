import axios from "axios";
import unknown from "../assets/unknown.png";
import crossBtn from "../assets/cross.png";
import { baserUrl } from "./baserUrl";
import { building0, building1, building2, building3, building4, building5, building6 } from "./images";

let env = 1;
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
export const nowDate = `${year}-${month}-${day}`;
currentDate.setDate(currentDate.getDate() - 1);
const prevYear = currentDate.getFullYear();
const prevMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
const prevDay = String(currentDate.getDate()).padStart(2, "0");
export const PrevDate = `${prevYear}-${prevMonth}-${prevDay}`;

export const currencySlang = (n) => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
};
export const captureImageError = (event) => {
  event.target.src = unknown;
  return true;
};
export const slicePlease = (array, from, to) => {
  const cutting = array?.slice(from, to);
  return cutting;
};
export const overFlowAuto = () => {
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "auto";
  }
};
export const overFlowHidden = () => {
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }
};
export function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
export const success = (data) => [
  {
    data: <>{data}</>,
  },
];
export const unsuccess = (data) => [
  {
    data: <>{data}</>,
  },
];
export const callingApi = async (url, uid, uToken) => {
  if (env == 0) {
    return dummyResponse();
  } else {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        userId: uid,
        token: uToken,
      },
    };
    const result = await axios.request(config);
    return result.data;
  }
};
export const dummyResponse = () => {
  return {
    errorCode: 0,
    msg: "success",
    data: true,
  };
};
export const cross = () => {
  let cross;
  cross = crossBtn;
  return cross;
};
export function rewardImages(desc) {
  var rewImg;
  if (desc == "Phantom Entrance" || desc == "Phantom entrance") {
    rewImg = baserUrl + "streamkar/rewards/phantom.png";
  } else if (desc == "Thunder Audio broadcast theme") {
    rewImg = baserUrl + "streamkar/rewards/thunderRoomskin.png";
  } else if (desc == "VIP") {
    rewImg = baserUrl + "streamkar/rewards/vip.png";
  } else if (desc == "SVIP") {
    rewImg = baserUrl + "streamkar/rewards/svip.png";
  } else if (desc == "Gold Luxury Entrance") {
    rewImg = baserUrl + "streamkar/rewards/goldLuxury.png";
  } else if (desc == "Royal Carriage Entrance") {
    rewImg = baserUrl + "streamkar/rewards/royal.png";
  } else if (desc == "Beans" || desc == "beans") {
    rewImg = baserUrl + "streamkar/rewards/beanbag.png";
  } else if (desc == "Rusty Ranger entrance") {
    rewImg = baserUrl + "streamkar/rewards/rustyRanger.png";
  } else if (desc == "Desire frame") {
    rewImg = baserUrl + "streamkar/rewards/desireFrame.png";
  } else if (desc == "Romeo Frame (NEW)" || desc == "Romeo Frame" || desc == "Romeo Frame (New) ") {
    rewImg = baserUrl + "streamkar/rewards/romeoFrame.png";
  } else if (desc == "Desire room skin") {
    rewImg = baserUrl + "streamkar/rewards/desireRoomSkin.png";
  } else if (desc == "Romeo Room Skin (New) " || desc == "Romeo Room Skin (NEW)" || desc == "Romeo Room skin (NEW)") {
    rewImg = baserUrl + "streamkar/rewards/romeoRoomTheme.png";
  } else if (desc == "Rider Entrance") {
    rewImg = baserUrl + "streamkar/rewards/rider.png";
  } else if (desc == "Hawk Entrance") {
    rewImg = baserUrl + "streamkar/rewards/hawk.png";
  } else if (desc == "Valentines Frame (NEW)" || desc == "Valentines frame (NEW)") {
    rewImg = baserUrl + "streamkar/rewards/valentinesFrame.png";
  } else if (desc == "Safari Champion Frame" || desc == " Safari Champion Frame") {
    rewImg = baserUrl + "streamkar/rewards/safariDesertframe.png";
  } else if (desc == "Dare Devil frame (NEW)") {
    rewImg = baserUrl + "streamkar/rewards/dareDevilFrame.png";
  } else if (desc == "Solar Flare entrance" || desc == "solar flare Entrance") {
    rewImg = baserUrl + "streamkar/rewards/solar.png";
  } else if (desc == "Love frame") {
    rewImg = baserUrl + "streamkar/rewards/loveFrame.png";
  } else if (desc == "Love room skin") {
    rewImg = baserUrl + "streamkar/rewards/loveRoomSkin.png";
  } else if (desc == "Titan room skin") {
    rewImg = baserUrl + "streamkar/rewards/titanRoomTheme.png";
  } else if (desc == "Titan frame") {
    rewImg = baserUrl + "streamkar/rewards/titanFrame.png";
  } else if (desc == "Celebration room skin") {
    rewImg = baserUrl + "streamkar/rewards/celeberationRoomskin.png";
  } else if (desc == "Celebration Frame") {
    rewImg = baserUrl + "streamkar/rewards/celebrationFrame.png";
  } else if (desc == "Doyen Frame") {
    rewImg = baserUrl + "streamkar/rewards/doyenFrame.png";
  } else if (desc == "Doyen room skin") {
    rewImg = baserUrl + "streamkar/rewards/doyenRoomskin.png";
  } else if (desc == "Spaceship entrance") {
    rewImg = baserUrl + "streamkar/rewards/spaceship.png";
  } else if (desc == "Sea wolf room skin") {
    rewImg = baserUrl + "streamkar/rewards/seaWolfRoomSkin.png";
  } else if (desc == "Beans" || desc == "beans") {
    rewImg = baserUrl + "streamkar/rewards/beanbag.png";
  } else if (desc == "Goldrush frame") {
    rewImg = baserUrl + "streamkar/rewards/goldeRushFrame.png";
  } else if (desc == "Goldrush room skin") {
    rewImg = baserUrl + "streamkar/rewards/goldRushRoomTheme.png";
  } else if (desc == "Eid Mubarak room skin") {
    rewImg = baserUrl + "streamkar/rewards/eidMubarakRoomSkin.png";
  } else if (desc == "Peacemaker Frame") {
    rewImg = baserUrl + "streamkar/rewards/peacemakerFrame.png";
  } else if (desc == "Victory Slide entrance") {
    rewImg = baserUrl + "streamkar/rewards/victorySlide.png";
  } else if (desc == "Lonewolf entrance") {
    rewImg = baserUrl + "streamkar/rewards/loneWolf.png";
  } else if (desc == "Alpha frame") {
    rewImg = baserUrl + "streamkar/rewards/alphaFrame.png";
  } else if (desc == "Dance Jockey frame") {
    rewImg = baserUrl + "streamkar/rewards/danceJockeyFrame.png";
  } else if (desc == "Dance Jockey room skin" || desc == "Dance Jockey room skin ") {
    rewImg = baserUrl + "streamkar/rewards/danceJokeyRoomTheme.png";
  } else if (desc == "Royalty frame") {
    rewImg = baserUrl + "streamkar/rewards/royaltiProfileFrame.png";
  } else if (desc == "Blessed room skin") {
    rewImg = baserUrl + "streamkar/rewards/blessedRoomSkin2k23.png";
  } else if (desc == "Safari Champion room skin") {
    rewImg = baserUrl + "streamkar/rewards/safariChampionRoomSkin.png";
  } else if (desc == "Glory frame") {
    rewImg = baserUrl + "streamkar/rewards/glory-frame.png";
  } else if (desc == "Monarch entrance") {
    rewImg = baserUrl + "streamkar/rewards/monarch.png";
  } else if (desc == "Monarch frame" || desc == "Monarch Frame") {
    rewImg = baserUrl + "streamkar/rewards/monarchProfileFrame.png";
  } else if (desc == "Pirate Ship entrance") {
    rewImg = baserUrl + "streamkar/rewards/pirateShip.png";
  } else if (desc == "Gold Dragon entrance") {
    rewImg = baserUrl + "streamkar/rewards/dragon.png";
  } else if (desc == "Phoenix entrance" || desc == "Pheonix entrance " || desc == "Pheonix entrance") {
    rewImg = baserUrl + "streamkar/rewards/phoenix.png";
  } else if (desc == "Kingship room skin") {
    rewImg = baserUrl + "streamkar/rewards/kingshipRoom.png";
  } else if (desc == "Gems") {
    rewImg = baserUrl + "streamkar/rewards/gems.png";
  } else if (desc == "Aesthetic room skin") {
    rewImg = baserUrl + "streamkar/rewards/aestheticRoomskin.png";
  } else if (desc == "FireBrand frame" || desc == "FireBrand Frame") {
    rewImg = baserUrl + "streamkar/rewards/firebrand-Profile-frame.png";
  } else if (desc == "Waterfront room skin") {
    rewImg = baserUrl + "streamkar/rewards/waterfrontRoomskin.png";
  } else if (desc == "Ignite frame") {
    rewImg = baserUrl + "streamkar/rewards/igniteFrame.png";
  } else if (desc == "Frosty room skin") {
    rewImg = baserUrl + "streamkar/rewards/frostySkin.png";
  } else if (desc == "Mysterio frame") {
    rewImg = baserUrl + "streamkar/rewards/mysterioFrame.png";
  } else if (desc == "Desire room skin") {
    rewImg = baserUrl + "streamkar/rewards/desireRoomSkin.png";
  } else if (desc == "Bumblebee entrance") {
    rewImg = baserUrl + "streamkar/rewards/bumblebee.png";
  } else if (desc == "Conqueror Frame" || desc == "Conqueror frame") {
    rewImg = baserUrl + "streamkar/rewards/conquerorFrame.png";
  } else if (desc == "Freedom Room Skin") {
    rewImg = baserUrl + "streamkar/rewards/freedomRoomSkin.png";
  } else if (desc == "Freedom Frame") {
    rewImg = baserUrl + "streamkar/rewards/freedomFrame.png";
  } else if (desc == "Conqueror Room Skin") {
    rewImg = baserUrl + "streamkar/rewards/conquerorRoomSkin.png";
  } else if (desc == "War Hero Frame(New)") {
    rewImg = baserUrl + "streamkar/rewards/warHeroFrame.png";
  } else if (desc == "War Hero room skin(New)") {
    rewImg = baserUrl + "streamkar/rewards/warHeroRoomSkin.png";
  } else if (desc == "Stadium room skin") {
    rewImg = baserUrl + "streamkar/rewards/stadiumAudioTheme.jpg";
  } else if (desc == "Azaadi Frame") {
    rewImg = baserUrl + "streamkar/rewards/azadiFrame.png";
  } else if (desc == "Azaadi room skin") {
    rewImg = baserUrl + "streamkar/rewards/azadiRoomskin.png";
  } else if (desc == "Blazing Frame") {
    rewImg = baserUrl + "streamkar/rewards/blazingFrame.png";
  } else if (desc == "Boss room skin") {
    rewImg = baserUrl + "streamkar/rewards/bossRoomSkin.png";
  } else if (desc == "Victorious room skin") {
    rewImg = baserUrl + "streamkar/rewards/victoriousRoomSkin.png";
  } else if (desc == "Freedom room skin") {
    rewImg = baserUrl + "streamkar/rewards/freedomRoomSkin.png";
  } else if (desc == "Night shadow room skin") {
    rewImg = baserUrl + "streamkar/rewards/nightShadow.png";
  } else if (desc == "Moon Knight Frame") {
    rewImg = baserUrl + "streamkar/rewards/moonKnightFrame.png";
  } else if (desc == "Luminary room skin") {
    rewImg = baserUrl + "streamkar/rewards/luminarSkin.png";
  } else if (desc == "Moon Knight Frame") {
    rewImg = baserUrl + "streamkar/rewards/moonKnightFrame.png";
  } else if (desc == "Moon Knight Frame") {
    rewImg = baserUrl + "streamkar/rewards/moonKnightFrame.png";
  } else {
    rewImg = baserUrl + "streamkar/rewards/noRew.png";
  }
  return rewImg;
}
export const estBeans = (value, rank) => {
  let beans;
  if (rank == 1) {
    beans = Math.floor((value * 50) / 100);
  } else if (rank == 2) {
    beans = Math.floor((value * 30) / 100);
  } else if (rank == 3) {
    beans = Math.floor((value * 20) / 100);
  }
  return beans;
};
export const formatData = (originalArray) => {
  const newArray = [];
  for (let i = 0; i < originalArray?.length; i += 3) {
    newArray?.push(originalArray?.slice(i, i + 3));
  }
  return newArray;
};
export function gotToTopUp() {
  try {
    window.phone.routeViewPage("streamkar://m.streamkar.com/route/pay");
  } catch (_error) {
    console.error(_error);
    // showToast("Open topup page page error...");
  }
}
export function goToStreaming() {
  try {
    window.phone.routeViewPage("streamkar://m.streamkar.com/route/home?tab=1260");
  } catch (_error) {
    console.error(_error);
    // showToast("Open topup page page error...");
  }
}
export function goTo(isLive, userId, roomId) {
  if (window.UA.android) {
    let url = "streamkar://m.streamkar.com/route";
    if (isLive) {
      url = url + "/room?roomId=" + roomId;
    } else {
      url = url + "/user?userId=" + userId;
    }
    if (userId || roomId) {
      window.phone.routeViewPage(url);
    }
  } else {
    window.location.href = "http://www.kktv1.com/m/?roomid=" + userId + "";
  }
}
export const buildings = (level) => {
  let building;
  if (level === 0) {
    building = building0;
  } else if (level === 1) {
    building = building1;
  } else if (level === 2) {
    building = building2;
  } else if (level === 3) {
    building = building3;
  } else if (level === 4) {
    building = building4;
  } else if (level === 5) {
    building = building5;
  } else if (level === 6) {
    building = building6;
  } else {
    building = null;
  }
  return building;
};
