```
var log = console.log;
//init data
var obj = {
    '5.09': 10,
    '7.90': 8,
    '8.89': 7,
    '9.07': 6
};
var s = 0;
var hg = [];
for (let i in obj) {
    hg[s] = {
        'id': Number(i),
        'price': obj[i]
    };
    s++;
}

//对数组进行排序sort
hg.sort(function(a, b) {
    return a.id - b.id;
});
log(hg);
var page = 1,
    pagesize = 2;
var list = [];
//不满足条件的价格区间
var other_zone = {
    'price': 10,
    'max' : 10e10
};
//get zone 获得价格区间
while (true) {
    var tmp = hg.slice(page - 1, page + 1);
    if (tmp.length <= 0) {
        break;
    } else {
        if (tmp.length == 2) {
            if (page == 1) {
                list[0] = {
                    'min': 0,
                    'max': tmp[0].id,
                    'price': tmp[0].price,
                }
            }

            list[page] = {
                'min': tmp[0].id,
                'max': tmp[1].id,
                'price': tmp[1].price
            }
        } else {
            list[page] = {
                 'min' : tmp[0].id,
                 'max' : other_zone.max,
                 'price' : other_zone.price
            }
        }
    }
    page++;
}
console.log(list);
结果是：
[
{
    min: 0,
    max: 5.09,
    price: 10
},
{
    min: 5.09,
    max: 7.9,
    price: 8
},
{
    min: 7.9,
    max: 8.89,
    price: 7
},
{
    min: 8.89,
    max: 9.07,
    price: 6
},
{
    min: 9.07,
    max: 100000000000,
    price: 10
}];
```
