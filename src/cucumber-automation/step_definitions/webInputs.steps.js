const { Given, When, Then } = require('@cucumber/cucumber');
import { WebInputsPage } from '@pages/webInputsPage';
import { LoginUtilities } from '@common/login-utilities';
import { HomePage } from '@pages/homePage';
const {Before} = require("cucumber");

let webInputsPage;
let homePage;
let page;

Before(async function () {
    page = await LoginUtilities.launchApp();
    webInputsPage = new WebInputsPage(page);
    homePage = new HomePage(page);
});

Given('I am on the examples page', async function () {
    await homePage.selectTab('examples', 'Web inputs');
});

When('I input valid data into the "Input: Number" field', async function () {
    await webInputsPage.inputTextForType('number', '123');
});

When('I click the display button', async function () {
    await webInputsPage.clickDisplayButton();
});

Then('The input value should be the same as the output view', async function () {
    await webInputsPage.verifyInputValueSameAsOutputView('number');
});