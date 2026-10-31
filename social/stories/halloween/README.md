# Unwind Thursday: Halloween Edition stories

Source for the Halloween stories in `social/stories/videos/` (promo stories are 720x1280; the end card and
costume contest stories are 1080x1920). All of them come from `story.html`; pick one with `?story=`:

| story | file |
|---|---|
| `afraid` | Halloween_1_-_Dont_Be_Afraid.mov |
| `invite` | Halloween_2_-_Invitation.mov |
| `costume` | Halloween_3_-_Costume_Party.mov |
| `partner` | Halloween_4_-_Not_Too_Late_To_Partner.mov |
| `thanks` | Halloween_5_-_Thank_You_End_Card.mov (reel end card, render with `SCALE=1.5` for 1080x1920, 8s) |
| `vote` | Costume_Contest_1_-_Help_Us_Decide.mov |
| `round1` | Costume_Contest_2_-_Round_1_Poll.mov |
| `round2` | Costume_Contest_3_-_Round_2_Poll.mov |
| `final` | Costume_Contest_4_-_Final_Round_Poll.mov |
| `winner` | Costume_Contest_5_-_Winner_Announcement.mov |
| `happy` | Happy_Halloween.mov |
| `contestant`, `lineup` | costume photo statics; pass photos in the URL (`photo=` or `photos=`), not committed |

The costume contest stories and the end card render at 1080x1920 with `SCALE=1.5`. Poll stories leave framed space for photos and blank space under the button for the poll sticker.

Edit the copy in the `STORIES` object, then render with the script in `../trusted-partner`:

```sh
node ../trusted-partner/render-frames.js "story.html?story=invite" frames 30 10
ffmpeg -framerate 30 -i frames/f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 14 -movflags +faststart Halloween_2_-_Invitation.mov
```

Open `story.html?story=invite&t=2.5` in a browser to preview any moment.

Static PNGs of the costume contest stories live in `social/stories/statics/`. Add `&still=1` to keep the flicker lit:

```sh
SCALE=1.5 node ../trusted-partner/render-still.js "story.html?story=round1&still=1" Costume_Contest_2_-_Round_1_Poll.png 9.3
```
