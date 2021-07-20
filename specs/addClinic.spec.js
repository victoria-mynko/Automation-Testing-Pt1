const { expect } = require('chai');
const { App } = require('../src/pages');
const rundomNumber = () => Date.now();

const app = new App();


//Тест на добавление новой клиники

describe('Add new clinic:', function () {
  beforeEach(async function () {
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');
  });

  afterEach(async function () {
    await browser.pause(5000);
    });

    it('should be able to add a new clinic ', async function () {
      await app.authPage.login({
        email: `john_admin1@admin.com`,
        password: 'Pa55word',
      });
  
    
      const Clinics = await $('=Clinics');
      await Clinics.waitForDisplayed({ timeout: 5000 });
      await Clinics.click();
  
      await browser.pause(1000);
  
      const addButton = await $('div.styles_clinicsPageWrapper__1lCsn > div.styles_filterWrapper__KeeiZ > button');
      await addButton.click();
  
      await browser.pause(1000);

      await app.addClinic.add({
        name: `New Clinic BSA${rundomNumber()}`,
        address: '800 Cherokee Ave SE',
        status: 'state',
        city: 'Atlanta, GA'
      });
    });
  });