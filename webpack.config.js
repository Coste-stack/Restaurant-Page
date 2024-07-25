const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: './src',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index_bundle.html',
            inject: 'head'
        })
    ],
};