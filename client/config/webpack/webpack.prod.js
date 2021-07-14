import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import config from './webpack.config.js';

export default {
	...config,
	output: {
		path: resolve(resolve(), './dist'),
		filename: '[name].[hash].js',
		publicPath: '../'
	},
	plugins: [
		...config.plugins,
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
		})
	],
	mode: 'production'
};
