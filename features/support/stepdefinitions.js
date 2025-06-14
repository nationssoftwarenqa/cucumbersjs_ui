const {setTimeout} = require('timers/promises');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
const fs = require('fs')
const assert = require('assert')
const configs = require('../../configfiles/config.js');
const elemestFromFile = require('../../resources/elements.json');
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const localurl = process.env.local_url
const testurl  = process.env.test_url
const stageurl = process.env.stage_url
const prodeurl = process.env.prod_url
//console.log(localurl, testurl, stageurl, prodeurl)

const {setDefaultTimeout} = require('@cucumber/cucumber');
const exp = require('constants');
setDefaultTimeout(60*1000);


Given('I visit the online bible app', async function () {
   //await configs.driver.get(`${config.url}`);
   const config = require(`../../configfiles/config.${process.env.NODE_ENV}.js`);
   let urllinks = (`${config.url}`);

   await configs.driver.get(urllinks);
   await configs.driver.manage().window().maximize();
   await configs.driver.sleep(3000);    
});

Then('click on bible text on the upper left', async function () {
    //let click_elem = await configs.driver.findElement(By.xpath('//*[contains(text(), "Your Account")]'));
    let click_elem = await configs.driver.findElement(By.xpath('//*[@id="__next"]/div[2]/header/div/div[1]/a[1]'));
    await click_elem.click();
})

Then('click on the signin', async function () {
    let click_elem = await configs.driver.findElement(By.xpath('//*[@id="nav-link-accountList"]'));
    await click_elem.click();
})

Then('click on the signin', async function () {
    let click_elem = await configs.driver.findElement(By.xpath('//*[@id="nav-link-accountList"]'));
    await click_elem.click();
})


When('I type {string} and hit enter', async function (type) {
    let click_elem = await configs.driver.findElement(By.xpath('//input[@name="Search"]'));
    await click_elem.sendKeys(type + "\n");
})


When('I type users {string} and hit enter', async function (string) {
    await configs.driver.sleep(2000);    
    let click_elem = await configs.driver.findElement(By.xpath('//*[@id="username"]'));
    //await click_elem.sendKeys('isakafuseini@gmail.com' + "\n");
    await click_elem.sendKeys(`${configs[string]}` + "\n");
})


When('I type the users {string} and hit enter', async function (string) {
    let click_elem = await configs.driver.findElement(By.xpath('//*[@id="password"]'));
    //await click_elem.sendKeys('Snoopy.10' + "\n");
    await click_elem.sendKeys(`${configs[string]}`);
})


When('I type incorrect password {string} and hit enter', async function (email) {
    let click_elem = await configs.driver.findElement(By.xpath('//*[@id="ap_password"]'));
    await click_elem.sendKeys(email + "\n");
})

Then('click on mark 14 17 NIV', async function () {
    await configs.driver.sleep(2000);    
    let click_elem = await configs.driver.findElement(By.xpath('//*[@href="/bible/111/mrk.14.17"]'));
    await click_elem.click();
})

Then('click on the humbergar menu', async function () {
    await configs.driver.sleep(3000);    
    let click_elem = await configs.driver.findElement(By.xpath('//*[@aria-label="profile menu"]'));
    await click_elem.click();
})

Then('click on the signin humbergar menu', async function () {
    await configs.driver.sleep(1000);    
    let click_elem = await configs.driver.findElement(By.xpath('//*[@aria-label="profile menu"]'));
    await click_elem.click();
})

Then('click on sign in from the dropdown', async function () {
    await configs.driver.sleep(1000);    
    let click_elem = await configs.driver.findElement(By.xpath('//*[@aria-label="Sign In"]'));
    await click_elem.click();
})

Then('user clicks the Sign In button', async function () {
    await configs.driver.sleep(1000);    
    let click_elem = await configs.driver.findElement(By.xpath('//*[@type="submit"]'));
    await click_elem.click();
})

Then('click on the sign in button', async function () {
    await configs.driver.sleep(2000);    
    let click_elem = await configs.driver.findElement(By.xpath('//*[@class="truncate w-full"]'));
    await click_elem.click();
    await configs.driver.sleep(5000);
})

Then('click on the ask ask a question link', async function () {
    await configs.driver.sleep(2000);    
    let click_elem = await configs.driver.findElement(By.xpath('//a[contains(text(), "Questions? Our Support Team is here to help.")]'));
    await click_elem.click();
    await configs.driver.sleep(3000);
})


Then('the text {string} is displayed', async function (string) {
    await configs.driver.sleep(1000);
    let click_elem  = await configs.driver.findElement(By.xpath("//title[contains(text(),'"+string+"')]"));
    //let click_elem1 = await configs.driver.findElement(By.xpath('//*[contains(text(), "Your password is incorrect")]'));
    //assert.equal('Your password is incorrect', errormessage)
})


Then('the message {string} is displayed', async function (string) {
    await configs.driver.sleep(1000);
    let click_elem  = await configs.driver.findElement(By.xpath("//*[contains(text(),'"+string+"')]"));
    //let click_elem1 = await configs.driver.findElement(By.xpath('//*[contains(text(), "Your password is incorrect")]'));
    //assert.equal('Your password is incorrect', errormessage)
})


Then('the error {string} is displayed click on menu', async function (string) {
    try{
    await configs.driver.sleep(1000);    
    await configs.driver.findElement(By.xpath('//*[@aria-label="profile menu"]')).click();
      await configs.driver.sleep(1000);
      await configs.driver.findElement(By.xpath("//*[contains(text(),'"+string+"')]"));
      }catch (error) {
        ExpectedErrorResopnse = error.message.includes(string)
      assert.deepEqual(ExpectedErrorResopnse, true)
      }
    
})


Then('the {string} page is opened', async function (url) {
await configs.driver.wait(1000);
await configs.driver.url((currentUrl) => {
expect(currentUrl).to.equal(url);
    })
})

Then('I wait for {string} seconds', async function (string) {
    await configs.driver.sleep([string] + '000');   
})


//Then('the api page is opened', async function () {
//resp => {
//    method: 'GET',
//    url: '/session/:sessionId/chromium/network_conditions'
//  }})