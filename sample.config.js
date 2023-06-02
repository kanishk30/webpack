// webpack.config.js

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve('./dist'),
        filename: './bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|tsx?)$/,
            exclude: excludeNodeModulesExcept(appsArray),
            include: path.join(__dirname, '../'),
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheCompression: false,
                  sourceMaps: true,
                  compact: true
                }
              }
            ]
          },
          {
            test: /\.css$/,
            exclude: /\.useable\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader'
              }
            ]
          },
          {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  mimetype: 'application/font-woff'
                }
              }
            ]
          }
        ]
    }
}