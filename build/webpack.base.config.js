/*
 * @Author: LaoZhang
 * @Date: 2020-02-12 22:15:52
 * @LastEditors  : LaoZhang
 * @LastEditTime : 2020-02-12 22:16:18
 * @Description: 作用
 * @FilePath: /ts-base-env/build/webpack.base.config.js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}
