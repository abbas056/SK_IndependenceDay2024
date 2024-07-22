import { baserUrl } from "./baserUrl";

export const tab1Rewards = [
  {
    id: 1,
    rank: "1st",
    desc: <span>50% of the beans pot</span>,
    frame: [{ pic: `${baserUrl}streamkar/rewards/beanbag.png` }],
  },
  {
    id: 2,
    rank: "2nd",
    days: "x5 days",
    desc: <span>30% of the beans pot</span>,
    frame: [{ pic: `${baserUrl}streamkar/rewards/beanbag.png` }],
  },
  {
    id: 3,
    rank: "3rd",
    days: "x5 days",
    desc: <span>20% of the beans pot</span>,
    frame: [{ pic: `${baserUrl}streamkar/rewards/beanbag.png` }],
  },
];
export const giftingTalnetrewards = [
  {
    id: 1,
    target: (
      <>
        Talent <br /> Target: 80m
      </>
    ),
    frame: [
      {
        pic: `${baserUrl}streamkar/rewards/gems.png`,
        desc: (
          <span>
            <span>3,000,000 Gems</span>
          </span>
        ),
      },
      {
        pic: `${baserUrl}streamkar/rewards/noRew.png`,
        desc: (
          <span>
            <span>War Hero frame (New) x5 days</span>
          </span>
        ),
      },
      {
        pic: `${baserUrl}streamkar/rewards/noRew.png`,
        desc: (
          <span>
            <span>War Hero room skin (New) x5 days</span>
          </span>
        ),
      },
    ],
  },
  {
    id: 2,
    target: (
      <>
        Talent <br /> Target: 70m
      </>
    ),
    frame: [
      {
        pic: `${baserUrl}streamkar/rewards/gems.png`,
        desc: (
          <span>
            <span>2,000,000 Gems</span>
          </span>
        ),
      },
      {
        pic: `${baserUrl}streamkar/rewards/noRew.png`,
        desc: (
          <span>
            <span>War Hero frame (New) x3 days</span>
          </span>
        ),
      },
      {
        pic: `${baserUrl}streamkar/rewards/noRew.png`,
        desc: (
          <span>
            <span>War Hero room skin (New) x3 days</span>
          </span>
        ),
      },
    ],
  },
  {
    id: 3,
    target: (
      <>
        Talent <br /> Target: 50m
      </>
    ),
    frame: [
      {
        pic: `${baserUrl}streamkar/rewards/gems.png`,
        desc: (
          <span>
            <span>1,000,000 Gems</span>
          </span>
        ),
      },
      {
        pic: `${baserUrl}streamkar/rewards/noRew.png`,
        desc: (
          <span>
            <span>War Hero frame (New) x1 day</span>
          </span>
        ),
      },
      {
        pic: `${baserUrl}streamkar/rewards/noRew.png`,
        desc: (
          <span>
            <span>War Hero room skin (New) x1 day</span>
          </span>
        ),
      },
    ],
  },
];
export const giftingGifterrewards = [
  {
    id: 1,
    rank: "1st",
    frame: [
      {
        pic: `${baserUrl}streamkar/rewards/beanbag.png`,
        desc: (
          <span>
            <span>3,000,000 </span>Beans
          </span>
        ),
      },
      {
        pic: `${baserUrl}streamkar/rewards/noRew.png`,
        desc: (
          <span>
            <span>War Hero frame (New) x5 days</span>
          </span>
        ),
      },
      {
        pic: `${baserUrl}streamkar/rewards/noRew.png`,
        desc: (
          <span>
            <span>War Hero room skin (New) x5 days</span>
          </span>
        ),
      },
    ],
  },
  {
    id: 2,
    rank: "2nd",
    frame: [
      {
        pic: `${baserUrl}streamkar/rewards/beanbag.png`,
        desc: (
          <span>
            <span>2,000,000 </span>Beans
          </span>
        ),
      },
      {
        pic: `${baserUrl}streamkar/rewards/noRew.png`,
        desc: (
          <span>
            <span>War Hero frame (New) x3 days</span>
          </span>
        ),
      },
      {
        pic: `${baserUrl}streamkar/rewards/noRew.png`,
        desc: (
          <span>
            <span>War Hero room skin (New) x3 days</span>
          </span>
        ),
      },
    ],
  },
  {
    id: 3,
    rank: "3rd",
    frame: [
      {
        pic: `${baserUrl}streamkar/rewards/beanbag.png`,
        desc: (
          <span>
            <span>1,000,000 </span>Beans
          </span>
        ),
      },
      {
        pic: `${baserUrl}streamkar/rewards/noRew.png`,
        desc: (
          <span>
            <span>War Hero frame (New) x1 days</span>
          </span>
        ),
      },
      {
        pic: `${baserUrl}streamkar/rewards/noRew.png`,
        desc: (
          <span>
            <span>War Hero room skin (New) x1 days</span>
          </span>
        ),
      },
    ],
  },
];
export const eventGifts = [
  {
    id: 1,
    img: `${baserUrl}streamkar/gifts/40011725.png`,
    name: "Jashan e Azadi",
    cost: "40k",
  },
  {
    id: 2,
    img: `${baserUrl}streamkar/gifts/40001677.png`,
    name: "Jashan",
    cost: "25k",
  },
  {
    id: 3,
    img: `${baserUrl}streamkar/gifts/40001428.png`,
    name: "Aatish Baazi",
    cost: "20k",
  },
  {
    id: 4,
    img: `${baserUrl}streamkar/gifts/40001330.png`,
    name: "Baaja",
    cost: "10k",
  },
];
export const tab1Details = {
  data: [
    {
      id: 1,
      bomb: "Small Bomb",
      successRate: "50%",
      pointsReq: "10,000",
      rewards: [
        {
          pic: `${baserUrl}streamkar/rewards/blazingFrame.png`,
          text: "Blazing frame x1 day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/victorySlide.png`,
          text: "Victory Slide entrance x1 day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/desireRoomSkin.png`,
          text: "Desire room skin x1 day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/azadiFrame.png`,
          text: "Azaadi Frame x1 day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/solar.png`,
          text: "Solar Flare entrance x1 day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/celebrationFrame.png`,
          text: "Celebration frame x1 day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/stadiumAudioTheme.jpg`,
          text: "Stadium room skin x1 day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/freedomFrame.png`,
          text: "Freedom frame x1 day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/peacemakerFrame.png`,
          text: "Peacemaker frame x1 day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/beanbag.png`,
          text: "500 Beans ",
        },
      ],
    },
    {
      id: 2,
      bomb: "Land Mine",
      successRate: "80%",
      pointsReq: "20,000",
      rewards: [
        {
          pic: `${baserUrl}streamkar/rewards/nightShadow.png`,
          text: "Night shadow room skin x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/freedomRoomSkin.png`,
          text: "Freedom room skin x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/victoriousRoomSkin.png`,
          text: "Victorious room skin x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/hawk.png`,
          text: "Hawk Entrance x2days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/phantom.png`,
          text: "Phantom entrance x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/seaWolfRoomSkin.png`,
          text: "Sea wolf room skin x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/moonKnightFrame.png`,
          text: "Moon Knight frame x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/noRew.png`,
          text: "War Hero Frame x2 days (New)",
        },
        {
          pic: `${baserUrl}streamkar/rewards/noRew.png`,
          text: "War Hero room skin x2 days (New)",
        },
        {
          pic: `${baserUrl}streamkar/rewards/beanbag.png`,
          text: "1000 Beans",
        },
      ],
    },
    {
      id: 3,
      bomb: "Super Mine",
      successRate: "100%",
      pointsReq: "30,000",
      rewards: [
        {
          pic: `${baserUrl}streamkar/rewards/conquerorFrame.png`,
          text: "Conqueror frame x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/spaceship.png`,
          text: "Spaceship entrance x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/azadiRoomskin.png`,
          text: "Azaadi room skin x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/monarchProfileFrame.png`,
          text: "Monarch frame x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/phoenix.png`,
          text: "Phoenix entrance x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/bossRoomSkin.png`,
          text: "Boss room skin x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/monarch.png`,
          text: "Monarch entrance x2 days",
        },
        {
          pic: `${baserUrl}streamkar/rewards/noRew.png`,
          text: "War Hero Frame x2 days (New)",
        },
        {
          pic: `${baserUrl}streamkar/rewards/noRew.png`,
          text: "War Hero room skin x2 days (New)",
        },
        {
          pic: `${baserUrl}streamkar/rewards/beanbag.png`,
          text: "1500 Beans",
        },
      ],
    },
  ],
};
export const tab2Details = {
  data: [
    {
      id: 1,
      buttonName: "Build",
      pointsReq: "20,000",
      rewards: [
        {
          pic: `${baserUrl}streamkar/rewards/bumblebee.png`,
          text: "Bumblebee entrance x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/phoenix.png`,
          text: "Phoenix entrance x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/doyenFrame.png`,
          text: "Doyen Frame x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/conquerorRoomSkin.png`,
          text: "Conqueror Room Skin x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/freedomFrame.png`,
          text: "Freedom Frame x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/freedomRoomSkin.png`,
          text: "Freedom Room Skin x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/conquerorFrame.png`,
          text: "Conqueror frame x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/noRew.png`,
          text: "War Hero Frame x2 days (New)",
        },
        {
          pic: `${baserUrl}streamkar/rewards/noRew.png`,
          text: "War Hero room skin x2 days (New)",
        },
        {
          pic: `${baserUrl}streamkar/rewards/beanbag.png`,
          text: "2000 Beans",
        },
      ],
    },
  ],
};
export const tab3Details = {
  data: [
    {
      id: 1,
      buttonName: "Fire",
      pointsReq: "30,000",
      rewards: [
        {
          pic: `${baserUrl}streamkar/rewards/firebrand-Profile-frame.png`,
          text: "FireBrand Frame x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/luminarSkin.png`,
          text: "Luminary room skin x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/solar.png`,
          text: "Solar Flare entrance x 1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/freedomFrame.png`,
          text: "Freedom Frame x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/freedomRoomSkin.png`,
          text: "Freedom Room Skin x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/conquerorFrame.png`,
          text: "Conqueror frame x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/conquerorRoomSkin.png`,
          text: "Conqueror Room Skin x1 Day",
        },
        {
          pic: `${baserUrl}streamkar/rewards/gems.png`,
          text: "1500 Gems",
        },
        {
          pic: `${baserUrl}streamkar/rewards/noRew.png`,
          text: "War Hero Frame x2 days (New)",
        },
        {
          pic: `${baserUrl}streamkar/rewards/noRew.png`,
          text: "War Hero room skin x2 days (New)",
        },
      ],
    },
  ],
};
export var guideContent = {
  English: {
    topText: (
      <>
        <div>
          When you send event gifts, you will get <span className="c-green">Jashan Points.</span>
        </div>
        <div>
          1 bean of event gift sent = <span className="c-green">1 Jashan Point.</span>
        </div>
        <div>With these points, you will be able to play this event.</div>
      </>
    ),
    firstBox: (
      <ul>
        <li>In this part of the event, you can battle with enemies by deploying different kinds of mines on the battlefield.</li>
        <li>Each “Mine” has a different coverage area & acquires a different number of Jashan Points & has a different success percentage.</li>
        <li>Only 1 type of mine can be selected at a time.</li>
        <li className="c-yellow">
          You can enter any value for the number of times you want to play in the text input box. The default value of the text input box is “1” &
          maximum value is “999”.
        </li>
        <li>
          You can tap on the "+" Plus key to increase the chance you want to play game with that mine or enter the desired number value in the text
          input box.
        </li>
        <li>To play the game, you can either tap anywhere on the 5x5 gird battle field or tap on the “Start” button. </li>
        <li>
          When you tap anywhere on the battlefield or tap on the “Start” button with a selected mine, Jashan Points will be deducted according to the
          type of mine selected & you will get a reward.
        </li>
        <li className="c-yellow">There are 2 outcomes of the game play i.e. Success and Failure.</li>
        <li>Each time you win a battle i.e. the outcome is success, value “1” will be added to the “Daily Enemies Defeated” counter.</li>
        <li>“Daily Enemies Defeated” counter will reset daily at 00:00:00 GMT.</li>
        <li>Each time you win a battle i.e. the outcome is success, the “War Victory” Progress Bar will accumulate accordingly.</li>
        <li>
          When you successfully defeat the enemy 20 times, the war will be won, and you will get 2000 beans clearance reward, and then a new round of
          progress bar accumulation will start again i.e. can be completed repeatedly.
        </li>
        <li>The “War Victory” Progress Bar will not reset to zero every day.</li>
        <li>
          The users with the highest number of “Daily Enemies Defeated” will be displayed on the leaderboard accordingly and will win Beans Pot
          Reward.
        </li>
        <li className="c-yellow">
          0.5% of the beans spent on event gifts will be collected in the BEANS POT and collected Beans will be distributed among the top 3 Rankers of
          the leaderboard, each day.
        </li>
      </ul>
    ),
    secondBox: (
      <ul>
        <li>In this part of the event, you can construct a building to 6 different construction levels.</li>
        <li>Each level acquires different number of “Construction Points” to be reached.</li>
        <li className="c-yellow">1-time successful tap on the “Build” button = 20K Jashan Points.</li>
        <li className="c-yellow">
          You can enter any value for the number of times you want to play in the text input box. The default value of the text input box is “1” &
          maximum value is “999”.
        </li>
        <li>
          When you tap on the "Build" button without entering any value in the text input box successfully, by default the value is "1" so 20K Jashan
          points will be deducted, you will get “10” Construction points and a reward.
        </li>
        <li>
          When you enter any value in the text input box and tap on the "Build" button, that value will be multiplied by 20,000 & points will be
          deducted according to the result. E.g. if you enter value "5”, 5*20,000 = 100,000 so 100,000 Jashan Points will be deducted, and you will
          get “50” Construction points and 5 rewards.
        </li>
        <li>When you reach the building construction level 3, beans as a reward will be produced.</li>
        <li className="c-yellow">These beans will be produced from level 3 to level 6.</li>
        <li>
          The growth rate of beans output per minute is different for different levels, and each level has a corresponding upper limit for beans.
        </li>
        <li>After reaching the corresponding beans limit, no more beans will be generated.</li>
        <li>When you reach level 6, you can continue to play, and the beans will increase.</li>
        <li>
          Each time you get Construction Points by tapping on the “Build” button successfully, value “10” will be added to the “Construction Points”
          counter.
        </li>
        <li>Each time you reach the next Building level, the “Construction Points” counter will increase for the next level.</li>
        <li>
          When you start producing beans from Building Level 3, value on “Today's Estimated Rewards” counter will start accumulating accordingly.
        </li>
        <li>"Today's Estimated Rewards” counter will reset daily at 00:00:00 GMT.</li>
        <li>“My Accumulated Earnings” counter will display your actual bean earnings produced throughout the event.</li>
        <li>The building upgrade progress will reset daily at 00:00:00 GMT.</li>
        <li>The generated beans income will be sent to the user account at 24:00:00 GMT every day.</li>
      </ul>
    ),
    thirdBox: (
      <ul>
        <li>This part of the event is for talents only.</li>
        <li>By receiving event gifts, you will get Talent Points.</li>
        <li className="c-yellow">1 Gem of event gift received = 1 Talent Point.</li>
        <li>In this part of the event, you can do fireworks and win rewards.</li>
        <li className="c-yellow">1-time successful tap on “Fire” button = 30K Talent Points.</li>
        <li>You have to select any 1 of the combos first, then tap on the “Fire” button.</li>
        <li className="c-yellow">When you tap on the “Fire” button successfully, talent points will be deducted and you will get a reward.</li>
      </ul>
    ),
    h1: <h1 className="h1">For Users</h1>,
    desc1: (
      <ol>
        <li>In the total ranking, the top 3 users will be rewarded.</li>
        <li>Rewards will be sent after 7 working days of the event end date.</li>
      </ol>
    ),
    h2: <h1 className="h1">For Talents</h1>,
    desc2: (
      <ol>
        <li>In the total ranking, the top 3 talents will be rewarded.</li>
        <li>Rewards will be sent after 7 working days of the event end date.</li>
      </ol>
    ),
  },

  Urdu: {
    topText: (
      <>
        <div>
          When you send event gifts, you will get <span className="c-green">Jashan Points.</span>
        </div>
        <div>
          1 bean of event gift sent = <span className="c-green">1 Jashan Point.</span>
        </div>
        <div>With these points, you will be able to play this event.</div>
      </>
    ),
    firstBox: (
      <ul>
        <li>In this part of the event, you can battle with enemies by deploying different kinds of mines on the battlefield.</li>
        <li>Each “Mine” has a different coverage area & acquires a different number of Jashan Points & has a different success percentage.</li>
        <li>Only 1 type of mine can be selected at a time.</li>
        <li className="c-yellow">
          You can enter any value for the number of times you want to play in the text input box. The default value of the text input box is “1” &
          maximum value is “999”.
        </li>
        <li>
          You can tap on the "+" Plus key to increase the chance you want to play game with that mine or enter the desired number value in the text
          input box.
        </li>
        <li>To play the game, you can either tap anywhere on the 5x5 gird battle field or tap on the “Start” button. </li>
        <li>
          When you tap anywhere on the battlefield or tap on the “Start” button with a selected mine, Jashan Points will be deducted according to the
          type of mine selected & you will get a reward.
        </li>
        <li className="c-yellow">There are 2 outcomes of the game play i.e. Success and Failure.</li>
        <li>Each time you win a battle i.e. the outcome is success, value “1” will be added to the “Daily Enemies Defeated” counter.</li>
        <li>“Daily Enemies Defeated” counter will reset daily at 00:00:00 GMT.</li>
        <li>Each time you win a battle i.e. the outcome is success, the “War Victory” Progress Bar will accumulate accordingly.</li>
        <li>
          When you successfully defeat the enemy 20 times, the war will be won, and you will get 2000 beans clearance reward, and then a new round of
          progress bar accumulation will start again i.e. can be completed repeatedly.
        </li>
        <li>The “War Victory” Progress Bar will not reset to zero every day.</li>
        <li>
          The users with the highest number of “Daily Enemies Defeated” will be displayed on the leaderboard accordingly and will win Beans Pot
          Reward.
        </li>
        <li className="c-yellow">
          0.5% of the beans spent on event gifts will be collected in the BEANS POT and collected Beans will be distributed among the top 3 Rankers of
          the leaderboard, each day.
        </li>
      </ul>
    ),
    secondBox: (
      <ul>
        <li>In this part of the event, you can construct a building to 6 different construction levels.</li>
        <li>Each level acquires different number of “Construction Points” to be reached.</li>
        <li className="c-yellow">1-time successful tap on the “Build” button = 20K Jashan Points.</li>
        <li className="c-yellow">
          You can enter any value for the number of times you want to play in the text input box. The default value of the text input box is “1” &
          maximum value is “999”.
        </li>
        <li>
          When you tap on the "Build" button without entering any value in the text input box successfully, by default the value is "1" so 20K Jashan
          points will be deducted, you will get “10” Construction points and a reward.
        </li>
        <li>
          When you enter any value in the text input box and tap on the "Build" button, that value will be multiplied by 20,000 & points will be
          deducted according to the result. E.g. if you enter value "5”, 5*20,000 = 100,000 so 100,000 Jashan Points will be deducted, and you will
          get “50” Construction points and 5 rewards.
        </li>
        <li>When you reach the building construction level 3, beans as a reward will be produced.</li>
        <li className="c-yellow">These beans will be produced from level 3 to level 6.</li>
        <li>
          The growth rate of beans output per minute is different for different levels, and each level has a corresponding upper limit for beans.
        </li>
        <li>After reaching the corresponding beans limit, no more beans will be generated.</li>
        <li>When you reach level 6, you can continue to play, and the beans will increase.</li>
        <li>
          Each time you get Construction Points by tapping on the “Build” button successfully, value “10” will be added to the “Construction Points”
          counter.
        </li>
        <li>Each time you reach the next Building level, the “Construction Points” counter will increase for the next level.</li>
        <li>
          When you start producing beans from Building Level 3, value on “Today's Estimated Rewards” counter will start accumulating accordingly.
        </li>
        <li>"Today's Estimated Rewards” counter will reset daily at 00:00:00 GMT.</li>
        <li>“My Accumulated Earnings” counter will display your actual bean earnings produced throughout the event.</li>
        <li>The building upgrade progress will reset daily at 00:00:00 GMT.</li>
        <li>The generated beans income will be sent to the user account at 24:00:00 GMT every day.</li>
      </ul>
    ),
    thirdBox: (
      <ul>
        <li>This part of the event is for talents only.</li>
        <li>By receiving event gifts, you will get Talent Points.</li>
        <li className="c-yellow">1 Gem of event gift received = 1 Talent Point.</li>
        <li>In this part of the event, you can do fireworks and win rewards.</li>
        <li className="c-yellow">1-time successful tap on “Fire” button = 30K Talent Points.</li>
        <li>You have to select any 1 of the combos first, then tap on the “Fire” button.</li>
        <li className="c-yellow">When you tap on the “Fire” button successfully, talent points will be deducted and you will get a reward.</li>
      </ul>
    ),
    h1: <h1 className="h1">For Users</h1>,
    desc1: (
      <ol>
        <li>In the total ranking, the top 3 users will be rewarded.</li>
        <li>Rewards will be sent after 7 working days of the event end date.</li>
      </ol>
    ),
    h2: <h1 className="h1">For Talents</h1>,
    desc2: (
      <ol>
        <li>In the total ranking, the top 3 talents will be rewarded.</li>
        <li>Rewards will be sent after 7 working days of the event end date.</li>
      </ol>
    ),
  },
};
