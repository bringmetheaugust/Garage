import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import config from './webpack.config.js';

export default {
	...config,
	output: {
		path: resolve(resolve(), './dist'),
		filename: '[name].js',
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
			filename: '[name].css',
			chunkFilename: '[name].chunk.css'
		})
	],
	mode: 'development'
};
