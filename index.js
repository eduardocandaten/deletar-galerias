const puppeteer = require('puppeteer');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  const email = 'your email';
  const password = 'your password';

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  // Open the page
  await page.goto('https://proof.alboompro.com/');

  // Email
  await sleep(1000);
  await page.waitForSelector('input[type="email"]');
  await page.type('input[type="email"]', email, { delay: 75 });

  // Password
  await sleep(1000);
  await page.type('input[type="password"]', password, { delay: 75 });

  // Login button
  await sleep(1000);
  await page.click('button[type="submit"]');

  // First galery
  await sleep(1000);
  await page.waitForSelector(
    '.src-components-Dashboard-___Dashboard__content___14VBP > div:nth-child(4) a',
  );
  await page.click(
    '.src-components-Dashboard-___Dashboard__content___14VBP > div:nth-child(4) a',
  );

  // "Action" button
  await sleep(1000);
  await page.waitForSelector('.sc-hdPSEv.gLaHWW');
  await page.click('.sc-hdPSEv.gLaHWW');

  // "Delete" button
  await sleep(1000);
  await page.click('.sc-cCbPEh.jmjtag');

  // Checked Checkbox
  await sleep(1000);
  await page.click('input[type=checkbox]');

  // "Delete" button
  await sleep(1000);
  await page.click(
    '.src-components-Common-___Common__dialogModalContent___1vtiH button.src-components-Common-___Common__button___1H56_:last-child',
  );

  await sleep(8000);
})();
