/*
 * @Author: LaoZhang
 * @Date: 2020-02-12 22:18:07
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-02-12 22:18:12
 * @Description: 作用
 * @FilePath: /ts-base-env/build/webpack.pro.config.js
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}