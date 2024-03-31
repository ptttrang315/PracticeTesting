import { webInputsElements } from '@locators/webInputsElements';
import { LocatorUtilities } from "@common/locator-utilities";
import { expect } from '@playwright/test';

class WebInputsPage {
    constructor(page) {
        this.page = page;
        this.elements = webInputsElements;
    }

    /**
     * Inputs text into a specified field type
     * @param {string} type - The type of the input field
     * @param {string} text - The text to input into the field
     */
    async inputTextForType(type, text) {
        await LocatorUtilities.inputText(this.page, this.elements.inputType(type), text);
    }

    /**
     * Inputs a value into a spin box
     * @param {string} type - The type of the spin box
     * @param {string} text - The value to input into the spin box
     */
    async inputValueForSpinBox(typeField, text) {
        await LocatorUtilities.inputText(this.page, this.elements.inputType(typeField), text, 'spin-box');
    }

    /**
     * Simulates an 'ArrowUp' key press on a spin box
     * @param {string} type - The type of the spin box
     */
    async useArrowForSpinBox(startNumber = null, arrow) {
        await LocatorUtilities.inputText(this.page, this.elements.inputType("number"), startNumber, 'spin-box');
        await LocatorUtilities.keyPress(this.page, this.elements.inputType("number"), arrow);
    }

    /**
     * Retrieves the value of an input field
     * @param {string} type - The type of the input field
     * @returns {Promise<string>} The value of the input field
     */
    async getInputValueOf(type) {
        return await LocatorUtilities.getValue(this.page, this.elements.inputType(type));
    }

    /**
     * Retrieves the text of an output field
     * @param {string} type - The type of the output field
     * @returns {Promise<string>} The text of the output field
     */
    async getOutputValueFor(type) {
        return await LocatorUtilities.getText(this.page, this.elements.outputType(type));
    }

    /**
     * Verifies that the value of an input field is the same as the text of an output field
     * @param {string} type - The type of the input and output fields
     */
    async verifyInputValueSameAsOutputView(type) {
        const inputValue = await this.getInputValueOf(type);
        console.log(`Input value: ${inputValue}`);
        const outputValue = await this.getOutputValueFor(type);
        console.log(`Output value: ${outputValue}`);
        expect(inputValue).toBe(outputValue);
    }

    /**
     * Click the 'Display' button
     */
    async clickDisplayButton() {
        await LocatorUtilities.clickElement(this.page, this.elements.displayBtn);

    }

    /**
     * Clicks the 'Clear' button
     */
    async clickClearButton() {
        await LocatorUtilities.clickElement(this.page, this.elements.clearBtn);
    }

}

export { WebInputsPage };