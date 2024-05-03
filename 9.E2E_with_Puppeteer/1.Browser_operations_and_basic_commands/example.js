const puppeteer = require("puppeteer");

async function screenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://knowledgehut.com");
  await page.screenshot({ path: "kh.png" });

  await browser.close();
}

screenshot();
