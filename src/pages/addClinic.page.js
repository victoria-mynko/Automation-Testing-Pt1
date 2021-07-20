const { Button, Input } = require('../elements');

class AddClinic {
  constructor() {
    this.usernameField = new Input('input[name="name"]');
    this.addressField = new Input('input[name="address"]');

    this.statusDdl = new Button('div.selectStyles__control', 0);
    this.cityDdl = new Button('div.selectStyles__control', 1);

    this.statusOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
    this.cityOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');

    this.submitButton = new Button('form > div.styles_submitBtn__jK6DU > button');
  }

    async add({ name, address, status, city }) {
    await this.usernameField.setValue(name);
    await this.addressField.setValue(address);

    await this.statusDdl.click();
    await this.statusOption.clickByText(status);
    await this.cityDdl.click();
    await this.cityOption.clickByText(city);

    await this.submitButton.click();
  }

}

module.exports = { AddClinic };