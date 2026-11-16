# Prompt: Reels and TikTok review page

Paste everything below the line into the TikTok and Reels project.

---

Every time you finish a batch of Reels or TikToks for Friends of Medicine, publish them as one **review page** (an
Artifact) so Ivanna and then Andre can approve each video fast. Use the Instagram story review page as the
reference build and copy its approach:
https://github.com/ivannaloya/elev8md-site/blob/claude/partner-trust-messaging-178dl5/social/stories/review/review.html

**Before you start a batch, ask me:** "Hey, are there any important events going on? Anything that we're trying to
sell or highlight? Maybe we should try exploring new ideas?"

## What the page does
- Shows **one video at a time**, 9:16, phone first, like scrolling Reels. Autoplay muted with a big **Sound on** button
  (Reels depend on audio, so reviewers must be able to hear them). Loop the video.
- Above each video: number (3 / 12), platform (Reels, TikTok or both), post date and time in ET, and a tag that says
  **Posts automatically** or **Needs a manual step** (trending audio, a TikTok sound, a link, a collab tag).
- Under each video: the full **caption** with hashtags (tap to expand), the **hook** (first 3 seconds of on-screen
  text), the **song or audio**, and the length.
- Two big buttons: **✓ Good to post** and **✕ Needs changes**. Swipe right or left on the video does the same;
  arrow keys on a computer.
- A **Notes** box that saves on its own as you type, plus an **Add timestamp** button that drops the current playback
  time into the notes, like `[0:12] cut this pause`, so feedback points to an exact moment.
- An optional **Caption edit** box for rewriting the caption directly.
- A row of small squares across the top that turn green or red as you go; tap one to jump back.
- A short **plan** at the top: what posts when, and why (one or two sentences).
- An end screen: approved, needs changes, not reviewed yet, with every note.

## Two-step review: Ivanna first, then Andre
- Every reviewer's answers are saved separately. On each video, show the other reviewer's answer and notes
  (for example, "Ivanna said needs changes: [0:04] hook is slow").
- Ivanna reviews first. Apply her notes, republish to the **same page link**, then she shares it with Andre.
- A video is ready to schedule only when **both** have marked it Good to post.

## How to build it
- Publish as an Artifact with capabilities `{"db": {}, "user": {"scopes": ["profile"]}}`.
- Save answers in the collection `reviews`, one document per video per person, id `<videoId>__<userId>`, with fields
  `video`, `uid`, `decision` ("yes" or "no"), `comment`, `captionEdit`, `updatedAt`. Write one document at a time and
  wait about a second after typing stops before saving notes.
- Ship the videos with the page (`files`, under `v/`). Export H.264 MP4, 1080x1920, so a publish stays under 64 MB;
  for a bigger batch, publish in parts to the same link.
- When a video changes, give it a new id (`R03` becomes `R03v2`) so old answers don't carry over to the new cut.
- Look: dark viewer, brand teal `#3fa597`, Cormorant Garamond for titles and Inter for text.
- Show your work: after publishing, read the `reviews` collection once to confirm it's empty and ready.

## After the review
- Read `reviews`, list for Ivanna what needs changes (with the notes) and what's approved by both.
- Schedule approved videos in **Metricool**, brand **Friends of Medicine** (id 8046238), timezone America/New_York:
  Instagram as type `REEL` with the caption, and TikTok if the video is for TikTok. Media must be a public URL
  (the public GitHub raw link works). Pick times with Metricool's best time tool for that week.
- Videos that need a manual step (trending audio, links, collabs) get `autoPublish: false`, so Metricool reminds
  Ivanna's phone to post them by hand. Everything else posts automatically.
- Finish with **one line** Ivanna can send Andre with the page link.

## Content rules
- Never say "DM us" (DMs aren't monitored). Use info@friendsofmed.com, the portal (friendsofmed.com/portal) or the
  link in bio.
- Keep on-screen text out of the bottom fifth and the right edge, where Instagram and TikTok put their buttons
  and captions.
