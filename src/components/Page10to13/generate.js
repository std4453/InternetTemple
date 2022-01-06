import avatar1 from "assets/avatars/1.jpg";
import avatar2 from "assets/avatars/2.jpg";
import avatar3 from "assets/avatars/3.jpg";
import avatar4 from "assets/avatars/4.jpg";
import avatar5 from "assets/avatars/5.jpg";
import avatar6 from "assets/avatars/6.jpg";
import avatar7 from "assets/avatars/7.jpg";
import avatar8 from "assets/avatars/8.jpg";

import merch1 from "assets/merchs/1.png";
import merch2 from "assets/merchs/2.jpg";
import merch3 from "assets/merchs/3.jpg";
import merch4 from "assets/merchs/4.jpg";

import { XorShift } from "xorshift";
import stringHash from "string-hash";
import seedrandom from "seedrandom";

const avatars = [
  {
    avatar: avatar1,
    avatarLink: "https://weibo.com/wujinggoldtyphoon",
  },
  {
    avatar: avatar2,
    avatarLink: "https://weibo.com/u/5644764907",
  },
  {
    avatar: avatar3,
    avatarLink: "https://weibo.com/u/7216859348",
  },
  {
    avatar: avatar4,
    avatarLink: "https://weibo.com/liyuchun",
  },
  {
    avatar: avatar5,
    avatarLink: "https://weibo.com/caikangyong",
  },
  {
    avatar: avatar6,
    avatarLink: "https://weibo.com/u/1822796164",
  },
  {
    avatar: avatar7,
    avatarLink: "https://weibo.com/dees",
  },
  {
    avatar: avatar8,
    avatarLink: "https://weibo.com/u/1742727537",
  },
];

const merchs = [
  {
    merch: merch1,
    merchLink: "https://detail.tmall.com/item.htm?id=651016144090",
  },
  {
    merch: merch2,
    merchLink: "https://detail.tmall.com/item.htm?id=651803251799",
  },
  {
    merch: merch3,
    merchLink: "https://item.taobao.com/item.htm?id=632629380289",
  },
  {
    merch: merch4,
    merchLink: "https://item.taobao.com/item.htm?id=568375245301",
  },
];

const advices = [
  {
    advice1: "自己惟以收善為心。有意外之慮。 受人冤屈。",
    advice2: "凡事要謹慎。不可輕聽人言。不可理人閒事。",
  },
];

const generateFields = (name, ...fields) => {
  const rng = seedrandom(name);
  const random = (n) => Math.floor(rng() * n);
  const result = {};
  for (const field of fields) {
    Object.assign(result, field[random(field.length)]);
  }
  return result;
};

const generate = (name) => generateFields(name, avatars, merchs, advices);

export default generate;
