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
        // [contenthash]은 고유한 해시를 생성한다. 
        // 콘텐츠의 내용이 바뀌면 해시값도 바뀔것이다.
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