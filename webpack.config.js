const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PATH_DIR = path.resolve(__dirname, ".\\dist");
const PATH_SRC = path.resolve(__dirname, ".\\src");

module.exports = {
	mode: "development",
	entry: PATH_SRC + "\\index.js",
	output: {
		path: PATH_DIR,
	},
	plugins: [
		new ESLintPlugin({
			files: PATH_SRC + "\\js",

		}),
		new HtmlWebpackPlugin({
			template: PATH_SRC + "\\index.html",
			filename: ".\\index.html"
		}),

		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				}
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},
};
