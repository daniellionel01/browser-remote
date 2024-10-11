import { chromium } from "npm:playwright-core";

const delay = async (ms: number) => new Promise((r) => setTimeout(r, ms));

if (import.meta.main) {
  const ctx = await chromium.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome Dev.app/Contents/MacOS/Google Chrome Dev",
  });
  const page = await ctx.newPage();
  await page.goto("https://google.com");

  while (true) {
    await delay(1000);
  }
}
