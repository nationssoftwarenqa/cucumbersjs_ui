const {setTimeout} = require('timers/promises');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
//const {expect} = require('chai');
const webdriver = require('selenium-webdriver');
const fs = require('fs')
const {By} = require('selenium-webdriver');
//const expect = require('expect');
const assert = require('assert')
//require('dotenv').config();
const config = require('../../config.js');


const {setDefaultTimeout} = require('@cucumber/cucumber');
const exp = require('constants');
setDefaultTimeout(60*1000);

let driver;
Before(function () {
    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
})

Given('I visit the online bible app', async function () {
   //await driver.get(`${config.url}`);
   await driver.get(config.url);
   await driver.manage().window().maximize();
   await driver.sleep(3000);    
});

Then('click on bible text on the upper left', async function () {
    //let click_elem = await driver.findElement(By.xpath('//*[contains(text(), "Your Account")]'));
    let click_elem = await driver.findElement(By.xpath('//*[@id="__next"]/div[2]/header/div/div[1]/a[1]'));
    await click_elem.click();
})

Then('click on the signin', async function () {
    let click_elem = await driver.findElement(By.xpath('//*[@id="nav-link-accountList"]'));
    await click_elem.click();
})

Then('click on the signin', async function () {
    let click_elem = await driver.findElement(By.xpath('//*[@id="nav-link-accountList"]'));
    await click_elem.click();
})


When('I type {string} and hit enter', async function (type) {
    let click_elem = await driver.findElement(By.xpath('//input[@name="Search"]'));
    await click_elem.sendKeys(type + "\n");
})


When('I type users {string} and hit enter', async function (string) {
    let click_elem = await driver.findElement(By.xpath('//*[@id="username"]'));
    //await click_elem.sendKeys('isakafuseini@gmail.com' + "\n");
    await click_elem.sendKeys(`${config[string]}` + "\n");
})


When('I type the users {string} and hit enter', async function (string) {
    let click_elem = await driver.findElement(By.xpath('//*[@id="password"]'));
    //await click_elem.sendKeys('Snoopy.10' + "\n");
    await click_elem.sendKeys(`${config[string]}`);
})


When('I type incorrect password {string} and hit enter', async function (email) {
    let click_elem = await driver.findElement(By.xpath('//*[@id="ap_password"]'));
    await click_elem.sendKeys(email + "\n");
})

Then('click on mark 14 17 NIV', async function () {
    await driver.sleep(2000);    
    let click_elem = await driver.findElement(By.xpath('//*[@href="/bible/111/mrk.14.17"]'));
    await click_elem.click();
})

Then('click on the humbergar menu', async function () {
    await driver.sleep(3000);    
    let click_elem = await driver.findElement(By.xpath('//*[@aria-label="profile menu"]'));
    await click_elem.click();
})

Then('click on the signin humbergar menu', async function () {
    await driver.sleep(1000);    
    let click_elem = await driver.findElement(By.xpath('//*[@aria-label="profile menu"]'));
    await click_elem.click();
})

Then('click on sign in from the dropdown', async function () {
    await driver.sleep(1000);    
    let click_elem = await driver.findElement(By.xpath('//*[@aria-label="Sign In"]'));
    await click_elem.click();
})

Then('user clicks the Sign In button', async function () {
    await driver.sleep(1000);    
    let click_elem = await driver.findElement(By.xpath('//*[@type="submit"]'));
    await click_elem.click();
})

Then('click on the sign in button', async function () {
    await driver.sleep(2000);    
    let click_elem = await driver.findElement(By.xpath('//*[@class="truncate w-full"]'));
    await click_elem.click();
    await driver.sleep(5000);
})

Then('click on the ask ask a question link', async function () {
    await driver.sleep(2000);    
    let click_elem = await driver.findElement(By.xpath('//a[contains(text(), "Questions? Our Support Team is here to help.")]'));
    await click_elem.click();
    await driver.sleep(3000);
})


Then('the text {string} is displayed', async function (string) {
    await driver.sleep(1000);
    let click_elem  = await driver.findElement(By.xpath("//title[contains(text(),'"+string+"')]"));
    //let click_elem1 = await driver.findElement(By.xpath('//*[contains(text(), "Your password is incorrect")]'));
    //assert.equal('Your password is incorrect', errormessage)
})


Then('the message {string} is displayed', async function (string) {
    await driver.sleep(1000);
    let click_elem  = await driver.findElement(By.xpath("//*[contains(text(),'"+string+"')]"));
    //let click_elem1 = await driver.findElement(By.xpath('//*[contains(text(), "Your password is incorrect")]'));
    //assert.equal('Your password is incorrect', errormessage)
})


Then('the error {string} is displayed click on menu', async function (string) {
    try{
    await driver.sleep(1000);    
    await driver.findElement(By.xpath('//*[@aria-label="profile menu"]')).click();
      await driver.sleep(1000);
      await driver.findElement(By.xpath("//*[contains(text(),'"+string+"')]"));
      }catch (error) {
        ExpectedErrorResopnse = error.message.includes(string)
      assert.deepEqual(ExpectedErrorResopnse, true)
      }
    
})


Then('the {string} page is opened', async function (url) {
await driver.wait(1000);
await driver.url((currentUrl) => {
expect(currentUrl).to.equal(url);
    })
})

Then('I wait for {string} seconds', async function (string) {
    await driver.sleep([string] + '000');   
})


//Then('the api page is opened', async function () {
//resp => {
//    method: 'GET',
//    url: '/session/:sessionId/chromium/network_conditions'
//  }})