import { HomePage } from '@pages/homePage';
import { webInputsElements } from '@locators/webInputsElements';
import { LocatorUtilities } from "@common/locator-utilities";
import {LoginUtilities} from "@common/login-utilities";

class WebInputsPage extends HomePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.elements = webInputsElements;
    }

    async inputTextFor(type, text) {
        await LocatorUtilities.inputText(this.page, this.elements.inputText, "meobeo");
    }
}

export { WebInputsPage };