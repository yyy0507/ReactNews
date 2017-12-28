var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	context: __dirname + '/src',
	entry: './js/root.js',
	devServer: {
		historyApiFallback: true,
        inline: true,//实时刷新,
        hot: true
    },
	module: {
		loaders: [
		{
			test: /\.js?$/,
			exclude: /(node-modules)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015'],
				plugins: ['react-html-attrs'],//添加组件的插件配置
			}
		},
		//下面是添加的css的loader也就是css模块化的配置方法
		{
			test: /\.css$/,
			//loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
			loader: 'style-loader!css-loader'
		}
		]
	},
	output: {
		path: __dirname + '/src/',
		filename: "bundle.js"
	}
};