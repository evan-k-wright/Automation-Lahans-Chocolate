const data = require('../sources/data')
const functions = require('../sources/functions')

module.exports = {
    before: browser => {

    },

    after: browser => {

    },

    'Registering': browser => {
        functions.registerForm(browser, data)
    },

    // 'Login and Logout': browser => {
    //     functions.loginLogout(browser, data)
    // },
}