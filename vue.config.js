const path = require('path');

module.exports = {
    devServer: {
        watchOptions: {
            aggregateTimeout: 5000,
            poll: 5000
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                vue$: path.resolve('./node_modules/vue/dist/vue.runtime.esm.js'),
            },
        },
    },
}