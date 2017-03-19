let a = new Set([1,3,4,5,2]);
let b = new Set([3,2,4]);
//并集
let union = new Set([...a,...b]);
console.log(union);//Set { 1, 3, 4, 5, 2 }

//交集 a，b中都有的元素
let inset = new Set([...a].filter(x => b.has(x)));
console.log(inset);//Set { 3, 4, 2 }

//差集
let difset = new Set([...a].filter(x => !b.has(x)));
console.log(difset);//Set { 1, 5 }





