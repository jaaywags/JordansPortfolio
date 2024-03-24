// Tutorial: https://dev.to/deadwing7x/setup-a-react-app-with-webpack-and-babel-4o3k

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./src/app/constants/Config.json');
const AssetsPlugin = require('assets-webpack-plugin');

const isProd = config.prod;
module.exports = {
  performance: {
    hints: false,
  },
  target: 'web',
  devtool: !isProd && 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: './dist',
    open: true,
  },
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].js',
    chunkFilename: '[chunkhash].js',
  },
  mode: isProd ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|webp|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    usedExports: isProd ? true : false,
    minimize: isProd ? true : false,
    minimizer: [new TerserPlugin({ parallel: true })],
  },
  plugins: [
    new AssetsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new FaviconsWebpackPlugin({
      logo: './src/app/assets/favicon/logo.svg',
      cache: false,
      favicons: {
        appName: config.applicationDisplayName,
        appDescription:
          'A platform to organize and share your favorite fanfictions.',
        version: '0.1.02', // increment this number to force favicon updates in prod
        background: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        logging: isProd == false,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          favicons: true,
          windows: true,
          yandex: false,
        },
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/robots.txt',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@app': path.resolve(__dirname, 'src', 'app'),
      '@features': path.resolve(__dirname, 'src', 'features'),
      '@package.json': path.resolve(__dirname, 'package.json'),
      '@screens': path.resolve(__dirname, 'src', 'screens'),
    },
  },
};
