const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();


//Тест на изменение данных в профиле пользователя

describe('Change info in user profile:', function () {
    beforeEach(async function () {
      await browser.setWindowSize(1440, 960);
      await browser.url('/sign-in');
    });
  
    afterEach(async function () {
      await browser.pause(2000);
      });
  
    xit('should able to change user info', async function () {
      await app.authPage.login({
      email: `testbsa1@gmail.com`,
      password: 'Pass123',
    });
  
    const myProfile = await $('=My Profile');
    await myProfile.waitForDisplayed({ timeout: 5000 });
    await myProfile.click();
  
    const editButton = await $('div.styles_infoHeader__Ej0xQ > button');
    await editButton.waitForDisplayed({ timeout: 5000 });
    await editButton.click();
  
    await app.changeInfo.edit({
      name: `New Test BSA`,
      surname: 'User',
      gender: 'female',
      birthDate: '01/01/1996',
      email: `testbsa1@gmail.com`,
      phone: '0000000001',
      status: 'patient',
    });
  });
  });

