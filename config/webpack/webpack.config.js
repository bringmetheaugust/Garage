const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: { name: './src/index.js' },
	resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx', '.json', '.sass', '.scss']
    },
	module: {
		rules: [
			{
                test: /\.(ts|js)x?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
			},
			{
				test: /[^(.module)]\.(sass|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader' },
					{ loader: 'postcss-loader' },
					{ loader: 'sass-loader' }
				]
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
			},
			// {
            //     test: /\.svg/i,
            //     use: { loader: 'svg-url-loader' }
            // }
		],
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			// favicon: './src/media/favicon.png'
		}),
	],
};
