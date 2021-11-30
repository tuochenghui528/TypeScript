"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         *  getter方法读取属性
         *  setter方法设置属性
         *        统称为属性的存取器
         *
         */
        //定义方法  用来获取name属性 getter
        getName() {
            return this._name;
        }
        //定义方法 用来设置name属性 setter
        setName(value) {
            this._name = value;
        }
        //ts中设置getter方法
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
    }
    const per = new Person('孙悟空', 18);
    /**
     *  现在属性是在对象中设置的，属性可以任意被修改
     *  属性任意修改将会导致对象中的数据变得非常不安全
     */
    //per.name = '八戒';
    // per.age = 10;  私有属性  不可以修改
    per.setName('八戒');
    console.log(per.getName());
    //ts中getter和setter的用法
    per.name = 'tttt';
    console.log(per.name);
})();
