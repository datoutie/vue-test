const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {
        //编译vue
        test: /\.vue$/,
        use: 'vue-loader'
    }, {
        //es6 编译
        test: /\.js$/,
        use: 'babel-loader',
        //排除
        exclude: /node_modules/
    }, {
        //加载css 到页面上
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
    }
    ]
  },
  devServer: {
    port: 8010,
    //设置为真,如果你想从任意url访问开发服务器。
    historyApiFallback: true,
    noInfo: true,
    //设置这个如果你想启用gzip压缩的资产
    compress: true,
    }
};

module.exports = config;