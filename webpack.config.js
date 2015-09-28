'use strict';

module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: "app.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/,
              loaders: [
                'style-loader',
                'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
                'cssnext-loader'
              ]
            }
        ]
    }
};
