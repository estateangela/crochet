// 作品資料 —— 要新增作品只需要改這個檔案，不用碰 index.html
//
// 每一筆：
//   id       唯一代號，也用來對應照片檔名（photos/web/<id>.jpg）
//   title    作品名稱
//   yarn     用線
//   size     尺寸
//   hook     鉤針號數
//   date     完成日期 YYYY-MM
//   note     想說的一句話（可留空）
//   photos   額外角度的照片檔名（可留空陣列），第一張一律是 <id>.jpg
//
// 照片放 photos/ 原圖，跑 scripts/prepare_photos.sh 會產生 photos/web/ 的網頁用尺寸。

window.WORKS = [
  {
    id: "example-bag",
    title: "網袋飲料提袋",
    yarn: "純棉 8 號線 · 米白",
    size: "袋身 14 × 18 cm，提帶 30 cm",
    hook: "3.0 mm",
    date: "2026-10",
    note: "第一個學會的網狀針法，提帶比圖解加長了 5 cm 比較好背。",
    photos: [],
  },

  // ↑ 上面是範例，換成你自己的作品後把這行和範例一起刪掉。
  // 新增一筆就複製一個 { } 區塊，記得 id 不能重複。
];
