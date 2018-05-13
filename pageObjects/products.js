module.exports = {
    url: 'http://138.68.58.73:5050/',
    elements: {

        boxedChocolates: {
            selector: '//h1[.="Boxed Chocolates"]',
            locateStrategy: 'xpath'
        },

        halfPoundBox:{
            selector: '//h1[.="Half Pound Box"]',
            locateStrategy: 'xpath'
        },
        halfPound: 'a[href="/halfpound/9"]',

        lePetiteBox: {
            selector: '//h1[.="Le Petite Box"]',
            locateStrategy: 'xpath'
        },
        lePetite: 'a[href="/lepetite/8"]',

        onePoundBox: {
            selector: '//h1[.="One Pound Box"]',
            locateStrategy: 'xpath'
        },
        onePound: 'a[href="/onepound/10"]',

        pretzelRodTitle: {
            selector: '//h1[.="Pretzel Rod"]',
            locateStrategy: 'xpath'
        },
        pretzelRod: 'a[href="/pretzelrod/2"]',

        productButton: {
            selector: '(//a[@href="/products"])[1]',
            locateStrategy: 'xpath'
        },

        rockyRoadTitle: {
            selector: '//h1[.="Rocky Road"]',
            locateStrategy: 'xpath'
        },
        rockyRoad: 'a[href="/rockyroad/1"]',

        twoPoundBox: {
            selector: '//h1[.="Two Pound Box"]',
            locateStrategy: 'xpath'
        },
        twoPound: 'a[href="/twopound/11"]',

    }
}