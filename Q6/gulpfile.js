// The gulpfile file

const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");
// Compiles saas file and generate css. For demonstration purposes, the css file will not be minimized. Generally, files are minimized to generate greater efficiency.
gulp.task("styles", () => {
  return gulp
    .src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"));
});
// remove css
gulp.task("clean", () => {
  return del(["css/main.css"]);
});
// watch changes
gulp.task("watch", () => {
  gulp.watch("sass/**/*.scss", (done) => {
    gulp.series(["clean", "styles"])(done);
  });
});

gulp.task("default", gulp.series(["watch"]));
