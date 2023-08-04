import loginPageActions from "../pageActions/loginPageActions.js";
import dashboardPageAssertions from "../assertions/dashboardPageAssertions.js";
import loginPageAssertions from "../assertions/loginPageAssertions.js";

describe ('Login',()=>
{
    const login = new loginPageActions()
    const dashboardAssertions = new dashboardPageAssertions()
    const loginAssertions = new loginPageAssertions()

    let logindata
    beforeEach( ()=>{
        cy.visit('/login')
        cy.fixture('login').then((data) =>{
            logindata=data
         })
    })
    it ('Valid Login', ()=>
    {
        loginAssertions.validateLoginPage()
        login.inputUserName(logindata.valid_email)
        login.inputPassword(logindata.valid_password)
        login.clickLogin()
        dashboardAssertions.validateLogo()
        dashboardAssertions.validateDashboardHeader()
    })
    it ('Invalid Email and Password Login', ()=>
    {   
        loginAssertions.validateLoginPage()
        login.inputUserName(logindata.invalid_email)
        login.inputPassword(logindata.invalid_password)
        login.clickLogin()
        loginAssertions.validateEmailErrorMessage()
        
    })
    it ('Invalid Email Login', ()=>
    {
        loginAssertions.validateLoginPage()
        login.inputUserName(logindata.invalid_email)
        login.inputPassword(logindata.valid_password)
        login.clickLogin()
        loginAssertions.validateEmailErrorMessage()
        
    })
    it ('Invalid Password Login', ()=>
    {
        loginAssertions.validateLoginPage()
        login.inputUserName(logindata.valid_email)
        login.inputPassword(logindata.invalid_password)
        login.clickLogin()
        loginAssertions.validatePasswordErrorMessage()
        
    })
})