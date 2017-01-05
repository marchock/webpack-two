const path = require('path');
const webpack = require('webpack');

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {

    performance: {
        hints: false
    },

    entry: {
        'index': './src/app/modules/pages/index/index.js',
        'about-us': './src/app/modules/pages/about-us/about-us.js'
    },

    plugins: [
        new BrowserSyncPlugin({
          // browse to http://localhost:3000/ during development,
          // ./public directory is being served
          host: 'localhost',
          port: 3000,
          server: { baseDir: [path.join(__dirname, 'dist')] }
        })
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '/js/[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader'
            }
        ]
    }
}
