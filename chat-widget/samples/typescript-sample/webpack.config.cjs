// webpack.config.cjs
const path = require('path');
// If you later re-enable CopyWebpackPlugin, uncomment the next line:
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const disableFullyQualifiedNameResolutions = {
  test: /\.m?js/,
  resolve: {
    fullySpecified: false,
  },
};

const babelLoaderConfiguration = {
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
      ],
    },
  },
};

const config = {
  entry: './src/index.tsx',
  mode: 'development', // change to 'production' in your CI if desired
  module: {
    rules: [babelLoaderConfiguration, disableFullyQualifiedNameResolutions],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-native$': 'react-native-web',
    },
    fallback: {
      assert: 'assert',
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // plugins: [
  //   new CopyWebpackPlugin({
  //     patterns: [
  //       {
  //         from: path.resolve(__dirname, 'public'),
  //         to: path.resolve(__dirname, 'dist'),
  //       },
  //     ],
  //   }),
  // ],
};

module.exports = config;
