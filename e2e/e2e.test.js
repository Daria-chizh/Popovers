import puppetteer from 'puppeteer';
import runServer from './e2e.server';

jest.setTimeout(30000); // default puppeteer timeout

describe('Open modal window', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = await runServer();
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.close();
  });

  test('open modal window to click button', async () => {
    await page.goto(baseUrl);
    await page.click('#button-with-tooltip');
    await page.waitForSelector('#tooltip', { visible: true });
  });
});
