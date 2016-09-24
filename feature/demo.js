/**
*demo:指向同一个对象的多个变量
*/
var hg_obj = {}; //采用{}子面量比new Object()创建一个对象更加简单
var ref = hg_obj; //hg_obj,ref都指向了同一个对象
hg_obj.title = 'daheige';//为hg_obj追加对象属性
console.log(hg_obj);
console.log(ref);
/*运行结果
{ title: 'daheige' }
{ title: 'daheige' }
*/

/**
*自修改对象(如果两个对象都指向同一个指称目标，一个发生改变另一个也会发生改变）
*/
var hg_arr = [1,2,3];
var itemref = hg_arr;//创建数组的引用
itemref.push(5);//通过修改itemref本身
console.log("hg_arr:",hg_arr);
console.log("itemref:",itemref);
console.log(hg_arr.length == itemref.length);
/*运行结果：
hg_arr: [ 1, 2, 3, 5 ]
itemref: [ 1, 2, 3, 5 ]
true
*/

/**维护完整性的同时修改对象的引用**/
var hg_list = ['fefe','daheige'];
var hg_ref = hg_list;
//将hg_list重新指向一个对象
hg_list = ['new fefe','new heige'];//这里hg_ref指向已发生改变
console.log(hg_list,hg_ref);//[ 'new fefe', 'new heige' ] [ 'fefe', 'daheige' ]







