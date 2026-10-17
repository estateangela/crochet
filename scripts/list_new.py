#!/usr/bin/env python3
"""列出已經有照片、但還沒寫進 works.js 的作品，並印出可以直接貼上的空白資料。

    python3 scripts/list_new.py
"""
import re
from pathlib import Path

root = Path(__file__).resolve().parent.parent
web = root / "photos" / "web"
works = (root / "works.js").read_text(encoding="utf-8")

ids = set(re.findall(r'id:\s*"([^"]+)"', works))
photos = sorted({p.stem.split("-")[0] if False else p.stem
                 for p in web.glob("*.jpg")})
# 去掉 name-2 / name-3 這種同件作品的追加照片
base = sorted({re.sub(r"-\d+$", "", p) for p in photos})

missing = [b for b in base if b not in ids]
orphan = [i for i in ids if i not in base]

if orphan:
    print("works.js 裡有、但 photos/web/ 沒有對應照片的：")
    for i in sorted(orphan):
        print(f"  {i}.jpg")
    print()

if not missing:
    print("沒有待補的作品 —— 每張照片都有對應的資料了。")
else:
    print(f"有 {len(missing)} 件作品還沒寫進 works.js，可以直接貼上去改：\n")
    for b in missing:
        extra = [p for p in photos if re.fullmatch(rf"{re.escape(b)}-\d+", p)]
        print(f"""  {{
    id: "{b}",
    title: "",
    yarn: "",
    size: "",
    hook: "",
    date: "",
    note: "",
    photos: [{", ".join(f'"{e}.jpg"' for e in extra)}],
  }},""")
