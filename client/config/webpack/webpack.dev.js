const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./webpack.config.js');

const devConfig = {
	...config,
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].dev.js',
		publicPath: '/'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './src',
		watchContentBase: true,
		overlay: true,
		historyApiFallback: {
			rewrites: [
				{ from: /./, to: '/404.html' },
			],
		},
		port: 2100,
		hot: true,
		inline: true,
		clientLogLevel: 'none',
		disableHostCheck: true
	},
	plugins: [
		...config.plugins,
		new MiniCssExtractPlugin({
			filename: '[name].dev.css',
			chunkFilename: '[name].chunk.css'
		})
	],
	mode: 'development'
};

module.exports = devConfig;
