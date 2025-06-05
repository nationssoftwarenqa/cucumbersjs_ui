const {setTimeout} = require('timers/promises');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
//const {expect} = require('chai');
const webdriver = require('selenium-webdriver');
const fs = require('fs')
const {By} = require('selenium-webdriver');
//const expect = require('expect');
const assert = require('assert')
//require('dotenv').config();
const config = require('C:/Users/ab_ke/OneDrive/Documents/GitHub/cucumbersjs_ui/config.js');
const elemestFromFile = require('../../resources/elements.json');


const {setDefaultTimeout} = require('@cucumber/cucumber');
const exp = require('constants');
setDefaultTimeout(60*1000);

let driver;
Before(function () {
    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
})


Given('I visit the online bible {string} app', async function (string) {
   await driver.get(config[string]);
   await driver.manage().window().maximize();
   await driver.sleep(3000);    
});


Then('click on the {string} element', async function (string) {
   //await driver.sleep(1000);    
    let click_elem = await driver.findElement(By.xpath(elemestFromFile[string]));
    await click_elem.click();
})


When('I type {string} in the field {string}', async function (string, string1) {
   //await driver.sleep(1000);    
    let click_elem = await driver.findElement(By.xpath(elemestFromFile[string1]));
    await click_elem.click();
    let click_elem1 = await driver.findElement(By.xpath(elemestFromFile[string1]));
    await click_elem1.sendKeys(string);
})


Then('select {string} from the {string} drowpdown', async function (string, string1) {
   //await driver.sleep(1000);    
    let click_elem = await driver.findElement(By.xpath(elemestFromFile[string1]));
    await click_elem.click();
    let click_elem1 = await driver.findElement(By.xpath(elemestFromFile[string1]));
    await click_elem1.sendKeys(string + "\n");
})


Then('user hits the {string} key from the field {string}', async function (string, string1) {
   await driver.sleep(1000);     
    let click_elem = await driver.findElement(By.xpath(elemestFromFile[string1]));
    await click_elem.click();  
    let click_elem1 = await driver.findElement(By.xpath(elemestFromFile[string]));
    await click_elem1.sendKeys( Key.TAB );
})

