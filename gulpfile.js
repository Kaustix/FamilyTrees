//TODO: Either use webpack for everything or keep combining gulp with webpack
// The Webpack process is running a process so it's not completing the build on first run

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    clean = require('gulp-clean'),
    run = require('gulp-run');

var config = {
    port: 8080,
    devBaseUrl: "http://localhost",
    paths: {
        html: "./public/src/*.html",
        jsClient: "./public/src/**/*.js",
        jsServer: "./app/**/*.js",
        images: "./public/src/images/*",
        css: [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
            "node_modules/toastr/build/toastr.css"
        ],
        distClient: "./public/dist",
        serverDi: "./bin/",
        mainJs: "./public/src/main.js",
        mainServerJs: "./server.js"
    }
};

gulp.task("html", function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.distClient))
});

gulp.task("js", function () {
    browserify(config.paths.mainJs, {debug: true})
        .transform(babelify, {presets: ['react']})
        .bundle()
        .on("error", console.error.bind(console))
        .pipe(source("bundle.js"))
        .pipe(gulp.dest(config.paths.distClient + "/scripts"))
});

gulp.task("css", function () {
    gulp.src(config.paths.css)
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest(config.paths.distClient + "/css"))
});

gulp.task("images", function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.distClient + "/images"))
    //publsih favicon
    //gulp.src('./src/favicon.ico')
    //.pipe(gulp.dest(config.paths.dist));
});

gulp.task('reload', function () {
    livereload.listen();
    nodemon({
        script: './bin/server.js',
        ext: 'js'
    }).on('restart', function () {
        gulp.src('./bin/server.js')
            .pipe(livereload());
    })
});

gulp.task('clean-bin', function () {
    return gulp.src('./bin', {read: false})
        .pipe(clean());
});

//Webpack way
gulp.task("compile", function () {
    // Webpack way
    return run('webpack').exec();
    // gulp.src(config.paths.jsServer)
    //     .pipe(sourcemaps.init())
    //     .pipe(babel())
    //     .pipe(concat('server.js'))
    //     .pipe(sourcemaps.write("."))
    //     .pipe(gulp.dest("./bin/"));
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ["html"]);
    gulp.watch(config.paths.jsClient, ["js"]);
    gulp.watch(config.paths.jsServer, ["compile"]);
    gulp.watch(config.paths.mainServerJs, ["compile"]);
});

//TODO: Make sure clean compile is ran before reload and watch, that's why it's not doing it first
gulp.task("default", ["compile", "html", "css", "images", "js", "reload", "watch"]);