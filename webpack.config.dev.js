var path = require('path');
var debug = process.env.NODE_ENV !== "production";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const ConcatPlugin = require('webpack-concat-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

var merge = require('webpack-merge');

console.log('ENV', process.env.NODE_ENV);

module.exports = {
    devtool: 'source-map',
    entry: {
        bootstrap4: path.resolve(__dirname, 'src/js/bootstrap'),
        CookieConsent: path.resolve(__dirname, '../../vendor/bramdeleeuw/cookieconsent/javascript/src/cookieconsent'),
        main: path.resolve(__dirname, 'src/js/main')
    },
    output: {
        filename: 'js/[name].js',
        chunkFilename: "[id].css"
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // set to true if you want JS source maps
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    },
                    output: {
                        comments: false
                    }
                },
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    externals: {
        '$': 'jQuery',
        'jquery': 'jQuery'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g)/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "./img/[name].[ext]",
                            limit: 5000
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            },
            {
                // Match woff2 and patterns like .woff?v=1.1.1.
                test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff",
                        name: "./fonts/[name].[ext]", // Output below ./fonts
                        publicPath: "../", // Take the directory into account
                    },
                },
            },
            {
                test: /\.(eot|ttf)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff",
                        name: "./fonts/[name].[ext]", // Output below ./fonts
                        publicPath: "../", // Take the directory into account
                    },
                }
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'image-webpack-loader',
                // Specify enforce: 'pre' to apply the loader
                // before url-loader/svg-url-loader
                // and not duplicate it in rules with them
                enforce: 'pre'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new ConcatPlugin({
            filesToConcat: [
                'bootstrap',
                'flexslider',
                'timeago',
                'lazysizes',
                'cookieconsent'
            ],
            name: 'js/thirdparty',
            uglify: true
        }),
        new ConcatPlugin({
            filesToConcat: [
                'bootstrap',
                'flexslider',
                'timeago',
                'lazysizes',
                'cookieconsent'
            ],
            name: 'js/TEST',
            uglify: true
        }),
        new ProgressBarPlugin({
            format: 'Build [:bar] :percent (:elapsed seconds)',
            clear: false,
        })
    ]
};