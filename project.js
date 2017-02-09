module.exports = require('marko-starter').projectConfig({
    routePathPrefix: '/',

    lassoConfig: {
        require: {
            builtins: {
                'fs': require.resolve('./browser-shims/fs'),
                'module': require.resolve('./browser-shims/module')
            }
        },
        plugins: [
            'lasso-marko',
            'lasso-cson',
            'lasso-less'
        ]
    }
});