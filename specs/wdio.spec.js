const { expect, assert } = require('chai');

const rundomNumber = () => Date.now();

//Регистрация

describe('Registration:', function () {

  xit('should be able to register', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');

    const usernameField = await $('input[name="name"]');
    const surnameField = await $('input[name="surname"]');
    const birthDateField = await $('input[name="birthdate"]');
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const retryPasswordField = await $('input[name="retypePassword"]');
    const phoneField = await $('input[name="phone"]');

    const ddls = await $$('div.selectStyles__control');

    const genderDdl = ddls[0];
    const statusDdl = ddls[1];

    const femaleOption = await $('div.selectStyles__option=female');
    const doctorOption = await $('div.selectStyles__option=doctor');

    const signUpButton = await $('button');

    await usernameField.waitForDisplayed({ timeout: 5000 });
    await usernameField.setValue('Marcus');

    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Aurelius');

    await birthDateField.waitForDisplayed({ timeout: 5000 });
    await birthDateField.setValue('11/11/1999');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`marcus${rundomNumber()}@gmail.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await retryPasswordField.waitForDisplayed({ timeout: 5000 });
    await retryPasswordField.setValue('Pa55word');

    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue('380000000000');

    await genderDdl.waitForDisplayed({ timeout: 5000 });
    await genderDdl.click();

    await femaleOption.waitForDisplayed({ timeout: 5000 });
    await femaleOption.click();

    await statusDdl.waitForDisplayed({ timeout: 5000 });
    await statusDdl.click();

    await doctorOption.waitForDisplayed({ timeout: 5000 });
    await doctorOption.click();

    await signUpButton.waitForDisplayed({ timeout: 5000 });
    await signUpButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
    
    await browser.reloadSession();
  });
});

//Тест на логин

describe('Login:', function () {

  xit('should be able to login', async function() {
    
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    
    const signInButton = await $('button');
    

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`testbsa1@gmail.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pass123');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
    
    await browser.reloadSession();

  });
});


//Тест на логин с невалидными данными

describe('Login with invalid email:', function () {

  xit('should not allow login with invalid email', async function() {
    
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    
    const signInButton = await $('button');
    

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`testbsa2@gmail.com`);


    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pass123');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();


    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url != 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).not.to.be.equal('http://46.101.234.121/doctors');
    
    await browser.reloadSession();

  });
});

//Тест на изменение данных в профиле пользователя

describe('Change info in user profile:', function () {

  xit('should be able to change information in user profile ', async function() {
    
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    
    const signInButton = await $('button');
    

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`testbsa1@gmail.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pass123');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.pause(1000);


    const myProfile = await $('=My Profile');
    await myProfile.waitForDisplayed({timeout: 5000});
    await myProfile.click();

    await browser.pause(1000);

    const editButton = await $('div.authorized-wrapper_wrapper__2Ullk > div.styles_profileContainer__3_8US > div.styles_infoContainer__1IMj4 > div > div.styles_infoHeader__Ej0xQ > button');
    await editButton.waitForDisplayed({timeout: 5000});
    await editButton.click();

    await browser.pause(1000);

    const nameField = await $('input[name="name"]');
    await nameField.waitForDisplayed({timeout:5000});
    await nameField.setValue('NEW NAME');

    await browser.pause(1000);


    const submitEdit = await $('div.authorized-wrapper_wrapper__2Ullk > div.styles_profileContainer__3_8US > div.styles_container__pnjAI > div > form > div:nth-child(10) > button');
    await submitEdit.waitForDisplayed({timeout:5000});
    await submitEdit.click();

    await browser.pause(1000);

  });
});

//Тест на изменение специальности и клиники для доктора

describe('Change spec and clinic for doctor:', function () {

  xit('should be able to change specialty and clinic for doctor', async function() {
    
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');
    

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`dr.house@gmail.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pass123');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.pause(1000);


    const myProfile = await $('=My Profile');
    await myProfile.waitForDisplayed({timeout: 5000});
    await myProfile.click();

    await browser.pause(1000);

    const selects = await $$('div.selectStyles__control');

    const selectSpec = selects[0];
    const selectClinic = selects[1];


    const dentistOption = await $('div.selectStyles__option=dentist');
    const clinicOption = await $('div.selectStyles__option=Ronald Reagan UCLA Medical Center');  

    const saveSpecButton = await $('div.styles_selectSubmitWrapper__1xyQL > button');
    const saveClinicButton = await $('div.styles_selectSubmitWrapper__1VXHA > button');

    //выбор специализации
    await selectSpec.click();
    await dentistOption.waitForDisplayed({timeout:1000});
    await dentistOption.click();

    await browser.pause(1000);
    await saveSpecButton.click();

    
    //выбор клиники
    await selectClinic.click();
    await clinicOption.waitForDisplayed({timeout:1000});
    await clinicOption.click();

    await browser.pause(1000);
    await saveClinicButton.click();
  });
});


//Тест на добавление новой клиники

describe('Change spec and clinic for doctor:', function () {

  it('should be able to change specialty and clinic for doctor', async function() {
    
    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const signInButton = await $('button');
    

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue('john_admin1@admin.com');

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await signInButton.waitForDisplayed({ timeout: 5000 });
    await signInButton.click();

    await browser.pause(1000);


    const Clinics = await $('=Clinics');
    await Clinics.waitForDisplayed({timeout: 5000});
    await Clinics.click();

    await browser.pause(1000);

    const addButton = await $('div.styles_clinicsPageWrapper__1lCsn > div.styles_filterWrapper__KeeiZ > button');
    await addButton.click();

    await browser.pause(1000);

    const nameClinic = await  $('input[name="name"]');
    await nameClinic.waitForDisplayed({ timeout: 5000 });
    await nameClinic.setValue('Test Private Clinic');

    const addressClinic = await  $('input[name="address"]');
    await addressClinic.waitForDisplayed({ timeout: 5000 });
    await addressClinic.setValue('Philadelphia, 800 Spruce St');
    
    const selects = await $$('div.selectStyles__control');

    const selectStatus = selects[0];
    const selectCity = selects[1];

    const statusOption = await $('div.selectStyles__option=private');
    const cityOption = await $('div.selectStyles__option=Philadelphia, PA');

    //  выбор статуса
    await selectStatus.click();
    await statusOption.waitForDisplayed({timeout:1000});
    await statusOption.click();
    await browser.pause(1000);

    // выбор города
    await selectCity.click();
    await cityOption.waitForDisplayed({timeout:1000});
    await cityOption.click();
    await browser.pause(1000);

    const saveButton = await $('form > div.styles_submitBtn__jK6DU > button');
    await saveButton.click();
  });
});