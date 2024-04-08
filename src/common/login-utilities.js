const { chromium } = require ('playwright');

class LoginUtilities {
    /**
     * Launches the application and returns the page object
     * @returns {Promise<Page>} The page object from Playwright
     */
    static launchApp() {
        return new Promise(async (resolve, reject) => {
            try {
                const browser = await chromium.launch();
                const context = await browser.newContext();
                const page = await context.newPage();
                await page.goto('/');
                resolve(page);
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = { LoginUtilities }