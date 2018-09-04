const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: './index.js',
    plugins: [
        new webpack.ExtendedAPIPlugin()
    ],
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    }
};