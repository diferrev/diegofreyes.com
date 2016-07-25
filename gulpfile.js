var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

var config = {
    cssPath: './app/src/css',
    jsPath: './app/src/javascripts',
};

//Une los css y los concatena en un app.css
gulp.task('css', function () {
   return gulp.src([
       config.cssPath + '/bootstrap.css',
       config.cssPath + '/style.css'
   ])
   .pipe(concat('app.css'))
   .pipe(gulp.dest('./app/build/css'))
});

//Tarea general gulp
gulp.task('default', ['css']);