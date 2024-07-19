import { firefox } from "playwright";

void (async () => {
	// ---- Setup ---- //
	const browser = await firefox.launch({ headless: false, slowMo: 50 });
	const page = await browser.newPage();

	// ---- Run ---- //
	await page.goto("https://playwright.dev/");
	await page.screenshot({ path: `example.png` });

	// ---- Cleanup ---- //
	await browser.close();
})();
