/*
alias npm-exec='PATH=$(npm bin):$PATH'
*/
const webpack = require('webpack');
const path = require('path');
const openBrowser = require('react-dev-utils/openBrowser');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: "#eval-sourcemap",
    entry: "./main.js",
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                        loader: "babel-loader",
                        options: {
                            presets: ["babel-preset-env", "react"],
                            plugins: ["transform-object-rest-spread", "transform-class-properties", "babel-plugin-react-css-modules"],
                        },
                    },
                    { loader: "eslint-loader" }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('postcss-import')(),
                                require('stylelint')()
                            ]
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: __dirname + "/src/",
        filename: "mainCreated.js"
    },
};
if (openBrowser('http://localhost:8080')) {
    console.log('The browser tab has been opened!');
}