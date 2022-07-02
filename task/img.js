const {src, dest} = require('gulp');

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

// Конфигурация
const path = require("../config/path");
const app = require("../config/app");

//Обработка Image
const img = () => {
  return src(path.img.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "Image",
        message: error.message
      }))
    }))
    .pipe(newer(path.img.dest))
    .pipe(imagemin([
      imagemin.svgo(app.svgOptions),
      imagemin.mozjpeg(app.jpegOptions),
      imagemin.optipng()
    ], app.imagemin))
    .pipe(dest(path.img.dest))
}
module.exports = img;
