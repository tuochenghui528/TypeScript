const path = require('path');
//引入HTLM模板那 可以打包后自动生成html并引入打包后的js 会自动生成index.html
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入clean-webpack-plugin插件  每次编译的时候都去清空dist下的文件 以保证每次编译后都是新的文件
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

//所有的配置都写在这个里面
module.exports = {
    //入口
    entry: './src/index.ts',
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //设置webpack打包后开头不使用箭头函数  兼容ie
        environment:{
            arrowFunction: false,
            const: false
        }
    },
    mode: "development",
    //所有编译的配置
    module: {
        //规则
        rules: [{
            //匹配编译的文件
            test: /\.ts$/,
            use: [{
                loader: "babel-loader",
                options:{
                    presets: [
                    [
                        "@babel/preset-env",
                        {
                            "targets":{
                                "chrome": "58",
                                "ie": "11"
                            },
                            "corejs":"3",
                            "useBuiltIns": "usage"
                        }
                    ]
                ]
            }},{
                loader: 'ts-loader'
            }],
            exclude: /node_modules/
        },{
            //less文件的处理
            test:/\.less/,
            use:[
                "style-loader",
                "css-loader",
                //引入postcss
                { 
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers: "last 2 versions"
                                    }
                                ]
                            ]
                        }
                    }
                },
                "less-loader"
            ]
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({
            // title: "这是自定义的一个title",
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    //用来设置引用模块的
    resolve: {
        extensions: [".ts", ".js"]//如果不设置  webpack打包的时候就会报错  不允许ts以模块的方式导出引入
    }
}