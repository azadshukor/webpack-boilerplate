const path = require('path');

module.exports = {
  devServer: {
    contentBase: './src',
    publicPath: '/output',
  },
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }

    ]
  }
}