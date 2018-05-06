const registerForm = (brwoser, data) => {
    let register = brwoser.page.register()
    register.navigate()
    register
        .waitForElementVisible('@registerButton', 5000)
        .click('@registerButton')
        .waitForElementPresent('@registerTitle', 5000)
        .setValue('@firstNameInput', data.firstName)
        .setValue('@lastNameInput', data.lastName)
        .setValue('@companyInput', data.company)
        .setValue('@addressInput', data.address)
        .setValue('@cityInput', data.city)
        .setValue('@stateInput', data.state)
        .setValue('@zipCodeInput', data.zipCode)
        .setValue('@phoneInput', data.phoneNumber)
        .setValue('@emailInput', data.email)
        .setValue('@reTypeEmailInput', data.reTypeEmail)
        .waitForElementVisible('@registerAccount', 5000)
        .click('@registerAccount')
        .waitForElementVisible('@googleLogin', 5000)
        .click('@googleLogin')
        .waitForElementVisible('@enterEmail', 5000)
        .setValue('@enterEmail', data.email)
        .click('@next')
        .waitForElementVisible('@enterPassword', 5000)
        .setValue('@enterPassword', data.googlePassword)
        .click('@next')
        .waitForElementVisible('@helloName', 5000)
        .click('@logout')

}

const loginLogout = (browser, data) => {
    let loginLogout = browser.page.loginLogout()
    loginLogout.navigate()
    loginLogout
        .waitForElementVisible('@login', 5000)
        .click('@login')
        .waitForElementVisible('@googleLogin', 5000)
        .click('@googleLogin')
        .waitForElementVisible('@enterEmail', 5000)
        .setValue('@enterEmail', data.googleEmail)
        .click('@next')
        .waitForElementVisible('@enterPassword', 5000)
        .setValue('@enterPassword', data.password)
        .click('@next')
        .waitForElementVisible('@helloName', 5000)
}

const products = (brwoser) => {
}

module.exports ={
    loginLogout: loginLogout,
    registerForm: registerForm,

}