const server = require('webpack-dev-server');
const webpack = require('webpack');
const config = require("./webpack.config");
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
const compiler = webpack(config);

new server(compiler, {
    hot: true,
    stats: {
        colors: true,
        chunks: false,
        version: false,
        cachedAssets: false,
        hash: false,
        timings: true,
        exclude: ['node_modules'],
    },
}).listen(8080, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('\n[webpack-dev-server]', 'http://localhost:8080/bundles/');
});