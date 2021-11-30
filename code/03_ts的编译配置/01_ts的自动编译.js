"use strict";
exports.__esModule = true;
var name_01 = "拓成辉";
var age_01 = 30;
/**
 * ts的自动编译命令  tsc  xxx.ts -w  (w代表watch 监听)
 * 执行命令后当ts有变化 保存后  会自动编译到对应的js中
 *
 * 因为ts是默认编译在DOM环境上的，所以编译后的ts和js中的变量作用域在window上  所以会出现变量声明冲突，
 * 解决方法 当ts中最后写export{} 就可以把当前ts作为一个模块，模块是有作用域的
 */ 
