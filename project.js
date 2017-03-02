var isProduction = process.env.NODE_ENV === 'production';

function getBabiliConfig() {
    if (isProduction) {
        return {
            babelOptions: {
                "presets": [
                    [
                        require('@pnidem/babel-preset-babili')
                    ]
                ]
            }
        };
    } else {
        return {};
    }
}

var requireTransforms = [];

if (isProduction) {
    requireTransforms.push({
        transform: 'lasso-babel-transform',
        config: {
            extensions: ['.js', '.es6', '.marko'], // Enabled file extensions. Default: ['.js', '.es6']
            babelOptions: {
                presets: [require('./babel-preset')]
            }
        }
    });
}

module.exports = require('marko-starter').projectConfig({
    routePathPrefix: '/',
    lassoConfig: {
        bundlingEnabled: isProduction,
        fingerprintsEnabled: isProduction,
        require: {
            builtins: {
                'fs': require.resolve('./browser-shims/fs'),
                'module': require.resolve('./browser-shims/module')
            },
            transforms: requireTransforms
        },
        minifyJS: false,
        plugins: [
            'lasso-marko',
            'lasso-cson',
            'lasso-less',
            {
                plugin: 'lasso-babili',
                config: getBabiliConfig(),
                enabled: isProduction
            }
        ]
    }
});
