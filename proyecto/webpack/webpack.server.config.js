module.exports = {
  entry: './source/server.js',
  output: {
    path: './built/server',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(json)$/,
        loader: 'json'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
            presets: ['latest-minimal', 'react']
          },
        exclude: /(node_modules)/
      }
    ]
  },
  target: 'node'
};
