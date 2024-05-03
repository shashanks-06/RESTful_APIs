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
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://knowledgehut.com", { waitUntil: "networkidle2" }); // wait until website is loaded completely
  await page.pdf({ path: "kh.pdf", format: "a4" }); // page formate set to a4 size

  await browser.close();
}
pdf();
