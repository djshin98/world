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
    conf:{
        src: './src/conf/**/*.*',
        dest:'./dist/conf/'
    },
    mqtt:{
        src: './src/mqtt/**/*.*',
        dest:'./dist/mqtt/'
    },
    mqtt_broker:{
        src: './src/js/mqtt/mqttbroker.js',
        dest:'./dist/js/mqtt/'
    },
    ws_broker:{
        src: './src/js/ws/websocket_server.js',
        dest:'./dist/js/ws/'
    },
    batch:{
        src: './src/*.bat',
        dest:'./dist/'
    },
    popper:{
        src: './node_modules/popper.js/dist/**/*.*',
        dest:'./src/libs/popper/'
    },
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
    widget_scss: {
        src: './src/widget/scss/**/*.scss',
        dest: './dist/css/'
    },
    scss: {
        src: './src/scss/**/*.scss',
        dest: './src/css/'
    },
    css: {
        src: './src/css/**/*.css',
        dest: './dist/css/'
    },
    img: {
        src: 'src/img/**/*.*',
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
        src: 'src/world.js',
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
function img() {
    return src(paths.img.src, { since: lastRun(img) })
        //.pipe(imagemin())
        .pipe(dest(paths.img.dest));
}
function scss() {
    return src(paths.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest(paths.scss.dest));
}
function widget_scss(){
    return src(paths.widget_scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest(paths.widget_scss.dest));
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
function popper() {
    return src(paths.popper.src)
        .pipe(dest(paths.popper.dest));
}
function conf() {
    return src(paths.conf.src)
        .pipe(dest(paths.conf.dest));
}
function mqtt() {
    return src(paths.mqtt.src)
        .pipe(dest(paths.mqtt.dest));
}
function mqtt_broker() {
    return src(paths.mqtt_broker.src)
        .pipe(dest(paths.mqtt_broker.dest));
}
function ws_broker() {
    return src(paths.ws_broker.src)
        .pipe(dest(paths.ws_broker.dest));
}
function batch() {
    return src(paths.batch.src)
        .pipe(dest(paths.batch.dest));
}
function watchFiles() {
    watch(paths.conf.src, conf);
    watch(paths.mqtt.src, mqtt);
    watch(paths.mqtt_broker.src, mqtt_broker);
    watch(paths.ws_broker.src, ws_broker);
    
    watch(paths.batch.src, batch);
    watch(paths.popper.src, popper);
    watch(paths.bootstrap.src, bootstrap);
    watch(paths.jquery.src, jquery);
    watch(paths.lobipanel.src, lobipanel);
    watch(paths.md.src, md);

    
    watch(paths.widget_scss.src, widget_scss);
    watch(paths.scss.src, scss);
    watch(paths.css.src, css);
    //watch(paths.js.src, js);
    //watch(paths.js.src, js_src_w);
    watch(paths.html.src, html);
    watch(paths.img.src, img);
    //watch(paths.png.src, png);
    //watch(paths.gif.src, gif);
    watch(paths.libs.src, libs);
    watch(paths.worlds.src, world);
    watch(paths.serverjs.src, serverJs);
    watch(paths.mapperxml.src, mapperxmls);
}

exports.clean = series(clean);
exports.scss = parallel(scss);
exports.default = parallel(watchFiles, series(conf,mqtt,mqtt_broker,ws_broker,batch, md, popper, bootstrap, jquery, lobipanel, libs,  img, widget_scss,scss, css, models, html, world, serverJs, mapperxmls));