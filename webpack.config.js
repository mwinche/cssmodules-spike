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
            { test: /\.css$/,
              loaders: [
                'style-loader',
                'css-loader?modules',
                'autoprefixer-loader?{browsers:["last 2 versions", "IE >= 9"]}'
              ]
            },
            {
              test: /\.less$/, loaders: [
              'style-loader',
              'css-loader?modules',
              'autoprefixer-loader?{browsers:["last 2 versions", "IE >= 9"]}',
              'less-loader']
            }
        ]
    }
};
