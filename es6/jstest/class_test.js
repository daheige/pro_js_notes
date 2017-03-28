class Person {
    constructor(name,age,sex){
        this.age = age;
        this.name = name;
        this.sex = sex;
    }
    say(){
        console.log('your name'+this.name,'age'+this.age,'sex '+this.sex);
    }
    //静态方法，es6中只有静态方法，没有静态属性
    static play(){
        console.log("you can play");
    }
    static hello(){
        console.log("hello");
    }
}

let stu = new Person('daheige',27,1);
stu.say();
Person.play(); //无需实例化，直接调用静态方法

// 继承
class Tea extends Person{
    constructor(name,age,sex,color){
        super(name,age,sex);
        this.color = color;
    }
    getInfo(){
        console.log("name "+this.name,"age "+this.age,"color "+this.color);
    }
    static hello(){
        super.hello(); //通过super来调用父类上的方法
        console.log("haha,"+this.name);
    }
}
let hg_tea = new Tea("zhuwei",23,1,"yellow");
hg_tea.say();
hg_tea.getInfo();
//调用静态方法
Tea.play();
Tea.hello();



