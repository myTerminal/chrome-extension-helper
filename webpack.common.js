/* global require module __dirname */

const libraryFileName = 'chrome-extension-helper';
const libraryName = 'chromeExtensionHelper';

const sourceDir = 'src';
const outputDir = 'build';

const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const clean = new CleanWebpackPlugin([outputDir]);

module.exports = {
    mode: 'development',
    entry: {
        [libraryFileName]: `./${sourceDir}/scripts/${libraryFileName}.js`
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        clean
    ],
    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, outputDir),
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};
