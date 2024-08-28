// vue.config.js
const { defineConfig } = require("@vue/cli-service");
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:3000",
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      }),
    ],
  },
});
