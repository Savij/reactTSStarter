const gulp = require("gulp");

require("./tasks/build");
require("./tasks/build-prod");

gulp.task("default", ["serve"]);