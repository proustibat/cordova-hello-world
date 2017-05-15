const path = require('path');
const webpack = require('webpack');

module.exports = {
    cache: false,
    devtool: 'source-map',
    entry: {
        hmr: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server'
        ],
        index: path.join(__dirname, 'src', 'js', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'www', 'js'),
        filename: '[name].min.js',
        sourceMapFilename: '[file].map',
        devtoolModuleFilenameTemplate: 'webpack:///[resource-path]?[loaders]'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|es6)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    "presets": [
                        [
                            "es2015", {
                            "modules": false
                        }
                        ]
                    ],
                    cacheDirectory: true
                }
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        public: 'localhost:8080/www',
        open: true,
        hot: true
    }
};
