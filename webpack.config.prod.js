const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const base = require('./webpack.config.base.js');

module.exports = {
	...base,
	mode: 'production',
	plugins: [
		...base.plugins,
		new MiniCssExtractPlugin({
			filename: 'index.[contenthash].css',
			chunkFilename: '[id].[contenthash].css',
			ignoreOrder: false,
		}),
	],
	module: {
		rules: [
			...base.module.rules,
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
};
