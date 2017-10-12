const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const paths = {
    main: path.join(__dirname, "../src/Routes/Routes"),
    build: path.join(__dirname, "../bundles")
};

module.exports = {
    devtool: "source-map",
    entry: {
        main: ["webpack-dev-server/client?http://localhost:8080", "webpack/hot/dev-server", paths.main],
        vendor: [
            "react",
            "react-dom",
            "react-router",
            "react-modal",
            "classnames",
            "validator",
            "currency-formatter"
        ]
    },
    devServer: {
        inline: true
    },
    output: {
        filename: "[name].js",
        path: paths.build,
        publicPath: "/"
    },
    module: {        
        rules: [
            {
                enforce: "pre",
                test: /^((?!.config.).).js$/,
                loader: "source-map-loader",
                exclude: /(node_modules)/
            },
            { test: /\.ts(x)?$/, loader: "awesome-typescript-loader" },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.(png|jpg|gif)$/, loader: "url-loader" },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: "url-loader" }
        ]
    },
    resolve: {
        alias: {
            // bind version of jquery-ui
            "jquery-ui": "jqueryui/jquery-ui.js"
        },
        // bind to modules;
        modules: [path.join(__dirname, "src"), "node_modules"],
        extensions: [".js", ".jsx", ".webpack.js", ".ts", ".tsx"]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.DefinePlugin({
            "process.env": { NODE_ENV: JSON.stringify("development") }
        }),
        new CleanWebpackPlugin(["bundles"], { root: path.resolve(__dirname, ".."), verbose: true }),
        new ProgressBarPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.js" }),       
    ]
};