"use strict";
/**
 *  function(a: any): any {
      return a;
    }
    当类型不确定的时候  用any是可以的  但是any的弊端是会关闭ts对变量类型的检测的  而且也没办法判断返回a的类型到底是啥 这就引出了泛型
*/
/**
 *  在定义函数或者类时，如果遇到类型不明确就可以使用泛型
 *
 */
function fn(a) {
    return a;
}
//可以直接调用具有泛型的函数
let result1 = fn(10); //不指定类型  ts可以推断 
let result2 = fn('hello'); //当ts推断不出来的时候  指定类型
//泛型可以指定多个
function fn2(a, b) {
    return a;
}
let result3 = fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
let result4 = fn3('1234'); //1234字符串有length属性
//类中实现泛型
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('孙悟空');
