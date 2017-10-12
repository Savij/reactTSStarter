const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const Md5Hash = require("webpack-md5-hash");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const paths = {
    header: path.join(__dirname, "../src/Header/HeaderIndex"),
    root: path.join(__dirname, "../src/Root"),
    prospects: path.join(__dirname, "../src/Routes/ProspectRoutes"),
    build: path.join(__dirname, "../bundles")
};

module.exports = {
    devtool: "source-map",
    entry: {
        root: [paths.root],
        prospects: [paths.prospects],
        vendor: [
            "react",
            "react-dom",
            "react-router",
            "react-modal",
            "classnames",
            "validator",
            "currency-formatter"
        ],
        header: [paths.header]
    },
    output: {
        filename: "[name].[chunkhash].js",
        chunkFilename: "[name].[chunkhash].js",
        path: paths.build,
        publicPath: "/app/bundles/"
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
        new CleanWebpackPlugin(["bundles"], { root: path.resolve(__dirname, ".."), verbose: true }),
        new Md5Hash(),
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "[name].[chunkhash].js" }),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: { warnings: false },
            output: { comments: false }
        }),
		new webpack.DefinePlugin({
		    "process.env": { NODE_ENV: JSON.stringify("production") }
		}),
        function () {
            this.plugin("done", function (stats) {
                const assets = stats.toJson().assetsByChunkName;
                const bundleRegEx = /<!--Bundled Scripts-->(.|[\r\n\t])*<!--End Bundled Scripts-->/gi;

                fs.writeFileSync(
					path.join(__dirname, "../../App.aspx"),
					fs.readFileSync(path.join(__dirname, "../../App.aspx")).toString().replace(
						bundleRegEx,
						[
                    `<!--Bundled Scripts-->`,
                    `<script type="text/javascript" src="/App/bundles/${assets.vendor[0]}"></script>`,
                    `<script type="text/javascript" src="/App/bundles/${assets.root[0]}"></script>`,
                    `<!--End Bundled Scripts-->`
						].join("\n\t\t")
					)
				);

                fs.writeFileSync(
					path.join(__dirname, "../../Views/Prospects/Index.cshtml"),
					fs.readFileSync(path.join(__dirname, "../../Views/Prospects/Index.cshtml")).toString().replace(
						bundleRegEx,
						[
                    `<!--Bundled Scripts-->`,
                    `<script type="text/javascript" src="/App/bundles/${assets.vendor[0]}"></script>`,
                    `<script type="text/javascript" src="/App/bundles/${assets.prospects[0]}"></script>`,
                    `<!--End Bundled Scripts-->`
						].join("\n\t\t")
					)
				);

                /*
                fs.writeFileSync(
					path.join(__dirname, "../../template.master"),
					fs.readFileSync(path.join(__dirname, "../../template.master")).toString().replace(
						bundleRegEx,
						[
                    `<!--Bundled Scripts-->`,
                    `<script type="text/javascript" src="/App/bundles/${assets.vendor[0]}"></script>`,
                    `<script type="text/javascript" src="/App/bundles/${assets.header[0]}"></script>`,
                    `<!--End Bundled Scripts-->`
						].join("\n\t\t")
					)
				);
                */


            });
        }
    ]
};