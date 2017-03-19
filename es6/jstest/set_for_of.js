var s = new Set();
//通过遍历的方式追加元素导集合中
[2,3,4,5].map( (x) => s.add(x));//map接受一个函数，而该函数式一个箭头函数

//通过for ... of 来遍历集合中的元素
for(let i of s){ //let保证了块级变量作用范围
    console.log(i); //执行结果是2,3,4,5
}

// 扩展运算符（...）内部使用for...of循环，所以也可以用于Set结构。
let arr = [...s]; //[ 2, 3, 4, 5 ]
console.log(arr);

//对数组去重
//扩展运算符...和Set结构相结合，就可以去除数组的重复成员。
let arr_2 = [1,2,3,4,1,2,5,4,3,2,1];
arr_2 = [...(new Set(arr_2))];
console.log(arr_2);//[ 1, 2, 3, 4, 5 ]

var set = new Set([1,2,3,4]);
set = new Set([...set].map( x => x * 2)); //...set就变成了一个数组，然后用map方法遍历每一个，计算后放入集合中
console.log(set);//Set { 2, 4, 6, 8 }

var myset = new Set([1,2,4,5,6,8,9]);
//对集合做过滤操作filter
myset = new Set([...myset].filter(x => x % 2 == 0));
console.log(myset);//Set { 2, 4, 6, 8 }














