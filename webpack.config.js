import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = { 
    entry: path.join(__dirname, 'src', 'app.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js' // this the compiled final javascript file which we will include in the index.html
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    module: { 
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.(css|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]              
        },
        {
            test: /\.(jpg|jpeg|png|gif|mp3|mp4|mov|avi|wmv|wma|svg|ogg)$/,
            loaders: ['file=loader']
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        })
    ],
    devtool: 'cheap-module-eval-source-map', 
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true 
    }
}