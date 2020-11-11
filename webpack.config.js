const path = require('path');

module.exports = {
  entry: './app/javascript/frontend/AllTrailsLunch.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'javascript', 'packs'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'app', 'assets')
    },
    extensions: ['.js', '.jsx', '*']
  }
};
