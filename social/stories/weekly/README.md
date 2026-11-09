# Weekly story series (rebrand style)

`weekly.html?day=mon|tue|wed|thu|fri` renders one story (720x1280 page, render with `SCALE=1.5` for 1080x1920).
Quotes on Wednesday and Friday can be swapped from the URL: `&quote=...&by=...`.

```sh
SCALE=1.5 node ../trusted-partner/render-frames.js "weekly.html?day=wed" frames 30 10
ffmpeg -framerate 30 -i frames/f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 16 -movflags +faststart 3_Wellness_Wednesday.mov
```

Fonts: Cormorant Garamond (SIL Open Font License) and Inter.
