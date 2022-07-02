const pathSrc = "./source";
const pathDest = "./public";

module.exports = {
  root: pathDest + "",

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest + ""
  },
  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dest: pathDest + "/css"
  },
  img: {
    src: pathSrc + "/{img,icon}/*.{png,jpg,jpeg,svg}",
    watch: pathSrc + "/{img,icon}/**/*.{png,jpg,jpeg,svg}",
    dest: pathDest + "/images"
  }
}
