const { AuthPage } = require('./auth.page');
const { ChangeInfo } = require('./changeInfo.page');
const { AddClinic } = require('./addClinic.page');
const { SelectSpecAndClinic } = require('./select.page');

class App {
  constructor() {
    this.authPage = new AuthPage();
    this.changeInfo = new ChangeInfo();
    this.addClinic = new AddClinic();
    this.selectSpecAndClinic = new (SelectSpecAndClinic);
  }
}

module.exports = { App };