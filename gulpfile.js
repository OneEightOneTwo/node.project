let gulp = require('gulp');//得到对象
let sass = require('gulp-sass');//得到函数
// var watch = require('gulp-watch');

gulp.task('tocss',function(){
    gulp.src('./public/sass/all.scss')
      .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('./public/stylesheets'));
 });


//  gulp.task('watch', function () {
//      return watch('./public/sass/*.scss', function () {
//          gulp.start('css');	//执行html任务
//          browserSync.reload(); //刷新浏览器
//      });
//  });
 
//  // 加入'watch'任务
//  gulp.task('default', ['clean'], function() {
//      gulp.start(['html', 'js_main','css_main','images', 'browser', 'watch'])
//  });


//  gulp.task('watch',function(){
//     gulp.watch('./public/sass/*.scss',['sass']);
//     gulp.watch('./public/*.html',['sass']);
// })
// //  gulp.watch(glob [, opts], tasks)