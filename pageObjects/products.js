module.exports = {
    url: 'http://138.68.58.73:5050/',
    elements: {

        //xpath
        boxedChocolates: {
            selector: '//h1[.="Boxed Chocolates"]',
            locateStrategy: 'xpath'
        },

        //xpath
        lePetiteBox: {
            selector: '//h1[.="Le Petite Box"]',
            locateStrategy: 'xpath'
        },

        lePetite: 'a[href="/lepetite/8"]',

        //xpath
        productButton: {
            selector: '(//a[@href="/products"])[1]',
            locateStrategy: 'xpath'
        },
    }
}