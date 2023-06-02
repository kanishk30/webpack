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
        ]
    }
}