const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry : {
        app : './src/index.js'
    },
    plugins : [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title : 'Output Management'
        })
    ],
    output : {
        //filename : '[name].bundle.js',
        filename : '[id].bundle.js',
        //chunkFilename : '[name].bundle.js',
        path : path.resolve(__dirname, 'dist')
    }
}