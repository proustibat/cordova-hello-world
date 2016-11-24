module.exports = {
    cache: true,
    debug: true, // shows also which files run through traceur, good to learn and validate the `exclude`
    devtool: 'source-map',
    entry: "./src/js/index.js",
    output: {
        path: __dirname + "/src",
        filename: "/js/index.min.js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel",
          query: {
              presets: ['es2015'],
              compact: false
          }
        }

      ]
    }

}
