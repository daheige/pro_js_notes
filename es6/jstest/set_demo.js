var s = new Set([1,2,3,4,5]);
var arr = [1,2,3,4,5,6,3,4,5];
s.add(arr);
console.log(s);//Set { 1, 2, 3, 4, 5, [ 1, 2, 3, 4, 5 ] }
console.log(s.size);//6个元素

arr = [...new Set(arr)]
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]
//et内部判断两个值是否不同，使用的算法叫做“Same-value equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。
console.log(NaN !== NaN);//true

//删除集合中的元素
s.delete(5);
console.log(s);//Set { 1, 2, 3, 4, [ 1, 2, 3, 4, 5, 6, 3, 4, 5 ] }

//判断是否存在某个值
var has_val = s.has(1);
console.log(has_val);

//清空集合中的元素
// s.clear();
// console.log(s);

//将集合结构转换为数组
var items = Array.from(s);
console.log(items);//[ 1, 2, 3, 4, [ 1, 2, 3, 4, 5, 6, 3, 4, 5 ] ]










