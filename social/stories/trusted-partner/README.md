# Story 2: Trusted Partner (animated)

Source for `social/stories/videos/1_Trusted_Partner/Story_2_-_Trusted_Partner_animated.mov` (720x1280, 30fps, 9s).

Edit the copy in the `COPY` object in `story.html`, then render:

```sh
node render-frames.js story.html frames 30 9
ffmpeg -framerate 30 -i frames/f%04d.png -c:v libx264 -pix_fmt yuv420p -crf 14 -movflags +faststart Story_2_-_Trusted_Partner_animated.mov
```

Open `story.html?t=2.5` in a browser to preview any moment of the animation.
