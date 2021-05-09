const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.config.js');

config.output = {
	path: path.resolve(__dirname, './dist'),
	filename: 'bundle.js',
	publicPath: '/'
};

config.devtool = 'source-map';

config.devServer = {
	contentBase: './src',
	watchContentBase: true,
	overlay: true,
	historyApiFallback: true,
	port: 2100,
	hot: true,
	inline: true,
	clientLogLevel: 'none',
	disableHostCheck: true
};

config.plugins.push(
	new MiniCssExtractPlugin(),
);

config.mode = 'development';

module.exports = config;
