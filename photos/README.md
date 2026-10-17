# 照片放這裡

1. 原圖放在這個資料夾，檔名用作品的 `id`，例如 `網袋飲料提袋` 的 id 是 `example-bag`，
   照片就命名 `example-bag.jpg`。
2. 同一件作品想放多張，命名 `example-bag-2.jpg`、`example-bag-3.jpg`，
   並把檔名寫進 `works.js` 的 `photos` 陣列。
3. 跑一次 `scripts/prepare_photos.sh`，會在 `photos/web/` 產生縮過的網頁用版本。

手機拍的原圖通常 3–5 MB，直接放上網頁會讓人等很久。縮圖腳本用 macOS 內建的 `sips`，
不需要安裝任何東西。

原圖本身不進版控（`.gitignore` 擋掉了），上網站的是 `photos/web/` 裡縮過的版本。
原圖請自己留一份備份。
