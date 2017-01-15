
const path = require('path')
const webpack = require('webpack')

module.exports = {

  entry: "./app/app.js",

  output: {
    filename: "public/bundle.js"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  devtool: "eval-source-map"
};
