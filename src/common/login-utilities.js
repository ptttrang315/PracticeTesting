import { chromium } from 'playwright';

class LoginUtilities {
    /**
     * Launches the application and returns the page object
     * @returns {Promise<Page>} The page object from Playwright
     */
    static async launchApp()
    {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('/');
        return page;
    }
}

export {LoginUtilities}