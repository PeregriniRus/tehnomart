const {src, dest} = require('gulp');
// Плагины
const fileInclude = require("gulp-file-include");
const size = require("gulp-size");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
// const htmlmin
const htmlBeautify = require("gulp-html-beautify");

// Конфигурация
const path = require("../config/path");
const app = require("../config/app");

//Обработка HTML
const buildHtml = () => {
  return src(path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "HTML",
        message: error.message
      }))
    }))
    .pipe(fileInclude())
    // .pipe(htmlBeautify())
    .pipe(size({title: "После сборки"}))
    .pipe(dest(path.html.dest))
}
module.exports = buildHtml;
