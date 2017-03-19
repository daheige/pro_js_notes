/*
ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。
基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，
新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用ES6的“类”改写，
 */
class Point{
    constructor(x,y) {
      this.x = x;
      this.y = y;
    }

    toString(){
        console.log(this.x,this.y);
    }
}
var p = new Point(1,2);
p.toString();//1,2

console.log(typeof Point);//function
console.log(Point === Point.prototype.constructor);//true
//代码表明，类的数据类型就是函数，类本身就指向构造函数。
// 在类的实例上面调用方法，其实就是调用原型上的方法
// prototype对象的constructor属性，直接指向“类”的本身，这与ES5的行为是一致的。

//类的继承
//ES6的继承机制完全不同，实质是先创造父类的实例对象this
//（所以必须先调用super方法），然后再用子类的构造函数修改this
//super这个关键字，有两种用法，含义不同。

// （1）作为函数调用时（即super(...args)），super代表父类的构造函数。
// （2）作为对象调用时（即super.prop或super.method()），super代表父类。
// 注意，此时super即可以引用父类实例的属性和方法，也可以引用父类的静态方法。
class ColorPoint extends Point{
    constructor(x,y,color) {
      super(x,y);//调用父类的构造方法
      this.color = color;
    }
    toString(){
        console.log(this.color+' '+super.toString());//调用父类方法用super.method
    }
}
console.log('-------------')
var cpos = new ColorPoint(1,2,"#eee");
cpos.toString();


//父类静态方法
class Foo {
  static classMethod() {
    return 'hello';
  }
}
//通过super调用父类的静态方法
//ES6明确规定，Class内部只有静态方法，没有静态属性。
class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too';
  }
}

console.log(Bar.classMethod());//hello, too



