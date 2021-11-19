// const path = require("path");
// // const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// // const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const port = 3000;

// module.exports = {
//   mode: "development",
//   entry: path.resolve(__dirname, "./src/index.js"),
//   devtool: "source-map", // any "source-map"-like devtool is possible

//   //webpack 5 comes with devServer which loads in development mode
//   devServer: {
//     host: "localhost",
//     port: port,
//     open: true,
//     hot: true,
//   },

//   //Where files should be sent once they are bundled
//   output: {
//     publicPath: "./",
//     path: path.join(__dirname, "/dist/webapp"),
//     filename: "public/js/main.js",
//     publicPath: "/",
//   },

//   resolve: {
//     extensions: [".js", ".jsx", ".scss"],
//   },

//   module: {
//     rules: [
//       // Rules 1
//       {
//         test: /\.(js|jsx)$/,
//         use: {
//           loader: "babel-loader",
//         },
//         exclude: /node_modules/,
//         include: path.join(__dirname, "src"),
//         loader: "eslint-loader",
//         query: {
//           configFile: "./.eslintrc.js",
//         },
//       },
//       // Rules 2
//       {
//         test: /\.css$/i,
//         use: [
//           "style-loader",
//           {
//             loader: "css-loader",
//             options: {
//               sourceMap: true,
//             },
//           },
//           {
//             loader: "sass-loader",
//             options: {
//               sourceMap: true,
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(png|jp(e*)g|svg|gif)$/,
//         use: ["file-loader"],
//       },
//     ],
//   },

//   plugins: [
//     // new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebpackPlugin({
//       title: "tuto-webpack",
//       template: "public/index.html",
//     }),
//   ],
// };
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "public/index.html",
  filename: "index.html",
  inject: "body",
});

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  devtool: "source-map",
  // output: {
  //   path: path.resolve("dist"),
  //   filename: "index_bundle.js",
  // },
  // devServer: {
  //   host: "localhost",
  //   port: port,
  //   open: true,
  //   hot: true,
  // },
  output: {
    path: path.join(__dirname, "/dist/webapp"),
    filename: "public/js/main.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", "scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        use: "babel-loader",
      },

      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};
