const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();


//Тест на логин

describe('Login:', function () {
    beforeEach(async function () {
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
    });
  
    afterEach(async function () {
      await browser.pause();
    });
  
    xit('should be able to login', async function () {
      await app.authPage.login({
        email: `dr.house@gmail.com`,
        password: 'Pass123',
      });
  
      await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url === 'http://46.101.234.121/doctors';
        },
        { timeout: 5000 },
      );
  
      const url = await browser.getUrl();
      expect(url).to.be.eql('http://46.101.234.121/doctors');
    });
  });
  
  
  //Тест на логин с невалидными данными
  
  describe('Login with invalid email:', function () {
  
    beforeEach(async function () {
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
    });
  
    afterEach(async function () {
      await browser.pause();
    });
  
    xit('should not allow login with invalid email', async function () {
      await app.authPage.login({
        email: `dr1.house@gmail.com`,
        password: 'Pass1323',
      });
  
      await browser.waitUntil(
        async function () {
          const url = await browser.getUrl();
          return url != 'http://46.101.234.121/doctors';
        },
        { timeout: 5000 },
      );
  
      const url = await browser.getUrl();
      expect(url).not.to.be.equal('http://46.101.234.121/doctors');
    });
  });