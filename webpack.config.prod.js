const path = require('path');
const ExtendedAPIPlugin = require('./ExtendedAPIPlugin')

module.exports = {
    entry: './index.js',
    plugins: [
        new ExtendedAPIPlugin()
    ],
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
};