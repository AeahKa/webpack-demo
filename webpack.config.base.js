const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		// path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'My App',
			template: 'src/index.html',
		}),
	],
	module: {
		rules: [
			{
				// file-loader
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
			},
			{
				// scss-loader
				test: /\.scss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('dart-sass'),
						},
					},
				],
			},
			{
				// less-loader
				test: /\.less$/i,
				use: [
					// compiles Less to CSS
					'style-loader',
					'css-loader',
					'less-loader',
				],
			},
			{
				// stylus-loader
				test: /\.styl$/,
				use: ['style-loader', 'css-loader', 'stylus-loader'],
			},
		],
	},
};
