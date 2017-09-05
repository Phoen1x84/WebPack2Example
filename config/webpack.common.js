const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']        
        }]
    },

    plugins: [
        new CleanWebpackPlugin(['../dist']),
        new HtmlWebpackPlugin({
            title: 'Example webpack setup'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

// module.exports = {
//     entry: './src/sass/app.scss',
//     output: {
//       filename: 'app.css',
//       path: path.resolve(__dirname, 'dist/css')
//     },
//     module: {
//         rules: [{
//             test: /\.scss$/,
//             use: [{
//                 loader: 'style-loader'
//             }, {
//                 loader: 'css-loader',
//                 options: {
//                     sourceMap: true
//                 }
//             }, {
//                 loader: 'sass-loader',
//                 options: {
//                     sourceMap: true
//                 }
//             }]
//         }],
//
//     }
// }
