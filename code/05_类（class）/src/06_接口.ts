(function() {
  /**
 *  接口是通过interface关键字来实现的
 *  接口的作用类似于抽象类 主要是对类做结构限制
 *  类实现接口后必须要包含接口中定义的所有属性和方法
 *  接口中定义的方法和抽象类中定义的抽象方法一样  没有方法体 只是一个接口
 *  接口也可以做为类型来使用
 * 
*/

//定义接口
interface Person {
  name: string;
  sayHello(): void;
}

const per:  Person = {name: '孙悟空', sayHello(){console.log(`Hello 我是${this.name}`)}};
per.sayHello();

//类实现接口
class Student implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`大家好,我是${this.name},我今年${this.age}`)
  }
}
const stu = new Student('八戒',18);
console.log(stu);
})()


