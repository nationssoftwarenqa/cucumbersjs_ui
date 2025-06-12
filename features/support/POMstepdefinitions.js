const {setTimeout} = require('timers/promises');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const fs = require('fs')
const assert = require('assert')
const config = require('../../config.js');
const elemestFromFile = require('../../resources/elements.json');
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
//const driver = new webdriver.Builder().forBrowser('chrome').build();

const {setDefaultTimeout} = require('@cucumber/cucumber');
const exp = require('constants');
setDefaultTimeout(60*1000);

//Navigate to the signin page
Then('I nagigate to the signin page with POM', async function () {
   await config.driver.sleep(1000);    
    let click_elem0 = await config.driver.findElement(By.xpath(elemestFromFile.humbergarMenu));
  await click_elem0.click();   
   await config.driver.sleep(1000);    
    let click_elem1 = await config.driver.findElement(By.xpath(elemestFromFile.SignIn));
  await click_elem1.click();
    await config.driver.sleep(3000);
})

//Send a question to support team
Then('send a question to the support team with POM', async function () {
   await config.driver.sleep(1000);    
    let   click_elem = await config.driver.findElement(By.xpath(elemestFromFile.questionlink));
    await click_elem.click();
    await config.driver.sleep(3000); 
    let   click_elem1 = await config.driver.findElement(By.xpath(elemestFromFile.questionsfirstname));
    await click_elem1.sendKeys('Nations');
    let   click_elem2 = await config.driver.findElement(By.xpath(elemestFromFile.questionslastname));
    await click_elem2.sendKeys('Quality');
    let   click_elem3 = await config.driver.findElement(By.xpath(elemestFromFile.questionsemail));
    await click_elem3.sendKeys('nationsquality@gmail.com');
    let   click_elem4 = await config.driver.findElement(By.xpath(elemestFromFile.questionslanguage));
    await click_elem4.sendKeys('English');
    let   click_elem5 = await config.driver.findElement(By.xpath(elemestFromFile.questionsplatform));
    await click_elem5.sendKeys('Web - Bible.com');
    let   click_elem6 = await config.driver.findElement(By.xpath(elemestFromFile.questionsTypeOfQuestion));
    await click_elem6.sendKeys('Other Question');
    let   click_elem7 = await config.driver.findElement(By.xpath(elemestFromFile.questionsTextArea));
    await click_elem7.sendKeys('The Bible App Is Wonderful');
    await config.driver.sleep(1000);
    //await config.driver.findElement(By.xpath("//*[contains(text(),'Submit Form')]"));
})