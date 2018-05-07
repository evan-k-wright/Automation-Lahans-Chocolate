const data = require('../sources/data')
const functions = require('../sources/functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://138.68.58.73:5050/')
    },

    after: browser => {
        browser.end()

    },

    // 'Registering': browser => {
    //     functions.registerForm(browser, data)
    // },

    // 'Login and Logout': browser => {
    //     functions.loginLogout(browser, data)
    // },

    'Products': browser => {
        functions.products(browser)
    }

}