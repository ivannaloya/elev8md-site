# Working notes for Claude

## Weekly Instagram stories for Friends of Medicine

Every time Ivanna asks for weekly stories:

1. **Ask first, before designing anything:** "Hey, are there any important events going on? Anything that we're trying to sell or highlight? Maybe we should try exploring new ideas?"
2. Build the 7 day weekly series (Mon to-do list, Tech Tuesday, Wellness Wednesday, Unwind Thursday, Founders Friday, Saturday prescription, Sunday reset) plus any event or holiday stories.
   Templates: `social/stories/weekly/weekly.html`, event flyer style: `social/stories/event-thanksgiving/event.html`.
   Quotes: `social/stories/weekly/QUOTE_BANK.md`. Posting times: 10 AM ET for the series, 6 PM ET for promos (Metricool best times).
3. Mark every story that needs an Instagram link sticker; those have to be posted by hand.
4. Render animated videos only (no stills). Present them to Andre in the **swipe review page**
   (`social/stories/review/review.html`, published as an artifact with the `db` capability): one story at a time,
   Good to post / Needs changes, plus notes. The page carries the short plan and the reasoning, so Ivanna only
   needs one line to send Andre with the link. Remind her to share the page with Andre so he can edit (answer) it.
5. When Andre is done, read his answers from the page's `reviews` collection, then schedule every approved story in
   Metricool (Friends of Medicine brand, Instagram STORY, media from the public GitHub raw URL):
   no link sticker = autoPublish true; needs link = autoPublish false (Metricool pushes a reminder to her phone).
   Tell Ivanna which stories need changes and which she must post by hand.

Style rules: no "DM us" calls to action (DMs are not monitored); use email info@friendsofmed.com, the portal or a link.
Keep text inside the Instagram story safe area (250px top and bottom on 1080x1920).
