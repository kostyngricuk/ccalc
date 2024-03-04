const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    symlinks: false,
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
      eslintPath: require.resolve('eslint')
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};