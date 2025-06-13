const {setTimeout} = require('timers/promises');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const fs = require('fs')
const assert = require('assert')
//require('dotenv').config();
const config = require('../../config.js');
const elemestFromFile = require('../../resources/elements.json');
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
//const driver = new webdriver.Builder().forBrowser('chrome').build();

const {setDefaultTimeout} = require('@cucumber/cucumber');
const exp = require('constants');
setDefaultTimeout(60*1000);
//const {expect} = require('chai');
//const expect = require('expect');
//const driver = require('../../utils.js')
//require('dotenv').config();

//Step to visit a website
Given('I visit the online {string} app', async function (string) {
   await configs.driver.get(`https://www.${string}.com/`);
   await configs.driver.manage().window().maximize();
   //await configs.driver.sleep(5000);    
});

//Step to click on an element
Then('click on the {string} element', async function (string) {
   //await configs.driver.sleep(1000);    
    let click_elem = await configs.driver.findElement(By.xpath(elemestFromFile[string]));
    await click_elem.click();
})

//Step to type in an input field
When('I type {string} in the field {string}', async function (string, string1) {
   //await configs.driver.sleep(1000);    
    let click_elem = await configs.driver.findElement(By.xpath(elemestFromFile[string1]));
    await click_elem.click();
    let click_elem1 = await configs.driver.findElement(By.xpath(elemestFromFile[string1]));
    await click_elem1.sendKeys(string);
})

//Step to select an element from a downdown
Then('select {string} from the {string} drowpdown', async function (string, string1) {
   //await configs.driver.sleep(1000);    
    let click_elem = await configs.driver.findElement(By.xpath(elemestFromFile[string1]));
    await click_elem.click();
    let click_elem1 = await configs.driver.findElement(By.xpath(elemestFromFile[string1]));
    await click_elem1.sendKeys(string + "\n");
})


Then('user hits the {string} key from the field {string}', async function (string, string1) {
   await configs.driver.sleep(1000);     
    let click_elem = await configs.driver.findElement(By.xpath(elemestFromFile[string1]));
    await click_elem.click();  
    let click_elem1 = await configs.driver.findElement(By.xpath(elemestFromFile[string]));
    await click_elem1.sendKeys( Key.TAB );
})

//Step to verify an element on a page
Then('the text {string} is displayed on the page', async function (string) {
    await configs.driver.sleep(1000);
    let click_elem  = await configs.driver.findElement(By.xpath("//*[contains(text(),'"+string+"')]"));
})


