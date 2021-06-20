const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: { name: './src/index.js' },
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
				test: /\.(sass|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' },
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
						options:{ name: '[name].[ext]' }
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
		// main page
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/pages/main.pug',
			favicon: './src/media/favicon.png',
			inject: true
		}),
		// 404 page
		new HtmlWebpackPlugin({
			filename: '404.html',
			template: './src/pages/404.pug',
			favicon: './src/media/favicon.png',
			inject: false
		}),
	],
};
