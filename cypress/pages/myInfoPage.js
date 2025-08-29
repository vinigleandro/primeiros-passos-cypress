class MyInfoPage {

     selectorsList(){
        const selectorsList = {
            firstNameField: 'input[name="firstName"]',
            lastNameField: 'input[name="lastName"]',
            genericField: '.oxd-input.oxd-input--active',
            dateCloseButton: '.--close',
            submitButton: '.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space',
            genericComboBox: '.oxd-select-text-input',
            nationalityComboBox: '[role="listbox"] > :nth-child(38)',
            maritalStatusComboBox: '[role="listbox"] > :nth-child(3)',
        }

        return selectorsList;
    }

    fillPersonalDetails(firstName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    
    fillEmployeeDetails(employeeId, otherId, driversLicense, expiryDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type( employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
  }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close').click()
    }

    fillStatus(){
        cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true })
        cy.get(this.selectorsList().nationalityComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true })
        cy.get(this.selectorsList().maritalStatusComboBox).click()
    }
}   

export default MyInfoPage;  