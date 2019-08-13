const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    plugins : [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title : 'Caching'
        })
    ],
    output : {
        filename : '[name].[contenthash].js',
        path : path.resolve(__dirname, 'dist')
    },
    optimization : {
        moduleIds : 'hashed',
        runtimeChunk : 'single',
        splitChunks : {
            cacheGroups : {
                vender : {
                    test : /[\\/]node_modules[\\/]/,
                    name : 'venders',
                    chunks : 'all'
                }
            }
        }
    }
}