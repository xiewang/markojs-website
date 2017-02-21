const libraries = {
    inferno: {
        name:'Inferno',
        logo:'https://avatars2.githubusercontent.com/u/14214240?v=3&s=400',
        color:'#e60022'
    },
    marko: {
        name:'Marko',
        logo:'http://markojs.com/images/logo-header.png',
        color:'#d04'
    },
    preact: {
        name:'Preact',
        logo:'http://seeklogo.com/images/P/preact-logo-64E4BF9ABC-seeklogo.com.png',
        color: '#673ab8'
    },
    react: {
        name:'React',
        logo:'http://builtwithreact.io/img/share-logo.jpg',
        color:'#61dafb'
    },
    vue: {
        name:'Vue',
        logo:'https://vuejs.org/images/logo.png',
        color:'#4fc08d'
    }
};

const environments = {
    node: {
        logo:'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg',
        name:'Node.js'
    },
    firefox: {
        logo:'https://www.mozilla.org/media/img/styleguide/identity/firefox/guidelines-logo.7ea045a4e288.png',
        name:'Firefox'
    },
    safari: {
        logo: 'https://nau.edu/uploadedImages/Administrative/ITS/CTSS/PC_Support_-_NEW/Web_Browsers/Safari/Logo.png',
        name:'Safari'
    },
    chrome: {
        logo: 'http://img.talkandroid.com/uploads/2015/11/Chrome-Logo.png',
        name:'Chrome'
    },
    edge: {

    },
    ios: {
        logo: 'http://i.imgur.com/72qUODI.png',
        name: 'iOS Safari'
    },
    android: {
        logo: 'http://i.imgur.com/ZNe84Lr.png',
        name: 'Chrome for Android'
    }
};

const benchmarks = {
    colors: {
        name:'Color picker',
        description: `
            <p>This benchmark measures the time it takes to cycle through 133 colors. The selected color index changes every cycle. When the selected color index changes three things happen:</p>
            <ul>
                <li>The new selected color is highlighted</li>
                <li>The old selected color is unhighlighted</li>
                <li>The selected color is shown at the end</li>
            </ul>
            <p>This benchmark measures how well a large render tree is optimized when only a few nodes actually need to be updated.</p>`,
        unit:'ops/s'
    },
    'search-results': {
        name:'Search results',
        description: `
            <p>This benchmark measures the time it takes to render pages of search results. Each page includes 100 search result items. Every iteration renders an entirely new set of search results. As a result of rendering new search results for every cycle, a significant number of DOM nodes must be updated.</p>
            <p>Because there are many DOM nodes being updated, the DOM itself tends to be the bottleneck in this type of benchmark.</p>`,
        unit:'ops/s'
    }
}

let benchResults = {
    "colors": {
        "node": {
            "inferno": 2176,
            "marko": 5443,
            "preact": 4192,
            "react": 260,
            "vue": 1146
        },
        "safari": {
            "inferno": 833,
            "marko": 4362,
            "preact": 780,
            "react": 1720,
            "vue": 765
        },
        "chrome": {
            "inferno": 2981,
            "marko": 3811,
            "preact": 2857,
            "react": 2302,
            "vue": 3315
        },
        "firefox": {
            "inferno": 1385,
            "marko": 2448,
            "preact": 973,
            "react": 1142,
            "vue": 2093
        },
        "ios": {
            "inferno": 309,
            "marko": 863,
            "preact": 272,
            "react": 336,
            "vue": 281
        },
        "android": {
            "inferno": 529,
            "marko": 659,
            "preact": 443,
            "react": 422,
            "vue": 570
        }
    },
    "search-results": {
        "node": {
            "inferno": 424,
            "marko": 2675,
            "preact": 614,
            "react": 41.01,
            "vue": 182
        },
        "safari": {
            "inferno": 245,
            "marko": 345,
            "preact": 228,
            "react": 202,
            "vue": 80.71
        },
        "chrome": {
            "inferno": 201,
            "marko": 240,
            "preact": 230,
            "react": 185,
            "vue": 181
        },
        "firefox": {
            "inferno": 86.94,
            "marko": 123,
            "preact": 67.92,
            "react": 85.55,
            "vue": 59.29
        },
        "ios": {
            "inferno": 56.68,
            "marko": 77.08,
            "preact": 58.43,
            "react": 47.43,
            "vue": 23.72
        },
        "android": {
            "inferno": 36.96,
            "marko": 39.45,
            "preact": 40.87,
            "react": 30.46,
            "vue": 27.87
        }
    }
};

/*
benchResults.colors.android = (() => {
    var results = {};
    var numEnvironments =Object.keys(benchResults.colors).length;

    Object.keys(benchResults.colors).forEach(env => {
        var libResults = benchResults.colors[env];
        Object.keys(libResults).forEach(lib => {
            results[lib] = (results[lib] || 0) + libResults[lib]/numEnvironments;
        });
    });

    return results;
})();
*/

module.exports = Object.keys(benchResults).map(bench => {
    const envResults = benchResults[bench];
    const benchmark = benchmarks[bench];
    let localMax = 0;
    let avergageResults = {};
    return Object.assign({}, benchmark, {
        results: Object.keys(envResults).map(env => {
            const libResults = envResults[env];
            const environment = environments[env];
            return Object.assign({}, environment, {
                results: Object.keys(libResults).map(lib => {
                    const libResult = libResults[lib];
                    const library = libraries[lib];

                    if(libResult > localMax) {
                        localMax = libResult;
                    }

                    return Object.assign({}, library, {
                        value: libResult,
                        unit: benchmark.unit
                    });
                })
            });
        }),
        max: localMax
    });
});