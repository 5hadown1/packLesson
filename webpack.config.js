const { resolve } = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './public/src/main.js',
	output: {
		path: resolve(__dirname, 'build'),
		filename: 'main.[contenthash].js'
	},

	module: {
		rules: [
			{
				test: /\.mp3$/i,
				use: {
					loader: 'file-loader',
					options: {
						name: 'src/[name].[ext]',
					},
				},
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			}
		]
	},

	plugins: [
		new RemovePlugin({
			before: {
				include: [
					resolve(__dirname, 'build')
				]
			}
		}),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
		new HtmlWebpackPlugin(
			{
				template: resolve(__dirname, './public/index.html')
			}
		),
	]
};