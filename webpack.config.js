const webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: './scripts/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js',
		publicPath: '/public'
	},
	module: {
        loaders: [
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.js$/, loaders: ['babel']},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
    watch: true,
    devtool: "eval"
}