class AssertUtilities {
    /**
     * Checks if an element specified by the selector is visible
     * @param {Page} page - The page object from Playwright
     * @param {string} selector - The selector of the element to check
     * @returns {Promise<boolean>} True if the element is visible, false otherwise
     */
    static async isElementVisible(page, selector){
        try {
            await page.waitForSelector(selector);
            const element = await page.$(selector);
            return Boolean(element);
        } catch (error) {
            console.error(`Failed to check visibility of the element with the selector: ${selector}. Error: ${error}`);
        }
    }

    /**
     * Checks if an element specified by the selector is not null
     * @param {Page} page - The page object from Playwright
     * @param {string} selector - The selector of the element to check
     * @returns {Promise<boolean>} True if the element is not null, false otherwise
     */
    static async isElementNotNull(page, selector){
        try {
            const element = await page.$(selector);
            return element !== null;
        } catch (error) {
            console.error(`Failed to check if the element with the selector: ${selector} is not null. Error: ${error}`);
        }
    }

    /**
     * Checks if the text of an element specified by the selector is equal to the expected text
     * @param {Page} page - The page object from Playwright
     * @param {string} selector - The selector of the element to check
     * @param {string} expectedText - The expected text to compare with the element's text
     * @returns {Promise<boolean>} True if the element's text is equal to the expected text, false otherwise
     */
    static async isElementTextEqual(page, selector, expectedText){
        try {
            await page.waitForSelector(selector);
            const element = await page.$(selector);
            const elementText = await element.innerText();
            return elementText === expectedText;
        } catch (error) {
            console.error(`Failed to check text of the element with the selector: ${selector}. Error: ${error}`);
        }
    }

}

export { AssertUtilities }