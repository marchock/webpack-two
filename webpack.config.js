const path = require('path');

module.exports = {
    entry: './src/app/index.js',

    output: {
        filename: '/js/bundle.js',
        path: './dist'
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader'
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
}
