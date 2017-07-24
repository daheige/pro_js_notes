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
    'price': 10
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
            list[page] = other_zone;
        }
    }
    page++;
}
console.log(list);
```
