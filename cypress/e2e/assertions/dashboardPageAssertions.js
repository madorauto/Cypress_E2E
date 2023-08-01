import dashboardPageObjects from "../pageObjects/dashboardPageObjects.js";

class dashboardPageAssertions
{
    dashboardPageLocator = new dashboardPageObjects

    validateLogo()
    {
        cy.get(this.dashboardPageLocator.nopcommerceLogo)
        .should('be.visible')
        .and('be.exist')
    }

    validateDashboardHeader()
    {
        cy.get(this.dashboardPageLocator.dashboardHeader)
        .should('be.visible')
        .and('be.exist')
        .and('eq','Dashboard')
    }

}
export default dashboardPageAssertions;