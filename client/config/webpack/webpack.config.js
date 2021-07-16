// import glob from 'glob';
import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { ruTranslate, uaTranslate } from '../../src/content/index.js';

export default {
	entry: {
		bundle: './src/index.js',
		// ...mapFilenamesToEntries('./src/styles/pages/*') // ? for multi css files
	},
	resolve: {
        extensions: ['.ts', '.js', '.json', '.sass', '.scss']
    },
	module: {
		rules: [
			{
                test: /\.(ts|js)x?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								config: resolve(resolve(), "./config/postcss.config.cjs"),
							},
						}
					},
				]
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								config: resolve(resolve(), "./config/postcss.config.cjs"),
							},
						}
					},
					{ loader: 'sass-loader' }
				]
			},
			{
				test: /\.pug$/,
				loader: "pug-loader"
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[hash:5].[ext]',
							publicPath: './'
						}
					}
				]
			},
			{
				test: /\.(png|gif|jpe?g)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000,
							name: 'img/[hash:5].[ext]',
						}
					},
				],
			}
		],
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		...[ ruTranslate, uaTranslate ].map(translates => (
			new HtmlWebpackPlugin({
				filename: `${translates.lang}/index.html`,
				template: './src/pages/index.pug',
				favicon: './src/media/favicon.png',
				inject: 'body',
				content: translates,
				lang: translates.lang
			})
		)),
		...[ ruTranslate, uaTranslate ].map(translates => (
			new HtmlWebpackPlugin({
				filename: `${translates.lang}/404.html`,
				template: './src/pages/404.pug',
				favicon: './src/media/favicon.png',
				inject: 'body',
				content: translates,
				lang: translates.lang
			})
		)),
		// ...mapPugPages('./src/pages/*') // ? for multi Pug pages
	]
};

// ? for multi css files
// function mapFilenamesToEntries(pattern) {
// 	return glob.
// 		sync(pattern).
// 		reduce((entries, file) => {
// 			const [, name] = file.match(/([^/]+)\.sass$/);

// 			return ({ ...entries, [name]: file });
// 		}, {});
// }

// ? for multi Pug pages
// function mapPugPages(pattern) {
// 	return glob.
// 		sync(pattern).
// 		map(file => {
// 			const [, name] = file.match(/([^/]+)\.pug$/);

// 			return new HtmlWebpackPlugin({
// 				filename: `${name}.html`,
// 				template: file,
// 				favicon: './src/media/favicon.png',
// 				inject: true,
// 				env: {
// 					lol: 'lol'
// 				}
// 			})
// 		});
// }
