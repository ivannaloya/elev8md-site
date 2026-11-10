// node render.js "merch.html?item=x&mode=print" out.png [scale] [transparent]
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const [url, out, scale = '1', transparent = ''] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 2400, height: 2000 }, deviceScaleFactor: +scale });
  const [f, q] = url.split('?');
  await p.goto('file://' + path.resolve(f) + (q ? '?' + q : ''));
  await p.evaluate(() => Promise.all([document.fonts.ready, ...[...document.images].map(i => i.decode().catch(() => {}))]));
  await p.locator(transparent ? '#stage' : '#stage > *').first().screenshot({ path: out, omitBackground: !!transparent });
  await b.close();
})();
