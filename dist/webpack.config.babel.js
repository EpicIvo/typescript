"use strict";
const path_1 = require('path');
const webpack_1 = require('webpack');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    entry: [
        "webpack/hot/only-dev-server",
        "./dev/main.ts"
    ],
    output: {
        filename: 'main.js',
        path: __dirname + '/dist/js/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new webpack_1.default.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
        contentBase: path_1.default.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};
//# sourceMappingURL=webpack.config.babel.js.map