'use strict';

const
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    jasmineBrowser  = require('gulp-jasmine-browser'),
    jasmineNode  = require('gulp-jasmine-node'),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload'),
    sequence = require('gulp-sequence'),
    spawn = require('child_process').spawn,
    destClean = require('gulp-dest-clean'),
    usemin = require('gulp-usemin'),
    htmlmin = require('gulp-htmlmin'),
    minifyCss = require('gulp-minify-css'),
    gulpconcat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var node;

let
    devDir = './dev/',
    buildDir = './build/',
    htmlFiles  = devDir + '**/*.html',
    serverFiles = ['./server.js', './api/**/*.js'],
    clientFiles = ['./dev/app/**/*.js'],
    sassFiles = ['./dev/sass/**/*.scss'],
    specFilesServer = ['./tests/server/**/*.specs.js'],
    specFilesClient = [
    './dev/bower_components/Chart.js/dist/Chart.min.js',
    './dev/bower_components/angular/angular.min.js',
    './dev/bower_components/angular-route/angular-route.min.js',
    './dev/bower_components/angular-resource/angular-resource.min.js',
    './dev/bower_components/angular-chart.js/dist/angular-chart.js',
    './dev/bower_components/angular-mocks/angular-mocks.js',
    './dev/app/app.js',
    './dev/app/controllers/*.js',
    './dev/app/services/*.js',
    './tests/client/**/*.specs.js'];

let appFiles = serverFiles.concat(clientFiles);

gulp.task('lint', function () {
    return gulp.src(appFiles)
        .pipe(jshint({
            esnext: true,
            node: true
        }))
        .pipe(jshint.reporter('default'));
});

gulp.task('testClient', function () {
    return gulp.src(specFilesClient)
        .pipe(jasmineBrowser.specRunner({console: true}))
        .pipe(jasmineBrowser.headless());
});

gulp.task('testServer', function () {
    return gulp.src(specFilesServer)
        .pipe(jasmineNode({ timeout: 1000 }));
});


gulp.task('allTests', sequence('testServer', 'testClient'));

gulp.task('server', function () {
    if (node) {
        node.kill();
    }

    node = spawn('node', ['server.js'], {stdio: 'inherit'});
    node.on('close', function (code) {

        if (code === 8) {
            console.log('Error detected, waiting for changes...');
        }
    });
});

gulp.task('compass', function () {
    return gulp.src(sassFiles)
        .pipe(compass({
            sass: './dev/sass',
            css: './dev/css',
        }));
});

gulp.task('cleanDestination', function () {
    return gulp.src(buildDir)
        .pipe(destClean(buildDir));
});

gulp.task('copyImages', function () {
    gulp.src(devDir + 'images/**/*')
        .pipe(gulp.dest(buildDir + 'images'));
});

gulp.task('usemin', function () {
    return gulp.src(htmlFiles)
        .pipe(usemin())
        .pipe(gulp.dest(buildDir));
});

gulp.task('htmlmin', function() {
  return gulp.src(htmlFiles)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(buildDir))
});

gulp.task('minifyCss', function () {
    return gulp.src(devDir + 'css/main.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(buildDir + 'css'));
});

gulp.task('concatScripts', function() {
  return gulp.src(devDir + 'app/**/*.js')
    .pipe(gulpconcat('app.js'))
    .pipe(gulp.dest(buildDir + 'app'));
});

gulp.task('uglify', function () {
    return gulp.src(buildDir + 'app/app.js')
        .pipe(uglify())
        .pipe(gulp.dest(buildDir + 'app'));
});

gulp.task('build', sequence('cleanDestination', 'copyImages', 'usemin', 'htmlmin', 'minifyCss', 'concatScripts', 'uglify'));

gulp.task('livereload', function () {
    return gulp.src(appFiles).pipe(livereload());
});

gulp.task('default', ['lint', 'compass', 'testClient', 'server'], function () {
    livereload.listen();
    
    gulp.watch(sassFiles, ['compass']);
    
    gulp.watch(specFilesClient, ['testClient']);

    gulp.watch(appFiles, ['lint', 'compass', 'testClient', 'server', 'livereload']);
});

process.on('exit', function() {
    if (node) node.kill()
})