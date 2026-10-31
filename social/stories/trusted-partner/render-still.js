// Renders one frame of a story page as a PNG: node render-still.js "story.html?story=x" out.png [t]
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const [html, out, t = '9.3'] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 720, height: 1280 }, deviceScaleFactor: +(process.env.SCALE || 1) });
  const [f, q] = html.split('?');
  await p.goto('file://' + path.resolve(f) + (q ? '?' + q : ''));
  await p.evaluate(() => Promise.all([document.fonts.ready, ...[...document.images].map(i => i.decode().catch(() => {}))]));
  await p.evaluate(t => window.render(t), +t);
  await p.locator('#stage').screenshot({ path: out });
  await b.close();
})();
