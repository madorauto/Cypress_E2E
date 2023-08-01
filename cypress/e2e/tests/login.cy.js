import loginPageActions from "../pageActions/loginPageActions.js";
import dashboardPageAssertions from "../assertions/dashboardPageAssertions.js";
describe ('Login',()=>
{
    let logindata
    before( ()=>{
        cy.visit('/login')
        cy.fixture('login').then((data) =>{
            logindata=data
         })
    })
    it ('Valid Login', ()=>
    {
        const login = new loginPageActions()
        const dashboard = new dashboardPageAssertions()
        login.inputUserName(logindata.valid_email)
        login.inputPassword(logindata.valid_password)
        login.clickLogin()
        dashboard.validateLogo()
        dashboard.validateLogo()
    })
})