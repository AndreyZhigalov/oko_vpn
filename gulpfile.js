const { src, dest, series, watch, task } = require("gulp")
const sass = require('gulp-sass')(require('sass'))
const htmlmin = require("gulp-htmlmin")
const include = require("gulp-file-include")
const csso = require("gulp-csso")
const del = require("del")
const concat = require("gulp-concat")
const autoprefixer = require("gulp-autoprefixer")
const sync = require("browser-sync").create()
const ghPages = require("gulp-gh-pages")
const GulpClient = require("gulp")

function html() {
    return src("src/**.html")
        .pipe(include({ prefix: "@@" }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest("dist"))
}

function scss() {
    return src("src/scss/**.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(concat("index.css"))
        .pipe(dest("dist"))
}

function images() {
    return src("src/img/**/**.**").pipe(dest("dist/img"))
}

function clear() {
    return del("dist")
}

function serve() {
    sync.init({
        server: "./dist"
    })
    
    watch('src/**.html', series(html)).on("change", sync.reload);
    watch('src/parts/**.html', series(html)).on("change", sync.reload);
    watch('src/scss/**.scss', series(scss)).on("change", sync.reload)
}

function deploy() {
    return src("./dist/**/*").pipe(ghPages("https://github.com/AndreyZhigalov/oko_vpn.git"))
}

exports.build = series(clear, scss, html, images)
exports.serve = series(clear, scss, html, images, serve)
exports.clear = clear
exports.deploy = deploy