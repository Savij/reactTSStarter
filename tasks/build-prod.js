const config = require("./webpack.config.prod");
const gulp = require("gulp");
const webpack = require("webpack");
const gutil = require("gulp-util");

const sourceDir = "src";

gulp.task("build:prod", function (callback) {
    webpack(config).run(function (err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        } 
        const jsonStats = stats.toJson();
        if (stats.hasErrors()) {
            gutil.log("Webpack Error: ", gutil.colors.magenta(jsonStats.errors[0]));
            return callback(err);            
        }
        if (stats.hasWarnings()) {
            gutil.log("Webpack Warning: ", gutil.colors.yellow(jsonStats.warnings[0]));
        }
        gutil.log("[webpack]", stats.toString({
            colors: true
        }));
        callback();
    });
});