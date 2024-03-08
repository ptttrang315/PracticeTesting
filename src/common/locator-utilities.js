
class LocatorUtilities {
    static async isElementVisible(page, selector){
        try {
            await page.waitForSelector(selector);
            const element = await page.$(selector);
            return Boolean(element);
        } catch (error) {
            console.error(`Failed to check visibility of the element with the selector: ${selector}. Error: ${error}`);
        }
    }

    static async clickElement(page, selector) {
        if (await LocatorUtilities.isElementVisible(page, selector)) {
            await page.click(selector);
        } else {
            console.error(`Element with selector: ${selector} is not visible.`);
        }
    }

    static async inputText(page, selector, text) {
        await LocatorUtilities.isElementVisible(page, selector);
        await page.fill(selector, text);
    }

}

export { LocatorUtilities }