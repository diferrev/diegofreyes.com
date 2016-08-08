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
       config.cssPath + '/vendor/normalize.css',
       config.cssPath + '/icons.css',
       config.cssPath + '/style.css',
       config.cssPath + '/responsive.css'
   ])
   .pipe(concat('app.css'))
   .pipe(gulp.dest('./app/build/css'))
});

//Concatena los archivos js propios
gulp.task('js', function () {
    gulp.src([
        config.jsPath + '/vendor/*.js',
        config.jsPath + '/**/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./app/build/js'));
});

//Vigila los cambios en los archivos Sass
gulp.task('watch', function () {
    gulp.watch( config.cssPath + '/*.css', ['css']);
    gulp.watch( config.jsPath + '/**/*.js', ['js']);
})

//Tarea general gulp
gulp.task('default', ['css','js','watch']);