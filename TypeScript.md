

# TypeScript

## 1.TypeScript的介绍

​	TypeScript是微软推出的一种以JavaScript为基础的前端开发语言；是JavaScript的超集；目的是完善JavaScript语言的缺点如（JavaScript的变量不可以定义类型，但是TS就可以定义变量的类型，便于代码开发和后期维护）。TypeScript目前不能被解析JavaScript的解析器来直接解析如（不能直接跑在浏览器上）；所以TS代码需要TS的解析器将其编译成JS，然后在网页中加载。

## 2.TypeScript的环境搭建

+ 因为TS需要解析成JS才能加载如网页；解析TS需要用到tsc命令，所以需要从npm库中安装TypeScript；所以首先要安装node.js来获取npm库
+ 安装typescript    npm i -g typescript   安装完后输入tsc -v查看是否安装成功
+ 在ts文件所在的目录下执行tsc xxx.ts命令，执行完后会在同目录下生成xxx.js文件，xxx.js就是xxx.ts编译生成的，可以直接加载在网页上。

## 3.基本类型

+ 类型的声明

  类型声明是TS中一个非常重要的特点；变量的赋值得遵循声明好的类型赋值，否则ts编译器会报错。

  ```typescript
  let 变量: 类型;
  let 变量: 类型 = 值;
  function(参数: 类型, 参数: 类型): 类型 {
      ...
  }
  ```

+ 自动类型判断

  当变量的声明和赋值是同时进行的，可以省略掉类型的声明；因为当变量赋值后，ts编译器就会根据所赋值的类型来判断当前变量的类型

+ 类型

  | 类型    | 例子              | 描述                             |
  | ------- | ----------------- | -------------------------------- |
  | number  | 0 1 -1 2.5        | 任意数字                         |
  | string  | 'hello'           | 任意字符串                       |
  | boolean | true  false       | 布尔值true或false                |
  | 字面量  | 其本身            | 限制变量的值就是该自卖能量的值   |
  | any     | *                 | 任意类型                         |
  | unknown | *                 | 类型安全的any                    |
  | void    | 空值（undefined） | 没有值（或undefined)             |
  | never   | 没有值            | 不能是任何值                     |
  | object  | {name: 'James'}   | 任意的js对象                     |
  | array   | [1,2,3]           | 任意的js数组                     |
  | tuple   | [4,5]             | 元组，ts新增类型，固定长度的数组 |
  | enum    | enum{A,B}         | 枚举，ts中新增类型               |

+ number

  ```typescript
  // number类型
  let a: number;
  a = 1;
  a = 0;
  a = -2.5;
  ```

+ string

  ```typescript
  // string | number类型
  let b: string | number;
  b = 1;
  b = 'hello';
  ```

+ boolean

  ```typescript
  //booleang
  let c = true;
  c = false;
  // c = 2; //报错 c默认为boolean类型
  ```

+ 字面量

  ```typescript
  //字面量
  let color: 'red' | 'blue';
  color = 'blue';
  // color = 'pink'; 报错 color指定了字面量类型
  ```

+ any

  ```typescript
  //任意类型
  let d: any;
  d = 2;
  d = true;
  d = 'hello';
  
  /**
   * any和unknown的区别：
   *  any是topType也是subType  可以接收任何类型的值，也可以赋值给任何类型
   *  unknown是topType  可以接收任何类型的值，但是不能赋值给别的类型  否则ts编译器报错
   */
  ```

+ unknown

  ```typescript
  //unknown类型
  let e: unknown;
  e = 3;
  e = false;
  e = 'hi';
  let f: string;
  
  f = d; //d是any类型，所以d可以赋值给f,
  // f = e; //e是unknown类型，属于类型的顶端，不能赋值给f
  
  /**
   * any和unknown的区别：
   *  any是topType也是subType  可以接收任何类型的值，也可以赋值给任何类型
   *  unknown是topType  可以接收任何类型的值，但是不能赋值给别的类型  否则ts编译器报错
   */
  ```

+ void

  ```typescript
  //void
  let g: void = undefined;
  g = null;
  ():void => {
      //函数没有返回值的时候用viod承接
  }
  ```

+ never

  ```typescript
  //never类型
  /**
   *  never是没有值 连undefined都没有 一般用于抛出异常
   */
  function error():never {
      throw new Error('message');
  }
  ```

+ object

  ```typescript
  //object类型
  let h: object;
  h = {};
  h = () => {}
  h = null
  /**
   * 没有什么意义 因为万物皆对象
   */
  //一般定义的方法
  let i: {name: string, age: number}
  i = {name: '拓成辉', age: 18}
  ```

+ array

  ```typescript
  //array类型
  let j: number[];
  j = [2,3,4]
  let k: Array<string>;
  k = ['1','2']
  ```

+ tuple

  ```typescript
  //tuple类型
  let l: [string, number];
  l = ['拓成辉', 22]
  /**
   * 只能是固定长度的数组
   */
  ```

+ enum

  ```typescript
  //enum类型
  enum Gender {
      Male,
      Famale
  }
  let m: {name: string, gender: Gender};
  m = {name: '八戒', gender: Gender.Male}
  console.log(m);
  if (m.gender === Gender.Male){}
  /**
   * 解析出来的Male Famale可能就是0  1  然后用于判断 内存内存的少
     ts中的枚举类型和普通的js对象本质上没有区别，只是对于开发者来说，相较于直接使用值类型去做判断，枚举类型更易读，能够提升代码的可读性和易维护性
   */
  ```


## 4.TypeScript的编译配置

+ ts的自动编译

  ts提供了一个实时监听并编译ts为js的命令 

  ```typescript
   tsc xxx.ts  -w  //w代表watch 
  ```

+ ts自动编译目录下面所有的ts文件  前提是目录下有tsconfig.json配置文件

  ```typescript
  tsc   //tsc命令可以编译当前目录下所有的ts文件  但是前提是目录下有tsconfig.json配置文件
  ```

+ tsconfig.json是ts编译的配置文件，写好配置后  只需要执行tsc命令 就可以按照配置进行编译

  + include 

    定义所要编译的文件所在的目录

    默认值["** / *"]

    ```json
    "include":["src/**/*", "test/**/*"]
    ```

    上述例子就是表示src和test下的所有目录和所有文件都被编译

  + exclude

    定义不被编译的文件所在目录

    默认值["node_modules", "bower_components", "jspm_packages"]

    ```json
    "exclude":["src/src_exclude/**/*"]
    ```

    上述列子就代表src下面的src_exclude下面的所有目录下的所有文件都不会被编译

  + extends

    定义被继承的配置文件

    ```json
    "extends": "./configs/base"
    ```

    上述示例中，当前配置文件中会自动包含config目录下base.json中的所有配置信息

  + files

    指定被编译文件的列表，只有需要编译的文件少的时候才会用

    ```json
    "files": [
        "core.ts",
        "sys.ts",
        "types.ts",
        "scanner.ts",
        "parser.ts",
        "utilities.ts",
        "binder.ts",
        "checker.ts",
        "tsc.ts"
      ]
    ```

    列表中的文件都会被TS编译器所编译

  + compilerOptions

    + target

      指定所编译后的js的版本

      可选值 

      ​		ES3（默认）、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext

      ```json
      "compilerOptions":{
          "target": "ES6"
      }
      ```

      上述例子编译后的js版本号为ES6的版本

    + module

      设置编译后代码使用的模块化系统

      可选值

      ​	CommonJS、UMD、AMD、System、ES2020、ESNext、None

      ```json
      "compilerOptions": {
          "module": "CommonJS"
      }
      ```

    + lib

      指定代码运行时所包含的库（宿主环境）

      可选值

      ​	ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......

      ```json
      "compilerOptions": {
          "target": "ES6",
          "lib": ["ES6", "DOM"], //运行在浏览器上就必须有DOM  才能使用document
          "outDir": "dist",
          "outFile": "dist/aa.js"
      }
      ```

    + outDir

      编译后的文件所在目录

      默认情况下编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后的位置

      ```json
      "compilerOptions": {
          "outDir": "dist"
      }
      ```

    + outFile

      将所有的文件编译为一个ts文件

      默认会将所有编译后代码合并为一个js文件

      ```json
      "compilerOptions": {
          "outFile": "dist/app.js"
      }
      ```

    + allowJs

      是否编译目录下的js文件 默认false 不编译

      ```json
      "compilerOptions": {
          "allowJs": false
      }
      ```

    + checkJs

      是否检测js语法符合ts语法不 默认false 不检查

      ```json
      "compilerOptions": {
          "allowJs": false,
          "checkJS": false
      }
      ```

    + removeComments

      是否删除注释 默认值为false

      ```json
      "compilerOptions": {
          "removeComments": false
      }
      ```

    + noEmitOnError

      当有错误的时候不生成js文件 默认是false 可以生成

      ```json
      "compilerOptions": {
          "noEmitOnError": false
      }
      ```

    + alwaysStrict
    
      是否启用严格模式  默认值为false  当ts中有export模块的时候  默认是严格模式
    
      ```json
      "compilerOptions": {
          "alwaysStrict": false
      }
      ```
    
    + noImplicitAny
    
      当一个变量不指定类型也不赋值的时候，变量的类型默认为any;为true的时候如果ts在编译的时候发现有隐士的any类型变量的时候报错
    
      ```json
      "compilerOptions": {
          "noImplicitAny": false
      }
      ```
    
    + noImplicitThis
    
      - 禁止类型不明确的this
    
    + strictBindCallApply
    
      - 严格检查bind、call和apply的参数列表
    
    + strictFunctionTypes
    
      - 严格检查函数的类型
    
    + strictNullChecks
    
      - 严格的空值检查
    
    + strictPropertyInitialization
    
      - 严格检查属性是否初始化

## 5.webpack打包工具

​	在项目开发中一般都是用webpack进行代码打包和编译的

​	首先webpack的运行是依赖于node环境的  

+ ```json
  npm init  //生成package.json文件
  ```

+ ```json
  npm install g -D webpack webpack-cli typescript ts-loader //webpack是webpack的核心代码  webpac-cli是webpack的命令行 typescript是ts的核心包  ts-loader是ts和webpack的整合包 ts-loader可以去处理ts文件  -D就会生成"devDependencies"{}开发依赖
  ```

+ ```js
  1.//引入一个nodejs中的一个模块
  const path = require('path');//目的是拼接路径
  3.//引入HTML模板插件 可以打包后自动生成html并引入打包后的js 会自动生成index.html
  const HTMLWebpackPlugin = require('html-webpack-plugin');//前提是npm install html-webpack-plugin安装这个插件
  4.//引入clean-webpack-plugin插件 每次编译的时候都去清空dist下的文件  以保证每次编译后都是新的文件
  const { CleanWebpackPlugin } = require('clean-webapck-plugin');//前提是npm install clean-webapck-plugin安装这个插件
  2.//所有的配置都写在这里
  module.export = {
      //入口
      entry: './src/main.ts'
      //出口
      output: {
      	path: path.resolve(_dirnam, 'dist'),//动态路径  出口必须是绝对路径 _dirname代表的是当前文件的根目录 拼接dist
          filename: 'bundle.js',
          //设置webpack打包后开头不使用箭头函数  兼容ie
          environment:{
              arrowFunction: false
          }
  	},
      //所有的编译的配置
      module: {
          //规则
          rules: [{
              //匹配变异的文件
             	test: /\.ts$/,
              //要使用loader去处理ts文件
              use: 'ts-loader',
              exclude: /node_modules/
          }]
      },
      //配置webpack插件
      plugins: [
          new HTMLWebpackPlugin({
              //title: "这是一个title",
              template: "./src/index.html"//所要引入的模板
          }),
      ],
      5.//用来设置引用模块的
  	resolve: {
          extenison: [".ts", ".js"]//如果不设置  webpack打包的时候就会报错  不允许ts以模块的方式导出引入
      }
  }
  ```

+ ```json
  //热更新  webpack-dev-server webpack的开发服务器
  npm install g -D webpack-dev-server
  //装好之后在
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack --mode development",
      "start": "webpack serve --open chrome.exe"
   },
  npm run start 就可以热更新了
  ```

## 6.babel

​	ts可以和webpack结合起来  通过webpack来解析ts    babel也可以和webpack结合起来  通过webpack来适兼容各个环境

+ ```json
  npm install -D @babel/core @babel/preset-env babel-loader core-js
  //@babel/core babel的核心工具包  @babel/pareset-env babel的预定于环境（解析兼容不同的环境） @babel-loader babel在webpack中的加载器  core-js 用来使老版本的浏览器支持新版ES语法
  ```

+ ```js
  module: {
      //规则
      rules: [
          test: /\.ts$/,
          use: [{
          //预定加载器
          	loader: "babel-loader",
          //配置babel
          	options: {
          		//设置预定于环境
          		presets: [
          			//设定环境信息
          			["@babel/preset-env",{
          				//配置信息
          				"targets":{
          					//要兼容的浏览器
          					"chrome": "91",
          					"ie": "11"
          				},
                          "corejs":"3",//版本号3.xx
                           //使用core.js的方法 usage表示按需加载
                          "useBuiltIns": "usage"
          			}]
      			]
          	}
          },{
              lader: "ts-loader"
          }],
          exclude: /node_module/
      ]
  }
  ```

+ 如此一来，使用ts编译后的文件将会再次被babel处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的targets中指定要兼容的浏览器版本

# 面向对象

  面向对象是程序中一个非常中要的思想，简而言之就是程序中所有的操作都是通过对象来完成的

+ 举例来说
  + 操作浏览器要使用window对象
  + 操作网页要是有document对象
  + 操作控制台要使用console对象

对象是对事物的一个抽象  比如网页是对报纸期刊的抽象   游戏是对现实生活的抽象   抽象成对象的优势在与需要对其操作的时候可以直接调用对象。

比如人抽象成一个对象  然后人的身高  体重 年龄可以作为对象的属性数据  人的一些行为可以做为对象的方法；所以需要人的一些数据或者需要人干啥的时候就可以调用人这个对象的属性和方法。万物皆对象吗  在程序中所有的东西都是通过对象来定义的。

## 1.类（class）

要想面向对象，操作对象  首先必须要有对象，那么如何创建对象呢？ 要创建对象  首先要先定义类，所谓的类可以理解为对象的模型。

+ 类的简介

  + static 属性和方法前加static为静态属性和方法，只能通过类直接访问  Person.age
  + readonly 属性前加readonly后为只读属性只能访问  不能修改

  ```ts
  /**
  	使用class关键字定义类
  	对象中主要包含两个部分
  		属性
  		方法
  */
  class Person {
      name: string = '孙悟空';
      //在属性前加static关键字定义的属性叫类属性也叫静态属性，可以直接通过类访问 Person.age;
      static age: number = 18;
      //在属性前加readonly是只读属性 不可以更改
      readonly height: number = 1.88;
      sayHello() {
          console.log('大家好,我是齐天大圣');
      }
  }
  const per = new Person();
  console.log(per.name);//孙悟空
  console.log(Person.age);//18
  per.sayHello();
  ```

+ 构造函数

  + constructor构造函数  会在对象创建的时候调用

  ```ts
  /**
  	constructor为构造函数
  	构造函数会在对象创建的时候调用 也就是类实例化的时候调用
  */
  class Dog {
      name: string;
      age: number;
      constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
      }
      bark() {
          alert('旺旺旺')
      }
  }
  const dog = new Dog('小黑', 3);
  const dog = new Dog('小白', 4);
  
  //语法糖
  class Dog {
      constructor(public name: string, public age: number) {}//定义修饰符后 就可以这样简化上面的代码
      bark() {
          alert('旺旺旺')
      }
  }
  const dog = new Dog('小黑', 3);
  const dog = new Dog('小白', 4);
  ```

+ 类的继承

  + 子类通过extends来实现对父类的继承

  ```ts
  /**
  	-类的继承是通过extends来实现的
  	-子类继承父类后就拥有父类中的所有属性和方法
  	-子类中重新定义构造函数的时候需用super()来初始化父类的构造函数 防止重写
  	-子类中可以重写父类中的方法
  */
  //父类
  class Animal {
      name: string;
      constructor(name: string) {
          this.name = name;
      }
      sayHello() {
          console.log('动物在叫')
      }
  }
  //子类Dog继承Animal
  class Dog extends Animal {
      //如果有新的属性可以继续添加
      age: number;
      constructor(name:string, age: number) {
          //如果在子类中写了构造函数，那么子类中的构造函数必须对父类中的构造函数初始化 通过super()来初始化  要不然会重写父类中的构造函数
          super(name);
          this.age = age;
      }
      sayHello() {
          super.sayHello()//super表示的是当前父类
      }
  }
  //子类Cat继承Animal
  class Cat extends Animal {
      //重写父类中的方法
      sayHello() {
          console.log('喵喵喵')
      }
  }
  ```

+ 抽象类

  + 通过abstract关键字来定义抽象类 抽象类只能用来继承不能用来实例化对象

  ```ts
  /**
  	以abstract开头的类是抽象类
  		抽象类和其他的类区别不大  只是不能用来创建对象  不可以实例化 new
  		抽象类是专门用来继承的
  		抽象类中可以添加抽象方法 只是一个方法结构 没有方法结构体
  		抽象方法只能在抽象类中定义
  */
  abstract class Animal {
      name: string;
      constructor(name: string) {
          this.name = name;
      }
      //抽象方法只能定义在抽象类中  子类必须对抽象方法进行重写(只是定义一个方法的结构 没有方法体)
     abstract sayHello(): void;
  }
  ```

## 2.接口

+ 接口是通过关键字interface来定义的
  + 定义好的接口可以用来做为变量的类型来使用
  + 接口的主要作用是限制类的结构的
  + 类通过implements来实现接口的
  + 类实现接口后必须包含接口中的所有属性和方法

```ts
//定义接口
interface Person {
	name: string;
    sayHello(): voidl;
}
//作为变量的类型使用
const per: Person = {name: '孙悟空', sayHello(){console.log(`Hello 我是${this.name}`)}};
per.sayHello();//Hello 我是孙悟空

//类实现接口
class Student implements Person {
    name: string;
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        thius.age = age;
    }
    sayHello() {
        console.log(`大家好,我是${this.name},我今年${this.age}`)
    }
}
const stu = new Student('八戒',18);
console.log(stu);
```

## 3.泛型

 定义一个函数或类的时候，有些情况下是无法确定其中要使用的具体类型(返回值、参数、属性的类型不能确定)，此时泛型便能够发挥作用

+ 简单泛型

  ```ts
  //举个例子
  function test(arg: any): any {
      return arg;
  }
  /**
  	上述例子中，test函数有一个参数类型不确定，但是能确定的是其返回值的类型和参数的类型是相同的，由于类型不确定所以参数和返回值均采用了any，但是any会关闭TS的类型检查，其次这样设置也不能体现出参数和返回值的类型
  */
  
  //泛型登场
  function test<T>(targ: T): T {
      return T;
  }
  /**
  	这里的<T>就是泛型，T是我们给类型器的名字（不一定非叫T），设置泛型后即可在函数中使用T来表示该类型。所以泛型就是表示某个类型。
  */
  
  //使用泛型函数
  test(10)//使用时直接传递参数，类型会由TS自动推断出,但是有时编译的时候无法自动推断时就得手动指定泛型。
  test<number>(10);//手动指定泛型的类型
  ```

+ 同时指定多个泛型

  ```ts
  function test<T, K>(a: T, b: K): K {
      return b;
  }
  test<number, string>(10, 'Hello');
  ```

+ 类中使用泛型

  ```ts
  class MyClass<T> {
      prop: T;
      constructor(prop: T) {
          this.prop = prop;
      }
  }
  const mc = new MyClass<string>('孙悟空');
  ```

+ 泛型实现接口

  ```ts
  interfance MyInter {
      length: number;
  }
  function test<T extends MyInter>(arg: T): number {
      return arg.length;
  }
  test('1234');//1234字符串有length属性
  ```

  

