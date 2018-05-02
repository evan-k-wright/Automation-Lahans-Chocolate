const registerForm = (brwoser, data) => {
    let register = brwoser.page.register()
    register.navigate()
    register
        .waitForElementVisible('@registerButton', 5000)
        .click('@registerButton')
        .waitForElementPresent('@registerTitle', 5000)

}


module.exports ={
    registerForm: registerForm,

}