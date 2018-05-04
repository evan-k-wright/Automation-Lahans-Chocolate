module.exports = {
    url: 'http://138.68.58.73:5050/',
    elements: {
        enterEmail: 'input[type="email"]',
        enterPassword: 'input[type="password"]',
        login: 'a[href="/login"]',
        googleLogin: 'div[class="auth0-lock-social-button-text"]',
        helloName: 'div[class="dash-header"]',

        //xpath
        next: { 
            selector: '//span[.="Next"]',
            locateStrategy: 'xpath'
        }

    }
}