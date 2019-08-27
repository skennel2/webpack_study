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
    output: {
        filename: '[name].bundle.js', // 엔트리 파일의 파일명을 말한다.
        chunkFilename: '[name].bundle.js', // 청크 파일의 파일명을 말한다.
        path: path.resolve(__dirname, 'dist')
    }
}