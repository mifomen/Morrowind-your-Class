

gulp.task("copy-fonts", function() {
  return gulp.src([
    "src/fonts/**/*.{woff,woff2,tiff}",
    "src/img/**",
    "src/css/*.css"
    // "src/js/**",
    // "src/*.html"
  ], {
    base: "src/"
  })
  .pipe(gulp.dest("build"));
})
