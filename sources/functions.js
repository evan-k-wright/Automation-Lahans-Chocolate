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

const products = (browser) => {
    let products = browser.page.products();
    products.navigate()
    products
        .waitForElementVisible('@productButton', 5000)
        .click('@productButton')
        .waitForElementVisible('@boxedChocolates', 5000)
        .waitForElementVisible('@lePetite', 5000)
        .click('@lePetite')
        .waitForElementVisible('@lePetiteBox', 5000)
        .click('@productButton')
        .waitForElementVisible('@boxedChocolates', 5000)
        .waitForElementVisible('@halfPound', 5000)
        .click('@halfPound')
        .waitForElementVisible('@halfPoundBox', 5000)
        .click('@productButton')
        .waitForElementVisible('@boxedChocolates', 5000)
        .waitForElementVisible('@onePound', 5000)
        .click('@onePound')
        .waitForElementVisible('@onePoundBox', 5000)
        .click('@productButton')
        .waitForElementVisible('@boxedChocolates', 5000)
        .waitForElementVisible('@twoPound', 5000)
        .click('@twoPound')
        .waitForElementVisible('@twoPoundBox', 5000)
        .click('@productButton')
        .waitForElementVisible('@boxedChocolates', 5000)
        .waitForElementVisible('@rockyRoad', 5000)
        .click('@rockyRoad')
        .waitForElementVisible('@rockyRoadTitle', 5000)

}

module.exports ={
    loginLogout: loginLogout,
    products: products,
    registerForm: registerForm,

}