const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    main: "./src/index.js"
  },
  plugins: new HtmlWebpackPlugin({
    template: "./src/index.html"
  }),
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};