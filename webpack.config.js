var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: [
            './js/bootstrap.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dist.js', // Here we can have for caching reasons hash(all the files same hash number), chunkhash(every file its unique hash code)
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['ccs-loader']
                // The CSS loader takes a CSS file and returns the CSS with imports and url(...) resolved via webpack's require functionality
                // The style loader takes CSS and actually inserts it into the page so that the styles are active on the page.
            },
            {
                test: /\.js$/, // Run the loader on all .js files
                exclude: /node_modules/, // ignore all files in the node_modules folder
                loader: 'babel-loader' // babel-loader compile files to plain javascript
                // Through the .babelrc file we define the presets which means in which format(ES6, ES7 e.t.c.) will be compiled our code.
            },
            {
                test: /\.s[ac]ss$/, // Match .scss and .sass files
                use: ExtractTextPlugin.extract({
                    use:  ['css-loader', 'sass-loader'], // sass-loader convert sass to css and css-loader returns the css
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpe?g|gif)$/, // Match only these extensions. Regex for jpg, jpeg
                loader: 'file-loader',
                options: {
                    name () {
                        if (process.env.NODE_ENV === 'development') {
                            return '/images/[name].[ext]' // The path of the images where they will be generated.
                        }

                        return '/images/[hash].[ext]' // The path of the images where they will be generated.
                    }
                }
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
        new ExtractTextPlugin('[name].css'), // The name of the entry.

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