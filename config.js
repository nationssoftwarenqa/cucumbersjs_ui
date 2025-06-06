const webdriver = require('selenium-webdriver');
// config.js
module.exports = {
  url: 'https://www.bible.com',
  username: 'isakasuseini@gmail.com ',
  incusername: 'isakasuseini2gmail.com ',
  password: 'Qq1995QQ!',
  incpassword: 'Snoopy.10',
  driver: new webdriver.Builder().forBrowser('chrome').build()
};
