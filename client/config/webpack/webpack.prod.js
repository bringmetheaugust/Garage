const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.config.js');

const prodConfig = {
	...config,
	output: {
		path: path.resolve(__dirname, '../../dist'),
		filename: '[name].[hash].js',
		publicPath: ''
	},
	plugins: [
		...config.plugins,
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
		})
	],
	mode: 'production'
};

module.exports = prodConfig;
