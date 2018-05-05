module.exports = {
    url: 'http://138.68.58.73:5050/',
    elements: {
        addressInput: 'input[placeholder="Address"]',
        cityInput: 'input[placeholder="City"]',
        companyInput: 'input[placeholder="Company (optional)"]',
        emailInput: 'input[placeholder="Email (e.g. email@gmail.com)"]',
        firstNameInput:'input[placeholder="First Name"]', 
        googleAccount: 'div[data-authuser="2"]',
        helloName: 'div[class="dash-header"]',
        lastNameInput: 'input[placeholder="Last Name"]',
        phoneInput: 'input[placeholder="Phone Number"]',
        registerButton: 'a[href="/register"]',

        //xpath selector
        registerTitle: {
            selector: '//h1[.="Register"]',
            locateStrategy: 'xpath'
        },

        reTypeEmailInput: 'input[placeholder="Re-Type Email"]',
        stateInput: 'input[placeholder="State"]',
        zipCodeInput: 'input[placeholder="Zip Code"]',

    }
}