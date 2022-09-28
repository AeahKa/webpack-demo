const HtmlWebpackPlugin = require('html-webpack-plugin');
const { request } = require('http');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const base = require('./webpack.config.base.js');

module.exports = {
	...base,
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	mode: 'development',
	module: {
		rules: [
			...base.module.rules,
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
