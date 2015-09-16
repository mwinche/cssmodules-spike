'use strict';

module.exports = {
    entry: './index.js',
    output: {
        publicPath: '/dist/',
        path: './dist',
        filename: 'app.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
        ]
    }
};
