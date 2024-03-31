import { WebInputsPage } from '@pages/webInputsPage';
import { test } from '@playwright/test';
import { LoginUtilities } from '@common/login-utilities';
import { HomePage } from '@pages/homePage';
import {LocatorUtilities} from '@common/locator-utilities';

const testData = require('../../test-data/webInputsData.json');

let webInputsPage;
let homePage;
let page

test.beforeEach(async () => {
    page = await LoginUtilities.launchApp();
    webInputsPage = new WebInputsPage(page);
    homePage = new HomePage(page);
});

test.describe('Verify the data in "Input: Number" ', () => {
    test(`TC ID: ${testData.number.validCases[0].tcID} - When input ${testData.number.validCases[0].testName} @testNumber`, async () => {
        await homePage.selectTab('examples', 'Web inputs');
        await webInputsPage.inputTextForType('number', `${testData.number.validCases[0].inputData}`);
        await webInputsPage.inputTextForType('number', `${testData.number.validCases[0].inputData}`);
        await webInputsPage.inputTextForType('number', `${testData.number.validCases[0].inputData}`);
        await webInputsPage.clickDisplayButton();
        await webInputsPage.verifyInputValueSameAsOutputView('number');

    })
});


