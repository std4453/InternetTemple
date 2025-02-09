import avatar1 from "assets/avatars/1.jpg";
import avatar2 from "assets/avatars/2.jpg";
import avatar3 from "assets/avatars/3.jpg";
import avatar4 from "assets/avatars/4.jpg";
import avatar5 from "assets/avatars/5.jpg";
import avatar6 from "assets/avatars/6.jpg";
import avatar7 from "assets/avatars/7.jpg";
import avatar8 from "assets/avatars/8.jpg";

import merch1 from "assets/merchs/1.jpg";
import merch2 from "assets/merchs/2.jpg";
import merch3 from "assets/merchs/3.jpg";
import merch4 from "assets/merchs/4.jpg";

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
  {
    advice1: "凡所有相，皆是虚妄",
    advice2: "若见诸相非相，即见如来。",
  },
  {
    advice1: "应如是生清净心",
    advice2: "不应住色生心",
  },
  {
    advice1: "过去心不可得,现在心不可得",
    advice2: "未来心不可得",
  },
  {
    advice1: "一切有为法,如梦幻泡影",
    advice2: "如露亦如电,应作如是观",
  },
  {
    advice1: "所作福德",
    advice2: "不应贪著",
  },
  {
    advice1: "舍利子，色不异空，空不异色",
    advice2: "色即是空，空即是色，受想行识，亦复如是",
  },
  {
    advice1: "<i>本乎天者亲上</i>",
    advice2: "<i>本乎地者亲下</i>",
  },
  {
    advice1: "<i>亢之为言也，知进而不知退</i>",
    advice2: "<i>知存而不知亡，知得而不知丧。</i>",
  },
  {
    advice1: "与天地合其德，与天地合其德",
    advice2: "与日月合其明，与四时合其序，与鬼神合其吉凶",
  },
  {
    advice1: "先天而天弗违",
    advice2: "后天而奉天时",
  },
  {
    advice1: "庸言之信，庸行之谨",
    advice2: "闲邪存其诚，善世而不伐",
  },
  {
    advice1: "要立心忠直，有此善心，可以感动得人",
    advice2: "必有贵人扶助，先难后易，终必成功也",
  },
  {
    advice1: "不念过去，不畏将来",
    advice2: "唯有当下，方可得道",
  },
  {
    advice1: "不怨天，不尤人",
    advice2: "自求多福",
  },
  {
    advice1: "善待一切众生，不论人或动物，就是实践慈悲",
    advice2: "以慈悲心待人，以智慧心看待事，自己自在，众生自在",
  },
  {
    advice1: "乾知大始，坤作成物。乾以易知，坤以简能。易则易知，简则易从",
    advice2:
      "易知则有亲，易从则有功。有亲则可久，有功则可大。可久则贤人之德，可大则贤人之业",
  },
  {
    advice1: "君子居其室，出其言，善则千里之外应之，况其迩者乎?",
    advice2: "居其室，出其言，不善千里之外违之",
  },
  {
    advice1: "小人不耻不仁，不畏不义，不见利而不劝，不威不惩",
    advice2: "小惩而大诫，此小人之福也",
  },
  {
    advice1: "尺蠖之屈，以求信也",
    advice2: "龙蛇之蛰，以存身也",
  },
  {
    advice1: "善不积，不足以成名",
    advice2: "恶不积，不足以灭身",
  },
  {
    advice1: "将叛者其辞惭，中心疑者其辞枝，吉人之辞寡",
    advice2: "躁人之辞多，诬善之人其辞游，失其守者其辞屈",
  },
  {
    advice1: "时止则止，时行则行",
    advice2: "动静不失其时，其道光明",
  },
  {
    advice1:
      "古人姓王名质，入山採薪，巧遇两仙人敲棋，看到斧头柄栏了，然后归家，在山中不过七日而世上经已过千年矣",
    advice2: "结局似觉平淡，无甚欢喜，亦无妨碍，各事皆平常而己",
  },
  {
    advice1: "凡事凶多吉少，急宜多行善事，凡做一，必要真实无妄",
    advice2: "忠直存心，宽厚待人，方能化凶为吉也",
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

const generate = (name) => ({
  ...generateFields(name, avatars, merchs, advices),
  advice1Pos: {
    x: 188 + Math.random() * (1544 - 925),
    y: Math.random() * (334 - 110),
  },
  advice2Pos: {
    x: 180 + Math.random() * (1544 - 790),
    y: 530 + Math.random() * (442 - 110),
  },
});

export default generate;
