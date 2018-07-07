module.exports = {
    url: 'http://138.68.58.73:5050/',
    elements: {

        bigPicture: 'a[class="hero-link"]',
        
        boxedChocolates: {
            selector: '//h1[.="Boxed Chocolates"]',
            locateStrategy: 'xpath'
        },

        caramelLollipopTitle: {
            selector: '//h1[.="Caramel Lollipop"]',
            locateStrategy: 'xpath'
        },
        caramelLollipop: 'a[href="/lollipop/4"]',

        grandmasCaramelsTitle: {
            selector: '//h1',
            locateStrategy: 'xpath'
        },
        grandmasCaramels: 'a[href="/caramels/6"]',

        halfPoundBox:{
            selector: '//h1[.="Half Pound Box"]',
            locateStrategy: 'xpath'
        },
        halfPound: 'a[href="/halfpound/9"]',
        
        lahnaBarTitle: {
            selector: '//h1[.="Lahna Bar"]',
            locateStrategy: 'xpath'
        },
        lahnaBar: 'a[href="/lahnabar/3"]',

        lePetiteBox: {
            selector: '//h1[.="Le Petite Box"]',
            locateStrategy: 'xpath'
        },
        lePetite: 'a[href="/lepetite/8"]',

        licoriceTitle: {
            selector: '//h1',
            locateStrategy: 'xpath'
        },
        licorice: 'a[href="/licorice/7"]',

        logo: 'a[href="/"]',

        onePoundBox: {
            selector: '//h1[.="One Pound Box"]',
            locateStrategy: 'xpath'
        },
        onePound: 'a[href="/onepound/10"]',

        oreosTitle: {
            selector: '//h1[.="Chocolate Dipped Oreos"]',
            locateStrategy: 'xpath'
        },
        oreos: 'a[href="/oreos/5"]',

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

        websiteLogo: 'a[href="/"]',

    }
}