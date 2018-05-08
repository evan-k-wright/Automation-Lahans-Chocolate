module.exports = {
    url: 'http://138.68.58.73:5050/',
    elements: {

        //xpath
        boxedChocolates: {
            selector: '//h1[.="Boxed Chocolates"]',
            locateStrategy: 'xpath'
        },

        //path
        halfPoundBox:{
            selector: '//h1[.="Half Pound Box"]',
            locateStrategy: 'xpath'
        },
        halfPound: 'a[href="/halfpound/9"]',

        //xpath
        lePetiteBox: {
            selector: '//h1[.="Le Petite Box"]',
            locateStrategy: 'xpath'
        },
        lePetite: 'a[href="/lepetite/8"]',

        //xpath
        onePoundBox: {
            selector: '//h1[.="One Pound Box"]',
            locateStrategy: 'xpath'
        },
        onePound: 'a[href="/onepound/10"]',

        //xpath
        twoPoundBox: {
            selector: '//a[h1.=" Two Pound Box"]',
            locateStrategy: 'xpath'
        },
        twoPound: 'a[href.="/twopound/11"]',

        //xpath
        productButton: {
            selector: '(//a[@href="/products"])[1]',
            locateStrategy: 'xpath'
        },
    }
}