const webdriver = require('selenium-webdriver');
// config.js
module.exports = {
  username: 'isakasuseini@gmail.com ',
  incusername: 'isakasuseini2gmail.com ',
  password: 'Qq1995QQ!',
  incpassword: 'Snoopy.10',
  driver: new webdriver.Builder().forBrowser('chrome').build(),
  urls:{
  local_url: 'https://login.youversion.com/create-account/',
  test_url:  'https://www.bible.com/',
  stage_url: 'https://login.youversion.com/',
  prod_url:  'https://login.youversion.com/forgot-password'
  },  
};
