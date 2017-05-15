import path from 'path';
import webpack from 'webpack';

export default {
  entry: [
    "webpack/hot/only-dev-server",
    "./dev/main.ts"
  ],
  output: {
    filename: 'main.js',
    path: __dirname + '/dist/js/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
