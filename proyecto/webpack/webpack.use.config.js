// Esta es una forma de configurar webpack usando use.loader y use.option mas info en https://webpack.js.org/configuration/module/#rule-loader

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
        use: 'json'
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['latest-minimal', 'react']
            },
          }
        ],
        exclude: /(node_modules)/
      }
    ]
  },
  target: 'node'
};
