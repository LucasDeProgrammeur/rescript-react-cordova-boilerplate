const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const fs = require('fs');

module.exports = {
  entry: "./src/Index.bs.js",
  mode: "production",
  output: {
    path: path.join(__dirname, "www"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
    ... ( fs.readdirSync("./src/img").length !== 0 ? [ new CopyPlugin({
      patterns: [
        { from: "./src/img", to: "./img" },
      ],
    }) ] : [] ),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'string-replace-loader',
        options: {
          search: '../../../src/img/',
          replace: './img/',
          flags: 'g'
        },
      },
    ],
  },
};
