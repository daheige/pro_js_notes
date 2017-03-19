let map = new Map([
    ['f','no'],
    ['t','yes']
]);
for (let key of map.keys()){
    console.log(key);
}
//遍历值
for (let val of map.values()){
    console.log(val);
}

for(let [k,v] of map){
    console.log(k,v);
}
//f no
// t yes
console.log('--------------keys----values-------')
console.log([...map.keys()]);
console.log([...map.values()]);
//[ 'f', 't' ]
// [ 'no', 'yes' ]

//map转换为数组用[...map]

//maptoobj
function map2obj(strmap){
    let obj = Object.create(null);
    for(let [k,v] of strmap){
        obj[k] = v;
    }
    return obj;
}
console.log(map2obj(map));//{ f: 'no', t: 'yes' }

//将对象转换为Map
function objToMap(obj){
    let sMap = new Map();
    for (let k of Object.keys(obj)){
        sMap.set(k,obj[k]);
    }
    return sMap;
}
console.log(objToMap({yes:true,no:false}));
//Map { 'yes' => true, 'no' => false }

function MapToJson(sMap){
    return JSON.stringify(map2obj(sMap));
}
let mymap = (new Map()).set('yes',true).set('no',false);
console.log(MapToJson(mymap));//{"yes":true,"no":false}

//json转换为Map
function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

var s = jsonToMap('[[true,7],[{"foo":3},["abc"]]]');
console.log(s);//Map { true => 7, { foo: 3 } => [ 'abc' ] }







