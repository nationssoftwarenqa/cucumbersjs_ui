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
//const {expect} = require('chai');
//const expect = require('expect');
//const driver = require('../../utils.js')
//require('dotenv').config();

Given('I visit the online bible app', async function () {
   //await config.driver.get(`${config.url}`);
   await config.driver.get(config.url);
   await config.driver.manage().window().maximize();
   await config.driver.sleep(3000);    
});

Then('click on bible text on the upper left', async function () {
    //let click_elem = await config.driver.findElement(By.xpath('//*[contains(text(), "Your Account")]'));
    let click_elem = await config.driver.findElement(By.xpath('//*[@id="__next"]/div[2]/header/div/div[1]/a[1]'));
    await click_elem.click();
})

Then('click on the signin', async function () {
    let click_elem = await config.driver.findElement(By.xpath('//*[@id="nav-link-accountList"]'));
    await click_elem.click();
})

Then('click on the signin', async function () {
    let click_elem = await config.driver.findElement(By.xpath('//*[@id="nav-link-accountList"]'));
    await click_elem.click();
})


When('I type {string} and hit enter', async function (type) {
    let click_elem = await config.driver.findElement(By.xpath('//input[@name="Search"]'));
    await click_elem.sendKeys(type + "\n");
})


When('I type users {string} and hit enter', async function (string) {
    let click_elem = await config.driver.findElement(By.xpath('//*[@id="username"]'));
    //await click_elem.sendKeys('isakafuseini@gmail.com' + "\n");
    await click_elem.sendKeys(`${config[string]}` + "\n");
})


When('I type the users {string} and hit enter', async function (string) {
    let click_elem = await config.driver.findElement(By.xpath('//*[@id="password"]'));
    //await click_elem.sendKeys('Snoopy.10' + "\n");
    await click_elem.sendKeys(`${config[string]}`);
})


When('I type incorrect password {string} and hit enter', async function (email) {
    let click_elem = await config.driver.findElement(By.xpath('//*[@id="ap_password"]'));
    await click_elem.sendKeys(email + "\n");
})

Then('click on mark 14 17 NIV', async function () {
    await config.driver.sleep(2000);    
    let click_elem = await config.driver.findElement(By.xpath('//*[@href="/bible/111/mrk.14.17"]'));
    await click_elem.click();
})

Then('click on the humbergar menu', async function () {
    await config.driver.sleep(3000);    
    let click_elem = await config.driver.findElement(By.xpath('//*[@aria-label="profile menu"]'));
    await click_elem.click();
})

Then('click on the signin humbergar menu', async function () {
    await config.driver.sleep(1000);    
    let click_elem = await config.driver.findElement(By.xpath('//*[@aria-label="profile menu"]'));
    await click_elem.click();
})

Then('click on sign in from the dropdown', async function () {
    await config.driver.sleep(1000);    
    let click_elem = await config.driver.findElement(By.xpath('//*[@aria-label="Sign In"]'));
    await click_elem.click();
})

Then('user clicks the Sign In button', async function () {
    await config.driver.sleep(1000);    
    let click_elem = await config.driver.findElement(By.xpath('//*[@type="submit"]'));
    await click_elem.click();
})

Then('click on the sign in button', async function () {
    await config.driver.sleep(2000);    
    let click_elem = await config.driver.findElement(By.xpath('//*[@class="truncate w-full"]'));
    await click_elem.click();
    await config.driver.sleep(5000);
})

Then('click on the ask ask a question link', async function () {
    await config.driver.sleep(2000);    
    let click_elem = await config.driver.findElement(By.xpath('//a[contains(text(), "Questions? Our Support Team is here to help.")]'));
    await click_elem.click();
    await config.driver.sleep(3000);
})


Then('the text {string} is displayed', async function (string) {
    await config.driver.sleep(1000);
    let click_elem  = await config.driver.findElement(By.xpath("//title[contains(text(),'"+string+"')]"));
    //let click_elem1 = await config.driver.findElement(By.xpath('//*[contains(text(), "Your password is incorrect")]'));
    //assert.equal('Your password is incorrect', errormessage)
})


Then('the message {string} is displayed', async function (string) {
    await config.driver.sleep(1000);
    let click_elem  = await config.driver.findElement(By.xpath("//*[contains(text(),'"+string+"')]"));
    //let click_elem1 = await config.driver.findElement(By.xpath('//*[contains(text(), "Your password is incorrect")]'));
    //assert.equal('Your password is incorrect', errormessage)
})


Then('the error {string} is displayed click on menu', async function (string) {
    try{
    await config.driver.sleep(1000);    
    await config.driver.findElement(By.xpath('//*[@aria-label="profile menu"]')).click();
      await config.driver.sleep(1000);
      await config.driver.findElement(By.xpath("//*[contains(text(),'"+string+"')]"));
      }catch (error) {
        ExpectedErrorResopnse = error.message.includes(string)
      assert.deepEqual(ExpectedErrorResopnse, true)
      }
    
})


Then('the {string} page is opened', async function (url) {
await config.driver.wait(1000);
await config.driver.url((currentUrl) => {
expect(currentUrl).to.equal(url);
    })
})

Then('I wait for {string} seconds', async function (string) {
    await config.driver.sleep([string] + '000');   
})


//Then('the api page is opened', async function () {
//resp => {
//    method: 'GET',
//    url: '/session/:sessionId/chromium/network_conditions'
//  }})