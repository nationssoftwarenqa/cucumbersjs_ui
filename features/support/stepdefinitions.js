const {setTimeout} = require('timers/promises');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
//const {expect} = require('chai');
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
//const expect = require('expect');
const assert = require('assert')

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
   await driver.get('https://www.bible.com');
   await driver.manage().window().maximize();
   await driver.sleep(5000);    
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


When('I type {string} and hit enter', async function (type) {
    let click_elem = await driver.findElement(By.xpath('//input[@name="Search"]'));
    await click_elem.sendKeys(type + "\n");
})


When('I type email {string} and hit enter', async function (type) {
    let click_elem = await driver.findElement(By.xpath('//*[@id="username"]'));
    await click_elem.sendKeys(type + "\n");
})


When('I type password {string} and hit enter', async function (type) {
    let click_elem = await driver.findElement(By.xpath('//*[@id="password"]'));
    await click_elem.sendKeys(type + "\n");
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
    //await driver.sleep(5000);    
    let click_elem = await driver.findElement(By.xpath('//*[@aria-label="profile menu"]'));
    await click_elem.click();
})

Then('click on sign in from the dropdown', async function () {
    await driver.sleep(2000);    
    let click_elem = await driver.findElement(By.xpath('//*[@aria-label="Sign In"]'));
    await click_elem.click();
})

Then('click on the sign in button', async function () {
    await driver.sleep(2000);    
    let click_elem = await driver.findElement(By.xpath('//*[@class="truncate w-full"]'));
    await click_elem.click();
    await driver.sleep(5000);
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


Then('the {string} page is opened', async function (url) {
await driver.wait(1000);
await driver.url((currentUrl) => {
expect(currentUrl).to.equal(url);
    })
})


//Then('the api page is opened', async function () {
//resp => {
//    method: 'GET',
//    url: '/session/:sessionId/chromium/network_conditions'
//  }})