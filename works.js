// 作品資料 —— 要新增作品只需要改這個檔案，不用碰 index.html
//
//   id       唯一代號，也是照片檔名：photos/web/<id>.jpg
//   title    作品名稱
//   tag      分類，例如「包款」「配件」「家飾」。會變成上方的篩選按鈕；留空就不分類
//   yarn     線材名稱與色號，例如「DMC Natura XL · 03 白」
//   fiber    材質成分，例如「100% 棉」
//   amount   用量，例如「2 球（約 100g）」
//   yarnUrl  線材的購買或參考連結（可留空）
//   size     尺寸
//   hook     鉤針號數
//   date     完成日期 YYYY-MM
//   note     想說的一句話
//   video    參考的教學影片網址。YouTube 會直接嵌在作品頁裡，其他網址會變成連結
//   source   影片以外的圖解來源（書名、網頁名稱…）
//   photos   同一件作品的其他角度，例如 ["coaster-2.jpg"]
//
// 照片放 photos/ 原圖 → 跑 ./scripts/prepare_photos.sh → python3 scripts/list_new.py

window.WORKS = [
  {
    id: "example-bag",
    title: "網袋飲料提袋",
    tag: "包款",
    yarn: "純棉 8 號線 · 米白",
    fiber: "100% 棉",
    amount: "1 球（約 50g）",
    yarnUrl: "",
    size: "袋身 14 × 18 cm，提帶 30 cm",
    hook: "3.0 mm",
    date: "2026-10",
    note: "第一個學會的網狀針法，提帶比圖解加長了 5 cm 比較好背。",
    video: "",
    source: "網袋飲料提袋_鉤織圖解",
    photos: [],
  },

  // ↑ 範例，換成自己的作品後連同這行一起刪掉。
];
