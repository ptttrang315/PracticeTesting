const { LocatorUtilities } = require ('../../common/locator-utilities');
const { homePageElements } = require ('../locators/homePageElements');

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
    async selectTab(group, menuName) {
        await LocatorUtilities.clickElement(this.page, this.elements.navigationTab(group, menuName));
    }
}

module.exports = { HomePage };