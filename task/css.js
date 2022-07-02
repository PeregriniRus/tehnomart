const {src, dest} = require('gulp');

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");

// Конфигурация
const path = require("../config/path");
const app = require("../config/app");

//Обработка CSS
const css = () => {
  return src(path.css.src, {sourcemaps: app.isDev})
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "CSS",
        message: error.message
      }))
    }))
    .pipe(concat("styles.css"))
    .pipe(cssimport())
    .pipe(dest(path.css.dest, {sourcemaps: app.isDev}))
}
module.exports = css;
