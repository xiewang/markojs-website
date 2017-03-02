const libraries = {
    inferno: {
        name:'Inferno',
        logo:require.resolve('./logos/inferno.png'),
        color:'#e60022'
    },
    marko: {
        name:'Marko',
        logo:require.resolve('./logos/marko.png'),
        color:'#d04'
    },
    preact: {
        name:'Preact',
        logo:require.resolve('./logos/preact.png'),
        color: '#673ab8'
    },
    react: {
        name:'React',
        logo:require.resolve('./logos/react.jpg'),
        color:'#61dafb'
    },
    vue: {
        name:'Vue',
        logo:require.resolve('./logos/vue.png'),
        color:'#4fc08d'
    }
};


const environments = {
    node: {
        logo: require.resolve('./logos/node.jpg'),
        name: 'Node.js',
        type: 'server'
    },
    desktop: {
        logo: require.resolve('./logos/desktop.png'),
        name: 'Desktop Browsers',
        type: 'average'
    },
    mobile: {
        logo: require.resolve('./logos/mobile.png'),
        name: 'Mobile Browsers',
        type: 'average'
    },
    firefox: {
        logo: require.resolve('./logos/firefox.png'),
        name: 'Firefox',
        type: 'desktop'
    },
    safari: {
        logo: require.resolve('./logos/safari.png'),
        name: 'Safari',
        type: 'desktop'
    },
    chrome: {
        logo: require.resolve('./logos/chrome.png'),
        name: 'Chrome',
        type: 'desktop'
    },
    edge: {

    },
    ios: {
        logo: require.resolve('./logos/safari-ios.png'),
        name: 'iOS Safari',
        type: 'mobile'
    },
    android: {
        logo: require.resolve('./logos/chrome-android.png'),
        name: 'Chrome for Android',
        type: 'mobile'
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
                <li>The selected color's name is shown at the end</li>
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

let resultsByBench = {
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

Object.entries = Object.entries || function (object) {
    return Object.keys(object).map(key => [key, object[key]]);
}

Object.entries(resultsByBench).forEach(entries => {
    const benchName = entries[0];
    const benchResultsByEnvironment = entries[1];
    const environmentEntries = Object.entries(benchResultsByEnvironment);
    const numDesktop = environmentEntries.filter(entry =>
        environments[entry[0]].type === 'desktop'
    ).length;
    const numMobile = environmentEntries.filter(entry =>
        environments[entry[0]].type === 'mobile'
    ).length;

    let desktopResults = benchResultsByEnvironment.desktop = {};
    let mobileResults = benchResultsByEnvironment.mobile = {};

    environmentEntries.forEach(entry => {
        const environmentName = entry[0];
        const environmentResultsByLibrary = entry[1];
        const environmentType = environments[environmentName].type;

        let results;
        let count;

        if (environmentType === 'mobile') {
            results = mobileResults;
            count = numMobile;
        } else if (environmentType === 'desktop') {
            results = desktopResults;
            count = numDesktop;
        }

        if (results) {
            Object.entries(environmentResultsByLibrary).forEach(entries => {
                const libraryName = entries[0];
                const libraryResult = entries[1];

                results[libraryName] = results[libraryName] || 0;
                results[libraryName] += libraryResult/count;
            });
        }
    });
});

module.exports = Object.entries(resultsByBench).map(entries => {
    const benchName = entries[0];
    const benchResultsByEnvironment = entries[1];
    const benchmark = benchmarks[benchName];

    let localMax = 0;
    let avergageResults = {};

    return Object.assign({}, benchmark, {
        results: Object.entries(benchResultsByEnvironment).map(entries => {
            const envName = entries[0];
            const envResultsByLibrary = entries[1];
            const environment = environments[envName];

            return Object.assign({}, environment, {
                results: Object.entries(envResultsByLibrary).map(entries => {
                    const libName = entries[0];
                    const libResult = entries[1];
                    const library = libraries[libName];

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