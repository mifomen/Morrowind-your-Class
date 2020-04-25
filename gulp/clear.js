
gulp.task('clear', function() {
  returngulp.src( 'build/**/*', { read: false })
  .pipe(gp.rm({
   async: true 
  }) )
 })
