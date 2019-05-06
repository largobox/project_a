const path = require('path')

module.exports = {
    mode: 'development',
    entry: ['babel-polyfill', './src/index.js'],

    output: {
        path: path.resolve(__dirname, '../back_end/public/js'),
        filename: 'build.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    }
}