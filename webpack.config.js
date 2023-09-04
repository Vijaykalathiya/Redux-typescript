const path = require('path');
module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.svg'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};