const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
                {
                loader: 'css-loader'
              }
            ]
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader'
          },
          {
            test: /\.jsx?$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react']
              }
            }
          }
        ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.jsx']
    },
    plugins: [new HtmlWebpackPlugin()],

}