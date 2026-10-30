const { chromium } = require('playwright');
const path = require('path'); const fs = require('fs');
(async () => {
  const [html, outDir, fps, dur] = process.argv.slice(2);
  fs.mkdirSync(outDir, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 720, height: 1280 }, deviceScaleFactor: +(process.env.SCALE || 1) });
  const [f, q] = html.split('?');
  await p.goto('file://' + path.resolve(f) + (q ? '?' + q : ''));
  await p.evaluate(() => document.fonts.ready);
  const n = Math.round(+fps * +dur);
  const stage = p.locator('#stage');
  for (let i = 0; i < n; i++) {
    await p.evaluate(t => window.render(t), i / +fps);
    await stage.screenshot({ path: `${outDir}/f${String(i).padStart(4, '0')}.png` });
  }
  await b.close();
})();
