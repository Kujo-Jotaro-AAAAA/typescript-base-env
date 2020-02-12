/*
 * @Author: LaoZhang
 * @Date: 2020-02-12 22:17:22
 * @LastEditors: LaoZhang
 * @LastEditTime: 2020-02-12 22:17:27
 * @Description: 作用
 * @FilePath: /ts-base-env/webpack.config.js
 */
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig : proConfig;
    return merge(baseConfig, config);
};
