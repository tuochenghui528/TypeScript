"use strict";
(function () {
    /**
     *   以abstract开头的类式抽象类
     *      抽象类和其他的普通类的区别不大  只是不能用来创建对象 不可以new
     *      抽象类是专门用来被继承的
     *
     *      抽象类中可以添加抽象方法
     *
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        //在类的方法中  super表示当前的父类
        sayHello() {
            //super.sayHello();//调用的是父类的方法'动物在叫'
            console.log('旺旺旺');
        }
    }
    const dog = new Dog('旺财');
    console.log(dog);
    dog.sayHello();
})();
