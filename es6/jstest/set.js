var s = new Set();
//通过遍历的方式追加元素导集合中
[2,3,4,5].map( (x) => s.add(x));//map接受一个函数，而该函数式一个箭头函数

//通过for ... of 来遍历集合中的元素
for(let i of s){ //let保证了块级变量作用范围
    console.log(i); //执行结果是2,3,4,5
}

var keys = s.keys(); //获取键和值 s.values();//在集合是一样的
console.log(keys);
for(let key of keys){
    console.log(key); //2,3,4,5
}
console.log('--------------------forEach遍历集合---------------');
//Set结构的实例的forEach方法，用于对每个成员执行某种操作，没有返回值。
s.forEach((key,val)=> console.log(val)); //使用了箭头函数



