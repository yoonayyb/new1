const gulp = require('gulp'); // 引用gulp
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();// 自动刷新
const gulp_connect = require('gulp-connect');
const gulp_notify = require('gulp-notify');
// 引入gulp-sass

gulp.task('default', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
    files: ['**'],
  });
  gulp_connect.server({
    root: 'src',
    port: 9999,
    livereload: true,
  });
  // watch('dist/index.html', gulp.series('gulp_connect'));
  watch('dist/index.html').on('change', browserSync.reload);
});
gulp.task('gulp_connect', () => {
  gulp.src('src/views/**/*.vue').pipe(gulp_connect.reload()).pipe(gulp_notify({ message: 'vue页面刷新完毕' }));
});

gulp.task('sass', () => gulp.src('./src/global.scss').pipe(sass()).pipe(gulp.dest('./public/css')).pipe(browserSync.reload({
  stream: true,
})));
gulp.task('watch-sass', () => {
  gulp.watch('./src/global.scss', gulp.parallel('sass'));
});
