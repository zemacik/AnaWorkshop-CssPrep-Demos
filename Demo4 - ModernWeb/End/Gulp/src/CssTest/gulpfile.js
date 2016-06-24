var gulp = require("gulp");
var less = require("gulp-less");

gulp.task("less", function () {
    gulp.src("./less/site.less")
        .pipe(less({ compress: false }))
        .pipe(gulp.dest("./wwwroot/assets"));
});

gulp.task("watch", function () {
    gulp.watch("./less/*.less", ["less"])
});

