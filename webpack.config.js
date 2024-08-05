const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    'play/rock_paper_scissors/index.js': './src/play/rock_paper_scissors/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname + '/dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: './play/rock_paper_scissors/images/[hash][ext]'
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: `src/index.html`,
      filename: `index.html`,
      title: 'Diogo Lara'
    }),
    new htmlWebpackPlugin({
      template: `src/play/rock_paper_scissors/index.html`,
      filename: `play/rock_paper_scissors/index.html`,
      title: 'Rock Paper Scissors'
    })
  ]
}
