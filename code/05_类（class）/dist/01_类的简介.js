"use strict";
//使用class关键字定义类
/**
 * 对象中主要包含两个部分
 * 属性
 * 方法
 */
class Person {
    constructor() {
        //定实例义属性  只能通过实例出来的对象访问  const per = new Person(); per.name
        this.name = "孙悟空";
        this.height = 1.60;
    }
    //定义放法（如果方法是静态方法的话也需要在方法名前面添加static）
    sayHello() {
        console.log('Hello 大家好');
    }
}
//在属性前使用static关键字定义的属性叫类属性(也叫静态属性) 可以直接通过类访问  Person.age
Person.age = 18;
const per = new Person();
console.log(per); //Person {name: '孙悟空'}
console.log(Person.age); //18
per.name = '八戒'; //可以修改
//per.height = 180;//报错  因为height是只读属性 不可以修改
//如果是静态方法添加只读属性的时候  应该static readonly age: number = 18; readonly必须在static后面
per.sayHello();
