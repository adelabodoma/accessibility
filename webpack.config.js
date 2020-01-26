const path = require('path');
module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/ES6/app.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'accessibility.js',
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
           presets: ['env', 'stage-0']
        }
    }]
  },
  // watch: true
}

