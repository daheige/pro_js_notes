let m = new Map();
var o = {
    p : 'hello world'
}
m.set(o,'content');
var o_val = m.get(o);
console.log(o_val);//我们将o对象作为了键

//作为构造函数，Map也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
var map = new Map([['name','zhuwei'],['title','daheige']]);//key/val的多个数组
console.log(map.size);
console.log(map.get('name'));
console.log(map.has('title'));//是否也有某个元素
//zhuwei
// true





