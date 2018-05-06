const data = require('../sources/data')
const functions = require('../sources/functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://138.68.58.73:5050/')
    },

    after: browser => {

    },

    // 'Registering': browser => {
    //     functions.registerForm(browser, data)
    // },

    // 'Login and Logout': browser => {
    //     functions.loginLogout(browser, data)
    // },

    'Products': function (browser) {
        const pages = browser.page,
            loginLogout = pages.loginLogout(),
            products = pages.products();

            loginLogout.navigate()
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

            products.navigate()
                .waitForElementVisible('@productButton', 5000)
                .click('@productButton')
                .waitForElementVisible('@boxedChocolates', 5000)
        }

}