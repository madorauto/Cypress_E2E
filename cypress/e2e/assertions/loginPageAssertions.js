import loginPageObjects from "../pageObjects/loginPageObjects.js";

class loginPageAssertions
{
    loginPageLocator = new loginPageObjects

    validateLoginPage()
    {
        cy.url()
        .should('contains','/login')
    }
    validateEmailErrorMessage()
    {
        cy.get(this.loginPageLocator.errorMessage)
        .should('be.visible')
        .and('be.exist')
        .and('contain','Login was unsuccessful. Please correct the errors and try again.')
        .and('contain','No customer account found')
    }
    validatePasswordErrorMessage()
    {
        cy.get(this.loginPageLocator.errorMessage)
        .should('be.visible')
        .and('be.exist')
        .and('contain','Login was unsuccessful. Please correct the errors and try again.')
        .and('contain','The credentials provided are incorrect')
    }

}
export default loginPageAssertions;