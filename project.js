var isProduction = process.env.NODE_ENV === 'production';

module.exports = require('marko-starter').projectConfig({
    routePathPrefix: '/',

    lassoConfig: {
        require: {
            builtins: {
                'fs': require.resolve('./browser-shims/fs'),
                'module': require.resolve('./browser-shims/module')
            }
        },
        minifyJS: false,
        plugins: [
            'lasso-marko',
            'lasso-cson',
            'lasso-less',
            {
                plugin: 'lasso-babili',
                enabled: isProduction
            }
        ]
    }
});