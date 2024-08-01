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
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      "components": path.resolve(__dirname, "src/components"),
      "icons": path.resolve(__dirname, "src/icons"),
      "pages": path.resolve(__dirname, "src/pages"),
      "services": path.resolve(__dirname, "src/services"),
      "features": path.resolve(__dirname, "src/features"),
      "utils": path.resolve(__dirname, "src/utils"),
      "styles": path.resolve(__dirname, "src/styles"),
      "constants": path.resolve(__dirname, "src/constants"),
      "store": path.resolve(__dirname, "src/store"),
      "i18n": path.resolve(__dirname, "src/i18n"),
      "hooks": path.resolve(__dirname, "src/hooks"),
      "types": path.resolve(__dirname, "src/types"),
      "router": path.resolve(__dirname, "src/router"),
    }
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