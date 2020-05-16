const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');

const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports = {
    mode: "development", //porduction
    context: __dirname,
    entry: {
        MapX3D: './src/js/app/index.js',
        KMilSymbolEditor: './src/js/viewmodel/kmilsymbol.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        // Needed to compile multiline strings in Cesium
        sourcePrefix: ''
    },
    amd: {
        // Enable webpack-friendly use of require in Cesium
        toUrlUndefined: true
    },
    node: {
        // Resolve node module use of fs
        fs: 'empty'
    },
    resolve: {
        alias: {
            // CesiumJS module name
            cesium: path.resolve(__dirname, cesiumSource)
        }
    },
    
        module: {
            rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|gif|jpg|jpeg|svg|xml)$/,
                use: ['url-loader']
            }, {
                test: /\.json$/,
                loader: "json-loader",
                type: "javascript/auto"
            }]
        },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopywebpackPlugin([{ from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' }]),
        new CopywebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'Assets' }]),
        new CopywebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' }]),
        new CopywebpackPlugin([{ from: path.join(cesiumSource, 'ThirdParty'), to: 'ThirdParty' }]),
        new webpack.DefinePlugin({
            // Define relative base path in cesium for loading assets
            CESIUM_BASE_URL: JSON.stringify('')
        })
    ],
    optimization: {
        minimize: false
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8081,
        host: 'localhost'
    }
};