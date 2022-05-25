const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  entry: ['./server/index.js'],
  externals: [webpackNodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './server'),
  },
  module: {
    rules: [
        {
            test: /\.m?js$/, 
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', "@babel/preset-react"],
                cacheDirectory: true,
                plugins: ['@babel/plugin-transform-runtime']
              }
            }
        },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.mp3$/,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.sass$/i,
        use: [
          "file-loader"
        ],
      }
    ],
  },
}