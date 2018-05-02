const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {AngularCompilerPlugin} = require('@ngtools/webpack');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const projectPath = path.resolve('.').split(path.sep + '.meteor')[0];

const clientConfig = {
    entry: './client/main.ts',
    devtool: 'nosources-source-map',
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
            "test": /\.html$/,
            "loader": "raw-loader"
        },
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.css$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new AngularCompilerPlugin({
            tsConfigPath: path.join(projectPath, './tsconfig.json'),
            mainPath: path.join(projectPath, './client/main.ts'),
            entryModule: path.join(projectPath, './client/imports/app/app.module#AppModule'),
            sourceMap: true,
            skipCodeGeneration: process.env.NODE_ENV !== 'production'
        }),
        new HtmlWebpackPlugin({
            template: './client/main.html'
        }),
        new webpack.ProgressPlugin()
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js'
    }
};
const serverConfig = {
    entry: './server/main.ts',
    target: 'node',
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                happyPackMode: true
            },
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new webpack.ProgressPlugin()
    ],
    externals: [
        nodeExternals()
    ],
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        hot: true
    }
}
module.exports = [clientConfig, serverConfig];