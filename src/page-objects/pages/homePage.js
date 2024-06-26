import { LocatorUtilities } from '@common/locator-utilities';
import { homePageElements }  from '@locators/homePageElements';

class HomePage{
    constructor(page) {
        this.page = page;
        this.elements = homePageElements;
    }

    /**
     * Selects a tab on the home page
     * @param {string} type - The type of the tab
     * @param {string} tabName - The name of the tab
     */
    async selectTab(type, tabName) {
        await LocatorUtilities.clickElement(this.page, this.elements.navigationTab(type, tabName));
    }
}

export { HomePage };