const puppeteer = require("puppeteer");

// Screenshot of website
async function screenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://knowledgehut.com");
  await page.screenshot({ path: "kh.png" });

  await browser.close();
}
screenshot();

// PDF of website
async function pdf() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://knowledgehut.com", { waitUntil: "networkidle2" }); // wait until website is loaded completely
  await page.pdf({ path: "kh.pdf", format: "a4" }); // page formate set to a4 size

  await browser.close();
}
pdf();

// Dimensions of web page
async function PageDimensions() {
  const browser = await puppeteer.launch({ headless: false }); // can add slowMo to see the browser operations
  const page = await browser.newPage();

  await page.setViewport({
    width: 1000,
    height: 1000,
    deviceScaleFactor: 2,
  });

  await page.goto("http://knowledgehut.com");

  const dimension = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });

  console.log("Dimensions: ", dimension); // Default -> { width: 800, height: 600, deviceScaleFactor: 1.0000000149011612 }

  await browser.close();
}
PageDimensions();
