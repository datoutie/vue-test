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
    },
    {
			//fonts链接处理
			test: /\.(eot|ttf|woff|woff2)(\?.+)?$/,
			use: [{
				loader: 'url-loader',
				//小于limit to base64
				options: {
					limit: 8192,
					//产出地址 
					outputPath: "assets/fonts/",
					//域名地址
					//publicPath: release + "assets/fonts/",
					name: "[name].[ext]?[hash]"
				}
			}]
    },
    {
			test: /\.(gif|png|jpe?g|svg)$/i,
			loaders: [
				'url-loader?limit=8192&outputPath=assets/img/&name=[name].[ext]?[hash]',
				{
					loader: 'image-webpack-loader',
					options: {
						gifsicle: {
							interlaced: false,
						},
						optipng: {
							optimizationLevel: 1,
						},
						pngquant: {
							quality: '65-90',
							speed: 4
						},
						mozjpeg: {
							progressive: true,
							quality: 65
						}
					}
				}
			]
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