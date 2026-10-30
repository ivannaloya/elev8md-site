# Unwind Thursday: Halloween Edition stories

Source for the four `social/stories/Halloween_*.mov` stories (720x1280, 30fps, 10s).
All four come from `story.html`; pick one with `?story=`:

| story | file |
|---|---|
| `afraid` | Halloween_1_-_Dont_Be_Afraid.mov |
| `invite` | Halloween_2_-_Invitation.mov |
| `costume` | Halloween_3_-_Costume_Party.mov |
| `partner` | Halloween_4_-_Not_Too_Late_To_Partner.mov |
| `thanks` | Halloween_5_-_Thank_You_End_Card.mov (reel end card, render with `SCALE=1.5` for 1080x1920, 8s) |

Edit the copy in the `STORIES` object, then render with the script in `../trusted-partner`:

```sh
node ../trusted-partner/render-frames.js "story.html?story=invite" frames 30 10
ffmpeg -framerate 30 -i frames/f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 14 -movflags +faststart Halloween_2_-_Invitation.mov
```

Open `story.html?story=invite&t=2.5` in a browser to preview any moment.
