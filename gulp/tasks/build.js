module.exports = function () {
  $.gulp.task('build', 
    $.gulp.series(
      'clear',
      'copy-fonts',
      // 'copy-css',
      // 'copy-css-54',
      // 'html2pug',
      'pug',
      // 'html',
      'img',
      // 'svg',
      'scss',
      // 'scripts:lib',
      'script'
      // $.gulp.parallel('html','img', 'scss'),
      // $.gulp.parallel('scripts:lib','script')
    // 'serve',
    // 'watch'
    ));
    $.gulp.task('build-final', 
    $.gulp.series(
      'clear',
      'copy-fonts',
      // 'copy-css-54',
      // 'html2pug',
      'pug',
      // 'html',
      'img',
      // 'svg',
      'scss',
      // 'scripts:lib',
      'script-min'
      // $.gulp.parallel('html','img', 'scss'),
      // $.gulp.parallel('scripts:lib','script')
    // 'serve',
    // 'watch'
    ));
  $.gulp.task('default', 
    $.gulp.series(
      'build',
      'serve'
      ));
  
}