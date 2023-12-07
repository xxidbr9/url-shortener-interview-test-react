/* eslint-disable */
/**
 * @type {import('@rspack/cli').Configuration}
 */

const ReactRefreshPlugin = require('@rspack/plugin-react-refresh');
const NodePolyfill = require('@rspack/plugin-node-polyfill');
const rspack = require('@rspack/core');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  context: __dirname,
  entry: {
    main: './src/index.tsx'
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    clean: true
  },
  devServer: {
    port: 3000
  },
  devtool: isDev ? 'source-map' : 'hidden-source-map',
  mode: isDev ? 'development' : 'production',
  plugins: [
    isDev && new ReactRefreshPlugin(),
    new NodePolyfill(),
    new rspack.HtmlRspackPlugin({
      template: './public/index.html'
    })
  ].filter(Boolean),
  resolve: {
    tsConfigPath: path.resolve(__dirname, 'tsconfig.json')
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {}
                }
              }
            }
          }
        ],
        type: 'css'
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMap: true,
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                    refresh: isDev
                  }
                }
              },
              env: {
                targets: ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14']
              }
            }
          }
        ]
      }
    ]
  }
};

/* eslint-enable */
