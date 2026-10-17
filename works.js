// 作品資料 —— 要新增作品只需要改這個檔案，不用碰 index.html
//
//   id       作品代號，也是照片檔名：photos/web/<id>.jpg
//   title    作品名稱
//   tag      分類。會變成上方的篩選按鈕
//   yarn     用線
//   video    參考的教學影片網址。YouTube 會直接嵌進作品頁
//   photos   同一件作品的其他角度
//
// 還有這些選填欄位，想記就加進去，沒加就不會顯示：
//   fiber 材質 · amount 用量 · yarnUrl 線材連結 · size 尺寸 · hook 鉤針
//   date 完成月份 YYYY-MM（會決定排序）· note 一句話 · source 圖解來源
//
// 照片放 photos/ 原圖 → ./scripts/prepare_photos.sh → python3 scripts/list_new.py

window.WORKS = [
  {
    id: "仙人掌工具收納",
    title: "仙人掌工具收納",
    tag: "收納",
    yarn: "蘇蘇姐家四股牛奶棉",
    video: "https://youtu.be/h-fYu_Dt-ak",
    photos: [],
  },
  {
    id: "向日葵杯墊",
    title: "向日葵杯墊",
    tag: "杯墊",
    yarn: "蘇蘇姐家四股牛奶棉",
    video: "https://youtube.com/shorts/ds6Oa2xYXPY?si=AjeVbATYEWZoBoXd",
    photos: ["向日葵杯墊-2.jpg"],
  },
  {
    id: "大腸圈",
    title: "大腸圈",
    tag: "配件",
    yarn: "金蔥線",
    video: "https://youtu.be/gjrkL9QX6jo",
    photos: [],
  },
  {
    id: "富士山飲料提袋",
    title: "富士山飲料提袋",
    tag: "提袋",
    yarn: "",
    video: "",
    photos: ["富士山飲料提袋-2.jpg"],
  },
  {
    id: "柳橙蛋糕",
    title: "柳橙蛋糕",
    tag: "玩偶",
    yarn: "",
    video: "",
    photos: [],
  },
  {
    id: "水桶包",
    title: "水桶包",
    tag: "包款",
    yarn: "",
    video: "",
    photos: [],
  },
  {
    id: "玫瑰花杯墊",
    title: "玫瑰花杯墊",
    tag: "杯墊",
    yarn: "",
    video: "",
    photos: ["玫瑰花杯墊-2.jpg"],
  },
  {
    id: "珍珠白餃子包",
    title: "珍珠白餃子包",
    tag: "包款",
    yarn: "",
    video: "",
    photos: [],
  },
  {
    id: "皮克敏花苗",
    title: "皮克敏花苗",
    tag: "玩偶",
    yarn: "",
    video: "",
    photos: [],
  },
  {
    id: "茄芷袋飲料提袋",
    title: "茄芷袋飲料提袋",
    tag: "提袋",
    yarn: "",
    video: "",
    photos: ["茄芷袋飲料提袋-2.jpg"],
  },
  {
    id: "華夫格圍巾",
    title: "華夫格圍巾",
    tag: "圍巾",
    yarn: "",
    video: "",
    photos: [],
  },
  {
    id: "華夫格毛帽",
    title: "華夫格毛帽",
    tag: "帽子",
    yarn: "",
    video: "",
    photos: [],
  },
  {
    id: "蘋果飲料提袋",
    title: "蘋果飲料提袋",
    tag: "提袋",
    yarn: "",
    video: "",
    photos: ["蘋果飲料提袋-2.jpg"],
  },
  {
    id: "護耳帽",
    title: "護耳帽",
    tag: "帽子",
    yarn: "",
    video: "",
    photos: [],
  },
  {
    id: "貓耳帽",
    title: "貓耳帽",
    tag: "帽子",
    yarn: "",
    video: "",
    photos: [],
  },
  {
    id: "貝蕾帽",
    title: "貝蕾帽",
    tag: "帽子",
    yarn: "",
    video: "",
    photos: [],
  },
  {
    id: "鉤織小物",
    title: "鉤織小物",
    tag: "小物",
    yarn: "",
    video: "",
    photos: [],
  },
  {
    id: "鉤織花束",
    title: "鉤織花束",
    tag: "玩偶",
    yarn: "",
    note: "封面是從影片擷取的，之後可以把影片連結補進 video 欄位。",
    video: "",
    photos: [],
  },
  {
    id: "點心",
    title: "點心",
    tag: "玩偶",
    yarn: "",
    video: "",
    photos: [],
  },
];
