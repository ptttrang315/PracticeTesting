import { WebInputsPage } from '@pages/webInputsPage';
import { test } from '@playwright/test';
import { LoginUtilities } from "@common/login-utilities";
import { HomePage } from "@pages/homePage";
import { AssertUtilities } from "@common/assert-utilities";
import {LocatorUtilities} from "@common/locator-utilities";
import {selectors} from "playwright";

let webInputsPage;
let homePage;
let page

test.beforeEach(async () => {
    page = await LoginUtilities.launchApp();
    webInputsPage = new WebInputsPage(page);
    homePage = new HomePage(page);
});

test.describe('Check that ', () => {
    test('"Input: Number" field is displayed correctly @testInput', async () => {
        await homePage.selectTab('examples', 'Web inputs');
        await webInputsPage.useArrowForSpinBox('ArrowDown', '0', 'number');
        await LocatorUtilities.clickElement(webInputsPage.page, webInputsPage.elements.inputType('number'));
        await LocatorUtilities.clickElement(webInputsPage.page, webInputsPage.elements.inputType('text'));
        await webInputsPage.inputTextForType('text', '123');
        await webInputsPage.inputTextForType('password', 'abc123');
        await LocatorUtilities.clickElement(webInputsPage.page, webInputsPage.elements.inputType('password'));
        // await AssertUtilities.isElementNotNull(webInputsPage.page, webInputsPage.elements.inputType('number'));
        await webInputsPage.clickDisplayButton();
        await webInputsPage.verifyInputValueSameAsOutputView('number');
        await webInputsPage.verifyInputValueSameAsOutputView('text');
        await webInputsPage.verifyInputValueSameAsOutputView('password');

    })
});


