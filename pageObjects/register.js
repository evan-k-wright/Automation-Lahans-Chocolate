module.exports = {
    url: 'http://138.68.58.73:5050/',
    elements: {
        addressInput: 'input[placeholder="Address"]',
        cityInput: 'input[placeholder="City"]',
        companyInput: 'input[placeholder="Company (optional)"]',
        emailInput: 'input[placeholder="Email (e.g. email@gmail.com)"]',
        enterEmail: 'input[type="email"]',
        enterPassword: 'input[type="password"]',
        firstNameInput:'input[placeholder="First Name"]', 
        googleAccount: 'div[data-authuser="2"]',
        googleLogin: 'div[class="auth0-lock-social-button-text"]',
        helloName: 'div[class="dash-header"]',
        lastNameInput: 'input[placeholder="Last Name"]',
        logout: 'a[href="/logout"]',

         //xpath
         next: { 
         selector: '//span[.="Next"]',
        locateStrategy: 'xpath'
        },

        phoneInput: 'input[placeholder="Phone Number"]',
        registerAccount: 'button[class="register-btn"]',
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