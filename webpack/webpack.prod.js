const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      base: {
        href: "https://triiivedi.github.io/unstop-assessment/",
        target: "_blank",
      },
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
});
