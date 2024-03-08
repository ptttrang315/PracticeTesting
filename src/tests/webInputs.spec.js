import { WebInputsPage } from '@pages/webInputsPage';
import { test } from '@playwright/test';
import { LoginUtilities } from "@common/login-utilities";

let webInputsPage;

test.beforeEach(async () => {
    const page = await LoginUtilities.launchApp();
    webInputsPage = new WebInputsPage(page);
});

test.describe('Check that input values are displayed correctly', () => {
    test('Check that "Input: Number" field is displayed correctly @testInput', async () => {
        await webInputsPage.selectTab("Examples", "Web inputs")
        await webInputsPage.inputTextFor('text','meobeo')
    })
});

//
