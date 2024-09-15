const puppeteer = require('puppeteer');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto('https://proof.alboompro.com/');

  async function slowType(selector, text) {
    for (let i = 0; i < text.length; i++) {
      await page.type(selector, text[i]);
      await sleep(200); // Espera 200ms entre cada letra
    }
  }

  // Email
  await page.waitForSelector('input[type="email"]');
  await slowType('input[type="email"]', 'email');

  // Senha
  await page.waitForSelector('input[type="password"]');
  await slowType('input[type="password"]', 'senha');

  // Botão de login
  await sleep(200);
  await page.click('button[type="submit"]');

  // Primeira galeria
  await page.waitForSelector(
    '.src-components-Dashboard-___Dashboard__content___14VBP > div:nth-child(4) a',
  );

  while (true) {
    // Primeira galeria
    await sleep(200);
    await page.click(
      '.src-components-Dashboard-___Dashboard__content___14VBP > div:nth-child(4) a',
    );

    // Botão de Ações
    await page.waitForSelector('.sc-hdPSEv.gLaHWW');
    await sleep(200);
    await page.click('.sc-hdPSEv.gLaHWW');

    // Botão de Deletar
    await page.waitForSelector('.sc-cCbPEh.jmjtag');
    await sleep(200);
    await page.click('.sc-cCbPEh.jmjtag');

    // Marca a Checkbox
    await page.waitForSelector('input[type=checkbox]');
    await sleep(200);
    await page.click('input[type=checkbox]');

    // Botão de Deletar
    await page.waitForSelector(
      '.src-components-Common-___Common__dialogModalContent___1vtiH button.src-components-Common-___Common__button___1H56_:last-child',
    );
    await sleep(200);
    await page.click(
      '.src-components-Common-___Common__dialogModalContent___1vtiH button.src-components-Common-___Common__button___1H56_:last-child',
    );

    // Aguarda 8 segundos antes de repetir o ciclo
    await sleep(8000);
  }
})();
