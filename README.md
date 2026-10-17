# 鉤織作品

一個只放作品照片的靜態網站。沒有後端、沒有建置步驟，推上去就更新。

## 新增一件作品

```bash
# 1. 照片放進 photos/，檔名就是作品代號
cp ~/Desktop/IMG_1234.jpg photos/coaster.jpg

# 2. 縮成網頁用尺寸（macOS 內建 sips，不用裝東西）
./scripts/prepare_photos.sh

# 3. 看看還缺哪些資料，它會印出可以直接貼的欄位
python3 scripts/list_new.py

# 4. 把印出來的區塊貼進 works.js 填好，推上去
git add -A && git commit -m "新增杯墊" && git push
```

同一件作品想放多張：命名 `coaster-2.jpg`、`coaster-3.jpg`，
`list_new.py` 會自動把它們列進該作品的 `photos` 欄位。

## 為什麼照片要先縮

手機拍一張 3–5 MB，十件作品就是 40 MB。用手機網路開會等很久，而且 git 會永遠
留著每一個版本。`prepare_photos.sh` 把長邊縮到 1600px、品質 72，肉眼看不出差別，
檔案通常小 10 倍以上。

**原圖不進版控**（`.gitignore` 擋掉了），上網站的是 `photos/web/` 裡縮過的版本。
原圖請自己留一份備份 —— 這個 repo 不是你的照片備份。

## 檔案

| 檔案 | 做什麼 |
| --- | --- |
| `works.js` | 作品資料。**平常只需要改這個檔案** |
| `index.html` | 整個網站，單一檔案 |
| `photos/` | 原圖（不進版控） |
| `photos/web/` | 縮過的網頁用圖（會進版控） |
| `scripts/prepare_photos.sh` | 縮圖 |
| `scripts/list_new.py` | 列出還沒寫資料的照片 |

## 本機預覽

```bash
open index.html
```

直接開檔案就能看 —— 資料是用 `<script src="works.js">` 載入而不是 `fetch()`，
所以 `file://` 也能跑，不需要起 server。

## 發佈

GitHub Pages 設定成從 `main` 分支的根目錄發佈即可，不需要 workflow。

> 網站是公開的。放上去的照片任何人都看得到，`works.js` 裡寫的文字也是。

## 設計

暖紙色底、襯線標題、不等高的作品牆（用 CSS `columns`，所以圖片原始比例不會被裁）。
支援深色模式。除了 Google Fonts 的思源宋體之外沒有任何外部資源。

點一下作品開啟大圖與細節（用線、尺寸、鉤針號數、一句話筆記）。
