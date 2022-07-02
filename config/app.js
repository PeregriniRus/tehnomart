const isProd = process.argv.includes("--production");
const isDev = !isProd;
module.exports = {
  isProd: isProd,
  isDev: isDev,
  htmlmin: {
    collapseWhitespace: isProd
  },
  imagemin: {
    verbose: true
  },
  svgOptions: {
    plugins: [
      {
        removeViewBox: false
      },
      {
        removeTitle: true
      },
      {
        cleanupNumericValues: {
          floatPrecision: 2
        }
      },
      {
        cleanupNumericValues: {
          floatPrecision: 3
        }
      },
      {
        convertPathData: {
          floatPrecision: 3
        }
      },
      {
        transformsWithOnePath: {
          floatPrecision: 3
        }
      },
      {
        convertTransform: {
          floatPrecision: 3
        }
      },
      {
        cleanupListOfValues: {
          floatPrecision: 3
        }
      }
    ]
  },
  jpegOptions: {quality: 85, progressive: true}
}
