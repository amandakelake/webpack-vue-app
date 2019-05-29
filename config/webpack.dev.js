const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    // 配置出口文件的地址
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    devtool: 'cheap-module-eval-source-map', // 代码追踪
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../', 'tpl/index.html'),
        }),
    ],
});
