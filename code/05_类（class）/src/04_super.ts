(function() {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello() {
      console.log('动物在叫');
    }
  }
  class Dog extends Animal {
    age: number;
    constructor(name: string, age: number) {
      //如果在子类中写了构造函数，在子类构造函数中必须对父类的构造函数初始化  要不会覆盖父类的构造函数
      super(name);
      this.age = age;
    }
    //在类的方法中  super表示当前的父类
    sayHello() {
      //super.sayHello();//调用的是父类的方法'动物在叫'
      console.log('旺旺旺');
    }
  }
  const dog = new Dog('旺财', 2);
  console.log(dog);
  dog.sayHello();
})()