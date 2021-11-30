const path = require('path');
//引入HTLM模板那 可以打包后自动生成html并引入打包后的js
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入clean-webpack-plugin插件  每次编译的时候都去清空dist下的文件 以保证每次编译后都是新的文件
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

//所有的配置都写在这个里面
module.exports = {
    //入口
    entry: './src/main.ts',
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: "development",
    //所有编译的配置
    module: {
        //规则
        rules: [{
            //匹配编译的文件
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({
            // title: "这是自定义的一个title",
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ]
}