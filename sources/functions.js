const registerForm = (brwoser, data) => {
    let register = brwoser.page.register()
    register.navigate()
    register
        .waitForElementVisible('@registerButton', 5000)
        .click('@registerButton')
        .waitForElementPresent('@registerTitle', 5000)
        .setValue('@firstNameInput', data.firstName)
        .setValue('@lastNameInput', data.lastName)
        .setValue('@addressInput', data.address)
        .setValue('@cityInput', data.city)
        .setValue('@stateInput', data.state)
        .setValue('@zipCodeInput', data.zipCode)
        .setValue('@phoneInput', data.phoneNumber)
        .setValue('@emailInput', data.email)
        .setValue('@reTypeEmailInput', data.reTypeEmail)

}


module.exports ={
    registerForm: registerForm,

}