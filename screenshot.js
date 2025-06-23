// screenshot.js
const puppeteer = require("puppeteer");
const path = require("path");

// Map each source HTML → output PNG
const jobs = [
  {
    html: path.resolve(__dirname, "assets/html/card-profile.html"),
    out: path.resolve(__dirname, "assets/images/profile-card.png"),
  },
  {
    html: path.resolve(__dirname, "assets/html/card-platforms.html"),
    out: path.resolve(__dirname, "assets/images/platforms-card.png"),
  },
  {
    html: path.resolve(__dirname, "assets/html/card-green.html"),
    out: path.resolve(__dirname, "assets/images/green-card.png"),
  },
  {
    html: path.resolve(__dirname, "assets/html/card-tools.html"),
    out: path.resolve(__dirname, "assets/images/tools-card.png"),
  },
];

(async () => {
  const browser = await puppeteer.launch();
  for (let { html, out } of jobs) {
    const page = await browser.newPage();

    // Set viewport width to your card width, tall enough for all cards,
    // and deviceScaleFactor=2 for Retina‐quality PNGs.
    await page.setViewport({
      width: 340,
      height: 1000,
      deviceScaleFactor: 2,
    });

    // Load the local HTML
    await page.goto("file://" + html);

    // Select your .card element and screenshot just that node
    const card = await page.$(".card");
    if (!card) {
      console.error("❌ .card element not found in", html);
    } else {
      await card.screenshot({ path: out });
      console.log("✅ Generated", out);
    }

    await page.close();
  }
  await browser.close();
})();
