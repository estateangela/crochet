#!/bin/bash
# 把 photos/ 的原圖縮成網頁用尺寸，放到 photos/web/。
# 用 macOS 內建的 sips 與 BSD stat，不需要安裝任何東西（僅限 macOS）。
#
#   ./scripts/prepare_photos.sh
#
# 已經處理過而且原圖沒更新的會跳過，可以重複執行。
set -euo pipefail
cd "$(dirname "$0")/.."

MAX=1600          # 長邊最大像素；手機原圖通常 4000+，縮到這個尺寸肉眼看不出差別
QUALITY=72        # JPEG 品質

mkdir -p photos/web
shopt -s nullglob nocaseglob

count=0 skipped=0
for src in photos/*.jpg photos/*.jpeg photos/*.png photos/*.heic; do
  name=$(basename "${src%.*}")
  out="photos/web/${name}.jpg"

  # 原圖沒有比產出新就跳過。
  # 不用 `[ "$out" -nt "$src" ]`：bash 的 -nt 只比到「秒」，而剛縮完的圖跟原圖
  # 往往落在同一秒，就會被判定成「不夠新」而每次重做。改成取秒數用 >= 比較。
  if [ -f "$out" ]; then
    src_m=$(stat -f %m "$src")
    out_m=$(stat -f %m "$out")
    if [ "$out_m" -ge "$src_m" ]; then
      skipped=$((skipped + 1))
      continue
    fi
  fi

  sips -s format jpeg -s formatOptions "$QUALITY" -Z "$MAX" "$src" --out "$out" >/dev/null 2>&1
  before=$(du -k "$src" | cut -f1)
  after=$(du -k "$out" | cut -f1)
  printf "  %-28s %5s KB -> %5s KB\n" "$name" "$before" "$after"
  count=$((count + 1))
done

echo
echo "處理 $count 張，跳過 $skipped 張（已是最新）"
[ "$count" = 0 ] && [ "$skipped" = 0 ] && echo "photos/ 裡還沒有照片。"
exit 0
