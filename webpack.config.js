var webpack = require('webpack');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    stats: 'normal',
    mode: 'development',
    entry: {
        app: [
            './js/bootstrap.js',
            './scss/all.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Run the loader on all .js files
                exclude: /node_modules/, // ignore all files in the node_modules folder
                loader: 'babel-loader' // babel-loader compile files to plain javascript
                // Through the .babelrc file we define the presets which means in which format(ES6, ES7 e.t.c.) will be compiled our code.
            },
            {
                test: /\.(s[ac]ss|css)$/, // Match .scss and .sass files
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader', // sass-loader convert sass to css and css-loader returns the css
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader' // Vue loader for using .vue files with structure
            }
        ]
    },
    resolve: {
        alias: { // The alias is used to make the import more readable. That means that if not use the alias we should type import vue from vue/dist/vue.esm.js
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({ // The name of the entry.
            filename: '[name].css',
        }),

        new VueLoaderPlugin(),

        new CleanWebpackPlugin(['dist'], // Plugin to delete dist folder
            {
                root: path.resolve(__dirname, 'dist'),
                verbose: true, // It keeps log files
                dry: false // Use boolean "true" to test/emulate delete. (will not remove files).
            }),
    ]

};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin(), // plugin which minimize my JS code
        new webpack.LoaderOptionsPlugin({ // plugin which minimize my CSS code
            minimize: true
        })
    )
}