var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: {
        hello: path.join(__dirname, 'src', 'app.js'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                loader: ExtractTextPlugin.extract('style', 'css')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 9500
    }
};

module.exports = config;