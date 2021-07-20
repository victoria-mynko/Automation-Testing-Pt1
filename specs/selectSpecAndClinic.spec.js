const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();


//Тест на изменение специальности и клиники для доктора

describe('Change spec and clinic for doctor:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.pause(5000);
    });

    it('should be able to change specialty and clinic for doctor', async function() {
      
      await app.authPage.login({
        email: `dr.house@gmail.com`,
        password: 'Pass123',
      });
      
  
      const myProfile = await $('=My Profile');
      await myProfile.waitForDisplayed({timeout: 5000});
      await myProfile.click();
  
      await app.selectSpecAndClinic.select({
        specialty: 'dermatologist',
        clinic: 'The Johns Hopkins Hospital',
      });

    });
  });