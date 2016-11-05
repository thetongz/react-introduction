var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        app: path.join(__dirname, 'src', 'app.js'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                loaders: [
                    'style','css'
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "app.js"
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 9500
    }
};

module.exports = config;