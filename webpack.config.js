var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        rules: [{
            test: /\.js[x]*$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
                'eslint-loader'
            ]
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [HTMLWebpackPluginConfig]
};