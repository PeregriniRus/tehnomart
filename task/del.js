const del = require("del");
// Конфигурация
const path = require("../config/path");

// Удаление директории
const clear = () => {
  return del(["./images","./index.html","./css"]);
}
module.exports = clear;
