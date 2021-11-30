class Dog {
  name: string;
  age: number;
  /**
   * constructor是构造函数
   * 构造函数会在对象创建的时候调用
   */
  constructor(name: string, age: number) {
    //在实例方法中  this就表示当前的实例 因为对象创建后会自动调用constructor方法
    console.log(this);//Dog {}
    this.name = name;
    this.age = age;
  }
  bark() {
    alert('旺旺旺');

  }
}
const dog1 = new Dog('小黑', 4);
const dog2 = new Dog('小白', 2);
console.log(dog1, dog2);//Dog {name: '小黑', age: 4} Dog {name: '小白', age: 2}

//语法糖
class Dog1 {
  constructor(public name: string, public age: number) {}//定义修饰符后 就可以这样简化上面的代码
  bark() {
      alert('旺旺旺')
  }
}
const dog3 = new Dog1('小黑', 3);
const dog4 = new Dog1('小白', 4);