const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../src/public/js/builds'),
        publicPath: path.resolve(__dirname, '../src/public/js/builds'),
        filename: 'build-[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'Images': path.resolve(__dirname, '../src/public/images')
        }
    },
    plugins: [
        new CleanWebpackPlugin(['src/public/js/builds'], {root: path.resolve(__dirname, ('../'))}),
        new HtmlWebpackPlugin({
            inject: false,
            template: path.resolve(__dirname, 'assets/template/index.hbs'),
            filename: path.resolve(__dirname, '../src/views/index.hbs')
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: true
            }
        })
    ])
}

