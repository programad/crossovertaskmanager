'use strict';

const
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload'),
    sequence = require('gulp-sequence'),
    destClean = require('gulp-dest-clean');

let
    devDir = './dev/',
    publicDir = './public/',
    appFiles = ['./server.js', './api/**/*.js', './dev/app/**/*.js'],
    sassFiles = ['./dev/sass/**/*.scss'];

//gulp.task('default', function () {
//    return gutil.log('Gulp is running!')
//});

gulp.task('lint', function () {
    return gulp.src(appFiles)
        .pipe(jshint({
            esnext: true,
            node: true
        }))
        .pipe(jshint.reporter('default'));
});

gulp.task('cleanDestination', function () {
    return gulp.src(publicDir)
        .pipe(destClean(publicDir));
});

gulp.task('copyImages', function () {
    gulp.src(devDir + 'images/**/*')
        .pipe(gulp.dest(publicDir + 'images'));
});


gulp.task('compass', function () {
    return gulp.src(sassFiles)
        .pipe(compass({
            sass: './dev/sass',
            css: './dev/css',
        }));
});

gulp.task('livereload', function () {
    return gulp.src(appFiles).pipe(livereload());
});

gulp.task('api', ['lint', 'compass'], function () {
    livereload.listen();
    
    gulp.watch(sassFiles, ['compass']);

    gulp.watch(appFiles, ['lint', 'compass', 'livereload']);
});

gulp.task('build', function () {
    sequence('cleanDestination', 'copyImages');
});