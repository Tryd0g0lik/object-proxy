const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PATH_DIR = path.resolve(__dirname, "./dist");
const PATH_SRC = path.resolve(_dirname, "./src");

// const config = {
module.exports = {
	mode: "production",
	entry: PATH_SRC + "/index.js",
	output: {
		path: PATH_DIR,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: PATH_SRC + "/index.html",
			filename: "./index.html"
		}),

		new MiniCssExtractPlugin({
			filename: PATH_SRC + "/css/[name].css",
			chunkFilename: "[id].css"
		}),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
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

// module.exports = () => {
// 	if (isProduction) {
// 		config.mode = "production";

// 		config.plugins.push(new MiniCssExtractPlugin());
// 	} else {
// 		config.mode = "development";
// 	}
// 	return config;
// };
