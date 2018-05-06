module.exports = {
    url: 'http://138.68.58.73:5050/',
    elements: {

        //xpath
        boxedChocolates: {
            selector: '//h1[.="Boxed Chocolates"]',
            locateStrategy: 'xpath'
        },

        //xpath
        productButton: {
            selector: '(//a[@href="/products"])[1]',
            locateStrategy: 'xpath'
        },
    }
}