'use strict';

const { parallel, series, src, dest, watch, lastRun } = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');

var markdown = require("gulp-markdown");
var inject = require("gulp-inject-string");

//var uglify = require('gulp-uglify');
//var babelify = require("babelify");
//var browserify = require("browserify");
//var buffer = require("vinyl-buffer");
//var source = require("vinyl-source-stream");
//var webpack = require('webpack');
//const webpackConfig = require('./webpack.config.js');
//var cleanCSS = require('gulp-clean-css');
var del = require('del');

var paths = {
    bootstrap:{
        src: './node_modules/bootstrap/dist/**/*.*',
        dest:'./src/libs/bootstrap/'
    },
    jquery:{
        src: './node_modules/jquery/dist/**/*.*',
        dest:'./src/libs/jquery/'
    },
    lobipanel:{
        src: './node_modules/lobipanel/dist/**/*.*',
        dest:'./src/libs/lobipanel/'
    },
    md: {
        src: './src/**/*.md',
        dest: './dist/doc/'
    },
    scss: {
        src: './src/scss/**/*.scss',
        dest: './src/css/'
    },
    css: {
        src: './src/css/**/*.css',
        dest: './dist/css/'
    },
    png: {
        src: 'src/img/**/*.png',
        dest: 'dist/img/'
    },
    jpg: {
        src: 'src/img/**/*.jpg',
        dest: 'dist/img/'
    },
    gif: {
        src: 'src/img/**/*.gif',
        dest: 'dist/img/'
    },
    model: {
        src: ['src/models/**/*.glb', 'src/models/**/*.kmz', 'src/models/**/*.czml'],
        dest: 'dist/models/'
    },
    js: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    },
    scripts: {
        entries: ['./src/js/scripts.js'],
        output: 'main.js',
        output_src: 'main.src.js',
        dest: 'dist/js/'
    },
    kmil_app_scripts: {
        entries: ['./src/milsymbol/app.js'],
        output: 'kmilsymbol_edit.js',
        output_src: 'kmilsymbol_edit.src.js',
        dest: 'dist/js/'
    },
    html: {
        src: 'src/**/*.html',
        dest: 'dist/'
    },
    libs: {
        src: 'src/libs/**/*.*',
        dest: 'dist/libs/'
    },
    worlds: {
        src: 'world.js',
        dest: 'dist/'
    },
    serverjs: {
        src: 'src/server.js',
        dest: 'dist/'
    },
    mapperxml: {
        src: 'src/**/*.xml',
        dest: 'dist/'
    }
};

function clean() {
    return del(['dist']);
}

function cleanCSS() {
    return del(['src/css']);
}

function md() {
    return src(paths.md.src)
        .pipe(markdown())
        .pipe(inject.prepend("<html><head></head><body>"))
        .pipe(inject.append("</body></html>"))
        .pipe(dest(paths.md.dest));
}
/*
function md_src() {
    return src(paths.md_src.src)
        .pipe(markdown())
        .pipe(inject.prepend("<html><head></head><body>"))
        .pipe(inject.append("</body></html>"))
        .pipe(dest(paths.md_src.src));
}
*/
function world() {
    return src(paths.worlds.src)
        .pipe(dest(paths.worlds.dest));
}

function mapperxmls() {
    return src(paths.mapperxml.src)
        .pipe(dest(paths.mapperxml.dest));
}

function serverJs() {
    return src(paths.serverjs.src)
        .pipe(dest(paths.serverjs.dest));
}
/*
function js_b() {
    return browserify({
            entries: paths.scripts.entries
        }).transform(babelify)
        .bundle()
        .pipe(source(paths.scripts.output))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(dest(paths.scripts.dest));
}

function js_src_w() {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig, (err, stats) => {
            if (err) {
                return reject(err)
            }
            if (stats.hasErrors()) {
                return reject(new Error(stats.compilation.errors.join('\n')))
            }
            resolve()
        })
    });
}

function js_src_b() {
    return browserify({
            entries: paths.scripts.entries
        }).transform(babelify)
        .bundle()
        .pipe(source(paths.scripts.output_src))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(dest(paths.scripts.dest));

}
*/
function jpg() {
    return src(paths.jpg.src, { since: lastRun(jpg) })
        .pipe(imagemin())
        .pipe(dest(paths.jpg.dest));
}

function png() {
    return src(paths.png.src, { since: lastRun(png) })
        .pipe(imagemin())
        .pipe(dest(paths.png.dest));
}

function gif() {
    return src(paths.gif.src, { since: lastRun(gif) })
        .pipe(imagemin())
        .pipe(dest(paths.gif.dest));
}

function scss() {
    return src(paths.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest(paths.scss.dest));
}

function css() {
    return src(paths.css.src)
        .pipe(concat('main.css')) //병합하고
        .pipe(dest(paths.css.dest));
}

function html() {
    return src(paths.html.src)
        .pipe(dest(paths.html.dest));
}

function libs() {
    return src(paths.libs.src)
        .pipe(dest(paths.libs.dest));
}

function models() {
    return src(paths.model.src)
        .pipe(dest(paths.model.dest));
}

function bootstrap() {
    return src(paths.bootstrap.src)
        .pipe(dest(paths.bootstrap.dest));
}

function jquery() {
    return src(paths.jquery.src)
        .pipe(dest(paths.jquery.dest));
}

function lobipanel() {
    return src(paths.lobipanel.src)
        .pipe(dest(paths.lobipanel.dest));
}

function watchFiles() {

    watch(paths.bootstrap.src, bootstrap);
    watch(paths.jquery.src, jquery);
    watch(paths.lobipanel.src, lobipanel);
    watch(paths.md.src, md);

    watch(paths.scss.src, scss);
    watch(paths.css.src, css);
    //watch(paths.js.src, js);
    //watch(paths.js.src, js_src_w);
    watch(paths.html.src, html);
    watch(paths.jpg.src, jpg);
    watch(paths.png.src, png);
    watch(paths.gif.src, gif);
    watch(paths.libs.src, libs);
    watch(paths.worlds.src, world);
    watch(paths.serverjs.src, serverJs);
    watch(paths.mapperxml.src, mapperxmls);
}

exports.clean = series(clean);
exports.scss = parallel(scss);
exports.default = parallel(watchFiles, series(md, bootstrap, jquery, lobipanel, libs,  jpg, png, gif, scss, css, models, html, world, serverJs, mapperxmls));