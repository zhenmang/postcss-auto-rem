const path = require('path');
module.exports = {
  mode: "production",
  entry: './src/index.ts',
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    // filename: 'index.mjs',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    // libraryTarget: 'module',
  },
  experiments: {
    outputModule: true
  }
};
