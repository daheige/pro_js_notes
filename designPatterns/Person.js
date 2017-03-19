/**
 * [Person 通过构造函数的方式创建对象]
 * @param {[type]} name [description]
 * @param {[type]} age  [description]
 * @param {[type]} sex  [description]
 */
function Person(name,age,sex){
    this.name = name;
    this.age  = age;
    this.sex  = sex;
    this.changeName = function(name){
        this.name       = name;//这里的this指向Person上下文
    }
}
var my          = new Person("daheige",26,1);//通过new关键字创建Person的一个实例
//改变name
my.changeName("zhuwei");
console.log(my.changeName); //打印的是my上的一个属性changeName,而这个属性又是一个函数，所以打印的是一个函数
//其实可以用my.name直接等于某个值，就可以改变当前的实例my上的name
my.name         = 'wuxin';
console.log(my);
var stu         = new Person("de",23,0);
console.log(stu);
/**运行结果
 * [Function]
Person { name: 'wuxin', age: 26, sex: 1, changeName: [Function] }
Person { name: 'de', age: 23, sex: 0, changeName: [Function] }
 */

//原型模式和构造函数，进行组合，在js设计模式中称为组合模式
function Stu(name,age,sex) {
    this.age  = age;
    this.name = name;
    this.sex  = sex;
}
//一般来说在原型上添加方法，可以让实例共享同一个原型上的方法
Stu.prototype.changeName = function (name){
    this.name = name;
    console.log("my name is :"+this.name);
}
var mystu = new Stu("heige",26,1);
mystu.changeName("daheige");
console.log(mystu.name);
/**
 * my name is :daheige
   daheige
 */

