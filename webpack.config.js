const path = require('path');

module.exports = {
    cache: true,
    devtool: 'source-map',



    entry: {
        // hmr: [
        //     'webpack-dev-server/client?http://localhost:8000',
        //     'webpack/hot/only-dev-server'
        // ],
        index: path.join(__dirname, 'src', 'js', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'www', 'js'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        devtoolModuleFilenameTemplate: 'webpack:///[resource-path]?[loaders]'
    },

    // entry: "./src/js/index.js",
    // output: {
    //     path: __dirname + "/src",
    //     filename: "/js/index.min.js"
    // },
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
            }
        ]
    }
};
