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
          // {
          //   test: /\.tsx?$/,
          //   use: 'ts-loader'
          // },
        ]
    },
    // resolve: {
    //   extensions: ['.ts', '.js']
    // },
    plugins: [new HtmlWebpackPlugin()],

}