const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminWebp = require('imagemin-webp');
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
	output: {
		filename: '[name].[chunkhash:8].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
						}
					},
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash:8].css',
			chunkFilename: "[id].css"
		}),
		new ImageminPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			plugins: [
				imageminWebp({preset:'photo'})
			]
		}),
		new PurifyCSSPlugin({
			paths: glob.sync( path.join(__dirname, 'src/*.html') ),
			minimize: true
		})
	]
});
