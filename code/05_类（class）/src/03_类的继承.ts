(function() {
  //定义共同的类Animal
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    };
    sayHello() {
      console.log('动物在叫');
    }
  }
  //Dog类继承Animal类
  /**
   * - Animal被称为父类
   * - Dog被称为子类
   * - 使用继承后  子类将会拥有父类的所有方法和属性
   * - 通过继承可以将多个类中的代码写在一个父类中
   * - 这样只要写一次即可让所有的子类同时拥有父类中的属性和方法
   * - 如果希望在子类中添加父类中没有的属性和方法  直接在子类中加就行
   * - 如果在子类中添加了和父类相同的方法 子类中的方法会覆盖父类中的方法（称为方法的重写）
   */
  class Dog extends Animal{
    run() {
      console.log(`${this.name}在跑....`)
    }
    sayHello() {
      console.log('旺旺旺');
    }
  }
  ///Cat类继承Animal类
  class Cat extends Animal {
    sayHello() {
      console.log('喵喵喵');
    }
  }
  const dog = new Dog('旺财', 5);
  const cat = new Cat('咪咪', 3);
  console.log(dog);
  dog.sayHello();
  dog.run();
  console.log(cat);
  cat.sayHello();
})()