Feature: Web Inputs

Scenario: Verify the data in "Input: Number"
Given I am on the examples page
When I input valid data into the "Input: Number" field
And I click the display button
Then The input value should be the same as the output view