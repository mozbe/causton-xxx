const DashboardPlugin = require('webpack-dashboard/plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const openBrowser = require('react-dev-utils/openBrowser');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
// const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
// const assetSource = path.resolve(__dirname, 'src/assets');
// const assetDest = path.resolve(__dirname, 'build');

console.log('process', process.env);

module.exports = {
  mode: dev ? 'development' : 'production',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path:path.resolve(__dirname, 'build'),
    filename: !dev
      ? 'static/js/[name].[contenthash:8].js'
      : dev && 'static/js/bundle.js',

    publicPath: '/',
  },
  context: path.resolve(__dirname, 'src'),
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: dev ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: dev },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  plugins: [
    dev && new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
    new MiniCssExtractPlugin({
      filename: dev
        ? 'styles.css'
        : 'styles.[contenthash:8].css',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: '/public' },
    //   ],
    // }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new DashboardPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ].filter(Boolean),
  devServer: {
    onAfterSetupMiddleware: () => {
      openBrowser('http://localhost:8080');
    },
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
};
