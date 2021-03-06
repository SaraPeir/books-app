const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
entry: './src/index.js',
output: {
  filename: 'main.js',
  path: path.resolve(__dirname, 'dist')
},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
            {
                loader: "file-loader",
                options: {
                    outputPath: "assets/"
                }
            }
        ]
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

// entry: './src/index.js',
// output: {
//   filename: 'main.js',
//   path: path.resolve(__dirname, 'dist')
// },