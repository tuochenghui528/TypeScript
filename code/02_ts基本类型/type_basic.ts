// number类型
let a: number;
a = 1;
a = 0;
a = -2.5;

// string | number类型
let b: string | number;
b = 1;
b = 'hello';

//booleang
let c = true;
c = false;
// c = 2; //报错 c默认为boolean类型

//字面量
let color: 'red' | 'blue';
color = 'blue';
// color = 'pink'; 报错 color指定了字面量类型

//任意类型
let d: any;
d = 2;
d = 'hello';
d = true;

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

//void类型
let g: void = undefined;
g = null;
():void => {
    //函数没有返回值的时候用viod承接
}

//never类型
/**
 *  never是没有值 连undefined都没有 一般用于抛出异常
 */
function error():never {
    throw new Error('message');
}

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

//array类型
let j: number[];
j = [2,3,4]
let k: Array<string>;
k = ['1','2']

//tuple类型
let l: [string, number];
l = ['拓成辉', 22]
/**
 * 只能是固定长度的数组
 */

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
 */