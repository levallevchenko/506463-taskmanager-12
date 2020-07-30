const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  devtool: 'source-map'
};
