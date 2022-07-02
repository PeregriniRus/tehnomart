const {watch, series, parallel} = require('gulp');
const sync = require('browser-sync').create();

// Конфигурация
const path = require("./config/path");
const app = require("./config/app");

// Задачи
const clear = require('./task/del');
const buildHtml = require('./task/html');
const css = require('./task/css');
const img = require('./task/img');

// Сервер
const server = () => {
  sync.init({
    server: {
      baseDir: path.root
    }
  })
}

// Наблюдение
const watcher = () => {
  watch(path.html.watch, buildHtml).on("all", sync.reload);
  watch(path.css.watch, css).on("all", sync.reload);
  watch(path.img.watch, img).on("all", sync.reload);
}

const build = series(
  clear,
  parallel(css, buildHtml, img),
);

const dev = series(
  build,
  parallel(watcher, server)
);


// Задачи
exports.css = css;
exports.buildHtml = buildHtml;
exports.clear = clear;
exports.img = img;
exports.build = build;

// Сборка
exports.default = app.isProd
  ? build
  : dev;
