import { AssertUtilities } from '@common/assert-utilities';

class LocatorUtilities {
    /**
     * Clicks on an element specified by the selector
     * @param {Page} page - The page object from Playwright
     * @param {string} selector - The selector of the element to click
     */
    static async clickElement(page, selector) {
        if (await AssertUtilities.isElementVisible(page, selector)) {
            await page.click(selector);
        } else {
            console.error(`Element with selector: ${selector} is not visible.`);
        }
    }

    /**
     * Inputs text into an element specified by the selector
     * @param {Page} page - The page object from Playwright
     * @param {string} selector - The selector of the element to input text
     * @param {string} text - The text to input
     * @param {string} [typeOfField=null] - The type of the field (optional)
     */
    static async inputText(page, selector, text, typeOfField = null) {
        try {
            await page.waitForSelector(selector);
            if (await AssertUtilities.isElementVisible(page, selector)) {
                if (typeOfField === 'spin-box') {
                    await page.fill(selector, text);
                    await page.waitForTimeout(1000);
                }
                await page.fill(selector, text);
            } else {
                console.error(`Element with selector: ${selector} is not visible.`);
            }
        } catch (error) {
            console.error(`Failed to input text into the element with the selector: ${selector}. Error: ${error}`);
        }
    }

    /**
     * Simulates a key press on an element specified by the selector
     * @param {Page} page - The page object from Playwright
     * @param {string} selector - The selector of the element to press key
     * @param {string} key - The key to press
     */
    static async keyPress(page, selector, key) {
        if (await AssertUtilities.isElementVisible(page, selector)) {
            // await page.click(selector);
            await page.focus(selector);
            await page.keyboard.press(key);
        } else {
            console.error(`Element with selector: ${selector} is not visible.`);
        }
    }

    /**
     * Retrieves the value of an element specified by the selector
     * @param {Page} page - The page object from Playwright
     * @param {string} selector - The selector of the element to get value
     * @returns {Promise<string>} The value of the element
     */
    static async getValue(page, selector) {
        await AssertUtilities.isElementVisible(page, selector);
        return await page.$eval(selector, (el) => el.value);
    }

    /**
     * Retrieves the text content of an element specified by the selector
     * @param {Page} page - The page object from Playwright
     * @param {string} selector - The selector of the element to get text
     * @returns {Promise<string>} The text content of the element
     */
    static async getText(page, selector) {
        await AssertUtilities.isElementVisible(page, selector);
        return await page.$eval(selector, (el) => el.textContent);
    }

    /**
     * Clears the input of an element specified by the selector
     * @param {Page} page - The page object from Playwright
     * @param {string} selector - The selector of the element to clear input
     */
    static async clearInput(page, selector) {
        await AssertUtilities.isElementVisible(page, selector);
        await page.fill(selector, '');
    }

}

export { LocatorUtilities }