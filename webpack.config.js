nodeExternals = require('webpack-node-externals');

module.exports = {
      entry: './server.js',
      output: {
          path: './bin',
          filename: 'server.js'
      },
      target: 'node',
      externals: [nodeExternals()],
      module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
      }
  };