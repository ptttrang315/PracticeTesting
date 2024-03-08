import { chromium } from 'playwright';

class LoginUtilities {
    static async launchApp()
    {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://practice.expandtesting.com');
        return page;
    }
}

export {LoginUtilities}