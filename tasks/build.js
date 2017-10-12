const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");
const path = require("path");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");

const sourceDir = "../src";

gulp.task("serve", function (callback) {
    const webpackCompiler = webpack(config);
    var server = new WebpackDevServer(webpackCompiler, {
        publicPath: config.output.publicPath,
        hot: true,
        stats: {
            colors: true
        }
    });
    server.listen(8080, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/");
    });
});

gulp.task("build", function (callback) {
    const webpackCompiler = webpack(config);
    webpackCompiler.run(function (err, stats) {
        if (err) {
            callback(err);
        }
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task("build:watch", ["build"], function () {
    gulp.watch(
        [
            `${path.join(process.cwd(), sourceDir)}/*.ts*`,
            `${path.join(process.cwd(), sourceDir)}/*.less`
        ],
        [
            "build"
        ]);
});