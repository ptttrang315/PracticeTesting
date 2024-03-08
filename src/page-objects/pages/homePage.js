import { LocatorUtilities } from '@common/locator-utilities';
import { LoginUtilities } from "@common/login-utilities";
import { homePageElements }  from '@locators/homePageElements';

class HomePage{
    constructor() {
        this.page = LoginUtilities.launchApp();
        this.elements = homePageElements;
    }

    async selectTab(type, tabName) {
        await LocatorUtilities.clickElement(this.page, this.elements.navigateTab);
    }
}

export { HomePage };