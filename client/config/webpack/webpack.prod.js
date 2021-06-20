const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.config.js');

const prodConfig = {
	...config,
	output: {
		path: path.resolve(__dirname, '../../dist'),
		filename: '[chunkhash].js',
		publicPath: ''
	},
	output: [
		...config.plugins,
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
		})
	],
	mode: 'production'
};

module.exports = prodConfig;
