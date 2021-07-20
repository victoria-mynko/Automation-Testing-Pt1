const { Button, Input } = require('../elements');

class SelectSpecAndClinic {
  constructor() {
    this.specialtyDdl = new Button('div.selectStyles__control', 0);
    this.clinicDdl = new Button('div.selectStyles__control', 1);

    this.specialtyOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');
    this.clinicOption = new Button('div.selectStyles__option=TEXT_TO_REPLACE');

    this.saveSpecButton = new Button('div.styles_selectSubmitWrapper__1xyQL > button');
    this.saveClinicButton = new Button('div.styles_selectSubmitWrapper__1VXHA > button');

  }

    async select({ specialty, clinic }) {
    
    await this.specialtyDdl.click();
    await this.specialtyOption.clickByText(specialty);

    await this.saveSpecButton.click();

    await this.clinicDdl.click();
    await this.clinicOption.clickByText(clinic);

    await this.saveClinicButton.click();
  }

}

module.exports = { SelectSpecAndClinic };